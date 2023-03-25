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
import { userCollection } from "../user/user-collection";

/**
 * Esquema de la base de datos de usuarios
 * 
 * 
 */
type schemaType = {
  users: {  id_: number; userName_: string; activities_: Actividad[]; friends_: number[];  groups_: number[]; stats_: stats; favouriteRoutes_: number[]; challenges_: number[]; historic_: historic[];
  }[];
};

/**
 * Clase que extiende de userCollection y que implementa la base de datos de usuarios
 * 
 * 
 */
export class jsonUserCollection extends userCollection {

  private database: lowdb.LowdbSync<schemaType>;
  constructor(usersItems: User[] = []) {
    super(usersItems);
    this.database = lowdb(new FileSync("./db/UserItems.json"));
    if (this.database.has("users").value())  { // Si existe la base de datos
      const dbItems = this.database.get("users").value();
      dbItems.forEach(item => this.userMap.set(item.id_,
      new User(item.id_, item.userName_, item.activities_, item.friends_, item.groups_, item.stats_, item.favouriteRoutes_, item.challenges_, item.historic_)));
      this.nextId = this.database.get("users").value().length + 1;
    } else { // No existe la base de datos
        this.database.set("users", usersItems).write();
        usersItems.forEach(item => this.userMap.set(item.Id, item));
        this.nextId = this.database.get("users").value().length + 1;
    }
  }

  /**
   * Método que guarda los usuarios en la base de datos
   * 
   * @param user 
   */
  private storeTasks() {
    this.database.set("users", Array.from(this.userMap.values())).write();
  }

  /**
   * Método que devuelve el siguiente id
   * @returns void
   */
  getNextId() {
    return this.nextId;
  }

  eraseUser(id: number): void {
    super.eraseUser(id);
    this.storeTasks();
  }

  changeUserByID(id: number, user: User): void {
    super.changeUserByID(id, user);
    this.storeTasks();
  }
  
  /**
   * Método que añade un usuario a la base de datos
   * 
   */
  addUser(user: User) {
    const result = super.addUser(user);
    this.storeTasks();
    return result;
  }

  /**
   * Método que elimina un usuario de la base de datos
   * 
   */
  getUser(id: number): User | undefined{
    const result = super.getUser(id);
    return result;
  }

  /**
   * Método que elimina un usuario de la base de datos
   */
  getAllUsers(): User[] {
    return super.getAllUsers();
  }

  /**
   * Método que elimina un usuario de la base de datos
   */
  orderUsersAlfabeticallAsc() {
    const result = super.orderUsersAlfabeticallAsc();
    return result;
  }

  /**
   * Método que elimina un usuario de la base de datos
   * 
   */
  orderUsersAlfabeticallDesc() {
    const result = super.orderUsersAlfabeticallDesc();
    return result;
  }

  /**
   * Método que elimina un usuario de la base de datos
   */
  orderUsersByKMDayAsc() {
    const result = super.orderUsersByKMDayAsc();
    return result;
  }

  /**
   * Método que elimina un usuario de la base de datos
   */
  orderUsersByKMDayDesc() {
    const result = super.orderUsersByKMDayDesc();
    return result;
  }

  /**
   * Método que elimina un usuario de la base de datos
   */
  orderUsersByKMMonthAsc() {
    const result = super.orderUsersByKMMonthAsc();
    return result;
  }

  /**
   * Método que elimina un usuario de la base de datos
   */
  orderUsersByKMMonthDesc() {
    const result = super.orderUsersByKMMonthDesc();
    return result;
  }

  /**
   * Método que elimina un usuario de la base de datos
   */
  orderUsersByKMYearAsc() {
    const result = super.orderUsersByKMYearAsc();
    return result;
  }

  /**
   * Método que elimina un usuario de la base de datos
   */
  orderUsersByKMYearDesc() {
    const result = super.orderUsersByKMYearDesc();
    return result;
  }

  
} 

// const jsonusercollection1 = new jsonUserCollection([]);

// const user1 = new User( jsonusercollection1.getNextId(), "Ismael", ["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

// jsonusercollection1.addUser(user1);
