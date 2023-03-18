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

import { Actividad } from "./classRoute";

type stats = [[number, number], [number, number], [number, number]];
type historic = [string, number[]];

export class User {
  private id_: number;
  private activities_: Actividad[] = [];
  private friends_: number[];
  private groups_: number[];
  private stats_: stats;
  private favouriteRoutes_: number[];
  private challenges_: number[];
  private historic_: historic[];
  
  private static idLastUser_: number;
  
  constructor(private userName_: string) {

  }

  static idLastUser(id_: number) {
    User.idLastUser_ = id_;
  }

  setId() {
    this.id_ = User.idLastUser_ + 1;
    User.idLastUser(this.id_);
  }

  get Id() {
    return this.id_;
  }

  get userName() {
    return this.userName_;
  }

  setActivities(input_activities: Actividad[]) {
    this.activities_ = input_activities;
  }

  get activities() {
    return this.activities_;
  }

  setGroup(new_group: number) {
    this.groups_.push(new_group);
  }

  get groups() {
    return this.groups_;
  }

  setFriend(new_friend: number) {
    this.friends_.push(new_friend);
  }

  get friends() {
    return this.friends_;
  }

  setStats(new_stats: stats) {
    this.stats_ = new_stats;
  }

  get stats() {
    return this.stats_;
  }

  setFavouriteRoute(route: number) {
    this.favouriteRoutes_.push(route);
  }

  get favouriteRoutes() {
    return this.favouriteRoutes_;
  }

  setChallenge(new_challege: number) {
    this.challenges_.push(new_challege);
  }

  get challenges() {
    return this.challenges_;
  }

  setHistoric(new_historic: historic) {
    this.historic_.push(new_historic);
  }

  get historic() {
    return this.historic_;
  }
}