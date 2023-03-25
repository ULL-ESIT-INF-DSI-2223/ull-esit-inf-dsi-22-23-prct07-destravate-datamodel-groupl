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
import { groupCollection } from "./group-collection";

type schemaType = {
  groups: { id_: number, nombre_: string, participantesGrupo_: number[], estadisticaGrupalEntrenamiento_: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento], clasificacionUsuario_: number[], idRutasFavorita_: number[], todasRutasUsuarios_: number[]}[]
};

export class jsonGroupCollection extends groupCollection {

  private database: lowdb.LowdbSync<schemaType>;

  constructor(groupItems: Grupo[] = []) {
    super(groupItems);
    this.database = lowdb(new FileSync("./db/GroupItems.json"));
    if (this.database.has("groups").value())  { // If the database has already been initialized
      
      const dbItems = this.database.get("groups").value();
      // Initialize the map with the data from the database
      dbItems.forEach(item => this.groupMap.set(item.id_, new Grupo(item.id_, item.nombre_, item.participantesGrupo_, item.estadisticaGrupalEntrenamiento_, item.clasificacionUsuario_, item.idRutasFavorita_, item.todasRutasUsuarios_)));
      // Initialize the nextId with the highest id in the database + 1
      this.nextId = this.database.get("groups").value().length + 1;
    } 
    else { // If the database has not been initialized
        this.database.set("groups", groupItems).write();
        groupItems.forEach(item => this.groupMap.set(item.Id, item));
        this.nextId = this.database.get("groups").value().length + 1;
    }
  }

  
  
  private storeTasks() {
      this.database.set("groups", Array.from(this.groupMap.values())).write();
  }
 
  getNextId() {
    return this.nextId;
  }

  addGroup(group: Grupo): void {
    const result = super.addGroup(group);
    this.storeTasks();
    return result;
  }

  addExistedGroup(group: Grupo){
    super.addExistedGroup(group);
    this.storeTasks();
  }

  ereaseGroup(id: number): void {
    const result = super.ereaseGroup(id);
    this.storeTasks();
    return result;
  }

  changeGroupById(id: number, group: Grupo): void {
    this.ereaseGroup(id);
    this.addExistedGroup(group);
  }



  getGroup(id: number): Grupo | undefined {
    return super.getGroup(id);
  }

  orderGroupASC(): Grupo[] {
    return super.orderGroupASC();
  }

  orderGroupDESC(): Grupo[] {
    return super.orderGroupDESC();
  }

  orderGroupByKMWeekASC(): Grupo[] {
    return super.orderGroupByKMWeekASC();
  }

  orderGroupByKMWeekDESC(): Grupo[] {
    return super.orderGroupByKMWeekDESC();
  }

  orderGroupByKMMonthASC(): Grupo[] {
    return super.orderGroupByKMMonthASC();
  }

  orderGroupByKMMonthDESC(): Grupo[] {
    return super.orderGroupByKMMonthDESC();
  }

  orderGroupByKMYearASC(): Grupo[] {
    return super.orderGroupByKMYearASC();
  }

  orderGroupByKMYearDESC(): Grupo[] {
    return super.orderGroupByKMYearDESC();
  }

  orderGroupByNumberMembersASC(): Grupo[] {
    return super.orderGroupByNumberMembersASC();
  }

  orderGroupByNumberMembersDESC(): Grupo[] {
    return super.orderGroupByNumberMembersDESC();
  }
} 