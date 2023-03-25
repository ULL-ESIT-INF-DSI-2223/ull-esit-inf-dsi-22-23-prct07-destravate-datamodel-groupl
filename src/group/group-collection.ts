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

import { EstadisticasEntrenamiento, Grupo } from "./classGroup";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";



export class groupCollection {
  protected nextId = 1;
  protected groupMap = new Map<number, Grupo>();
  constructor(groupItems: Grupo[] = []) {
    groupItems.forEach(item => this.groupMap.set(item.Id, item));
    this.nextId = groupItems.length + 1;
  }

  /**
   * 
   * @param group  Grupo a añadir
   */
  addGroup(group: Grupo): void {
    this.groupMap.set(this.nextId++, group);
  }

  /**
   * 
   * @param group Grupo a añadir si ya existe
   */
  addExistedGroup(group: Grupo): void {
    this.groupMap.set(group.Id, group);
  }

  /**
   * 
   * @param id Id del grupo a borrar
   */
  ereaseGroup(id: number): void {
    this.groupMap.delete(id);
  }

  /**
   * 
   * @param id Id del grupo a cambiar
   * @param group  Grupo nuevo
   */
  changeGroupByID(id: number, group: Grupo): void {
    this.groupMap.set(id, group);
  }

  /**
   * 
   * @param id Id del grupo a buscar
   * @returns Grupo buscado
   */
  getGroup(id: number): Grupo | undefined {
    return this.groupMap.get(id);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.Id - b.Id);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupDESC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => b.Id - a.Id);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByKMWeekASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.EstadisticaGrupalEntrenamiento[0][0] - b.EstadisticaGrupalEntrenamiento[0][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByKMMonthASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.EstadisticaGrupalEntrenamiento[1][0] - b.EstadisticaGrupalEntrenamiento[1][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByKMYearASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.EstadisticaGrupalEntrenamiento[2][0] - b.EstadisticaGrupalEntrenamiento[2][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByKMWeekDESC(): Grupo[] {

    return Array.from(this.groupMap.values()).sort((a, b) => b.EstadisticaGrupalEntrenamiento[0][0] - a.EstadisticaGrupalEntrenamiento[0][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   * 
   */
  orderGroupByKMMonthDESC(): Grupo[] {

    return Array.from(this.groupMap.values()).sort((a, b) => b.EstadisticaGrupalEntrenamiento[1][0] - a.EstadisticaGrupalEntrenamiento[1][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByKMYearDESC(): Grupo[] {

    return Array.from(this.groupMap.values()).sort((a, b) => b.EstadisticaGrupalEntrenamiento[2][0] - a.EstadisticaGrupalEntrenamiento[2][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByNumberMembersASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.ParticipantesGrupo.length- b.ParticipantesGrupo.length);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByNumberMembersDESC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => b.ParticipantesGrupo.length - a.ParticipantesGrupo.length);
  }

}

