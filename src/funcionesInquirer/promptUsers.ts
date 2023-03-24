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
import { User } from '../user/classUser';
import { jsonUserCollection } from '../user/jsonuser-collection';

//funcion prueba inquirer
const prompt = inquirer.createPromptModule();


// funcion que permite 
/*
Usuarios:
Alfabéticamente por nombre del usuario, ascendente y descendente.
Por cantidad de KM realizados (ascendente y descendentemente) en función de la semana actual, mes o año.
*/

export function InquirerUsers(userCollection: jsonUserCollection) {

  prompt([
    {
      type: 'list',
      name: 'orden',
      message: '¿Como quieres ordenar los usuarios?',
      choices: ['Alfabeticamente', 'Por KM']
      
    },

    {
      type: 'list',
      name: 'tipo',
      message: '¿Como quieres ordenar los usuarios?',
      choices: ['Ascendente', 'Descendente']
    },

    { 
      type: 'list',
      name: 'frecuencia',
      message: '¿Qué frecuencia de kilometraje deseas ordenar?',
      choices: ['Semanal', 'Mensual', 'Anual'],
      when: (respuestas) => respuestas.orden === 'Por KM'
    }




  ]).then((respuesta) => {

    if (respuesta.orden == 'Alfabeticamente') {
      if (respuesta.tipo == 'Ascendente') {
        console.table(userCollection.orderUsersAlfabeticallAsc());
      }
      else {
        console.table(userCollection.orderUsersAlfabeticallDesc());
      }
    }
    else {
      if (respuesta.tipo == 'Ascendente') {

        if (respuesta.frecuencia == 'Semanal' ){

          console.table(userCollection.orderUsersByKMDayAsc());


        }
        else if (respuesta.frecuencia == 'Mensual' ){

          console.table(userCollection.orderUsersByKMMonthAsc());

        }

        else {
          console.table(userCollection.orderUsersByKMYearAsc());
        }
      }
      else {
        if (respuesta.frecuencia == 'Semanal' ){
          console.table(userCollection.orderUsersByKMDayDesc());
        }
        else if (respuesta.frecuencia == 'Mensual' ){

          console.table(userCollection.orderUsersByKMMonthDesc());

        }

        else {
          console.table(userCollection.orderUsersByKMYearDesc());
        }
      }
    }
  });
}


// const jsonusercollection1 = new jsonUserCollection([]);

// const user1 = new User( jsonusercollection1.getNextId(), "Ismael", ["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

// jsonusercollection1.addUser(user1);

// const user2 = new User( jsonusercollection1.getNextId(), "Alberto",["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

// jsonusercollection1.addUser(user2);

// const user3 = new User( jsonusercollection1.getNextId(), "Alberto", ["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

// jsonusercollection1.addUser(user3);

// pruebaInquirerUsers(jsonusercollection1);