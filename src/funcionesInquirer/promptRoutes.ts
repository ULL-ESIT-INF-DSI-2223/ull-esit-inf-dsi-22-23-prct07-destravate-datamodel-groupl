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
import { MenuPrincipal } from './mainPrompt';
import { Actividad } from '../route/classRoute';
import { Route } from '../route/classRoute';
import { jsonUserCollection } from '../user/jsonuser-collection';
import {User} from '../user/classUser';

const prompt = inquirer.createPromptModule();

/**
 *  Función que muestra las opciones de ordenación de rutas
 * @param routeCollection Colección de rutas
 * @returns void
 * 
 * - 1.0.0: Versión inicial
 * - ordenar por nombre
 * - ordenar por número de usuarios
 * - ordenar por la longitud de ruta
 * - ordenar por la calificación media
 * - ordenar por actividad (correr o ciclismo)
 * 
 */
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
    MenuPrincipal();
  });
}

export function InquirerCrearRuta(routeCollection: jsonRouteCollection) {
  const prompt = inquirer.createPromptModule();
  const userCollection = new jsonUserCollection();
  prompt([
    {
      type: 'input',
      name: 'name',
      message: '¿Cuál es el nombre de la ruta?'
    },
    {
      type: 'input',
      name: 'geoInicio',
      message: '¿Cuál es la geolocalización de inicio de la ruta? Formato latitud,longitud'
    },
    {
      type: 'input',
      name: 'geoFin',
      message: '¿Cuál es la geolocalización de fin de la ruta? Formato latitud, longitud'
    },
    {
      type: 'input',
      name: 'length',
      message: '¿Cuál es la longitud de la ruta?'
    },
    {
      type: 'input',
      name: 'desnivel',
      message: '¿Cuál es el desnivel de la ruta?'
    },
    {
      type: 'input',
      name: 'calificacion',
      message: '¿Cuál es la calificación de la ruta?'
    },
    {
      type: 'input',
      name: 'usuarios',
      message: '¿Cuál son los id de los usuarios de la ruta? (Separados por comas)'
    },
    { 
      type: 'checkbox',
      name: 'actividades',
      message: '¿Qué actividad se realiza en la ruta?',
      choices: [ 'Bicicleta', 'Correr' ]
    }
  ]).then((answers) => {
    let actividadesRuta: Actividad;
    if (answers.actividades.includes('Bicicleta')) {
      actividadesRuta = "bicicleta";
    } else {
      actividadesRuta = "correr";
    }
    const geoInicio = answers.geoInicio.split(',').map(Number);
    const geoFin = answers.geoFin.split(',').map(Number);
    const idUsuario: number[] = answers.usuarios.split(',').map(Number);
    const idUsuarioResultantes: number[] = [];
    idUsuario.forEach((id) => {
      if (userCollection.getUser(id) !== undefined) {
        idUsuarioResultantes.push(id);
      } else {
        console.log(`El usuario con id ${id} no existe`);
      }
    });
    routeCollection.addRoute(new Route(routeCollection.getNextId(),answers.name, geoInicio, geoFin, Number(answers.length), Number(answers.desnivel), idUsuarioResultantes, actividadesRuta, Number(answers.calificacion)));
    console.log('Ruta creada correctamente');
    MenuPrincipal();
  });
}

export function InquirerEliminarRuta(routeCollection: jsonRouteCollection) {
  const prompt = inquirer.createPromptModule();
  prompt([
    {
      type: 'input',
      name: 'id',
      message: '¿Cuál es el id de la ruta que desea eliminar?'
    }
  ]).then((answers) => {
    if(routeCollection.getRoute(Number(answers.id)) !== undefined) {
      routeCollection.ereaseRoute(Number(answers.id));
      console.log('Ruta eliminada correctamente');
    } else {
      console.log('La ruta no existe');
    }
    MenuPrincipal();
  });

}

