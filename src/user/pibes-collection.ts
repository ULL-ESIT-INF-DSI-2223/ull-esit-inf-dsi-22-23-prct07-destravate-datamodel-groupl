/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Práctica 7: Destravate
 * @author Ismael Martín Herrera
 * @author Alberto Zarza Martín
 * @email alu0101397375@ull.edu.es
 * @date 26/03/2023
 */


import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";


import {Actividad} from "../route/classRoute";
import { historic, User } from "./classUser";
import {stats} from "./classUser";



export class UserCollection {
  protected nextId = 1;
  protected routeMap = new Map<number, User>();
  constructor(usersItems: User[] = []) {
    usersItems.forEach(item => this.routeMap.set(item.Id, item));
    this.nextId = usersItems.length + 1;
  }

  addUser(route: User) {
    this.routeMap.set(this.nextId++, route);
  }
}


type schemaType = {
  user: {id:number, username: string, activities_: Actividad[], friends_: number[], groups_: number[], stats_: stats,  favouriteRoutes_: number[], challenges_: number[], historic_: historic[], userName_: string}[]
  
  };

export class jsonUserCollection extends UserCollection {

  private database: lowdb.LowdbSync<schemaType>;
  constructor(usersItems: User[] = []) {
    super(usersItems);
    this.database = lowdb(new FileSync("./db/usersItems.json"));
    if (this.database.has("user").value())  { // Si existe la base de datos
      const dbItems = this.database.get("user").value();
      dbItems.forEach(item => this.routeMap.set(item.id,
      new User(item.id, item.username, item.activities_, item.friends_, item.groups_, item.stats_, item.favouriteRoutes_, item.challenges_, item.historic_)));
      this.nextId = this.database.get("user").value().length + 1;
    } else { // No existe la base de datos
        this.database.set("user", usersItems).write();
        usersItems.forEach(item => this.routeMap.set(item.Id, item));
        this.nextId = this.database.get("user").value().length + 1;
    }
  }

  private storeTasks() {
    this.database.set("user", [...this.routeMap.values()]).write();
  }

  getNextId() {
    return this.nextId;
  }
  
  addUser(route: User) {
    const result = super.addUser(route);
    this.storeTasks();
    return result;
  }

} 

const jsonusercollection1 = new jsonUserCollection([]);

const user4 = new User( jsonusercollection1.getNextId(), "Jose", ["correr"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

jsonusercollection1.addUser(user4);
