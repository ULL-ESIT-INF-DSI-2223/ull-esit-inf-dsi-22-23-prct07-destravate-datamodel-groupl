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
  private nextId = 1;
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


type schemaType = {
  routes: { idRuta_: number; nombreRuta_: string; geoInicio_: GeoLocalization; geoFin_: GeoLocalization; longitudRutaKm_: number; desnivelMedio_: number, idUsuariosRuta_: number[]; tipoActividad_: Actividad; calificacionMediaRuta_: number}[]
};

export class jsonRouteCollection extends routeCollection {

  private database: lowdb.LowdbSync<schemaType>;

  constructor(routeItems: Route[] = []) {
    super(routeItems);
    this.database = lowdb(new FileSync("./db/RouteItems.json"));
    if (this.database.has("routes").value())  {
      const dbItems = this.database.get("routes").value();
      dbItems.forEach(item => this.routeMap.set(item.idRuta_,
      new Route(item.idRuta_, item.nombreRuta_, item.geoInicio_, item.geoFin_, item.longitudRutaKm_, item.desnivelMedio_, item.idUsuariosRuta_, item.tipoActividad_, item.calificacionMediaRuta_)));
    } else {
        this.database.set("routes", routeItems).write();
        routeItems.forEach(item => this.routeMap.set(item.idRuta, item));
    }
  }

  private storeTasks() {
    this.database.set("routes", [...this.routeMap.values()]).write();
  }
  
  addRoute(route: Route) {
    const result = super.addRoute(route);
    this.storeTasks();
    return result;
  }

  getRoute(id: number): Route | undefined{
    const result = super.getRoute(id);
    return result;
  }


  orderRoutesAlfabeticallAsc(): Route[] {
    const result = super.orderRoutesAlfabeticallAsc();
    return result;
  }

  orderRoutesAlfabeticallDesc(): Route[] {
    const result = super.orderRoutesAlfabeticallDesc();
    return result;
  }

  amountUserAsc(): Route[] {
    const result = super.amountUserAsc();
    return result;
  }

  amountUserDesc(): Route[] {
    const result = super.amountUserDesc();
    return result;
  }

  orderRoutesByLengthAsc(): Route[] {
    const result = super.orderRoutesByLengthAsc();
    return result;
  }

  orderRoutesByLengthDesc(): Route[] {
    const result = super.orderRoutesByLengthDesc();
    return result;
  }

  orderRoutesByCalificationAsc(): Route[] {
    const result = super.orderRoutesByCalificationAsc();
    return result;
  }

  orderRoutesByCalificationDesc(): Route[] {
    const result = super.orderRoutesByCalificationDesc();
    return result;
  }

  orderRoutesByActivityAsc(): Route[] {
    const result = super.orderRoutesByActivityAsc();
    return result;
  }

  orderRoutesByActivityDesc(): Route[] {
    const result = super.orderRoutesByActivityDesc();
    return result;
  }
} 



