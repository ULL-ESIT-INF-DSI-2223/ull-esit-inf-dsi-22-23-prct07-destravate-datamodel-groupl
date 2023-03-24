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
import {Grupo, EstadisticasEntrenamiento} from '../../src/group/classGroup';
import {groupCollection} from '../../src/group/group-collection';

describe('Clase groupCollection', () => {
  const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10]);
  const group2 = new Grupo(2, 'Grupo de prueba 2', [10], [[24,323],[23,323],[23,323]], [10], [10], [10]);
  const group3 = new Grupo(3, 'Grupo de prueba 3', [10], [[25,323],[23,323],[23,323]], [10], [10], [10]);
  const groupcollection = new groupCollection([group, group2, group3]);

  const group4 = new Grupo(4, 'Grupo de prueba 4', [10], [[26,323],[23,323],[23,323]], [10], [10], [10]);
  
  it('Añadir grupo 4', () => {
    groupcollection.addGroup(group4);
    expect(groupcollection.getGroup(4)).to.be.eql(group4);
  });

  it('Ordenar grupos por nombre ASC', () => {
    expect(groupcollection.orderGroupASC()).to.be.eql([group, group2, group3, group4]);
  } );

  it('Ordenar grupos por nombre DESC', () => {
    expect(groupcollection.orderGroupDESC()).to.be.eql([group4, group3, group2, group]);
  } );

  it('Ordenar grupos por km semanales ASC', () => {
    expect(groupcollection.orderGroupByKMWeekASC()).to.be.eql([group, group2, group3, group4]);
  } );

  it('Ordenar grupos por km semanales DESC', () => {
    expect(groupcollection.orderGroupByKMWeekDESC()).to.be.eql([group4, group3, group2, group]);
  } );

  it('Ordenar grupos por km mensuales ASC', () => {
    expect(groupcollection.orderGroupByKMMonthASC()).to.be.eql([group, group2, group3, group4]);
  } );

  it('Ordenar grupos por km mensuales DESC', () => {
    expect(groupcollection.orderGroupByKMMonthDESC()).to.be.eql([group, group2, group3, group4]);
  } );

  it('Ordenar grupos por km anuales ASC', () => {
    expect(groupcollection.orderGroupByKMYearASC()).to.be.eql([group, group2, group3, group4]);
  } );

  it('Ordenar grupos por km anuales DESC', () => {
    expect(groupcollection.orderGroupByKMYearDESC()).to.be.eql([group, group2, group3, group4]);
  } );

  it('Ordenar grupos por número de miembros ASC', () => {
    expect(groupcollection.orderGroupByNumberMembersASC()).to.be.eql([group, group2, group3, group4]);
  } );

  it('Ordenar grupos por número de miembros DESC', () => {
    expect(groupcollection.orderGroupByNumberMembersDESC()).to.be.eql([group, group2, group3, group4]);
  } );
});


