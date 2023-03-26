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

import * as inquirer from 'inquirer';
import { jsonGroupCollection } from '../group/jsongroup-collection';
import { jsonRouteCollection } from '../route/jsonroute-collection';
import { jsonRetosCollection } from '../retos/jsonretos-collection';
import { jsonUserCollection } from '../user/jsonuser-collection';
import { stats } from '../user/classUser';
import { InquirerRoutes } from '../funcionesInquirer/promptRoutes';
import { InquirerGroups } from '../funcionesInquirer/promptGroup';
import { groupCollection } from '../group/group-collection';
import { Grupo } from '../group/classGroup';
import { EstadisticasEntrenamiento } from '../group/classGroup';
import { User } from '../user/classUser';
import { Actividad } from '../route/classRoute';
import { MenuPrincipal } from '../funcionesInquirer/mainPrompt';

/**
 * Clase que permite gestionar la información del sistema permitiendo registrar usuarios, añadir grupos y visualizar rutas
 */
export class Gestor {
  private groupCollection: jsonGroupCollection;
  private routeCollection: jsonRouteCollection;
  private retosCollection: jsonRetosCollection;
  private userCollection: jsonUserCollection;

  constructor() {
    this.groupCollection = new jsonGroupCollection();
    this.routeCollection = new jsonRouteCollection();
    this.retosCollection = new jsonRetosCollection();
    this.userCollection =  new jsonUserCollection();
  }

  // propiedades temporales del usuario
  private nombreUsuario = "";
  private actividadesUsuario: Actividad[] = [];
  private amigos: number[] = [-1];
  private estadisticas: stats = [[0,0],[0,0],[0,0]];

  /**
   * Metodo para registrar un usuario en el sistema
   * @returns 
   */
  registrarSistema() {
    const prompt = inquirer.createPromptModule();

    prompt([
      {
        type: 'input',
        name: "nombre",
        message: "Introduce tu nombre"
        
      },
      {
        type: 'checkbox',
        name: 'actividades',
        message: '¿Qué actividades te gustaría realizar?',
        choices: ['Bicicleta', 'Correr'],
      }, 
    ]) .then((answers) => {
      this.nombreUsuario = answers.nombre;
      if (answers.actividades.includes('Bicicleta') && answers.actividades.includes('Correr')) {
        this.actividadesUsuario.push("bicicleta");
        this.actividadesUsuario.push("correr");
      } else if (answers.actividades.includes('Bicicleta')) {
        this.actividadesUsuario.push("bicicleta");
      } else {
        this.actividadesUsuario.push("correr");
      }
      this.añadirAmigosUsuario();
    })
  }

  /**
   * Metodo para añadir amigos a un usuario
   * @returns
   */
  añadirAmigosUsuario() {
    const prompt = inquirer.createPromptModule();
    let amigos: number[] = [];
  
    prompt([
      {
        type: 'confirm',
        name: 'añadeAmigos',
        message: '¿Quieres añadir amigos?',
        default: false
      },
    ]) .then((answers) => {
      if (answers.añadeAmigos) {
        console.log("Usuarios del sistema: ");
        console.table(this.userCollection.getAllUsers());

        prompt([
          {
            type: 'input',
            name: 'idAmigos',
            message: 'Introduce el id de cada uno de tus amigos separado por comas',
          }
        ]).then((answers) => {
          amigos = answers.idAmigos.split(",").map(Number);
          this.amigos = amigos;
          this.añadirEstadisticasUsuario();
        })
      } else {
        this.añadirEstadisticasUsuario();
      }
    })
  }

  /**
   * Metodo para añadir estadisticas a un usuario
   */
  añadirEstadisticasUsuario() {
    const prompt = inquirer.createPromptModule();
    let estadisticas: stats = [[0,0],[0,0],[0,0]];

    prompt([
      {
        type: 'confirm',
        name: 'añadeEstadisticas',
        message: '¿Quieres añadir estadísticas?',
        default: false
      },
      {
        type: 'input',
        name: 'kmSemanales',
        message: 'Introduce los km semanales',
        when: (answers) => answers.añadeEstadisticas
      },
      {
        type: 'input',
        name: 'desnivelSemanales',
        message: 'Introduce los desniveles semanales',
        when: (answers) => answers.añadeEstadisticas
      },
      {
        type: 'input',
        name: 'kmMensuales',
        message: 'Introduce los km mensuales',
        when: (answers) => answers.añadeEstadisticas
      },
      {
        type: 'input',
        name: 'desnivelMensuales',
        message: 'Introduce los desniveles mensuales',
        when: (answers) => answers.añadeEstadisticas
      },
      {
        type: 'input',
        name: 'kmAnuales',
        message: 'Introduce los km anuales',
        when: (answers) => answers.añadeEstadisticas
      },
      {
        type: 'input',
        name: 'desnivelAnuales',
        message: 'Introduce los desniveles anuales',
        when: (answers) => answers.añadeEstadisticas
      },
    ]) .then((answers) => {
      const kmSemanales = answers.kmSemanales;
      const desnivelSemanales = answers.desnivelSemanales;
      const kmMensuales = answers.kmMensuales;
      const desnivelMensuales = answers.desnivelMensuales;
      const kmAnuales = answers.kmAnuales;
      const desnivelAnuales = answers.desnivelAnuales;
      estadisticas = [[kmSemanales, desnivelSemanales], [kmMensuales, desnivelMensuales], [kmAnuales, desnivelAnuales]];
    })
    this.estadisticas = estadisticas;
    this.userCollection.addUser(new User(this.userCollection.getNextId(), this.nombreUsuario, this.actividadesUsuario, this.amigos, [],  this.estadisticas, [], [], []));
  }
  
