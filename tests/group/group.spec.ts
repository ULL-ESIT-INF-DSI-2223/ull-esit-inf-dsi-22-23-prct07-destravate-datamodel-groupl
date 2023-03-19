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

describe('Group', () => {

  it('should create a group', () => {
    const group = new Grupo(1, 'Grupo de prueba');
    expect(group).to.be.an.instanceOf(Grupo);
  });

  it('should create a group with a name', () => {
    const group = new Grupo(1, 'Grupo de prueba');
    expect(group.getId()).to.be.equal(1);
  });

  it('should create a group with a participants', () => {
    const group = new Grupo(1, 'Grupo de prueba');
    group.setParticipantesGrupo([10]);
    expect(group.getParticipantesGrupo()).to.be.eql([10]);
  });

  it('should create a group with a estadisticas', () => {

    const estadisticas: EstadisticasEntrenamiento = [23,323];
    const estadisticas2: EstadisticasEntrenamiento = [23,323];
    const estadisticas3: EstadisticasEntrenamiento = [23,323];
    const group = new Grupo(1, 'Grupo de prueba');
    group.setEstadisticaGrupalEntrenamiento([estadisticas, estadisticas2, estadisticas3]);

    expect(group.getEstadisticaGrupalEntrenamiento()).to.be.eql([estadisticas, estadisticas2, estadisticas3]);

  });

  it('should create a group with a clasificacion', () => {
    const group = new Grupo(1, 'Grupo de prueba');
    group.setClasificacionUsuario([10]);
    expect(group.getClasificacionUsuario()).to.be.eql([10]);
  });

  it('should create a group with a idrutas', () => {
    const group = new Grupo(1, 'Grupo de prueba');
    group.setIdRutasFavoritas([10]);
    expect(group.getIdRutasFavoritas()).to.be.eql([10]);
  });

  it('should create a group with a todasidrutas', () => {
    const group = new Grupo(1, 'Grupo de prueba');
    group.setTodasRutasUsuarios([10]);
    expect(group.getTodasRutasUsuarios()).to.be.eql([10]);
  });
});

