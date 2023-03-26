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
import { MenuPrincipal } from './mainPrompt';
import { jsonRetosCollection } from '../retos/jsonretos-collection';
import { jsonRouteCollection } from '../route/jsonroute-collection';
import { stats } from '../user/classUser';

//funcion prueba inquirer
const prompt = inquirer.createPromptModule();

/**
 * Función que muestra un menú con las opciones de los usuarios
 * @param userCollection
 * @returns
 * Usuarios:
 * Alfabéticamente por nombre del usuario, ascendente y descendente.
 * Por cantidad de KM realizados (ascendente y descendentemente) en función de la semana actual, mes o año.
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
    MenuPrincipal();
  });
}

export function InquirerAddFriend(userCollection: jsonUserCollection, idUser: number) {
  const prompt = inquirer.createPromptModule();

  prompt([
    {
      type: 'input',
      name: 'idAmigo',
      message: '¿Cuál es el id de tu amigo?'
    }
  ]).then((answer) => {
    if (userCollection.getUser(Number(answer.idAmigo)) !== undefined) {
      const usuario = userCollection.getUser(idUser);
      usuario?.setFriend(Number(answer.idAmigo));
      userCollection.changeUserByID(idUser, usuario as User);
      console.log('Amigo añadido correctamente');
    } else {
      console.log('El usuario no existe');
    }
    MenuPrincipal();
  });
}

export function InquirerAddChallenge(userCollection: jsonUserCollection, idUser: number) {
  const prompt = inquirer.createPromptModule();
  const jsonretos = new jsonRetosCollection();
  prompt([
    {
      type: 'input',
      name: 'idReto',
      message: '¿Cuál es el id del reto?'
    }
  ]).then((answer) => {
    if (jsonretos.getReto(Number(answer.idReto)) !== undefined) {
      const usuario = userCollection.getUser(idUser);
      usuario?.setChallenge(Number(answer.idReto));
      userCollection.changeUserByID(idUser, usuario as User)
      console.log('Reto añadido correctamente');
    } else {
      console.log('El reto no existe');
    }
    MenuPrincipal();
  });
}

export function InquirerAddFavoriteRoute(userCollection: jsonUserCollection, idUser: number) {
  const prompt = inquirer.createPromptModule();
  const jsonrutas = new jsonRouteCollection();
  prompt([
    {
      type: 'input',
      name: 'idRuta',
      message: '¿Cuál es el id de la ruta?'
    }
  ]).then((answer) => {
    if(jsonrutas.getRoute(Number(answer.idRuta)) !== undefined) {
      const usuario = userCollection.getUser(idUser);
      usuario?.setFavouriteRoute(Number(answer.idRuta));
      userCollection.changeUserByID(idUser, usuario as User)
      console.log('Ruta añadida correctamente');
    } else {
      console.log('La ruta no existe');
    }
    MenuPrincipal();
  });
}

export function InquirerUpdateStatistic(userCollection: jsonUserCollection, idUser: number) {
  const prompt = inquirer.createPromptModule();

    prompt([
      {
        type: 'confirm',
        name: 'añadeEstadisticas',
        message: '¿Quieres actualizar tus estadísticas?',
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
      const usuario = userCollection.getUser(idUser);
      usuario?.setStats([[kmSemanales, desnivelSemanales], [kmMensuales, desnivelMensuales], [kmAnuales, desnivelAnuales]]);
      userCollection.changeUserByID(idUser, usuario as User)
      console.log('Estadísticas actualizadas correctamente');
      MenuPrincipal();
    })
}

export function InquirerAddHistoricRoute(userCollection: jsonUserCollection, idUser: number) {
  const prompt = inquirer.createPromptModule();
  const jsonrutas = new jsonRouteCollection();
  prompt([
    {
      type: 'input',
      name: 'idRuta',
      message: '¿Cuales son los id de las rutas a añadir hoy, separados por comas?'
    }
  ]).then((answer) => {
    const ids: number[] = answer.idRuta.split(',').map(Number);
    const usuario = userCollection.getUser(idUser);
    const rutasAux: number[] = [];
    ids.forEach((id) => {
      if(jsonrutas.getRoute(id) !== undefined) {
        // fecha de hoy en formato dd-mm-yy
        const fecha = new Date().toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: '2-digit'});
        rutasAux.push(id);
        usuario?.setHistoric([fecha, rutasAux]);
        userCollection.changeUserByID(idUser, usuario as User)
      } else {
        console.log(`La ruta ${id} no existe`);
      }
    });
    MenuPrincipal();
  });
}

export function InquirerDeleteUser(userCollection: jsonUserCollection, idUser: number) {
  const prompt = inquirer.createPromptModule();
  prompt([
    {
      type: 'confirm',
      name: 'borrarCuenta',
      message: '¿Estás seguro de que quieres borrar tu cuenta de usuario?',
      default: false
    }
  ]).then((answer) => {
    if(answer.borrarCuenta) {
      userCollection.eraseUser(idUser);
      console.log('Cuenta borrada correctamente');
      MenuPrincipal();
    } else {
      console.log('Cuenta no borrada');
      MenuPrincipal();
    }
  });
}


export function InquirerGestionarCuenta (userCollection: jsonUserCollection, idUser: number) {
  const prompt = inquirer.createPromptModule();

  prompt([
    {
      type: 'list',
      name: 'opciones',
      message: '¿Qué quieres hacer sobre tu cuenta de usuario?',
      choices: ['Añadir amigo', 'Añadir reto', 'Añadir ruta favorita', 'Actualizar estadística', 'Añadir ruta al histórico', 'Eliminar cuenta mi usuario']
    }
  ]).then((respuesta) => {
    switch (respuesta.opciones) {
      case 'Añadir amigo':
        InquirerAddFriend(userCollection, idUser);
        break;
      case 'Añadir reto':
        InquirerAddChallenge(userCollection, idUser);
        break;
      case 'Añadir ruta favorita':
        InquirerAddFavoriteRoute(userCollection, idUser);
        break;
      case 'Actualizar estadística':
        InquirerUpdateStatistic(userCollection, idUser);
        break;
      case 'Añadir rutas al histórico de hoy':
        InquirerAddHistoricRoute(userCollection, idUser);
        break;
      case 'Eliminar cuenta mi usuario':
        InquirerDeleteUser(userCollection, idUser);
        break;
    }
  }
  );
}


