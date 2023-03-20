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

// import { EstadisticasEntrenamiento, Grupo } from "./classGroup";
// import * as lowdb from "lowdb";
// import * as FileSync from "lowdb/adapters/FileSync";



// export class groupCollection {
//   private nextId = 1;
//   protected groupMap = new Map<number, Grupo>();
//   constructor(groupItems: Grupo[] = []) {
//     groupItems.forEach(item => this.groupMap.set(item.id, item));
//     this.nextId = groupItems.length + 1;
//   }

//   addGroup(group: Grupo): void {
//     group.id = this.nextId++;
//     this.groupMap.set(group.id, group);
//   }

//   getGroup(id: number): Grupo | undefined {
//     return this.groupMap.get(id);
//   }

//   orderGroupASC(): Grupo[] {
//     return Array.from(this.groupMap.values()).sort((a, b) => a.id - b.id);
//   }

//   orderGroupDESC(): Grupo[] {
//     return Array.from(this.groupMap.values()).sort((a, b) => b.id - a.id);
//   }

//   orderGroupByKMASC(): Grupo[] {
//     return Array.from(this.groupMap.values()).sort((a, b) => a.EstadisticaGrupalEntrenamiento[0] - b.EstadisticaGrupalEntrenamiento[0]);
//   }

//   orderGroupByKMDESC(): Grupo[] {

//     return Array.from(this.groupMap.values()).sort((a, b) => b.EstadisticaGrupalEntrenamiento[0].km - a.EstadisticaGrupalEntrenamiento[0].km);
//   }

//   orderGroupByNumberMembersASC(): Grupo[] {
//     return Array.from(this.groupMap.values()).sort((a, b) => a.participantesGrupo.length - b.participantesGrupo.length);
//   }

//   orderGroupByNumberMembersDESC(): Grupo[] {
//     return Array.from(this.groupMap.values()).sort((a, b) => b.participantesGrupo.length - a.participantesGrupo.length);
//   }





// }


// type schemaType = {
//   routes: { id_: number, nombre_: string, participantesGrupo_: number[], estadisticaGrupalEntrenamiento_: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento], clasificacionUsuario_: number[], idRutasFavorita_: number[], todasRutasUsuarios_: number[]}[]
// };

// export class jsonGroupCollection extends groupCollection {

//   private database: lowdb.LowdbSync<schemaType>;

//   constructor(groupItems: Grupo[] = []) {
//     super(groupItems);
//     this.database = lowdb(new FileSync("./db/GroupItems.json"));
//     if (this.database.has("groups").value())  {
//       const dbItems = this.database.get("groups").value();
//       dbItems.forEach(item => this.groupMap.set(item.id,
//       new Grupo(item.id_, item.nombre_, item.participantesGrupo_, item.estadisticaGrupalEntrenamiento_, item.clasificacionUsuario_, item.idRutasFavorita_, item.todasRutasUsuarios_)));
//     } else {
//         this.database.set("groups", groupItems).write();
//         groupItems.forEach(item => this.groupMap.set(item.id, item));
//     }
//   }
// } 


