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

import {Route } from "./classRoute";


/**
 * Clase que representa una colección de rutas
 */
export class routeCollection {
  protected nextId = 1;
  protected routeMap = new Map<number, Route>();
  constructor(routeItems: Route[] = []) {
    routeItems.forEach(item => this.routeMap.set(item.idRuta, item));
    this.nextId = routeItems.length + 1;
  }

  /**
   * @returns the next id to be used
   * 
   */
  addRoute(route: Route) {
    this.routeMap.set(this.nextId++, route);
  }

  /**
   * @returns the next id to be used
   * 
   */
  getRoute(id: number) {
    return this.routeMap.get(id);
  }

  /**
   * @returns the next id to be used
   * 
   */
  getAllRoutes() {
    return Array.from(this.routeMap.values());
  }

  /**
   * Deletes a route from the collection
   * @param id 
   */
  ereaseRoute(id: number) {
    this.routeMap.delete(id);
  }

  /**
   * Changes a route from the collection
   * @param id Id de la ruta a cambiar
   * @param route Ruta nueva
   */
  changeRouteById(id: number, route: Route) {
    this.ereaseRoute(id);
    this.routeMap.set(id, route);
  }

  /**
   * @returns the next id to be used
   * 
   */
  orderRoutesAlfabeticallAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.nombreRuta.localeCompare(b.nombreRuta));
    return routes;
    
  }

  /**
   * @returns the next id to be used
   */
  orderRoutesAlfabeticallDesc() {
    const routes = Array.from(this.routeMap.values());
    
    routes.sort((a, b) => a.nombreRuta.localeCompare(b.nombreRuta));
    routes.reverse();
    return routes;
  }

  /**
   * @returns the next id to be used
   * 
   */
  amountUserAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.idUsuariosRuta.length - b.idUsuariosRuta.length);
    return routes;   
  }

  /**
   * @returns the next id to be used
   * 
   */
  amountUserDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.idUsuariosRuta.length - b.idUsuariosRuta.length);
    routes.reverse();
    return routes;
  }
  /**
   * @returns the next id to be used
   */
  orderRoutesByLengthAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.longitudRutaKm - b.longitudRutaKm);
    return routes;
  }
  
  /**
   * @returns the next id to be used
   */
  orderRoutesByLengthDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.longitudRutaKm - b.longitudRutaKm);
    routes.reverse();
    return routes;
  }

  /**
   * @returns the next id to be used
   */
  orderRoutesByCalificationAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.calificacionMediaRuta - b.calificacionMediaRuta);
    return routes;
  }

  /**
   * @returns the next id to be used
   * 
   */
  orderRoutesByCalificationDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.calificacionMediaRuta - b.calificacionMediaRuta);
    routes.reverse();
    return routes;
  }

  /**
   * @returns the next id to be used
   */
  orderRoutesByActivityAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.tipoActividad.localeCompare(b.tipoActividad));
    return routes;
  }

  /**
   * @returns the next id to be used
   * 
   */
  orderRoutesByActivityDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.tipoActividad.localeCompare(b.tipoActividad));
    routes.reverse();
    return routes;
  }
  

}
