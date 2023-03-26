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
import { InquirerRoutes } from './promptRoutes';
import { InquirerRetos } from './promptRetos';
import { InquirerUsers } from './promptUsers';
import { jsonGroupCollection } from '../group/jsongroup-collection';
import { jsonRouteCollection } from '../route/jsonroute-collection';
import { jsonRetosCollection } from '../retos/jsonretos-collection';
import { jsonUserCollection } from '../user/jsonuser-collection';
import { Gestor } from '../gestor/gestor';
import { InquirerGestionarCuenta } from './promptUsers';
import {InquirerModificarGrupo} from './promptGroup';
import { InquirerCrearRuta } from './promptRoutes';
import { InquirerEliminarRuta } from './promptRoutes';
import { InquirerModificarRuta } from './promptRoutes';
import {InquirerGestionarRetos} from './promptRetos';
import {InquirerEliminarReto} from './promptRetos';
import {InquirerCrearReto} from './promptRetos';

const jsonuser = new jsonUserCollection();
const jsongroup = new jsonGroupCollection();
const jsonroute = new jsonRouteCollection();
const jsonretos = new jsonRetosCollection();
const gestor = new Gestor();

// Id del usuario que ha iniciado sesión
let idUsuarioActual = -1;

/**
 * Función que se utiliza para mostrar el menú principal
 */
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
          choices: ['Crear grupo', 'Eliminar grupo', 'Unirse a un grupo', 'Visualizar los grupos', 'Modificar grupo', 'Salir'],
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
        } else if (answers.menu === 'Modificar grupo') {
          InquirerModificarGrupo(jsongroup);
        }
        else {
          process.exit(0);
        }
      });
    }
    else if (answers.menu === 'Gestionar rutas') {
      prompt([
        {
          type: 'list',
          name: 'menu',
          message: '¿Qué desea hacer?',
          choices: ['Crear ruta', 'Eliminar ruta', 'Visualizar las rutas', 'Modificar ruta', 'Salir'],
        }
      ]).then ((answers) => {
        if (answers.menu === 'Crear ruta') {
          InquirerCrearRuta(jsonroute);
        }
        else if (answers.menu === 'Visualizar las rutas') {
          InquirerRoutes(jsonroute);
        } else if (answers.menu === 'Eliminar ruta') {
          InquirerEliminarRuta(jsonroute);
        } else if (answers.menu === 'Modificar ruta') {
          InquirerModificarRuta(jsonroute);
        }
        else {
          process.exit(0);
        }
      }
      );
    }
    else if (answers.menu === 'Gestionar retos') {
      prompt([
        {
          type: 'list',
          name: 'menu',
          message: '¿Qué desea hacer?',
          choices: ['Crear reto', 'Eliminar reto', 'Modificar reto', 'Visualizar los retos'],
        }
      ]).then ((answers) => {
        if (answers.menu === 'Crear reto') {
          InquirerCrearReto(jsonretos);
        }
        else if (answers.menu === 'Visualizar los retos') {
          InquirerRetos(jsonretos);
        }
        else if (answers.menu === 'Eliminar reto') {
          InquirerEliminarReto(jsonretos);
        } else if (answers.menu === 'Modificar reto') {
          InquirerGestionarRetos(jsonretos);
        }
      }
      );
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

/**
 * Función que se utiliza para iniciar sesión en el sistema
 * @param jsonuser
 */
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


/**
 * Función que inicia el sistema
 */
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
 // Inicio de la aplicación
mainPrompt();

