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

  addGroup(group: Grupo): void {
    this.groupMap.set(this.nextId++, group);
  }

  ereaseGroup(id: number): void {
    this.groupMap.delete(id);
  }

  changeGroupByID(id: number, group: Grupo): void {
    this.groupMap.set(id, group);
  }

  getGroup(id: number): Grupo | undefined {
    return this.groupMap.get(id);
  }

  orderGroupASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.Id - b.Id);
  }

  orderGroupDESC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => b.Id - a.Id);
  }

  orderGroupByKMWeekASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.EstadisticaGrupalEntrenamiento[0][0] - b.EstadisticaGrupalEntrenamiento[0][0]);
  }

  orderGroupByKMMonthASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.EstadisticaGrupalEntrenamiento[1][0] - b.EstadisticaGrupalEntrenamiento[1][0]);
  }

  orderGroupByKMYearASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.EstadisticaGrupalEntrenamiento[2][0] - b.EstadisticaGrupalEntrenamiento[2][0]);
  }

  orderGroupByKMWeekDESC(): Grupo[] {

    return Array.from(this.groupMap.values()).sort((a, b) => b.EstadisticaGrupalEntrenamiento[0][0] - a.EstadisticaGrupalEntrenamiento[0][0]);
  }

  orderGroupByKMMonthDESC(): Grupo[] {

    return Array.from(this.groupMap.values()).sort((a, b) => b.EstadisticaGrupalEntrenamiento[1][0] - a.EstadisticaGrupalEntrenamiento[1][0]);
  }

  orderGroupByKMYearDESC(): Grupo[] {

    return Array.from(this.groupMap.values()).sort((a, b) => b.EstadisticaGrupalEntrenamiento[2][0] - a.EstadisticaGrupalEntrenamiento[2][0]);
  }


  orderGroupByNumberMembersASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.ParticipantesGrupo.length- b.ParticipantesGrupo.length);
  }

  orderGroupByNumberMembersDESC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => b.ParticipantesGrupo.length - a.ParticipantesGrupo.length);
  }

}

