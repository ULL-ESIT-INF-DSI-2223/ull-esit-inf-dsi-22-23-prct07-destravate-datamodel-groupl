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
import { Grupo } from '../group/classGroup';
import { jsonGroupCollection } from '../group/jsongroup-collection';
import { MenuPrincipal } from './mainPrompt';

/**
 * Función que muestra un menú de opciones para ordenar los grupos
 * @param groupCollection Colección de grupos
 * @returns
 *  
 * - Ordenar por nombre
 * - Ordenar por KM
 * - Ordenar por miembros
 * 
 */
const prompt = inquirer.createPromptModule();


/**
 * Funcion que permite ordenar los grupos de la base de datos
 * Alfabéticamente por nombre del grupo, ascendente y descendente.
 * Por cantidad de KM que se deben realizar, ascendente y descendente.
 * Por la cantidad de usuarios que lo están realizando, ascendente y descendente.
 * @param groupCollection Colección de grupos
 * @returns
 */
export function InquirerGroups(groupCollection: jsonGroupCollection) {

  prompt([
    {
      type: 'list',
      name: 'opciones',
      message: '¿Qué quieres hacer?',
      choices: ['Ordenar por nombre', 'Ordenar por KM', 'Ordenar por miembros']
    },

    {
      type: 'list',
      name: 'orden',
      message: '¿Qué orden quieres?',
      choices: ['Ascendente', 'Descendente']
    },

    { 
      type: 'list',
      name: 'frecuencia',
      message: '¿Qué frecuencia de kilometraje deseas ordenar?',
      choices: ['Semanal', 'Mensual', 'Anual'],
      when: (answers) => answers.opciones === 'Ordenar por KM'
    }

  ]).then((answers) => {

    if (answers.opciones === 'Ordenar por nombre') {

      if ( answers.orden === 'Ascendente') {
          console.table(groupCollection.orderGroupASC());
      }
      else {
          console.table(groupCollection.orderGroupDESC());
      }
    }

    else if ( answers.opciones === 'Ordenar por KM') {
      if ( answers.frecuencia === 'Ascendente') {
        if ( answers.frecuencia === 'Semanal') {

          console.table(groupCollection.orderGroupByKMWeekASC());
        }
        else if ( answers.frecuencia === 'Mensual') {
          console.table(groupCollection.orderGroupByKMMonthASC());
        }
        else  {
          console.table(groupCollection.orderGroupByKMYearASC);
        }
      }
      else {
        if ( answers.frecuencia === 'Semanal') {
          console.table(groupCollection.orderGroupByKMWeekDESC());
        }
        else if ( answers.frecuencia === 'Mensual') {
          console.table(groupCollection.orderGroupByKMMonthDESC());
        }
        else {
          console.table(groupCollection.orderGroupByKMYearDESC());
        }
      }
    }

    else {
      if ( answers.orden === 'Ascendente') {
        console.table(groupCollection.orderGroupByNumberMembersASC());
      }
      else {
        console.table(groupCollection.orderGroupByNumberMembersDESC());
      }
    }
    MenuPrincipal();
  });
}

/**
 * Función que permite añadir un grupo a la base de datos
 * @param groupCollection Colección de grupos
 * @returns
 */
  export function AñadirParticipanteGrupo(groupCollection: jsonGroupCollection){
    const prompt = inquirer.createPromptModule();
    prompt([
      {
        type: 'input',
        name: 'nombre',
        message: '¿Cuál es el ID del grupo al que quieres añadir un participante?',
      },
      {
        type: 'input',
        name: 'participante',
        message: '¿Cuál es el ID del participante?',
      }
    ]).then((answers) => {
        if (this.groupCollection.getGroup(Number(answers.nombre)) !== undefined) {
          const grupo = groupCollection.getGroup(Number(answers.nombre)) as Grupo;
          const participantes = grupo?.ParticipantesGrupo;
          participantes?.push(Number(answers.participante));
          grupo?.setParticipantesGrupo(participantes);
          this.groupCollection.changeGroupById(Number(answers.nombre), grupo);
        }        
      console.log('Participante añadido correctamente');
      MenuPrincipal();
    }
    );
  }


