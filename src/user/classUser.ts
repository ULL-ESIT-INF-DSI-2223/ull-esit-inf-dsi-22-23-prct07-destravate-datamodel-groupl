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

import { Actividad } from "../route/classRoute";

/**
 * Tipo que permite determinar las estadísticas de cantidad de km y desnivel total por día, mes y año actual
 */
export type stats = [[number, number], [number, number], [number, number]];

/**
 * Tipo para guardar el histórico de rutas de un día
 */
export type historic = [string, number[]];

/**
 * Clase para representar a un usuario del sistema 
 */
export class User {
  private id_: number;
  private activities_: Actividad[] = [];
  private friends_: number[] = [];
  private groups_: number[] = [];
  private stats_: stats; 
  private favouriteRoutes_: number[] = [];
  private challenges_: number[] = [];
  private historic_: historic[] = [];
  private userName_: string;

  
  /**
   * Permite darle un nombre de usuario al nuevo usuario a crear
   * @param userName_ 
   */
  constructor( id: number, userName: string,  activities: Actividad[], friends: number[], groups: number[], stats: stats, favouriteRoutes: number[], challenges: number[], historic: historic[]) {
    this.id_ = id;
    this.userName_ = userName;
    this.activities_ = activities;
    this.friends_ = friends;
    this.groups_ = groups;
    this.stats_ = stats;
    this.favouriteRoutes_ = favouriteRoutes;
    this.challenges_ = challenges;
    this.historic_ = historic;
  

  }

  /**
   * Método para obtener el ID de un usuario
   * @return Devuelve el id del usuario que es un number
   */
  get Id() {
    return this.id_;
  }

  /**
   * Método para obtener el nombre de usuario de un usuario
   * @return Nombre de  usuario, de tipo string
   */
  get userName() {
    return this.userName_;
  }

  /**
   * Método para establecer el tipo de actividades que realiza el usuario
   * @param input_activities Actividades que realiza el usuario 
   */
  setActivities(input_activities: Actividad[]) {
    this.activities_ = input_activities;
  }

  /**
   * Método para obtener las actividades de un usuario
   * @return Devuelve un array con las actividades
   */
  get activities() {
    return this.activities_;
  }

  /**
   * Método que permite añadir un id de un nuevo grupo al que pertenece el usuario
   * @param new_group Id del nuevo grupo a añadir 
   */
  setGroup(new_group: number) {
    this.groups_.push(new_group);
  }

  /**
   * Método para obtener los id de los grupos a los que pertenece un usuario
   * @return Array con los id de los grupos a los que pertenece el usuario 
   */
  get groups() {
    return this.groups_;
  }

  /**
   * Método que permite añadir el id de un nuevo amigo del usuario 
   * @param new_friend Id del nuevo amigo 
   */
  setFriend(new_friend: number) {
    this.friends_.push(new_friend);
  }

  /**
   * Método que devuelve los id de los amigos del usuario 
   * @return Array con los id de los amigos del usuario 
   */
  get friends() {
    return this.friends_;
  }

  /**
   * Método que permite añadir nuevas estadísticas 
   * @param new_stats Nueva estadística a añadir 
   */
  setStats(new_stats: stats) {
    this.stats_ = new_stats;
  }

  /**
   * Método para obtener las estadísticas de un usuario
   * @return Devuelve un array de estadísticas de un usuario 
   */
  get stats() {
    return this.stats_;
  }

  /**
   * Método para añadir el id de una nueva ruta favorita del usuario 
   * @param route Id de la nueva ruta favorita
   */
  setFavouriteRoute(route: number) {
    this.favouriteRoutes_.push(route);
  }

  /**
   * Método para obtener los id de las rutas favoritas del usuario 
   * @return Array de id de las rutas favoritas 
   */
  get favouriteRoutes() {
    return this.favouriteRoutes_;
  }

  /**
   * Método para añadir un nuevo reto del usuario 
   * @param new_challege Id del nuevo reto a añadir 
   */
  setChallenge(new_challege: number) {
    this.challenges_.push(new_challege);
  }

  /**
   * Método que permite obtener todos los id de los retos del usuario
   * @return Array de ID de los restos del usuario 
   */
  get challenges() {
    return this.challenges_;
  }

  /**
   * Método que permite añadir un nuevo histórico diario al usuario 
   * @param new_historic Nuevo histórico a añadir
   */
  setHistoric(new_historic: historic) {
    this.historic_.push(new_historic);
  }

  /**
   * Método para obtener todo el histórico de un usuario
   * @return Array de histórico de un usuario
   */
  get historic() {
    return this.historic_;
  }
}