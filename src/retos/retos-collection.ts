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


export class retosCollection {
  protected nextId = 1;
  protected retosMap = new Map<number, Retos>();
  constructor(retosItems: Retos[] = []) {
    retosItems.forEach(item => this.retosMap.set(item.getId(), item));
    this.nextId = retosItems.length + 1;
  }

  addRetos(reto: Retos) {
    this.retosMap.set(this.nextId++, reto);
  }

  getRetos(id: number) {
    return this.retosMap.get(id);
  }


  orderAlfabeticallRetosAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    return retos;
    
  }

  orderAlfabeticallRetosDesc() {
    const retos = Array.from(this.retosMap.values());
    
    retos.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    retos.reverse();
    return retos;
  }

  orderDistanceAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getKmTotales() - b.getKmTotales());
    return retos;   
  }

  orderDistanceDesc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getKmTotales() - b.getKmTotales());
    retos.reverse();
    return retos;
  }

  orderCantidadUsuariosAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getIdUsersRetos().length - b.getIdUsersRetos().length);
    return retos;   
  }

  orderCantidadUsuariosDesc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getIdUsersRetos().length - b.getIdUsersRetos().length);
    retos.reverse();
    return retos;
  }
}


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



// const jsonretos1 = new jsonRetosCollection([]);

// const reto1 = new Retos(jsonretos1.getNextId(), "Reto 5", [1,2,3,4,5,6,7,8,9,10], "bicicleta", 10, [1,2,3,4,5,6,7,8,9,10]);

// jsonretos1.addReto(reto1);

// const reto2 = new Retos(jsonretos1.getNextId(), "Reto 6", [1,2,3,4,5,6,7,8,9,10], "bicicleta", 10, [1,2,3,4,5,6,7,8,9,10]);


// jsonretos1.addReto(reto2);

