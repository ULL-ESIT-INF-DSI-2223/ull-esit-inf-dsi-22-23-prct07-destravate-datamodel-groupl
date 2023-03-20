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
  private nextId = 1;
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
  retos: {id: number; nombre: string; rutasRetos: number; tipoActividad: Actividad; kmTotales: number; idUsersRetos: number[]}[]
};

export class jsonRetosCollection extends retosCollection {

  private database: lowdb.LowdbSync<schemaTypeRetos>;

  constructor(retosItems: Retos[] = []) {
    super(retosItems);
    this.database = lowdb(new FileSync("./db/retoItems.json"));
    if (this.database.has("retos").value())  {
      const dbItems = this.database.get("retos").value();
      dbItems.forEach(item => this.retosMap.set(item.id, new Retos(item.id, item.nombre)));
    } else {
        this.database.set("retos", retosItems).write();
        retosItems.forEach(item => this.retosMap.set(item.getId(), item));
    }
  }

  private storeTasks() {
    this.database.set("retos", Array.from(this.retosMap.values())).write();
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

// const reto1 = new Retos(1, "Reto 1");
// reto1.setKmTotales(10);
// reto1.setIdUsersRetos([1,2,3,4,5,6,7,8,9,10]);
// reto1.setRutasRetos([1,2,3,4,5,6,7,8,9,10]);
// reto1.setTipoActividad("bicicleta");

// const reto2 = new Retos(2, "Reto 2");
// reto2.setKmTotales(20);
// reto2.setIdUsersRetos([1,2,3,4,5,6,7,8,9,10]);
// reto2.setRutasRetos([1,2,3,4,5,6,7,8,9,10]);
// reto2.setTipoActividad("bicicleta");

// const reto3 = new Retos(3, "Reto 3");
// reto3.setKmTotales(30);
// reto3.setIdUsersRetos([1,2,3,4,5,6,7,8,9,10]);
// reto3.setRutasRetos([1,2,3,4,5,6,7,8,9,10]);
// reto3.setTipoActividad("bicicleta");

// const retos = [reto1, reto2, reto3];

// const jsonretos1 = new jsonRetosCollection(retos);

// console.log(jsonretos1.orderAlfabeticallRetosAsc());
// console.log(jsonretos1.orderAlfabeticallRetosDesc());

// const reto4 = new Retos(4, "Reto 4");
// reto4.setKmTotales(40);
// reto4.setIdUsersRetos([1,2,3,4,5,6,7,8,9,10]);
// reto4.setRutasRetos([1,2,3,4,5,6,7,8,9,10]);
// reto4.setTipoActividad("bicicleta");

// const jsonretos1 = new jsonRetosCollection([]);
// jsonretos1.addReto(reto4);

////