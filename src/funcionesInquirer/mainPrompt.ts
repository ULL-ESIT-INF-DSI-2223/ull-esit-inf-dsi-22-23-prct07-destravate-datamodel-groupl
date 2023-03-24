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

// const prompt = inquirer.createPromptModule();

// export function mainPrompt() {
//   prompt([
//     {
//       type: 'list',
//       name: 'inicio',
//       message: 'Bievenido al sistema. ¿Qué desea hacer?',
//       choices: ['Iniciar el sistema', 'Registrarse en el sistema','Salir'],
//     } 
//   ]).then ((answers) => {
//     if (answers.inicio === 'Iniciar el sistema') {
//       InquirerInicioSistema();
//     }
//     else if (answers.inicio === 'Registrarse en el sistema') {
      
//     }
//     else {
//       process.exit(0);
//     }
//   }