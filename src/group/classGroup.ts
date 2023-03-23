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



// Constructor

  constructor(id: number, nombre: string, participantesGrupo: number[], estadisticaGrupalEntrenamiento: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento], clasificacionUsuario: number[], idRutasFavoritas: number[], todasRutasUsuarios: number[]) {
    this.id_ = id;
    this.nombre_ = nombre;
    this.participantesGrupo_ = participantesGrupo;
    this.estadisticaGrupalEntrenamiento_ = estadisticaGrupalEntrenamiento;
    this.clasificacionUsuario_ = clasificacionUsuario;
    this.idRutasFavorita_ = idRutasFavoritas;
    this.todasRutasUsuarios_ = todasRutasUsuarios;
    
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



// type schemaTypeRetos = {
//   groups: {id: number; nombre: string; rutasRetos: number; tipoActividad: Actividad; kmTotales: number; idUsersRetos: number[]}[]
// };

// export class jsonRetosCollection extends retosCollection {

//   private database: lowdb.LowdbSync<schemaTypeRetos>;

//   constructor(retosItems: Retos[] = []) {
//     super(retosItems);
//     this.database = lowdb(new FileSync("./db/retoItems.json"));
//     if (this.database.has("retos").value())  {
//       const dbItems = this.database.get("retos").value();
//       dbItems.forEach(item => this.retosMap.set(item.id, new Retos(item.id, item.nombre)));
//       this.nextId = this.database.get("retos").value().length + 1;
//     } else {
//         this.database.set("retos", retosItems).write();
//         retosItems.forEach(item => this.retosMap.set(item.getId(), item));
//         this.nextId = this.database.get("retos").value().length + 1;
//     }
//   }

//   private storeTasks() {
//     this.database.set("retos", Array.from(this.retosMap.values())).write();
//   }
  
//   getNextId() {
//     return this.nextId;
//   }

// } 