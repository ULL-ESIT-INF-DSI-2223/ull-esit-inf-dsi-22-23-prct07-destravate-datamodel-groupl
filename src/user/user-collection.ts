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

  /**
   *  Devuelve el siguiente id
   * @returns {number} nextId
   * 
   */
  addUser(user: User) {
    this.userMap.set(this.nextId++, user);
  }

  /**
   *  Añade un usuario a la colección
   * @param {User} user
   * @returns {void}
   */
  getUser(id: number) {
    return this.userMap.get(id);
  }

  /**
   *  Devuelve un usuario de la colección
   * @param {number} id
   */
  getAllUsers() {
    return Array.from(this.userMap.values());
  }

  eraseUser(id: number) {
    this.userMap.delete(id);
  }

  changeUserByID(id: number, user: User) {
    this.userMap.set(id, user);
  }

  /**
   * Devuelve todos los usuarios de la colección
   * @returns {User[]}
   */
  orderUsersAlfabeticallAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.userName.localeCompare(b.userName));
    return users;
  }

  /**
   * Ordena los usuarios alfabeticamente de forma ascendente
   * @returns {User[]}
   */
  orderUsersAlfabeticallDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.userName.localeCompare(b.userName));
    users.reverse();
    return users;
  }

  /**
   * Ordena los usuarios alfabeticamente de forma descendente
   * @returns {User[]}
   * 
   */
  orderUsersByKMDayAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[0][0] - b.stats[0][0]);
    return users;
  }

  /**
   * Ordena los usuarios por kilometros recorridos en un día de forma ascendente
   * @returns {User[]}
   */
  orderUsersByKMDayDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[0][0] - b.stats[0][0]);
    users.reverse();
    return users;
  }

  /**
   * Ordena los usuarios por kilometros recorridos en un día de forma descendente
   * @returns {User[]}
   */
  orderUsersByKMMonthAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[1][0] - b.stats[1][0]);
    return users;
  }

  /**
   * Ordena los usuarios por kilometros recorridos en un mes de forma ascendente
   * @returns {User[]}
   * 
   */
  orderUsersByKMMonthDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[1][0] - b.stats[1][0]);
    users.reverse();
    return users;
  }

  /**
   * Ordena los usuarios por kilometros recorridos en un mes de forma descendente
   * @returns {User[]}
   * 
   */
  orderUsersByKMYearAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[2][0] - b.stats[2][0]);
    return users;
  }

  /**
   * Ordena los usuarios por kilometros recorridos en un año de forma ascendente
   * @returns {User[]}
   */
  orderUsersByKMYearDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[2][0] - b.stats[2][0]);
    users.reverse();
    return users;
  }

}



// const user2 = new User( jsonusercollection1.getNextId(), "Alberto",["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

// jsonusercollection1.addUser(user2);

// const user3 = new User( jsonusercollection1.getNextId(), "Alberto", ["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

// jsonusercollection1.addUser(user3);