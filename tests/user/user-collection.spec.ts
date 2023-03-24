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

import 'mocha';
import {expect} from 'chai';
import {User} from '../../src/user/classUser';
import {userCollection} from '../../src/user/user-collection';

describe ('UserCollection', () => {
  const user1 = new User(1, "alberto", ["bicicleta"],  [1, 2, 3], [1], [[1,2], [3,4], [5,6]], [3], [4], [["23-03-23",[1,2,3]]]);
  const user2 = new User(2, "bruno", ["bicicleta"],  [1, 2, 3], [1], [[1,2], [3,4], [5,6]], [3], [4], [["23-03-23",[1,2,3]]]);
  const user3 = new User(3, "carlos", ["bicicleta"],  [1, 2, 3], [1], [[1,2], [3,4], [5,6]], [3], [4], [["23-03-23",[1,2,3]]]);
  const user4 = new User(4, "ismael", ["bicicleta"],  [1, 2, 3], [1], [[1,2], [3,4], [5,6]], [3], [4], [["23-03-23",[1,2,3]]]);

  const userCollection1 = new userCollection([user1, user2, user3]);

  it('Añadir el usuario 4 a la colección', () => {
    userCollection1.addUser(user4);
    expect(userCollection1.getUser(4)).to.be.eql(user4);
  } );

  it ('Ordenar usuarios alfabéticamente ASC', () => {
    expect(userCollection1.orderUsersAlfabeticallAsc()).to.be.eql([user1, user2, user3, user4]);
  } );

  it ('Ordenar usuarios alfabéticamente DESC', () => {
    expect(userCollection1.orderUsersAlfabeticallDesc()).to.be.eql([user4, user3, user2, user1]);
  } );

  it ('Ordenar usuarios por km al día ASC', () => {
    expect(userCollection1.orderUsersByKMDayAsc()).to.be.eql([user1, user2, user3, user4]);
  } );

  it ('Ordenar usuarios por km al día DESC', () => {
    expect(userCollection1.orderUsersByKMDayDesc()).to.be.eql([user4, user3, user2, user1]);
  } );

  it ('Ordenar usuarios por km al mes ASC', () => {
    expect(userCollection1.orderUsersByKMMonthAsc()).to.be.eql([user1, user2, user3, user4]);
  } );

  it ('Ordenar usuarios por km al mes DESC', () => {
    expect(userCollection1.orderUsersByKMMonthDesc()).to.be.eql([user4, user3, user2, user1]);
  } );

  it ('Ordenar usuarios por km al año ASC', () => {
    expect(userCollection1.orderUsersByKMYearAsc()).to.be.eql([user1, user2, user3, user4]);
  } );

  it ('Ordenar usuarios por km al año DESC', () => {
    expect(userCollection1.orderUsersByKMYearDesc()).to.be.eql([user4, user3, user2, user1]);
  } );

});