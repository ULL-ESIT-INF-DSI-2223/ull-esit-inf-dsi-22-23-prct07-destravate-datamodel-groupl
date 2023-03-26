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
import { jsonUserCollection } from '../user/jsonuser-collection';
import { jsonRouteCollection } from '../route/jsonroute-collection';

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
 * Función que permite añadir un usuario a un grupo de la base de datos
 * @param groupCollection Colección de grupos
 * @returns
 */
  export function InquirerAñadirParticipanteGrupo(groupCollection: jsonGroupCollection){
    const prompt = inquirer.createPromptModule();
    const userCollection = new jsonUserCollection();
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
        if (groupCollection.getGroup(Number(answers.nombre)) !== undefined) {
          const grupo = groupCollection.getGroup(Number(answers.nombre)) as Grupo;
          if (userCollection.getUser(Number(answers.participante)) !== undefined) {
            const participantes = grupo?.ParticipantesGrupo;
            participantes?.push(Number(answers.participante));
            grupo?.setParticipantesGrupo(participantes);
            groupCollection.changeGroupById(Number(answers.nombre), grupo);
            console.log('Participante añadido correctamente');
          } else {
            console.log('No existe el participante');
          }
        } else {
          console.log('No existe el grupo');
        } 
      MenuPrincipal();
    }
    );
  }

  export function InquirerActualizarEstadistica(groupCollection: jsonGroupCollection){
    const prompt = inquirer.createPromptModule();

    prompt([
      {
        type: 'confirm',
        name: 'añadeEstadisticas',
        message: '¿Quieres actualizar las estadísticas de un grupo?',
        default: false
      },
      {
        type: 'input',
        name: 'idGrupo',
        message: '¿Cuál es el ID del grupo al que quieres añadir un participante?',
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
      if (groupCollection.getGroup(Number(answers.idGrupo)) !== undefined) {
        const kmSemanales = answers.kmSemanales;
        const desnivelSemanales = answers.desnivelSemanales;
        const kmMensuales = answers.kmMensuales;
        const desnivelMensuales = answers.desnivelMensuales;
        const kmAnuales = answers.kmAnuales;
        const desnivelAnuales = answers.desnivelAnuales;
        const grupo = groupCollection.getGroup(Number(answers.idGrupo)) as Grupo;
        grupo?.setEstadisticaGrupalEntrenamiento([[kmSemanales, desnivelSemanales], [kmMensuales, desnivelMensuales], [kmAnuales, desnivelAnuales]]);
        groupCollection.changeGroupById(Number(answers.idGrupo), grupo as Grupo);
        console.log('Estadísticas actualizadas correctamente');
      } else  {
        console.log('No existe el grupo');
      }
      MenuPrincipal();
    })
  }

  export function InquirerActualizarClasificacion(groupCollection: jsonGroupCollection){
    const prompt = inquirer.createPromptModule();
    prompt([
      {
        type: 'input',
        name: 'idGrupo',
        message: '¿Cuál es el ID del grupo del que quiere actualizar la clasificación?',
      },
      {
        type: 'input',
        name: 'clasificacion',
        message: 'Introduce la clasificación, separando los ID de los participantes por comas',
      }
    ]).then((answers) => {
      if (groupCollection.getGroup(Number(answers.idGrupo)) !== undefined) {
        const grupo = groupCollection.getGroup(Number(answers.idGrupo)) as Grupo;
        const clasificacion: number[] = answers.clasificacion.split(',').map(Number);
        // comprobación de que los participantes de la clasificación pertenecen al grupo
        const participantes = grupo?.ParticipantesGrupo;
        const clasificacionResultante: number[] = [];
        clasificacion.forEach((id) => {
          if (participantes?.includes(id)) {
            clasificacionResultante.push(id);
          }
          else {
            console.log('El participante ' + id + ' no pertenece al grupo');
          }
        });
        grupo?.setClasificacionUsuario(clasificacionResultante);
        groupCollection.changeGroupById(Number(answers.idGrupo), grupo as Grupo);
        console.log('Clasificación actualizada correctamente');
      }
      else {
        console.log('No existe el grupo');
      }
      MenuPrincipal();
    })

  }

  export function InquirerAñadirRutaFavoritaGrupo(groupCollection: jsonGroupCollection){
    const prompt = inquirer.createPromptModule();
    const rutaCollection = new jsonRouteCollection();
    prompt([
      {
        type: 'input',
        name: 'idGrupo',
        message: '¿Cuál es el ID del grupo al que quieres añadir una ruta favorita?',
      },
      {
        type: 'input',
        name: 'idRuta',
        message: '¿Cuál es el ID de la ruta que quieres añadir?',
      }
    ]).then((answers) => {
      if (groupCollection.getGroup(Number(answers.idGrupo)) !== undefined) {
        const grupo = groupCollection.getGroup(Number(answers.idGrupo)) as Grupo;
        const rutasFavoritas = grupo?.IdRutasFavoritas;
        if (rutaCollection.getRoute(Number(answers.idRuta)) !== undefined) {
          rutasFavoritas?.push(Number(answers.idRuta));
          grupo?.setIdRutasFavoritas(rutasFavoritas);
          groupCollection.changeGroupById(Number(answers.idGrupo), grupo as Grupo);
          console.log('Ruta añadida correctamente');
        } else {
          console.log('No existe la ruta');
        }
      }
      else {
        console.log('No existe el grupo');
      }
      MenuPrincipal();
    })
  }

  export function InquiererAñadirHistorico(groupCollection: jsonGroupCollection){
    const prompt = inquirer.createPromptModule();
    const rutaCollection = new jsonRouteCollection();
    prompt([
      {
        type: 'input',
        name: 'idGrupo',
        message: '¿Cuál es el ID del grupo al que quieres añadir una ruta al histórico?',
      },
      {
        type: 'input',
        name: 'idRuta',
        message: '¿Cuál es el ID de las rutas que quieres añadir separados por comas?',
      }
    ]).then((answers) => {
      if (groupCollection.getGroup(Number(answers.idGrupo)) !== undefined) {
        const grupo = groupCollection.getGroup(Number(answers.idGrupo)) as Grupo;
        const rutas: number[] = answers.idRuta.split(',').map(Number);
        const rutasResultantes: number[] = [];
        rutas.forEach((id) => {
          if (rutaCollection.getRoute(id) !== undefined) {
            rutasResultantes.push(id);
          }
          else {
            console.log('No existe la ruta ' + id);
          }
        }
        );
        const fecha = new Date().toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: '2-digit'});
        grupo?.setHistorico([fecha, rutasResultantes]);
        groupCollection.changeGroupById(Number(answers.idGrupo), grupo as Grupo);
        console.log('Rutas añadidas correctamente');
      }
      else {
        console.log('No existe el grupo');
      }

      MenuPrincipal();
    })
  }

  export function InquirerModificarGrupo(groupCollection: jsonGroupCollection){
    const prompt = inquirer.createPromptModule();
    prompt([
      {
        type: 'list',
        name: 'modificar',
        message: '¿Qué quieres modificar?',
        choices: ['Añadir participante', 'Actualizar estadística', 'Actualizar clasificación', 'Añadir ruta favorita', 'Añadir ruta al histórico de hoy']
      },
      
    ]).then((answers) => {
      if (answers.modificar === 'Añadir participante') {
        InquirerAñadirParticipanteGrupo(groupCollection);
      }
      else if (answers.modificar === 'Actualizar estadística') {
        InquirerActualizarEstadistica(groupCollection);
      }
      else if (answers.modificar === 'Actualizar clasificación') {
        InquirerActualizarClasificacion(groupCollection);
      }
      else if (answers.modificar === 'Añadir ruta favorita') {
        InquirerAñadirRutaFavoritaGrupo(groupCollection);
      }
      else if (answers.modificar === 'Añadir ruta al histórico de hoy') {
        InquiererAñadirHistorico(groupCollection);
      }
    }

    );

  }