  /**
   * Metodo para mostrar las rutas del sistema
   * @returns 
   */
  mostrarRutas() {
    const prompt = inquirer.createPromptModule();

    prompt([
      {
        type: 'confirm',
        name: 'mostarRutas',
        message: '¿Quieres ver la rutas existentes?',
        default: false
      }

    ]) .then((answers) => {
      if (answers.mostarRutas) {
        console.log("Rutas del sistema: ");
        InquirerRoutes(this.routeCollection);
      }
    });
  }

  /**
   * Metodo para crear un grupo
   * @returns void
   */
  unirseGrupo(idUsuario: number) {
    const prompt = inquirer.createPromptModule();

    prompt([
      {
        type: 'confirm',
        name: 'unirseGrupo',
        message: '¿Quieres unirse a un grupo?',
        default: false
      },
      {
        type: 'input',
        name: 'idGrupo',
        message: 'Introduce el id del grupo',
        when: (answers) => answers.unirseGrupo
      }

    ]) .then((answers) => {
        if (this.userCollection.getUser(idUsuario) !== undefined) {
          if (this.groupCollection.getGroup(Number(answers.idGrupo)) !== undefined) {
            let newParticipante = 0;
            let allParticipantes: number[] = [];
            newParticipante = idUsuario;
            allParticipantes = this.groupCollection.getGroup(Number(answers.idGrupo))?.ParticipantesGrupo as number[];
            allParticipantes.push(newParticipante);
            const modificado = this.groupCollection.getGroup(Number(answers.idGrupo));
            modificado?.setParticipantesGrupo(allParticipantes);
            this.groupCollection.changeGroupById(Number(answers.idGrupo), modificado as Grupo);
            console.log("Te has unido al grupo");
          }
          else {
            console.log("El grupo no existe");
          }
        }
        else {
          console.log("El usuario no existe");
        }
        MenuPrincipal();
    });
  }

  /**
   * Metodo para mostrar los grupos del sistema
   * @returns void
   */
  visualizarGrupos() {
    const prompt = inquirer.createPromptModule();

    prompt([
      {
        type: 'confirm',
        name: 'vergrupo',
        message: '¿Quieres ver los grupos?',
        default: false
      }
    ]) .then((answers) => {
      if (answers.vergrupo) {
        console.log("Grupos del sistema: ");
        InquirerGroups(this.groupCollection);
      }
    });
  }

  /**
   * Metodo para crear un grupo
   * @returns void
   */
  crearGrupo(idUsuario: number) {
    const prompt = inquirer.createPromptModule();
    prompt([
      {
        type: 'confirm',
        name: 'crearGrupo',
        message: '¿Quieres crear un grupo?',
        default: false
      },
      {
        type: 'input',
        name: 'nombreGrupo',
        message: 'Introduce el nombre del grupo',
        when: (answers) => answers.crearGrupo
      }

    ]) .then((answers) => {
      if (answers.crearGrupo) {
        const id = this.groupCollection.getNextId();
        const newGroup =new Grupo(id ,  answers.nombreGrupo, [], [[0,0],[0,0],[0,0]], [], [], [], false, idUsuario);
        // newGroup.setCreadorSystem(false);
        // newGroup.setidCreator(Number(answers.idUser));
        this.groupCollection.addGroup(newGroup);
        console.log("Grupo creado");
      }
      MenuPrincipal();   
    });
  }
    /**
     * Metodo para borrar un grupo
     * @returns void
     */
    ereaseGroup(idUsuario: number) {

      const prompt = inquirer.createPromptModule();
      prompt([
        {
          type: 'confirm',
          name: 'borrarGrupo',
          message: '¿Quieres borrar un grupo?',
          default: false
        },

        {
          type: 'input',
          name: 'idGrupo',
          message: 'Introduce el id del grupo a borrar',
          when: (answers) => answers.borrarGrupo
        }

      ]) .then((answers) => {

        if (answers.borrarGrupo) {
          if (this.groupCollection.getGroup(Number(answers.idGrupo)) !== undefined) {
            if (this.groupCollection.getGroup(Number(answers.idGrupo))?.CreatorSystem === false && this.groupCollection.getGroup(Number(answers.idGrupo))?.IdCreator === idUsuario) {
              this.groupCollection.ereaseGroup(Number(answers.idGrupo));
              console.log("Grupo borrado");
            } else {
              console.log("No puedes borrar el grupo, no eres el creador");
            }
          } else {
            console.log("El grupo no existe");
          }
          MenuPrincipal();
        }
      });
    }
  }

