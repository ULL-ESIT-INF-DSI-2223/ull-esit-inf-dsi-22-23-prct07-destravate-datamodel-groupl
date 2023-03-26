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

import { Retos } from "./classRetos";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import { GeoLocalization } from "../route/classRoute";
import  {Actividad} from '../route/classRoute';

/**
 * Clase que representa una colección de retos
 * @class RetosCollection
 * @param {Retos[]} retosItems - Array de retos
 * @param {number} nextId - Id del siguiente reto
 * @param {Map<number, Retos>} retosMap - Mapa de retos
 * @param {lowdb.LowdbSync<RetosCollection>} db - Base de datos
 * @param {FileSync} adapter - Adaptador de la base de datos
 * @param {string} dbPath - Ruta de la base de datos
 * @param {string} dbFile - Nombre del archivo de la base de datos
 * @param {string} dbFullPath - Ruta completa de la base de datos
 * @param {string} dbCollection - Nombre de la colección de la base de datos
 * 
 */
export class retosCollection {
  protected nextId = 1;
  protected retosMap = new Map<number, Retos>();
  constructor(retosItems: Retos[] = []) {
    retosItems.forEach(item => this.retosMap.set(item.getId(), item));
    this.nextId = retosItems.length + 1;
  }

  /**
   *  Método que añade un reto a la colección
   * @param {Retos} reto - Reto a añadir
   * @returns {void} 
   * 
   */
  addRetos(reto: Retos) {
    this.retosMap.set(this.nextId++, reto);
  }

  /**
   *  Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   * 
   */
  getRetos(id: number) {
    return this.retosMap.get(id);
  }

  /**
   * 
   * @param reto Reto a añadir si ya existe
   */
  addExistedRetos(reto: Retos) {
    this.retosMap.set(reto.getId(), reto);
  }

  /**
   *  Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   */
  orderAlfabeticallRetosAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    return retos;
    
  }

  /**
   * Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   */
  orderAlfabeticallRetosDesc() {
    const retos = Array.from(this.retosMap.values());
    
    retos.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    retos.reverse();
    return retos;
  }

  /**
   * Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   */
  orderDistanceAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getKmTotales() - b.getKmTotales());
    return retos;   
  }

  /**
   * Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   */
  orderDistanceDesc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getKmTotales() - b.getKmTotales());
    retos.reverse();
    return retos;
  }

  /**
   * Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   * 
   */
  orderCantidadUsuariosAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getIdUsersRetos().length - b.getIdUsersRetos().length);
    return retos;   
  }

  /**
   * Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   */
  orderCantidadUsuariosDesc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getIdUsersRetos().length - b.getIdUsersRetos().length);
    retos.reverse();
    return retos;
  }
}





