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

import {Actividad} from "../route/classRoute";
import { historic, User } from "../user/classUser";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import {stats} from "../user/classUser";

export class userCollection {
  protected nextId = 1;
  protected userMap = new Map<number, User>();
  constructor(userItems: User[] = []) {
    userItems.forEach(item => this.userMap.set(item.Id, item));
    this.nextId = userItems.length + 1;
  }

  addUser(user: User) {
    this.userMap.set(this.nextId++, user);
  }

  getUser(id: number) {
    return this.userMap.get(id);
  }

  orderUsersAlfabeticallAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.userName.localeCompare(b.userName));
    return users;
  }

  orderUsersAlfabeticallDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.userName.localeCompare(b.userName));
    users.reverse();
    return users;
  }

  orderUsersByKMDayAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[0][0] - b.stats[0][0]);
    return users;
  }

  orderUsersByKMDayDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[0][0] - b.stats[0][0]);
    users.reverse();
    return users;
  }

  orderUsersByKMMonthAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[1][0] - b.stats[1][0]);
    return users;
  }

  orderUsersByKMMonthDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[1][0] - b.stats[1][0]);
    users.reverse();
    return users;
  }

  orderUsersByKMYearAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[2][0] - b.stats[2][0]);
    return users;
  }

  orderUsersByKMYearDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[2][0] - b.stats[2][0]);
    users.reverse();
    return users;
  }

}

type schemaType = {
  users: {  id: number; userName_: string; activities: Actividad[]; friends: number[]; groups: number[]; stats: stats; favouriteusers: number[]; challenges: number[]; historic: historic[]}[];
};



export class jsonUserCollection extends userCollection {

  private database: lowdb.LowdbSync<schemaType>;
  constructor(usersItems: User[] = []) {
    super(usersItems);
    this.database = lowdb(new FileSync("./db/UserItems.json"));
    if (this.database.has("users").value())  { // Si existe la base de datos
      const dbItems = this.database.get("users").value();
      dbItems.forEach(item => this.userMap.set(item.id,
      new User(item.id, item.userName_, item.activities, item.friends, item.groups, item.stats, item.favouriteusers, item.challenges, item.historic)));
      this.nextId = this.database.get("users").value().length + 1;
    } else { // No existe la base de datos
        this.database.set("users", usersItems).write();
        usersItems.forEach(item => this.userMap.set(item.Id, item));
        this.nextId = this.database.get("users").value().length + 1;
    }
  }

  private storeTasks() {
    this.database.set("users", Array.from(this.userMap.values())).write();
  }

  getNextId() {
    return this.nextId;
  }
  
  addUser(user: User) {
    const result = super.addUser(user);
    this.storeTasks();
    return result;
  }

  getUser(id: number): User | undefined{
    const result = super.getUser(id);
    return result;
  }


  orderUsersAlfabeticallAsc() {
    const result = super.orderUsersAlfabeticallAsc();
    return result;
  }

  orderUsersAlfabeticallDesc() {
    const result = super.orderUsersAlfabeticallDesc();
    return result;
  }

  orderUsersByKMDayAsc() {
    const result = super.orderUsersByKMDayAsc();
    return result;
  }

  orderUsersByKMDayDesc() {
    const result = super.orderUsersByKMDayDesc();
    return result;
  }

  orderUsersByKMMonthAsc() {
    const result = super.orderUsersByKMMonthAsc();
    return result;
  }

  orderUsersByKMMonthDesc() {
    const result = super.orderUsersByKMMonthDesc();
    return result;
  }

  orderUsersByKMYearAsc() {
    const result = super.orderUsersByKMYearAsc();
    return result;
  }

  orderUsersByKMYearDesc() {
    const result = super.orderUsersByKMYearDesc();
    return result;
  }

  
} 

const jsonusercollection1 = new jsonUserCollection([]);

const user1 = new User( jsonusercollection1.getNextId(), "Ismael", ["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

jsonusercollection1.addUser(user1);

const user2 = new User( jsonusercollection1.getNextId(), "Alberto",["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

jsonusercollection1.addUser(user2);

const user3 = new User( jsonusercollection1.getNextId(), "Alberto", ["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

jsonusercollection1.addUser(user3);