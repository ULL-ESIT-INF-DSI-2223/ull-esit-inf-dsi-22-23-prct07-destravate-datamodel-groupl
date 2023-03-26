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
import {routeCollection} from '../../src/route/route-collection';

describe('Routes collection', () => {
  const route1 = new Route(1, "ruta 1", [1, 2], [3, 4], 10, 5, [1, 2], "bicicleta", 7);
  const route2 = new Route(2, "ruta 2", [1, 2], [3, 4], 10, 5, [1, 2], "bicicleta", 7);
  const route3 = new Route(3, "ruta 3", [1, 2], [3, 4], 10, 5, [1, 2], "bicicleta", 7);
  const route4 = new Route(4, "ruta 4", [1, 2], [3, 4], 10, 5, [1, 2], "bicicleta", 7);

  const routes = [route1, route2, route3];

  const routecollection = new routeCollection(routes);
  const routecollection1 = new routeCollection(routes);

    
  it('Eliminar el ruta 4 de la colección', () => {
    routecollection1.ereaseRoute(3);
    expect(routecollection1.getRoute(3)).to.be.eql(undefined);
  });

  it('Cambiar el ruta 1 por el reto 4', () => {
    routecollection1.changeRouteById(1, route4);
    expect(routecollection1.getRoute(1)).to.be.eql(route4); 
  });

  it('Añadir la ruta 4 a la colección', () => {
    routecollection.addRoute(route4);
    expect(routecollection.getRoute(4)).to.be.eql(route4);
  } );


  it('Ordenar las rutas alfabeticamente ASC', () => {
    expect(routecollection.orderRoutesAlfabeticallAsc()).to.be.eql([route1, route2, route3, route4]);
  } );

  it('Ordenar las rutas alfabeticamente DESC', () => {
    expect(routecollection.orderRoutesAlfabeticallDesc()).to.be.eql([route4, route3, route2, route1]);
  } );

  it('Ordenar las rutas por cantidad de usuarios ASC', () => {
    expect(routecollection.amountUserAsc()).to.be.eql([route1, route2, route3, route4]);
  } );

  it('Ordenar las rutas por cantidad de usuarios DESC', () => {
    expect(routecollection.amountUserDesc()).to.be.eql([route4, route3, route2, route1]);
  } );

  it('Ordenar las rutas por longitud ASC', () => {
    expect(routecollection.orderRoutesByLengthAsc()).to.be.eql([route1, route2, route3, route4]);
  } );

  it('Ordenar las rutas por longitud DESC', () => {
    expect(routecollection.orderRoutesByLengthDesc()).to.be.eql([route4, route3, route2, route1]);
  } );

  it('Ordenar las rutas por calificación ASC', () => {
    expect(routecollection.orderRoutesByCalificationAsc()).to.be.eql([route1, route2, route3, route4]);
  } );

  it('Ordenar las rutas por calificación DESC', () => {
    expect(routecollection.orderRoutesByCalificationDesc()).to.be.eql([route4, route3, route2, route1]);
  } );

  it('Ordenar las rutas por actividad ASC', () => {
    expect(routecollection.orderRoutesByActivityAsc()).to.be.eql([route1, route2, route3, route4]);
  } );

  it('Ordenar las rutas por actividad DESC', () => {
    expect(routecollection.orderRoutesByActivityDesc()).to.be.eql([route4, route3, route2, route1]);
  } );

  it('Obtener todas las rutas', () => {
    expect(routecollection.getAllRoutes()).to.be.eql([route1, route2, route3, route4]);
  } );

  

});
