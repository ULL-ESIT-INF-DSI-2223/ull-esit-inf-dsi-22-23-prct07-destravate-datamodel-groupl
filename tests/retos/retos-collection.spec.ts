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
import {Retos} from '../../src/retos/classRetos';
import {Actividad} from "../../src/route/classRoute";
import {retosCollection} from "../../src/retos/retos-collection";

describe('Retos collection', () => {
  const reto1 = new Retos(1, "reto1", [1, 2], "bicicleta", 10, [1, 2]);
  const reto2 = new Retos(2, "reto2", [1, 2], "bicicleta", 10, [1, 2]);
  const reto3 = new Retos(3, "reto3", [1, 2], "bicicleta", 10, [1, 2]);
  const reto4 = new Retos(4, "reto4", [1, 2], "bicicleta", 10, [1, 2]);

  const retos = [reto1, reto2, reto3];
  const retoscollection = new retosCollection(retos);
  const retoscollection1 = new retosCollection(retos);

  it('Añadir el reto 4 a la colección', () => {
    retoscollection.addRetos(reto4);
    expect(retoscollection.getRetos(4)).to.be.eql(reto4);
  } );

  it('Eliminar el reto 4 de la colección', () => {
    retoscollection1.eraseRetos(4);
    expect(retoscollection1.getRetos(4)).to.be.eql(undefined);
  } );

  it('Cambiar el reto 1 por el reto 4', () => {
    retoscollection1.addExistedRetos( reto3);
    expect(retoscollection1.getRetos(3)).to.be.eql(reto3);
  } );

  it ('Ordenar retos alfabéticamente ASC', () => {
    expect(retoscollection.orderAlfabeticallRetosAsc()).to.be.eql([reto1, reto2, reto3, reto4]);
  });

  it ('Ordenar retos alfabéticamente DESC', () => {
    expect(retoscollection.orderAlfabeticallRetosDesc()).to.be.eql([reto4, reto3, reto2, reto1]);
  });

  it ('Ordenar retos por distancia ASC', () => {
    expect(retoscollection.orderDistanceAsc()).to.be.eql([reto1, reto2, reto3, reto4]);
  } );

  it ('Ordenar retos por distancia DESC', () => {
    expect(retoscollection.orderDistanceDesc()).to.be.eql([reto4, reto3, reto2, reto1]);
  } );

  it ('Ordenar por cantidad de usuarios ASC', () => {
    expect(retoscollection.orderCantidadUsuariosAsc()).to.be.eql([reto1, reto2, reto3, reto4]);
  } );

  it ('Ordenar por cantidad de usuarios DESC', () => {
    expect(retoscollection.orderCantidadUsuariosDesc()).to.be.eql([reto4, reto3, reto2, reto1]);
  } );

});
