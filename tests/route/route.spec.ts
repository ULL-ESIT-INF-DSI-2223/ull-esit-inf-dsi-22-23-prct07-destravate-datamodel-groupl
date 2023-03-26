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
import {Route} from '../../src/route/classRoute';


describe('Getters de la clase Route', () => {
  const ruta1 = new Route(1, "ruta1", [28.49, -16.31], [28.46, -16.38], 10, 12, [1,2], "bicicleta", 5);

  it("Getter del id del ruta resulta 1", () => {
    expect(ruta1.idRuta).to.be.eql(1);
  });

  it("Getter del nombre de la ruta resulta 'ruta1' ", () => {
    
    expect(ruta1.nombreRuta).to.be.eql("ruta1");
  });

  it("Getter geoInicio de la ruta resulta [28.49, -16.31]", () => {
    expect(ruta1.geoInicio).to.be.eql([28.49, -16.31]);
  });

  it("Getter geoFinal de la ruta resulta [28.46, -16.38]", () => {
    expect(ruta1.geoFin).to.be.eql([28.46, -16.38]);
  });

  it("Getter longitudRutaKm de la ruta resulta 10", () => {
    expect(ruta1.longitudRutaKm).to.be.eql(10);
  });

  it("Getter desnivelMedio de la ruta resulta 12", () => {
    expect(ruta1.desnivelMedio).to.be.eql(12);
  });

  it("Getter idUsuariosRuta de la ruta resulta [1,2]", () => {
    expect(ruta1.idUsuariosRuta).to.be.eql([1,2]);
  });

  it("Getter tipoActividad de la ruta resulta 'bicicleta'", () => {
    expect(ruta1.tipoActividad).to.be.eql("bicicleta");
  });

  it("Getter calificacionMediaRuta de la ruta resulta 5", () => {
    expect(ruta1.calificacionMediaRuta).to.be.eql(5);
  });

  it("Setter del nombre de la ruta resulta 'ruta2' ", () => {
    ruta1.setNombreRuta("ruta2");
    expect(ruta1.nombreRuta).to.be.eql("ruta2");
  });

  it("Setter geoInicio de la ruta resulta [28.49, -16.31]", () => {
    ruta1.setGeoInicio([28.49, -16.31]);
    expect(ruta1.geoInicio).to.be.eql([28.49, -16.31]);
  } );

  it("Setter geoFinal de la ruta resulta [28.46, -16.38]", () => {
    ruta1.setGeoFin([28.46, -16.38]);
    expect(ruta1.geoFin).to.be.eql([28.46, -16.38]);
  } );

  it("Setter longitudRutaKm de la ruta resulta 10", () => {
    ruta1.setLongitudRutaKm(10);
    expect(ruta1.longitudRutaKm).to.be.eql(10);
  } );

  it("Setter desnivelMedio de la ruta resulta 12", () => {
    ruta1.setDesnivelMedio(12);
    expect(ruta1.desnivelMedio).to.be.eql(12);
  }
  );

  it("Setter idUsuariosRuta de la ruta resulta [1,2]", () => {
    ruta1.setIdUsuarioRuta(3);

    expect(ruta1.idUsuariosRuta).to.be.eql([1,2,3]);
  } );

  it("Setter tipoActividad de la ruta resulta 'bicicleta'", () => {
    ruta1.setTipoActividad("bicicleta");
    expect(ruta1.tipoActividad).to.be.eql("bicicleta");
  } );

  it("Setter calificacionMediaRuta de la ruta resulta 5", () => {
    ruta1.setCalificacionMediaRuta(5);
    expect(ruta1.calificacionMediaRuta).to.be.eql(5);
  } );
  
  

});