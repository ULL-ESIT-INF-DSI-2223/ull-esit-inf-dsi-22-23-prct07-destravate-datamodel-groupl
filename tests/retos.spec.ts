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
import {Retos} from '../src/classRetos';
import {Actividad} from "../src/classRoute";

describe('Reto', () => {
  it('should create an instance', () => {

    const reto = new Retos(1, "reto1");
    expect(reto).to.be.an.instanceOf(Retos);

  });

  it('should have a name', () => {
    const reto = new Retos(1, "reto1");

    expect(reto.getId()).to.equal(1);

    reto.setId(2);
    expect(reto.getId()).to.equal(2);
  });

  it('should have a name', () => {

    const reto = new Retos(1, "reto1");

    expect(reto.getNombre()).to.equal("reto1");

    reto.setNombre("reto2");
    expect(reto.getNombre()).to.equal("reto2");

  });

  it('should have a rutasRetos', () => {

    const reto = new Retos(1, "reto1");



    reto.setRutasRetos([1, 2]);
    expect(reto.getRutasRetos()).to.be.eql([1, 2]);

  });

  it('should have a tipoActividad', () => {

    const reto = new Retos(1, "reto1");
    const actividad: Actividad = "bicicleta";

    reto.setTipoActividad(actividad);

    expect(reto.getTipoActividad()).to.equal(actividad);


  });

  it('should have a kmTotales', () => {

    const reto = new Retos(1, "reto1");

    reto.setKmTotales(10);
    expect(reto.getKmTotales()).to.equal(10);

  });

  it('should have a idRetosUsuarios', () => {

    const reto = new Retos(1, "reto1");

    reto.setIdUsersRetos([1, 2]);
    expect(reto.getIdUsersRetos()).to.be.deep.equal([1, 2]);

  });
});

