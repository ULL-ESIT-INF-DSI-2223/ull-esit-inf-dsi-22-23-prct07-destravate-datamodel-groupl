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

// const jsonusercollection1 = new jsonUserCollection([]);

// const user1 = new User( jsonusercollection1.getNextId(), "Ismael", ["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

// jsonusercollection1.addUser(user1);

// const user2 = new User( jsonusercollection1.getNextId(), "Alberto",["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

// jsonusercollection1.addUser(user2);

// const user3 = new User( jsonusercollection1.getNextId(), "Alberto", ["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

// jsonusercollection1.addUser(user3);