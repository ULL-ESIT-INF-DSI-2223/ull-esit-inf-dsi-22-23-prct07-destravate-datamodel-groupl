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

import { Actividad, Route } from "./classRoute";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import { GeoLocalization } from "./classRoute";


export class routeCollection {
  protected nextId = 1;
  protected routeMap = new Map<number, Route>();
  constructor(routeItems: Route[] = []) {
    routeItems.forEach(item => this.routeMap.set(item.idRuta, item));
    this.nextId = routeItems.length + 1;
  }

  addRoute(route: Route) {
    this.routeMap.set(this.nextId++, route);
  }

  getRoute(id: number) {
    return this.routeMap.get(id);
  }


  orderRoutesAlfabeticallAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.nombreRuta.localeCompare(b.nombreRuta));
    return routes;
    
  }

  orderRoutesAlfabeticallDesc() {
    const routes = Array.from(this.routeMap.values());
    
    routes.sort((a, b) => a.nombreRuta.localeCompare(b.nombreRuta));
    routes.reverse();
    return routes;
  }

  amountUserAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.idUsuariosRuta.length - b.idUsuariosRuta.length);
    return routes;   
  }

  amountUserDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.idUsuariosRuta.length - b.idUsuariosRuta.length);
    routes.reverse();
    return routes;
  }
  
  orderRoutesByLengthAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.longitudRutaKm - b.longitudRutaKm);
    return routes;
  }

  orderRoutesByLengthDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.longitudRutaKm - b.longitudRutaKm);
    routes.reverse();
    return routes;
  }

  orderRoutesByCalificationAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.calificacionMediaRuta - b.calificacionMediaRuta);
    return routes;
  }

  orderRoutesByCalificationDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.calificacionMediaRuta - b.calificacionMediaRuta);
    routes.reverse();
    return routes;
  }

  orderRoutesByActivityAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.tipoActividad.localeCompare(b.tipoActividad));
    return routes;
  }

  orderRoutesByActivityDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.tipoActividad.localeCompare(b.tipoActividad));
    routes.reverse();
    return routes;
  }
  

}

// const jsonroutecollection = new jsonRouteCollection([]);




// const route3 = new Route(jsonroutecollection.getNextId(), "Ruta 3", [40.416775, -3.703790], [40.416775, -3.703790], 10, 10, [1,2,3], "bicicleta", 5);

// jsonroutecollection.addRoute(route3);