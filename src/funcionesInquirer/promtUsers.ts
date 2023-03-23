import * as inquirer from 'inquirer';
import { User } from '../user/classUser';
import { jsonUserCollection } from '../user/user-collection';

//funcion prueba inquirer
const prompt = inquirer.createPromptModule();


// funcion que permite 
/*
Usuarios:
Alfabéticamente por nombre del usuario, ascendente y descendente.
Por cantidad de KM realizados (ascendente y descendentemente) en función de la semana actual, mes o año.
*/

export function pruebaInquirerUsers(userCollection: jsonUserCollection) {

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
        console.log(userCollection.orderUsersAlfabeticallAsc());
      }
      else {
        console.log(userCollection.orderUsersAlfabeticallDesc());
      }
    }
    else {
      if (respuesta.tipo == 'Ascendente') {

        if (respuesta.frecuencia == 'Semanal' ){

          console.log(userCollection.orderUsersByKMDayAsc());


        }
        else if (respuesta.frecuencia == 'Mensual' ){

          console.log(userCollection.orderUsersByKMMonthAsc());

        }

        else {
          console.log(userCollection.orderUsersByKMYearAsc());
        }
      }
      else {
        if (respuesta.frecuencia == 'Semanal' ){
          console.log(userCollection.orderUsersByKMDayDesc());
        }
        else if (respuesta.frecuencia == 'Mensual' ){

          console.log(userCollection.orderUsersByKMMonthDesc());

        }

        else {
          console.log(userCollection.orderUsersByKMYearDesc());
        }
      }
    }
  });
}


const jsonusercollection1 = new jsonUserCollection([]);

const user1 = new User( jsonusercollection1.getNextId(), "Ismael", ["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

jsonusercollection1.addUser(user1);

const user2 = new User( jsonusercollection1.getNextId(), "Alberto",["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

jsonusercollection1.addUser(user2);

const user3 = new User( jsonusercollection1.getNextId(), "Alberto", ["bicicleta"], [], [], [[1,2], [1,2],[1,2]], [], [], []);

jsonusercollection1.addUser(user3);

pruebaInquirerUsers(jsonusercollection1);