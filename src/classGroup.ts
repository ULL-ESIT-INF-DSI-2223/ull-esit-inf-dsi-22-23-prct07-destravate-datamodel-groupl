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

 private id: number;
 private nombre: string;
 private participantesGrupo: number[];
 private estadisticaGrupalEntrenamiento: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento];
 private clasificacionUsuario: number[];
 private idRutasFavoritas: number[];
 private todasRutasUsuarios: number[];



// Constructor

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

// Getters
  /**
   * @description Devuelve el id del grupo
   * @returns {number}
   */
  getId(): number {
    return this.id;
  }

  /** 
   * @description Devuelve el nombre del grupo
   * @returns {string}
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * @description Devuelve los participantes del grupo
   * @returns {number[]}
   */
  getParticipantesGrupo(): number[] {
    return this.participantesGrupo;
  }

  /** 
   * @description Devuelve las estadisticas del grupo
   * @returns {[EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento]}
   */
  getEstadisticaGrupalEntrenamiento(): [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento] {
    return this.estadisticaGrupalEntrenamiento;
  }

  /**
   * @description Devuelve la clasificacion del grupo
   * 
   * @returns {number[]}
   */
  getClasificacionUsuario(): number[] {
    return this.clasificacionUsuario;
  }

  /**
   * @description Devuelve las rutas favoritas del grupo
   * @returns {number[]}
   */
  getIdRutasFavoritas(): number[] {
    return this.idRutasFavoritas;
  }

  /** 
   * @description Devuelve todas las rutas de los usuarios del grupo
   * @returns {number[]}
    */
  getTodasRutasUsuarios(): number[] {
    return this.todasRutasUsuarios;
  }

// Setters

  /**
   * @description Establece el id del grupo
   */
  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  /** 
   * @description Establece el nombre del grupo
   */
  setParticipantesGrupo(participantesGrupo: number[]) {
    this.participantesGrupo = participantesGrupo;
  }

  /**
   * @description Establece los participantes del grupo
   */
  setEstadisticaGrupalEntrenamiento(estadisticaGrupalEntrenamiento: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento]) {
    this.estadisticaGrupalEntrenamiento = estadisticaGrupalEntrenamiento;
  }

  /**
   * @description Establece las estadisticas del grupo
   */
  setClasificacionUsuario(clasificacionUsuario: number[]) {
    this.clasificacionUsuario = clasificacionUsuario;
  }

  /**
   * @description Establece la clasificacion del grupo
   * 
   */
  setIdRutasFavoritas(idRutasFavoritas: number[]) {
    this.idRutasFavoritas = idRutasFavoritas;
  }

  /**
   * @description Establece las rutas favoritas del grupo
   */
  setTodasRutasUsuarios(todasRutasUsuarios: number[]) {
    this.todasRutasUsuarios = todasRutasUsuarios;
  }
}