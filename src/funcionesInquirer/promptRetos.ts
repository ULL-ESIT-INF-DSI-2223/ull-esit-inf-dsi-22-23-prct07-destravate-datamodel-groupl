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
import { Retos } from '../retos/classRetos';
import { jsonRetosCollection } from '../retos/jsonretos-collection';
import { MenuPrincipal } from './mainPrompt';

//funcion prueba inquirer
const prompt = inquirer.createPromptModule();


/**
 * Funcion que permite ordenar los retos de la base de datos
 * Alfabéticamente por nombre del reto, ascendente y descendente.
 * Por cantidad de KM que se deben realizar, ascendente y descendente. 
 * Por la cantidad de usuarios que lo están realizando, ascendente y descendente.
 */


export function InquirerRetos(restosCollection: jsonRetosCollection) {

  prompt([
    {
      type: 'list',
      name: 'orden',
      message: '¿Como quieres ordenar los retos?',
      choices: ['Alfabeticamente', 'Por KM', 'Por usuarios']
    },

    {
      type: 'list',
      name: 'tipo',
      message: '¿Como quieres ordenar los retos?',
      choices: ['Ascendente', 'Descendente']
    }

  ]).then((respuesta) => {

    if (respuesta.orden == 'Alfabeticamente') {
      if (respuesta.tipo == 'Ascendente') {
        console.table(restosCollection.orderAlfabeticallRetosAsc());
      }
      else {
        console.table(restosCollection.orderAlfabeticallRetosDesc());
      }
    }
    else if (respuesta.orden == 'Por KM') {
      if (respuesta.tipo == 'Ascendente') {
        console.table(restosCollection.orderDistanceAsc());
      }
      else {
        console.table(restosCollection.orderDistanceDesc());
      }
    }

    else {
      if (respuesta.tipo == 'Ascendente') {
        console.table(restosCollection.orderCantidadUsuariosAsc());
      }
      else {
        console.table(restosCollection.orderCantidadUsuariosDesc());
      }
    }
    MenuPrincipal();
  });
}




