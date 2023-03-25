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
import { InquirerGroups } from './promptGroup';
import { InquirerRoutes } from './promptRoutes';
import { InquirerRetos } from './promptRetos';
import { InquirerUsers } from './promptUsers';
import { jsonGroupCollection } from '../group/jsongroup-collection';
import { jsonRouteCollection } from '../route/jsonroute-collection';
import { jsonRetosCollection } from '../retos/jsonretos-collection';
import { jsonUserCollection } from '../user/jsonuser-collection';
import { Gestor } from '../gestor/gestor';
import { InquirerGestionarCuenta } from './promptUsers';

const jsonuser = new jsonUserCollection();
const jsongroup = new jsonGroupCollection();
const jsonroute = new jsonRouteCollection();
const jsonretos = new jsonRetosCollection();
const gestor = new Gestor();

// Información del usuario actual
let idUsuarioActual = -1;
//let nombreUsuarioActual = "";

export function MenuPrincipal() {
  const prompt = inquirer.createPromptModule();
  prompt([
    {
      type: 'list',
      name: 'menu',
      message: '¿Qué desea hacer?',
      choices: ['Gestionar grupos', 'Gestionar rutas', 'Gestionar retos', 'Gestionar usuarios', 'Gestionar mi cuenta', 'Salir'],
    } 
  ]).then ((answers) => {
    if (answers.menu === 'Gestionar grupos') {
      prompt([
        {
          type: 'list',
          name: 'menu',
          message: '¿Qué desea hacer?',
          choices: ['Crear grupo', 'Eliminar grupo', 'Unirse a un grupo', 'Visualizar los grupos', 'Salir'],
        }
      ]).then ((answers) => {
        if (answers.menu === 'Crear grupo') {
          gestor.crearGrupo(idUsuarioActual);
        }
        else if (answers.menu === 'Unirse a un grupo') {
          gestor.unirseGrupo(idUsuarioActual);

        }
        else if (answers.menu === 'Visualizar los grupos') {
          gestor.visualizarGrupos();
        } else if (answers.menu === 'Eliminar grupo') {
          gestor.ereaseGroup(idUsuarioActual);
        }
        else {
          process.exit(0);
        }
      });
    }
    else if (answers.menu === 'Gestionar rutas') {
      InquirerRoutes(jsonroute);
    }
    else if (answers.menu === 'Gestionar retos') {
      InquirerRetos(jsonretos);
    } else if (answers.menu === 'Gestionar usuarios') {
      InquirerUsers(jsonuser);
    } else if (answers.menu === 'Gestionar mi cuenta') {
      InquirerGestionarCuenta(jsonuser,idUsuarioActual);
    }
    else {
      process.exit(0);
    }
  });
}

export function InquirerInicioSistema() {
  const prompt = inquirer.createPromptModule();
  prompt([
    {
      type: 'input',
      name: 'nombre',
      message: 'Introduce tu nombre',
    },
    {
      type: 'id',
      name: 'id',
      message: 'Introduce tu id',
    }
  ]).then ((answers) => {
    if (jsonuser.getUser(Number(answers.id)) !== undefined) {
      if (jsonuser.getUser(Number(answers.id))?.userName === answers.nombre) {
        idUsuarioActual = Number(answers.id);
        //nombreUsuarioActual = answers.nombre;
        console.log('Bienvenido ' + answers.nombre + ' al sistema' + ' ID: ' + answers.id);
        MenuPrincipal();
      } else {
        console.log('El nombre introducido no es correcto');
        InquirerInicioSistema();
      }
    } else {
      console.log('El id del usuario no existe');
      InquirerInicioSistema();
    }
  });
}



export function mainPrompt() {
  const prompt = inquirer.createPromptModule();
  prompt([
    {
      type: 'list',
      name: 'inicio',
      message: 'Bienvenido al sistema. ¿Qué desea hacer?',
      choices: ['Iniciar sesión', 'Registrarse en el sistema','Salir'],
    } 
  ]).then ((answers) => {
    if (answers.inicio === 'Iniciar sesión') {
      InquirerInicioSistema();
    }
    else if (answers.inicio === 'Registrarse en el sistema') {
      gestor.registrarSistema();
    }
    else {
      process.exit(0);
    }
  });

}

mainPrompt();

