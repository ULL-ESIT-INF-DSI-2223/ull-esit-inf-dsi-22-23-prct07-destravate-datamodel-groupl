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

import {Actividad} from "../route/classRoute";

export class Retos{

  private id: number;
  private nombre: string;
  private rutasRetos: number[];
  private tipoActividad: Actividad;
  private kmTotales: number;
  private idUsersRetos: number[];


  constructor(id: number, nombre: string, rutasRetos: number[], tipoActividad: Actividad, kmTotales: number, idUsersRetos: number[]) {
    this.id = id;
    this.nombre = nombre;
    this.rutasRetos = rutasRetos;
    this.tipoActividad = tipoActividad;
    this.kmTotales = kmTotales;
    this.idUsersRetos = idUsersRetos;


  }

  //Getters
  /**
   * @description Devuelve el id del reto
   * @returns {number}
   */
  public getId(): number {
    return this.id;
  }
  /**
   * @description Devuelve el nombre del reto
   * @returns {string}
   */
  public getNombre(): string {
    return this.nombre;
  }
  /**
   * @description Devuelve las rutas que forman el reto
   * @returns {number[]}
   * 
   */
  public getRutasRetos(): number[] {
    return this.rutasRetos;
  }
  /**
   * @description Devuelve el tipo de actividad del reto
   * @returns {Actividad}
   */
  public getTipoActividad(): Actividad {
    return this.tipoActividad;
  }
  /**
   * @description Devuelve los kilometros totales del reto
   * @returns {number}
   */
  public getKmTotales(): number {
    return this.kmTotales;
  }
  /**
   * @description Devuelve los usuarios que han completado el reto
   * @returns {number[]}
   */
  public getIdUsersRetos(): number[] {
    return this.idUsersRetos;
  }

  //Setters
  /** 
   * @param id
   * @description Asigna el id del reto
   */
  public setId(id: number): void {
    this.id = id;
  }
  /**
   * @param nombre
   * @description Asigna el nombre del reto
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }
  /** 
   * @param rutasRetos
   * @description Asigna las rutas que forman el reto
   * 
   */
  public setRutasRetos(rutasRetos: number[]): void {
    this.rutasRetos = rutasRetos;
  }
  /**
   * @param tipoActividad
   * @description Asigna el tipo de actividad del reto
   * 
   */
  public setTipoActividad(tipoActividad: Actividad): void {
    this.tipoActividad = tipoActividad;
  }
  /**
   * @param kmTotales
   * @description Asigna los kilometros totales del reto
   * 
   */
  public setKmTotales(kmTotales: number): void {
    this.kmTotales = kmTotales;
  }
  /**
   * @param idUsersRetos
   * @description Asigna los usuarios que han completado el reto
   */
  public setIdUsersRetos(idUsersRetos: number[]): void {
    this.idUsersRetos = idUsersRetos;
  }
}