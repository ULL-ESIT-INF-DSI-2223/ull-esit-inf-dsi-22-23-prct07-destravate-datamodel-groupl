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

import { historic } from "../user/classUser";

export type EstadisticasEntrenamiento = [number,number];

/**
 * Clase que representa un grupo de usuarios de la aplicación
 */
export class Grupo {

 private id_: number;
 private nombre_: string;
 private participantesGrupo_: number[];
 private estadisticaGrupalEntrenamiento_: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento];
 private clasificacionUsuario_: number[];
 private idRutasFavorita_: number[];
 private todasRutasUsuarios_: number[];
 private creator_ = true;
 private idCreator_ = 0;
 private historico_: historic[] = [];



// Constructor

  constructor(id: number, nombre: string, participantesGrupo: number[], estadisticaGrupalEntrenamiento: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento], clasificacionUsuario: number[], idRutasFavoritas: number[], todasRutasUsuarios: number[], creator: boolean, idCreator: number) {
    this.id_ = id;
    this.nombre_ = nombre;
    this.participantesGrupo_ = participantesGrupo;
    this.estadisticaGrupalEntrenamiento_ = estadisticaGrupalEntrenamiento;
    this.clasificacionUsuario_ = clasificacionUsuario;
    this.idRutasFavorita_ = idRutasFavoritas;
    this.todasRutasUsuarios_ = todasRutasUsuarios;
    this.creator_ = creator;
    this.idCreator_ = idCreator;
  }

// Getters
  /**
   * @description Devuelve el id del grupo
   * @returns {number}
   */
  get Id(): number {
    return this.id_;
  }

  /** 
   * @description Devuelve el nombre del grupo
   * @returns {string}
   */
  get Nombre(): string {
    return this.nombre_;
  }

  /**
   * @description Devuelve el id del creador del grupo
   */
  get IdCreator(): number {
    return this.idCreator_;
  }

  /**
   * 
   * @param id  Id del creador del grupo
   */
  setidCreator(id: number) {
    this.idCreator_ = id;
  }

  /**
   * @description Devuelve las rutas favoritas del grupo
   * @returns {number[]}
   *  */
  get CreatorSystem(): boolean {
    return this.creator_;
  }

  /**
   * 
   * @param creator  Si el usuario es el creador del grupo
   * 
   * */
  setCreadorSystem(creator: boolean) {
    this.creator_ = creator;
  }

  /**
   * @description Devuelve los participantes del grupo
   * @returns {number[]}
   */
  get ParticipantesGrupo(): number[] {
    return this.participantesGrupo_;
  }

  /** 
   * @description Devuelve las estadisticas del grupo
   * @returns {[EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento]}
   */
  get EstadisticaGrupalEntrenamiento(): [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento] {
    return this.estadisticaGrupalEntrenamiento_;
  }

  /**
   * @description Devuelve la clasificacion del grupo
   * 
   * @returns {number[]}
   */
  get ClasificacionUsuario(): number[] {
    return this.clasificacionUsuario_;
  }

  /**
   * @description Devuelve las rutas favoritas del grupo
   * @returns {number[]}
   */
  get IdRutasFavoritas(): number[] {
    return this.idRutasFavorita_;
  }

  /** 
   * @description Devuelve todas las rutas de los usuarios del grupo
   * @returns {number[]}
    */
  get TodasRutasUsuarios(): number[] {
    return this.todasRutasUsuarios_;
  }

  get Historico(): historic[] {
    return this.historico_;
  }

// Setters

  /**
   * @description Establece el id del grupo
   */
  setNombre(nombre: string) {
    this.nombre_ = nombre;
  }

  /** 
   * @description Establece el nombre del grupo
   */
  setParticipantesGrupo(participantesGrupo: number[]) {
    this.participantesGrupo_ = participantesGrupo;
  }

  /**
   * @description Establece los participantes del grupo
   */
  setEstadisticaGrupalEntrenamiento(estadisticaGrupalEntrenamiento: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento]) {
    this.estadisticaGrupalEntrenamiento_ = estadisticaGrupalEntrenamiento;
  }

  /**
   * @description Establece las estadisticas del grupo
   */
  setClasificacionUsuario(clasificacionUsuario: number[]) {
    this.clasificacionUsuario_ = clasificacionUsuario;
  }

  /**
   * @description Establece la clasificacion del grupo
   * 
   */
  setIdRutasFavoritas(idRutasFavoritas: number[]) {
    this.idRutasFavorita_ = idRutasFavoritas;
  }

  /**
   * @description Establece las rutas favoritas del grupo
   */
  setTodasRutasUsuarios(todasRutasUsuarios: number[]) {
    this.todasRutasUsuarios_ = todasRutasUsuarios;
  }

  /**
   * Método para añadir rutas al historico del grupo
   * @param historico Historico del día
   */
  setHistorico(historico: historic) {
    this.historico_.push(historico);
  }
}
