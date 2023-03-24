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


export class Gestor {
  private groupCollection: jsonGroupCollection;
  private routeCollection: jsonRouteCollection;
  private retosCollection: jsonRetosCollection;
  private userCollection: jsonUserCollection;
  private prompt = inquirer.createPromptModule();

  constructor() {
    this.groupCollection = new jsonGroupCollection();
    this.routeCollection = new jsonRouteCollection();
    this.retosCollection = new jsonRetosCollection();
    this.userCollection =  new jsonUserCollection();
  }

  
  registrarSistema() {
    let nombreUsuario = "";
    const actividadesUsuario = [];
    let amigos = [];
    let estadisticas: stats = [[0,0],[0,0],[0,0]];

    this.prompt([
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
      nombreUsuario = answers.nombre;
      console.log(nombreUsuario);
      console.log(answers.actividades);
      if (answers.actividades.includes('Bicicleta') && answers.actividades.includes('Correr')) {
        actividadesUsuario.push("bicicleta");
        actividadesUsuario.push("correr");
      } else if (answers.actividades.includes('Bicicleta')) {
        actividadesUsuario.push("bicicleta");
      } else {
        actividadesUsuario.push("correr");
      }
      amigos = this.añadirAmigosUsuario();
      estadisticas = this.añadirEstadisticasUsuario();
    })

    
  }

  añadirAmigosUsuario() {
    //const prompt = inquirer.createPromptModule();
    let amigos: number[] = [];
  
    this.prompt([
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

        this.prompt([
          {
            type: 'input',
            name: 'idAmigos',
            message: 'Introduce el id de cada uno de tus amigos separado por comas',
          }
        ]).then((answers) => {
          amigos = answers.idAmigos.split(",").map(Number);
        }
        )

      }
    })

    return amigos;
  }

  añadirEstadisticasUsuario() {
    //const prompt = inquirer.createPromptModule();
    let estadisticas: stats = [[0,0],[0,0],[0,0]];

    this.prompt([
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
    return estadisticas;
  }


}

const gestor = new Gestor();
gestor.registrarSistema();