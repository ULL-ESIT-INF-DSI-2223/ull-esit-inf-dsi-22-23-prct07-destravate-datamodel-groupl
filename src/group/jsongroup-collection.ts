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

/**
 * @description Interfaz que representa el esquema de la base de datos
 */
type schemaType = {
  groups: { id_: number, nombre_: string, participantesGrupo_: number[], estadisticaGrupalEntrenamiento_: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento], clasificacionUsuario_: number[], idRutasFavorita_: number[], todasRutasUsuarios_: number[]}[]
};


/**
 * @description Clase que representa una colección de grupos
 * @class jsonGroupCollection
 * @extends groupCollection
 * @param groupItems - Array de grupos
 * @param database - Base de datos
 * @param nextId - Id del siguiente grupo
 * 
 * @method storeTasks - Almacena los grupos en la base de datos
 * @method getNextId - Devuelve el id del siguiente grupo
 * @method addGroup - Añade un grupo a la colección
 * @method addExistedGroup - Añade un grupo a la colección
 * @method ereaseGroup - Elimina un grupo de la colección
 * 
 */
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

  
  /**
   * @description Almacena los grupos en la base de datos
   * @method storeTasks
   * @returns void
   */
  private storeTasks() {
      this.database.set("groups", Array.from(this.groupMap.values())).write();
  }
 
  /**
   * 
   * @returns Devuelve el id del siguiente grupo
   */
  getNextId() {
    return this.nextId;
  }

  /**
   * 
   * @param group - Grupo a añadir
   * @description Añade un grupo a la colección
   * @returns  void
   */
  addGroup(group: Grupo): void {
    const result = super.addGroup(group);
    this.storeTasks();
    return result;
  }

  /**
   * 
   * @param group - Grupo a añadir
   * @description Añade un grupo a la colección
   * @returns  void
   */
  addExistedGroup(group: Grupo){
    super.addExistedGroup(group);
    this.storeTasks();
  }

  /**
   * 
   * @param id - Id del grupo a eliminar
   * @description Elimina un grupo de la colección
   * @returns  void
   */
  ereaseGroup(id: number): void {
    const result = super.ereaseGroup(id);
    this.storeTasks();
    return result;
  }
  
  /**
   * 
   * @param id - Id del grupo a modificar
   * @param group  - Grupo modificado
   */
  changeGroupById(id: number, group: Grupo): void {
    this.ereaseGroup(id);
    this.addExistedGroup(group);
  }


  /**
   * 
   * @param id - Id del grupo a buscar
   * @returns  Grupo buscado
   */
  getGroup(id: number): Grupo | undefined {
    return super.getGroup(id);
  }

  /**
   * 
   * @returns  Array de grupos
   * @description Devuelve todos los grupos
   */
  orderGroupASC(): Grupo[] {
    return super.orderGroupASC();
  }

  /**
   * 
   * @returns Array de grupos
   * @description Devuelve todos los grupos ordenados de forma descendente
   * 
   */
  orderGroupDESC(): Grupo[] {
    return super.orderGroupDESC();
  }

  /**
   * 
   * @returns Array de grupos
   * @description Devuelve todos los grupos ordenados por el número de miembros de forma ascendente
   * 
   */
  orderGroupByKMWeekASC(): Grupo[] {
    return super.orderGroupByKMWeekASC();
  }

  /**
   * 
   * @returns Array de grupos
   * @description Devuelve todos los grupos ordenados por el número de miembros de forma descendente
   */
  orderGroupByKMWeekDESC(): Grupo[] {
    return super.orderGroupByKMWeekDESC();
  }

    /**
     * 
     * @returns Array de grupos
     * @description Devuelve todos los grupos ordenados por el número de miembros de forma ascendente
     */
  orderGroupByKMMonthASC(): Grupo[] {
    return super.orderGroupByKMMonthASC();
  }

  /**
   * 
   * @returns  Array de grupos
   * @description Devuelve todos los grupos ordenados por el número de miembros de forma descendente
   */
  orderGroupByKMMonthDESC(): Grupo[] {
    return super.orderGroupByKMMonthDESC();
  }

    /**
     * 
     * @returns Array de grupos
     * @description Devuelve todos los grupos ordenados por el número de miembros de forma ascendente
     */
  orderGroupByKMYearASC(): Grupo[] {
    return super.orderGroupByKMYearASC();
  }
 
  /**
   * 
   * @returns Array de grupos
   * @description Devuelve todos los grupos ordenados por el número de miembros de forma descendente
   */
  orderGroupByKMYearDESC(): Grupo[] {
    return super.orderGroupByKMYearDESC();
  }

  /**
   * 
   * @returns Array de grupos
   * @description Devuelve todos los grupos ordenados por el número de miembros de forma ascendente
   */
  orderGroupByNumberMembersASC(): Grupo[] {
    return super.orderGroupByNumberMembersASC();
  }

  /**
   * 
   * @returns Array de grupos
   * @description Devuelve todos los grupos ordenados por el número de miembros de forma descendente
   * 
   */
  orderGroupByNumberMembersDESC(): Grupo[] {
    return super.orderGroupByNumberMembersDESC();
  }
} 