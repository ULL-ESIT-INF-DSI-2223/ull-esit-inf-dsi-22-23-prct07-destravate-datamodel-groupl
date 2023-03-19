import * as inquirer from 'inquirer';
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";


import { Grupo } from './group/classGroup';
import { Retos } from './retos/classRetos';
import { User } from './user/classUser';
import { Route } from './route/classRoute';


//funcion prueba inquirer
const prompt = inquirer.createPromptModule();

function pruebaInquirerUser() {

    prompt([
        {
            type: 'input',
            name: 'nombre',
            message: '¿Cual es tu nombre?'
        },
        {
            type: 'input',
            name: 'edad',
            message: '¿Cual es tu edad?'
        }
    ]).then((respuesta) => {
        console.log(respuesta.nombre);
        console.log(respuesta.edad);
    });
}

function pruebarInquirerRetos() {

    prompt([

        {
            type: 'input',
            name: 'nombre',
            message: '¿Cual es el nombre del reto?'

        },

        {

            type: 'input',
            name: 'descripcion',
            message: '¿Cual es la descripcion del reto?'

        }

    ]).then((respuesta) => {
        console.log(respuesta.nombre);
        console.log(respuesta.descripcion);
    });

}

//funcion que usa las dos funciones anteriores

function pruebaInquirer() {

   // que desea hacer 1 add user 2 add reto 3 add ruta 4 ver ruta 5 ver reto 6 ver user

    prompt([
        {
            type: 'list',
            name: 'opcion',
            message: '¿Que desea hacer?',
            choices: ['Añadir usuario', 'Añadir reto']
        }
    ]).then((respuesta) => {
        if (respuesta.opcion == 'Añadir usuario') {
            pruebaInquirerUser();
        } else if (respuesta.opcion == 'Añadir reto') {
            pruebarInquirerRetos();
        }
    });
}



pruebaInquirer();
