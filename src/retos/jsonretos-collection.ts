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

import { Retos } from "./classRetos";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import { GeoLocalization } from "../route/classRoute";
import  {Actividad} from '../route/classRoute';
import { retosCollection } from "./retos-collection";


type schemaTypeRetos = {
  retos: {id: number; nombre: string; rutasRetos: number[]; tipoActividad: Actividad; kmTotales: number; idUsersRetos: number[]}[]
};

export class jsonRetosCollection extends retosCollection {

  private database: lowdb.LowdbSync<schemaTypeRetos>;

  constructor(retosItems: Retos[] = []) {
    super(retosItems);
    this.database = lowdb(new FileSync("./db/retoItems.json"));
    if (this.database.has("retos").value())  {
      const dbItems = this.database.get("retos").value();
      dbItems.forEach(item => this.retosMap.set(item.id, new Retos(item.id, item.nombre, item.rutasRetos, item.tipoActividad, item.kmTotales, item.idUsersRetos)));
      this.nextId = this.database.get("retos").value().length + 1;
    } else {
        this.database.set("retos", retosItems).write();
        retosItems.forEach(item => this.retosMap.set(item.getId(), item));
        this.nextId = this.database.get("retos").value().length + 1;
    }
  }

  private storeTasks() {
    this.database.set("retos", Array.from(this.retosMap.values())).write();
  }
  
  getNextId() {
    return this.nextId;
  }
  

  addReto(reto: Retos) {
    const result = super.addRetos(reto);
    this.storeTasks();
    return result;
  }

  getReto(id: number) {
    return super.getRetos(id);
  }

  orderAlfabeticallRetosAsc() {
    return super.orderAlfabeticallRetosAsc();
  }

  orderAlfabeticallRetosDesc() {
    return super.orderAlfabeticallRetosDesc();
  }

  orderDistanceAsc() {
    return super.orderDistanceAsc();
  }

  orderDistanceDesc() {
    return super.orderDistanceDesc();
  }

  orderCantidadUsuariosAsc() {
    return super.orderCantidadUsuariosAsc();
  }

  orderCantidadUsuariosDesc() {
    return super.orderCantidadUsuariosDesc();
  }
} 