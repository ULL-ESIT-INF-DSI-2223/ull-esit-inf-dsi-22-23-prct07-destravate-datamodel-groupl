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


const prompt = inquirer.createPromptModule();


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
  });
}