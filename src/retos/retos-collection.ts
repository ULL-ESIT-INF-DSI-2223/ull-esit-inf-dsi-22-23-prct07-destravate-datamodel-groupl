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


export class retosCollection {
  protected nextId = 1;
  protected retosMap = new Map<number, Retos>();
  constructor(retosItems: Retos[] = []) {
    retosItems.forEach(item => this.retosMap.set(item.getId(), item));
    this.nextId = retosItems.length + 1;
  }

  addRetos(reto: Retos) {
    this.retosMap.set(this.nextId++, reto);
  }

  getRetos(id: number) {
    return this.retosMap.get(id);
  }


  orderAlfabeticallRetosAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    return retos;
    
  }

  orderAlfabeticallRetosDesc() {
    const retos = Array.from(this.retosMap.values());
    
    retos.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    retos.reverse();
    return retos;
  }

  orderDistanceAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getKmTotales() - b.getKmTotales());
    return retos;   
  }

  orderDistanceDesc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getKmTotales() - b.getKmTotales());
    retos.reverse();
    return retos;
  }

  orderCantidadUsuariosAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getIdUsersRetos().length - b.getIdUsersRetos().length);
    return retos;   
  }

  orderCantidadUsuariosDesc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getIdUsersRetos().length - b.getIdUsersRetos().length);
    retos.reverse();
    return retos;
  }
}





