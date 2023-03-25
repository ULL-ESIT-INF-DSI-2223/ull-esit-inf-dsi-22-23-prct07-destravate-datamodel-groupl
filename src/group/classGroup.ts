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

export type EstadisticasEntrenamiento = [number,number];


export class Grupo {

 private id_: number;
 private nombre_: string;
 private participantesGrupo_: number[];
 private estadisticaGrupalEntrenamiento_: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento];
 private clasificacionUsuario_: number[];
 private idRutasFavorita_: number[];
 private todasRutasUsuarios_: number[];
 private creator_: boolean;



// Constructor

  constructor(id: number, nombre: string, participantesGrupo: number[], estadisticaGrupalEntrenamiento: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento], clasificacionUsuario: number[], idRutasFavoritas: number[], todasRutasUsuarios: number[]) {
    this.id_ = id;
    this.nombre_ = nombre;
    this.participantesGrupo_ = participantesGrupo;
    this.estadisticaGrupalEntrenamiento_ = estadisticaGrupalEntrenamiento;
    this.clasificacionUsuario_ = clasificacionUsuario;
    this.idRutasFavorita_ = idRutasFavoritas;
    this.todasRutasUsuarios_ = todasRutasUsuarios;
    this.creator_ = true;
    
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

  get Creator(): boolean {
    return this.creator_;
  }

  setCreador(creator: boolean) {
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
}