export function InquirerModificarRuta(rutaCollection: jsonRouteCollection) {
  const prompt = inquirer.createPromptModule();
  const userCollection = new jsonUserCollection();
  prompt([
    {
      type: 'input',
      name: 'idRuta',
      message: '¿Cuál es el id de la ruta que quieres modificar?'
    }
  ]).then((answer) => {
    if (rutaCollection.getRoute(Number(answer.idRuta)) !== undefined) {
      const ruta = rutaCollection.getRoute(Number(answer.idRuta));
      prompt([
        {
          type: 'list',
          name: 'opciones',
          message: '¿Qué quieres modificar?',
          choices: ['Nombre', 'GeoInicio', 'GeoFin', 'Longitud', 'Desnivel', 'Añadir usuario', 'Actualizar Calificación']
        }
      ]).then((respuesta) => {
        if (respuesta.opciones === 'Nombre') {
          prompt([
            {
              type: 'input',
              name: 'nombre',
              message: '¿Cuál es el nuevo nombre de la ruta?'
            }
          ]).then((answer) => {
            ruta?.setNombreRuta(answer.nombre);
            rutaCollection.changeRouteById(Number(answer.idRuta), ruta as Route);
            console.log('Ruta modificada correctamente');
            MenuPrincipal();
          });
        } else if (respuesta.opciones === 'GeoInicio') {
          prompt([
            {
              type: 'input',
              name: 'geoInicio',
              message: '¿Cuál es la nueva geolocalización de inicio de la ruta? Formato latitud,longitud'
            }
          ]).then((answer) => {
            const geoInicio = answer.geoInicio.split(',').map(Number);
            ruta?.setGeoInicio(geoInicio);
            rutaCollection.changeRouteById(Number(answer.idRuta), ruta as Route);
            console.log('Ruta modificada correctamente');
            MenuPrincipal();
          }
          );
        } else if (respuesta.opciones === 'GeoFin') {
          prompt([
            {
              type: 'input',
              name: 'geoFin',
              message: '¿Cuál es la nueva geolocalización de fin de la ruta? Formato latitud,longitud'
            }
          ]).then((answer) => {
            const geoFin = answer.geoFin.split(',').map(Number);
            ruta?.setGeoFin(geoFin);
            rutaCollection.changeRouteById(Number(answer.idRuta), ruta as Route);
            console.log('Ruta modificada correctamente');
            MenuPrincipal();
          }
          );
        }
        else if (respuesta.opciones === 'Longitud') {
          prompt([
            {
              type: 'input',
              name: 'longitud',
              message: '¿Cuál es la nueva longitud de la ruta?'
            }
          ]).then((answer) => {
            ruta?.setLongitudRutaKm(Number(answer.longitud));
            rutaCollection.changeRouteById(Number(answer.idRuta), ruta as Route);
            console.log('Ruta modificada correctamente');
            MenuPrincipal();
          }
          );
        }
        else if (respuesta.opciones === 'Desnivel') {
          prompt([
            {
              type: 'input',
              name: 'desnivel',
              message: '¿Cuál es el nuevo desnivel de la ruta?'
            }
          ]).then((answer) => {
            ruta?.setDesnivelMedio(Number(answer.desnivel));
            rutaCollection.changeRouteById(Number(answer.idRuta), ruta as Route);
            console.log('Ruta modificada correctamente');
            MenuPrincipal();
          }
          );
        }
        else if (respuesta.opciones === 'Añadir usuario') {
          prompt([
            {
              type: 'input',
              name: 'idUsuario',
              message: '¿Cuál es el id del usuario que quieres añadir?'
            }
          ]).then((answer) => {
            if (userCollection.getUser(Number(answer.idUsuario)) !== undefined) {
              ruta?.setIdUsuarioRuta(Number(answer.idUsuario));
              rutaCollection.changeRouteById(Number(answer.idRuta), ruta as Route);
              console.log('Ruta modificada correctamente');
            } else {
              console.log('El usuario no existe');
            }
            MenuPrincipal();
          }
          );
        }
        else if (respuesta.opciones === 'Actualizar Calificación') {
          prompt([
            {
              type: 'input',
              name: 'calificacion',
              message: '¿Cuál es la nueva calificación de la ruta?'
            }
          ]).then((answer) => {
            ruta?.setCalificacionMediaRuta(Number(answer.calificacion));
            rutaCollection.changeRouteById(Number(answer.idRuta), ruta as Route);
            console.log('Ruta modificada correctamente');
            MenuPrincipal();
          }
          );
        }
      });

    } else {
      console.log('La ruta no existe');
    }
  });
}
