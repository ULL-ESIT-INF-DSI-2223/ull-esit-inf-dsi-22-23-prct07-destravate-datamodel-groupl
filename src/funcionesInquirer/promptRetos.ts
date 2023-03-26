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
import { jsonRouteCollection } from '../route/jsonroute-collection';
import { jsonUserCollection } from '../user/jsonuser-collection';
import { Actividad } from '../route/classRoute';

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

/**
 *  Funcion que añade una ruta a un reto
 * @param retosCollection  Coleccion de retos
 */
export function añadirRutasAlReto(retosCollection: jsonRetosCollection) {
  const routeCollection = new jsonRouteCollection();
  prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Introduce el id del reto al que quieres añadir una ruta'
    },
    {
      type: 'input',
      name: 'idRuta',
      message: 'Introduce el id de la ruta que quieres añadir'
    }
  ]).then((respuesta) => {

    if(retosCollection.getReto(Number(respuesta.id)) != undefined){
      const reto = retosCollection.getReto(Number(respuesta.id));
      if(routeCollection.getRoute(Number(respuesta.idRuta)) !== undefined){
        reto?.getRutasRetos().push(Number(respuesta.idRuta));
        retosCollection.addExistedRetos(reto as Retos);
        console.log("Ruta añadida correctamente");
      } else {
        console.log("La ruta no existe");
      }
    } else {
      console.log("El reto no existe");
    }
    MenuPrincipal();
  });
}

/**
 *  Funcion que añade un participante a un reto
 * @param retosCollection  Coleccion de retos
 */
export function AñadirParticipanteReto(retosCollection: jsonRetosCollection) {
  const userCollection = new jsonUserCollection();
  prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Introduce el id del reto al que quieres añadir un participante'
    },
    {
      type: 'input',
      name: 'idUsuario',
      message: 'Introduce el id del usuario que quieres añadir'
    }
  ]).then((respuesta) => {

    if(retosCollection.getReto(Number(respuesta.id)) != undefined){
      const reto = retosCollection.getReto(Number(respuesta.id));
      if (userCollection.getUser(Number(respuesta.idUsuario)) !== undefined) {
        reto?.getIdUsersRetos().push(Number(respuesta.idUsuario));
        retosCollection.addExistedRetos(reto as Retos);
        console.log("Usuario añadido correctamente");
      } else {
        console.log("El usuario no existe");
      }
    } else {
      console.log("El reto no existe");
    }
    MenuPrincipal();
  });
}

export function actualizarKmTotales(retosCollection: jsonRetosCollection) {
  const prompt = inquirer.createPromptModule();
  prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Introduce el id del reto al que quieres añadir un participante'
    },
    {
      type: 'input',
      name: 'km',
      message: 'Introduce los km totales'
    }
  ]).then((respuesta) => {

    if(retosCollection.getReto(respuesta.id) != undefined){
      const reto = retosCollection.getReto(Number(respuesta.id));
      reto?.setKmTotales(Number(respuesta.km));
      retosCollection.addExistedRetos(reto as Retos);
      console.log("Km totales actualizados correctamente");
    } else {
      console.log("El reto no existe");
    }
    MenuPrincipal();
  });
}

export function InquirerGestionarRetos (retosCollection: jsonRetosCollection) {

  prompt([
    {
      type: 'list',
      name: 'gestion',
      message: '¿Que quieres hacer?',
      choices: ['Añadir ruta al reto', 'Añadir participante al reto', 'Actualizar km totales']
    }
  ]).then((respuesta) => {

    if (respuesta.gestion == 'Añadir ruta al reto') {
      añadirRutasAlReto(retosCollection);
    } else if (respuesta.gestion == 'Actualizar km totales') {
      actualizarKmTotales(retosCollection);
    }
    else {
      AñadirParticipanteReto(retosCollection);
    }
    
  });

}

export function InquirerEliminarReto(retosCollection: jsonRetosCollection) {
  prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Introduce el id del reto que quieres eliminar'
    }
  ]).then((respuesta) => {

    if(retosCollection.getReto(Number(respuesta.id)) !== undefined){
      retosCollection.eraseReto(Number(respuesta.id));
      console.log("Reto eliminado correctamente");
    } else {
      console.log("El reto no existe");
    }
    MenuPrincipal();
  });
}

export function InquirerCrearReto(retosCollection: jsonRetosCollection) {
  const usuarioCollection = new jsonUserCollection();
  const routeCollection = new jsonRouteCollection();
  prompt([
    {
      type: 'input',
      name: 'nombre',
      message: 'Introduce el nombre del reto'
    },
    {
      type: 'input',
      name: 'routes',
      message: 'Introduce las rutas del reto (sepáralas con comas)'
    },
    {
      type: 'checkbox',
      name: 'tipo',
      message: 'Introduce el tipo de reto (una opción)',
      choices: ['Bicicleta', 'Ciclismo']
    },
    {
      type: 'input',
      name: 'km',
      message: 'Introduce los km totales'
    },
    {
      type: 'input',
      name: 'idUsuarios',
      message: 'Introduce los usuarios que participan en el reto (sepáralos con comas)'
    }
  ]).then((respuesta) => {
    let actividad: Actividad;
    if (respuesta.tipo == 'Bicicleta') {
      actividad = "bicicleta"
    } else {
      actividad = "correr"
    }
    
    const usuarios: number[] = respuesta.idUsuarios.split(',').map(Number);
    const usuariosResultantes: number[] = [];
    usuarios.forEach((usuario) => {
      if (usuarioCollection.getUser(usuario) !== undefined) {
        usuariosResultantes.push(usuario);
      } else {
        console.log("El usuario con id " + usuario + " no existe");
      }
    });
    const rutas: number[] = respuesta.routes.split(',').map(Number);
    const rutasResultantes: number[] = [];
    rutas.forEach((ruta) => {
      if (routeCollection.getRoute(ruta) !== undefined) {
        rutasResultantes.push(ruta);
      } else {
        console.log("La ruta con id " + ruta + " no existe");
      }
    });
    retosCollection.addReto(new Retos(retosCollection.getNextId(),respuesta.nombre, rutasResultantes, actividad, Number(respuesta.km), usuariosResultantes));
    console.log("Reto creado correctamente");
    MenuPrincipal();
  });
}




