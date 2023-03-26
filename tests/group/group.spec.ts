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
    const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10], true, 0);
    expect(group).to.be.an.instanceOf(Grupo);
  });

  it('should create a group with a name', () => {
    const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10], true, 0);
    expect(group.Id).to.be.equal(1);
  });

  it('should create a group with a name', () => {
    const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10], true, 0);
    expect(group.Nombre).to.be.equal('Grupo de prueba');
    group.setNombre('Grupo de prueba 1 modificado');
    expect(group.Nombre).to.be.equal('Grupo de prueba 1 modificado');
  });

  it('should create a group with a participants', () => {
    const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10], true, 0);
    group.setParticipantesGrupo([10]);
    expect(group.ParticipantesGrupo).to.be.eql([10]);
  });

  it('should create a group with a estadisticas', () => {

    const estadisticas: EstadisticasEntrenamiento = [23,324];
    const estadisticas2: EstadisticasEntrenamiento = [23,324];
    const estadisticas3: EstadisticasEntrenamiento = [23,324];
    const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10], true, 0);
    group.setEstadisticaGrupalEntrenamiento([estadisticas, estadisticas2, estadisticas3]);

    expect(group.EstadisticaGrupalEntrenamiento).to.be.eql([estadisticas, estadisticas2, estadisticas3]);

  });

  it('should create a group with a clasificacion', () => {
    const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10], true, 0);
    group.setClasificacionUsuario([10]);
    expect(group.ClasificacionUsuario).to.be.eql([10]);
  });

  it('should create a group with a idrutas', () => {
    const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10], true, 0);
    group.setIdRutasFavoritas([10]);
    expect(group.IdRutasFavoritas).to.be.eql([10]);
  });

  it('should create a group with a todasidrutas', () => {
    const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10], true, 0);
    group.setTodasRutasUsuarios([10]);
    expect(group.TodasRutasUsuarios).to.be.eql([10]);
  });

  it('should create a group with a CreatorSystem', () => {
    const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10], true, 0);
    group.setCreadorSystem(false);
    expect(group.CreatorSystem).to.be.eql(false);
  });

  it ('should create a group with a idCreator', () => {
    const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10], true, 0);
    group.setidCreator(2);
    expect(group.IdCreator).to.be.eql(2);
  });

  it ('should create a group with a Historic', () => {
    const group = new Grupo(1, 'Grupo de prueba', [10], [[23,323],[23,323],[23,323]], [10], [10], [10], true, 0);
    group.setHistorico(["26/03/2021", [1,2]]);
    expect(group.Historico).to.be.eql([["26/03/2021", [1,2]]]);
  });
});

