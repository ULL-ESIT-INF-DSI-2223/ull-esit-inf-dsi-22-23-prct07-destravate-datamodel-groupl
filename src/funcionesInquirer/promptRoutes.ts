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
import { jsonRouteCollection } from '../route/jsonroute-collection';

const prompt = inquirer.createPromptModule();


export function InquirerRoutes(routeCollection: jsonRouteCollection) {
  prompt([
    {
      type: 'list',
      name: 'option',
      message: '¿Qué desea hacer?',
      choices: [ 'Ordenar por nombre', 'Ordenar por número de usuarios', 'Ordenar por la longitud de ruta', 'Ordenar por la calificación media', 'Ordenar por actividad (correr o ciclismo)' ]
    },

    {
      type: 'list',
      name: 'order',
      message: '¿Qué orden desea?',
      choices: [ 'Ascendente', 'Descendente' ],
    }
  ]).then((answers) => {
    if (answers.option === 'Ordenar por nombre') {
      if (answers.order === 'Ascendente') {
        console.table(routeCollection.orderRoutesAlfabeticallAsc());
      }
      else {
        console.table(routeCollection.orderRoutesAlfabeticallDesc());
      }
    } else if (answers.option === 'Ordenar por número de usuarios') {
      if (answers.order === 'Ascendente') {
        console.table(routeCollection.amountUserAsc());
      } else {
        console.table(routeCollection.amountUserDesc());
      }
    } else if (answers.option === 'Ordenar por la longitud de ruta') {
      if (answers.order === 'Ascendente') {
        console.table(routeCollection.orderRoutesByLengthAsc());
      } else {
        console.table(routeCollection.orderRoutesByLengthDesc());
      }
    } else if (answers.option === 'Ordenar por la calificación media') {
      if (answers.order === 'Ascendente') {
        console.table(routeCollection.orderRoutesByCalificationAsc());
      } else {
        console.table(routeCollection.orderRoutesByCalificationDesc());
      }
    } else if (answers.option === 'Ordenar por actividad (correr o ciclismo)') {
      if (answers.order === 'Ascendente') {
        console.table(routeCollection.orderRoutesByActivityAsc());
      } else {
        console.table(routeCollection.orderRoutesByActivityDesc());
      }
    }
  });
}