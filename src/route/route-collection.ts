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

import { Route } from "./classRoute";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import { GeoLocalization } from "./classRoute";


export class routeCollection {
  private nextId = 1;
  private routeMap = new Map<number, Route>();
  constructor(routeItems: Route[] = []) {
    routeItems.forEach(item => this.routeMap.set(item.idRuta, item));
  }

  addRoute(route: Route) {
    this.routeMap.set(this.nextId++, route);
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


type schemaType = {
  tasks: { idRuta: number; nombreRuta: string; geoInicio: Geolocation; geoFin: Geolocation; longitudRuta: number; desnivel: number, idUsuarios:  }[]
};

export class JsonRouteCollection extends routeCollection {

  private database: lowdb.LowdbSync<schemaType>;

    constructor(routeItems: Route[] = []) {
      super([]);
      this.database = lowdb(new FileSync("Todos.json"));
      if (this.database.has("tasks").value())  {
          const dbItems = this.database.get("tasks").value();
          dbItems.forEach(item => this.routeItems.set(item.idRuta,
              new Route(item.id, item.task, item.complete)));
      } else {
          this.database.set("tasks", todoItems).write();
          todoItems.forEach(item => this.routeItems.set(item.idRuta, item));
      }
  }
} 