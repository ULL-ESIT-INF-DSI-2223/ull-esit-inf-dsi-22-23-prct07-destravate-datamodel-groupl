import * as inquirer from 'inquirer';
import { Retos } from '../retos/classRetos';
import { jsonRetosCollection } from '../retos/retos-collection';

//funcion prueba inquirer
const prompt = inquirer.createPromptModule();



// funcion que permite 
/*Retos:
Alfabéticamente por nombre del reto, ascendente y descendente.
Por cantidad de KM que se deben realizar, ascendente y descendente.
Por la cantidad de usuarios que lo están realizando, ascendente y descendente.
*/

export function pruebaInquirerRetos(restosCollection: jsonRetosCollection) {

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
    
  });
}


const jsonretos1 = new jsonRetosCollection([]);
const reto1 = new Retos(jsonretos1.getNextId(), "Reto 7", [1,2,3,4,5,6,7,8,9,10], "bicicleta", 10, [1,2,3,4,5,6,7,8,9,10]);
jsonretos1.addReto(reto1);
const reto2 = new Retos(jsonretos1.getNextId(), "Reto 8", [1,2,3,4,5,6,7,8,9,10], "bicicleta", 10, [1,2,3,4,5,6,7,8,9,10]);
jsonretos1.addReto(reto2);

pruebaInquirerRetos(jsonretos1);


