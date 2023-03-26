# Práctica 7  - DeStravaTe

## Introducción

En esta práctica se he desarrollado la primera práctica en grupo de la asignatura de DSI. El objetivo de la práctica es crear un sistema de información que permita almacenar registros de actividades deportivas. Para ello utilizaremos typescript, así como los modulos Inquirer para la interacción con el usuario y LowDB para la gestión de la base de datos.

## Dispositivo de trabajo  
Para el desarrollo de esta práctica hemos utilizado un sistema operativo Ubuntu por lo cual algunos de los pasos realizados solo estarán disponibles para los usuarios que utilicen este sistema operativo.

## Organización del trabajo y estructura del proyecto

En cuanto a la estructra de directorios, en la raíz del proyecto se encuentra el archivo README.md que contiene la información de la práctica. 
En la carpeta src se encuentra el código fuente de la práctica.
  Dentro encontramos los siguientes archivos:
 * funcionesIquirer.ts -> contiene las funciones que se encargan de la interacción con el usuario
 * gestor -> contiene la clase gestor que se encarga de la gestión del sistema
 * group -> contiene la clase group, la clase groupCollection y la gestion de la base de datos de la collection JsonGroupCollection
 * route -> contiene la clase route, la clase routeCollection y la gestion de la base de datos de la collection JsonRouteCollection
 * user -> contiene la clase user, la clase userCollection y la gestion de la base de datos de la collection JsonUserCollection
 * retos -> contiene la clase retos, la clase retosCollection y la gestion de la base de datos de la collection JsonRetosCollection
En la carpeta db se encuentran las bases de datos de la práctica. 
  Dentro encontramos los siguientes archivos:
  * JSONGroupCollection.json -> contiene la base de datos de los grupos
  * JSONRouteCollection.json -> contiene la base de datos de las rutas
  * JSONUserCollection.json -> contiene la base de datos de los usuarios
  * JSONRetosCollection.json -> contiene la base de datos de los retos
En la carpeta test se encuentra el código de los test de la práctica.

## Requisitos del sistema de información

El sistema tendrá que poder almacenar 4 grandes tipos de datos:

  * Usuarios
  * Retos
  * Grupos
  * Rutas

Para lograr esto lo más óptimo que hemos considerado es crear para cada tipo de dato una clase que contenga los atributos necesarios para almacenar la información de cada uno de ellos. A continuación se detallan cada una de las clases:

### Usuario

En cuanto a los usuarios, se ha decidido almacenar la información de cada uno de ellos en una clase que contenga los siguientes atributos:

  * id -> identificador del usuario
  * userName -> nombre del usuario
  * activities -> array de actividades del usuario
  * friends -> array de ids de los amigos del usuario
  * groups -> array de ids de los grupos a los que pertenece el usuario
  * stats -> estadísticas de cantidad de km y desnivel total por día, mes y año actual
  * favouriteRoutes -> array de ids de las rutas favoritas del usuario
  * challenges -> array de ids de los retos a los que pertenece el usuario
  * historic -> histórico de rutas de un día

La clase queda de la siguiente manera:

```typescript
/**
 * Clase para representar a un usuario del sistema 
 */
export class User {
  private id_: number;  
  private userName_: string;
  private activities_: Actividad[] = [];
  private friends_: number[] = [];
  private groups_: number[] = [];
  private stats_: stats; 
  private favouriteRoutes_: number[] = [];
  private challenges_: number[] = [];
  private historic_: historic[] = [];
}
```

El esquema básico de la clase usuario es el que podemos ver arriba, no obstante en la clase disponemos para cada atributo de un getter y un setter para poder acceder a ellos y modificarlos. Esto nos permite tener un control sobre los datos que se almacenan en la base de datos.

También se ha decidido crear un tipo para las estadísticas de cantidad de km y desnivel total por día, mes y año actual. Este tipo se ha definido como sigue:

```typescript
/**
 * Tipo que permite determinar las estadísticas de cantidad de km y desnivel total por día, mes y año actual
 * [km, desnivel]
 */
export type stats = [[number, number], [number, number], [number, number]];
```
La lógica de este tipo es la siguiente:

  * [[km, desnivel], [km, desnivel], [km, desnivel]] -> [[km, desnivel] del día actual, [km, desnivel] del mes actual, [km, desnivel] del año actual]

Además, se ha decidido crear un tipo para el histórico de rutas de un día. Este tipo se ha definido como sigue:

```typescript
/**
 * Tipo para guardar el histórico de rutas de un día
 */
export type historic = [string, number[]];

```
La lógica de este tipo es la siguiente:

  * [fecha, [ids de las rutas]] -> [fecha en la que se han realizado las rutas, [ids de las rutas]]



### Reto

Para los retos se ha decidido almacenar la información de cada uno de ellos en una clase que contenga los siguientes atributos:

  * id -> identificador del reto
  * nombre -> nombre del reto
  * rutasRetos -> array de ids de las rutas que forman el reto
  * tipoActividad -> tipo de actividad del reto
  * kmTotales -> kilometros totales del reto
  * idUsersRetos -> array de ids de los usuarios que participan en el reto

La clase queda de la siguiente manera:
```typescript


export class Retos{

  private id: number;
  private nombre: string;
  private rutasRetos: number[];
  private tipoActividad: Actividad;
  private kmTotales: number;
  private idUsersRetos: number[];
}

```
El esquema básico de la clase reto es el que podemos ver arriba, no obstante en la clase disponemos para cada atributo de un getter y un setter para poder acceder a ellos y modificarlos. Esto nos permite tener un control sobre los datos que se almacenan en la base de datos.


### Grupo

Para los grupos se ha decidido almacenar la información de cada uno de ellos en una clase que contenga los siguientes atributos:

  * id -> identificador del grupo
  * nombre -> nombre del grupo
  * participantesGrupo -> array de ids de los usuarios que pertenecen al grupo
  * estadisticaGrupalEntrenamiento -> array de estadisticas de entrenamiento de los usuarios del grupo
  * clasificacionUsuario -> array de ids de los usuarios del grupo ordenados por su clasificación
  * idRutasFavorita -> array de ids de las rutas favoritas de los usuarios del grupo
  * todasRutasUsuarios -> array de ids de todas las rutas de los usuarios del grupo
  * creator -> booleano que indica si el usuario que crea el grupo es el creador del grupo
  * idCreator -> id del usuario que crea el grupo
  * historico_ -> Almacena el historial de rutas por días del grupo

La clase queda de la siguiente manera:

```typescript
export class Grupo {

 private id_: number;
 private nombre_: string;
 private participantesGrupo_: number[];
 private estadisticaGrupalEntrenamiento_: [EstadisticasEntrenamiento,EstadisticasEntrenamiento,EstadisticasEntrenamiento];
 private clasificacionUsuario_: number[];
 private idRutasFavorita_: number[];
 private todasRutasUsuarios_: number[];
 private creator_ = true;
 private idCreator_ = 0;
 private historico_: historic[] = [];
}

```
El esquema básico de la clase grupo es el que podemos ver arriba, no obstante en la clase disponemos para cada atributo de un getter y un setter para poder acceder a ellos y modificarlos. Esto nos permite tener un control sobre los datos que se almacenan en la base de datos.

Además, se ha decidido crear un tipo para las estadísticas de entrenamiento de los usuarios del grupo. Este tipo se ha definido como sigue:

```typescript

export type EstadisticasEntrenamiento = [number,number];

```
La lógica de este tipo es la siguiente:

  * [km, desnivel] -> [km totales, desnivel total]

  

### Ruta

Para las rutas se hemos decidido almacenar la información de cada una de ellas en una clase que contenga los siguientes atributos:

  * idRuta -> identificador de la ruta
  * nombreRuta -> nombre de la ruta
  * geoInicio -> coordenadas de inicio de la ruta
  * geoFin -> coordenadas de fin de la ruta
  * longitudRutaKm -> longitud de la ruta en km
  * desnivelMedio -> desnivel medio de la ruta
  * idUsuariosRuta -> array de ids de los usuarios que han realizado la ruta
  * tipoActividad -> tipo de actividad de la ruta
  * calificacionMediaRuta -> calificación media de la ruta

La clase queda de la siguiente manera:

```typescript

/**
 * Clase que representa una ruta
 */
export class Route {
  constructor(
    private idRuta_: number,
    private nombreRuta_: string,
    private geoInicio_: GeoLocalization,
    private geoFin_: GeoLocalization,
    private longitudRutaKm_: number,
    private desnivelMedio_: number,
    private idUsuariosRuta_: number[],
    private tipoActividad_: Actividad,
    private calificacionMediaRuta_: number
  ) {

  }
}
```

El esquema básico de la clase ruta es el que podemos ver arriba, no obstante en la clase disponemos para cada atributo de un getter y un setter para poder acceder a ellos y modificarlos. Esto nos permite tener un control sobre los datos que se almacenan en la base de datos.

En esta clase se ha decidido crear un tipo para las coordenadas de inicio y fin de la ruta. Este tipo se ha definido como sigue:
 
```typescript

/**
 * Tipo para representar una coordenada
 */
export type GeoLocalization = [number, number];
  
  ```
La lógica de este tipo es la siguiente:
  
    * [latitud, longitud] -> [latitud, longitud]


También se ha decidido crear un tipo para el tipo de actividad de la ruta. Este tipo se ha definido como sigue:
```typescript
/**
 * Tipo que permite determina el tipo de actividad
 */
export type Actividad = "bicicleta" | "correr";

```
La lógica de este tipo es la siguiente:

  * "bicicleta" | "correr" -> "bicicleta" o "correr"



## Funcionalidades del sistema de información

Una vez definidos los tipos de datos que se van a almacenar en la base de datos, se ha procedido a definir las funcionalidades que se van a implementar en el sistema de información. Estas funcionalidades se han dividido en tres grandes grupos:

  * Funcionalidades de usuario
  * Funcionalidades de grupo
  * Funcionalidades de retos  

Para poder implementar las funcionalidades de cada clase se ha decidido crear una clase para cada una de ellas. Estas clases se han definido de la siguiente manera:

  * UsuarioCollection
  * GrupoCollection
  * RetoCollection
  * RutaCollection

Cada una de ellas nos permite crear sus propios metodos para gestionar el conjunto de objetos de cada una de las clases.

### Funcionalidades de usuario

Para las funcionalidades de usuario se ha decidido implementar los siguientes métodos:

```typescript

export class userCollection {
  protected nextId = 1;
  protected userMap = new Map<number, User>();
  constructor(userItems: User[] = []) {
    userItems.forEach(item => this.userMap.set(item.Id, item));
    this.nextId = userItems.length + 1;
  }

  /**
   *  Devuelve el siguiente id
   * @returns {number} nextId
   * 
   */
  addUser(user: User) {
    this.userMap.set(this.nextId++, user);
  }

  /**
   *  Añade un usuario a la colección
   * @param {User} user
   * @returns {void}
   */
  getUser(id: number) {
    return this.userMap.get(id);
  }

  /**
   *  Devuelve un usuario de la colección
   * @param {number} id
   */
  getAllUsers() {
    return Array.from(this.userMap.values());
  }

  /**
   * Devuelve todos los usuarios de la colección
   * @returns {User[]}
   */
  orderUsersAlfabeticallAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.userName.localeCompare(b.userName));
    return users;
  }

  /**
   *  Devuelve un usuario de la colección
   * @param {number} id
   */
  getAllUsers() {
    return Array.from(this.userMap.values());
  }

  eraseUser(id: number) {
    this.userMap.delete(id);
  }

  changeUserByID(id: number, user: User) {
    this.userMap.set(id, user);
  }

  /**
   * Ordena los usuarios alfabeticamente de forma ascendente
   * @returns {User[]}
   */
  orderUsersAlfabeticallDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.userName.localeCompare(b.userName));
    users.reverse();
    return users;
  }

  /**
   * Ordena los usuarios alfabeticamente de forma descendente
   * @returns {User[]}
   * 
   */
  orderUsersByKMDayAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[0][0] - b.stats[0][0]);
    return users;
  }

  /**
   * Ordena los usuarios por kilometros recorridos en un día de forma ascendente
   * @returns {User[]}
   */
  orderUsersByKMDayDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[0][0] - b.stats[0][0]);
    users.reverse();
    return users;
  }

  /**
   * Ordena los usuarios por kilometros recorridos en un día de forma descendente
   * @returns {User[]}
   */
  orderUsersByKMMonthAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[1][0] - b.stats[1][0]);
    return users;
  }

  /**
   * Ordena los usuarios por kilometros recorridos en un mes de forma ascendente
   * @returns {User[]}
   * 
   */
  orderUsersByKMMonthDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[1][0] - b.stats[1][0]);
    users.reverse();
    return users;
  }

  /**
   * Ordena los usuarios por kilometros recorridos en un mes de forma descendente
   * @returns {User[]}
   * 
   */
  orderUsersByKMYearAsc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[2][0] - b.stats[2][0]);
    return users;
  }

  /**
   * Ordena los usuarios por kilometros recorridos en un año de forma ascendente
   * @returns {User[]}
   */
  orderUsersByKMYearDesc() {
    const users = Array.from(this.userMap.values());
    users.sort((a, b) => a.stats[2][0] - b.stats[2][0]);
    users.reverse();
    return users;
  }

}
```

La lógica de estos métodos es la siguiente:

  * addUser -> añade un objeto a la base de datos
  * getUser -> obtiene un objeto de la base de datos
  * getAllUsers -> obtiene todos los objetos de la base de datos
  * eraseUser -> permite borrar un usuario de la colección
  * changeUserById -> permite reemplazar a un usuario actualizando su información
  * orderUsersAlfabeticallAsc -> ordena los usuarios alfabeticamente de forma ascendente
  * orderUsersAlfabeticallDesc -> ordena los usuarios alfabeticamente de forma descendente
  * orderUsersByKMDayAsc -> ordena los usuarios por kilometros recorridos en un día de forma ascendente
  * orderUsersByKMDayDesc -> ordena los usuarios por kilometros recorridos en un día de forma descendente
  * orderUsersByKMMonthAsc -> ordena los usuarios por kilometros recorridos en un mes de forma ascendente
  * orderUsersByKMMonthDesc -> ordena los usuarios por kilometros recorridos en un mes de forma descendente
  * orderUsersByKMYearAsc -> ordena los usuarios por kilometros recorridos en un año de forma ascendente
  * orderUsersByKMYearDesc -> ordena los usuarios por kilometros recorridos en un año de forma descendente

### Funcionalidades de grupo

Para las funcionalidades de grupo se ha decidido implementar los siguientes métodos:

```typescript

export class groupCollection {
  protected nextId = 1;
  protected groupMap = new Map<number, Grupo>();
  constructor(groupItems: Grupo[] = []) {
    groupItems.forEach(item => this.groupMap.set(item.Id, item));
    this.nextId = groupItems.length + 1;
  }

  /**
   * 
   * @param group  Grupo a añadir
   */
  addGroup(group: Grupo): void {
    this.groupMap.set(this.nextId++, group);
  }

  /**
   * 
   * @param group Grupo a añadir si ya existe
   */
  addExistedGroup(group: Grupo): void {
    this.groupMap.set(group.Id, group);
  }

  /**
   * 
   * @param id Id del grupo a borrar
   */
  ereaseGroup(id: number): void {
    this.groupMap.delete(id);
  }

  /**
   * 
   * @param id Id del grupo a cambiar
   * @param group  Grupo nuevo
   */
  changeGroupByID(id: number, group: Grupo): void {
    this.groupMap.set(id, group);
  }

  /**
   * 
   * @param id Id del grupo a buscar
   * @returns Grupo buscado
   */
  getGroup(id: number): Grupo | undefined {
    return this.groupMap.get(id);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.Id - b.Id);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupDESC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => b.Id - a.Id);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByKMWeekASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.EstadisticaGrupalEntrenamiento[0][0] - b.EstadisticaGrupalEntrenamiento[0][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByKMMonthASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.EstadisticaGrupalEntrenamiento[1][0] - b.EstadisticaGrupalEntrenamiento[1][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByKMYearASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.EstadisticaGrupalEntrenamiento[2][0] - b.EstadisticaGrupalEntrenamiento[2][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByKMWeekDESC(): Grupo[] {

    return Array.from(this.groupMap.values()).sort((a, b) => b.EstadisticaGrupalEntrenamiento[0][0] - a.EstadisticaGrupalEntrenamiento[0][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   * 
   */
  orderGroupByKMMonthDESC(): Grupo[] {

    return Array.from(this.groupMap.values()).sort((a, b) => b.EstadisticaGrupalEntrenamiento[1][0] - a.EstadisticaGrupalEntrenamiento[1][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByKMYearDESC(): Grupo[] {

    return Array.from(this.groupMap.values()).sort((a, b) => b.EstadisticaGrupalEntrenamiento[2][0] - a.EstadisticaGrupalEntrenamiento[2][0]);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByNumberMembersASC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => a.ParticipantesGrupo.length- b.ParticipantesGrupo.length);
  }

  /**
   * 
   * @returns Devuelve todos los grupos
   */
  orderGroupByNumberMembersDESC(): Grupo[] {
    return Array.from(this.groupMap.values()).sort((a, b) => b.ParticipantesGrupo.length - a.ParticipantesGrupo.length);
  }

}

```

La lógica de estos métodos es la siguiente:

  * addGroup -> añade un objeto a la base de datos
  * getGroup -> obtiene un objeto de la base de datos
  * orderGroupASC -> ordena los grupos por id de forma ascendente
  * orderGroupDESC -> ordena los grupos por id de forma descendente
  * orderGroupByKMWeekASC -> ordena los grupos por kilometros recorridos en una semana de forma ascendente
  * orderGroupByKMWeekDESC -> ordena los grupos por kilometros recorridos en una semana de forma descendente
  * orderGroupByKMMonthASC -> ordena los grupos por kilometros recorridos en un mes de forma ascendente
  * orderGroupByKMMonthDESC -> ordena los grupos por kilometros recorridos en un mes de forma descendente
  * orderGroupByKMYearASC -> ordena los grupos por kilometros recorridos en un año de forma ascendente
  * orderGroupByKMYearDESC -> ordena los grupos por kilometros recorridos en un año de forma descendente
  * orderGroupByNumberMembersASC -> ordena los grupos por número de miembros de forma ascendente
  * orderGroupByNumberMembersDESC -> ordena los grupos por número de miembros de forma descendente
  * ereaseGroup -> elimina un objeto de la base de datos
  * changeGroupByID -> actualiza un objeto de la base de datos
  * addExistedGroup -> añade un objeto a la base de datos

### Funcionalidades de Rutas

Para las funcionalidades de rutas se ha decidido implementar los siguientes métodos:

```typescript
export class routeCollection {
  protected nextId = 1;
  protected routeMap = new Map<number, Route>();
  constructor(routeItems: Route[] = []) {
    routeItems.forEach(item => this.routeMap.set(item.idRuta, item));
    this.nextId = routeItems.length + 1;
  }

  /**
   * @returns the next id to be used
   * 
   */
  addRoute(route: Route) {
    this.routeMap.set(this.nextId++, route);
  }

  /**
   * @returns the next id to be used
   * 
   */
  getRoute(id: number) {
    return this.routeMap.get(id);
  }

  /**
   * @returns the next id to be used
   * 
   */
  getAllRoutes() {
    return Array.from(this.routeMap.values());
  }

  /**
   * @returns the next id to be used
   * 
   */
  orderRoutesAlfabeticallAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.nombreRuta.localeCompare(b.nombreRuta));
    return routes;
    
  }

  /**
   * @returns the next id to be used
   */
  orderRoutesAlfabeticallDesc() {
    const routes = Array.from(this.routeMap.values());
    
    routes.sort((a, b) => a.nombreRuta.localeCompare(b.nombreRuta));
    routes.reverse();
    return routes;
  }

  /**
   * @returns the next id to be used
   * 
   */
  amountUserAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.idUsuariosRuta.length - b.idUsuariosRuta.length);
    return routes;   
  }

  /**
   * @returns the next id to be used
   * 
   */
  amountUserDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.idUsuariosRuta.length - b.idUsuariosRuta.length);
    routes.reverse();
    return routes;
  }
  /**
   * @returns the next id to be used
   */
  orderRoutesByLengthAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.longitudRutaKm - b.longitudRutaKm);
    return routes;
  }
  
  /**
   * @returns the next id to be used
   */
  orderRoutesByLengthDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.longitudRutaKm - b.longitudRutaKm);
    routes.reverse();
    return routes;
  }

  /**
   * @returns the next id to be used
   */
  orderRoutesByCalificationAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.calificacionMediaRuta - b.calificacionMediaRuta);
    return routes;
  }

  /**
   * @returns the next id to be used
   * 
   */
  orderRoutesByCalificationDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.calificacionMediaRuta - b.calificacionMediaRuta);
    routes.reverse();
    return routes;
  }

  /**
   * @returns the next id to be used
   */
  orderRoutesByActivityAsc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.tipoActividad.localeCompare(b.tipoActividad));
    return routes;
  }

  /**
   * @returns the next id to be used
   * 
   */
  orderRoutesByActivityDesc() {
    const routes = Array.from(this.routeMap.values());
    routes.sort((a, b) => a.tipoActividad.localeCompare(b.tipoActividad));
    routes.reverse();
    return routes;
  }
}

```

La lógica de estos métodos es la siguiente:

  * addRoute -> añade un objeto a la base de datos
  * getRoute -> obtiene un objeto de la base de datos
  * getAllRoutes -> obtiene todos los objetos de la base de datos
  * orderRoutesAlfabeticallAsc -> ordena las rutas alfabéticamente de forma ascendente
  * orderRoutesAlfabeticallDesc -> ordena las rutas alfabéticamente de forma descendente
  * amountUserAsc -> ordena las rutas por número de usuarios de forma ascendente
  * amountUserDesc -> ordena las rutas por número de usuarios de forma descendente
  * orderRoutesByLengthAsc -> ordena las rutas por longitud de forma ascendente
  * orderRoutesByLengthDesc -> ordena las rutas por longitud de forma descendente
  * orderRoutesByCalificationAsc -> ordena las rutas por calificación de forma ascendente
  * orderRoutesByCalificationDesc -> ordena las rutas por calificación de forma descendente
  * orderRoutesByActivityAsc -> ordena las rutas por actividad de forma ascendente
  * orderRoutesByActivityDesc -> ordena las rutas por actividad de forma descendente

### Funcionalidades de Retos

Para las funcionalidades de retos se ha decidido implementar los siguientes métodos:

```typescript
export class retosCollection {
  protected nextId = 1;
  protected retosMap = new Map<number, Retos>();
  constructor(retosItems: Retos[] = []) {
    retosItems.forEach(item => this.retosMap.set(item.getId(), item));
    this.nextId = retosItems.length + 1;
  }

  /**
   *  Método que añade un reto a la colección
   * @param {Retos} reto - Reto a añadir
   * @returns {void} 
   * 
   */
  addRetos(reto: Retos) {
    this.retosMap.set(this.nextId++, reto);
  }

  /**
   *  Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   * 
   */
  getRetos(id: number) {
    return this.retosMap.get(id);
  }

  /**
   *  Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   */
  orderAlfabeticallRetosAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    return retos;
    
  }

  /**
   * Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   */
  orderAlfabeticallRetosDesc() {
    const retos = Array.from(this.retosMap.values());
    
    retos.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    retos.reverse();
    return retos;
  }

  /**
   * Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   */
  orderDistanceAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getKmTotales() - b.getKmTotales());
    return retos;   
  }

  /**
   * Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   */
  orderDistanceDesc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getKmTotales() - b.getKmTotales());
    retos.reverse();
    return retos;
  }

  /**
   * Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   * 
   */
  orderCantidadUsuariosAsc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getIdUsersRetos().length - b.getIdUsersRetos().length);
    return retos;   
  }

  /**
   * Método que elimina un reto de la colección
   * @param {number} id - Id del reto a eliminar
   * @returns {void}
   */
  orderCantidadUsuariosDesc() {
    const retos = Array.from(this.retosMap.values());
    retos.sort((a, b) => a.getIdUsersRetos().length - b.getIdUsersRetos().length);
    retos.reverse();
    return retos;
  }
}
```
La lógica de estos métodos es la siguiente:

  * addRetos -> añade un objeto a la base de datos
  * getRetos -> obtiene un objeto de la base de datos
  * orderAlfabeticallRetosAsc -> ordena los retos alfabéticamente de forma ascendente
  * orderAlfabeticallRetosDesc -> ordena los retos alfabéticamente de forma descendente
  * orderDistanceAsc -> ordena los retos por distancia de forma ascendente
  * orderDistanceDesc -> ordena los retos por distancia de forma descendente
  * orderCantidadUsuariosAsc -> ordena los retos por número de usuarios de forma ascendente
  * orderCantidadUsuariosDesc -> ordena los retos por número de usuarios de forma descendente

## Gestión de la base de datos persistente con LowDB

Para la gestión de la base de datos vamos a utilizar el modulo LowDB el cual nos pertime en un fichero JSon local a nuestro proyecto almacenar las distintas colecciones de objetos que vamos a utilizar en nuestra aplicación. Para logarar esto hemos creado clases a partir de las colecciones de objetos que hemos creado anteriormente, estas clases se encargan de gestionar la base de datos y de realizar las operaciones CRUD sobre la misma. Estas clases son:

  * jsonRouteCollection
  * jsonUserCollection
  * jsonRetosCollection
  * jsonRutasCollection

En cada una de ellas se hace un extend de la clase original que gestiona cada colección de objetos, por ejemplo en la clase jsonRouteCollection se hace un extend de la clase routeCollection, esto nos permite utilizar los métodos de la clase original y añadir los métodos necesarios para la gestión de la base de datos. A continuación se muestra de ejemplo el código de la clase jsonRouteCollection:

```typescript


export class jsonRouteCollection extends routeCollection {

  private database: lowdb.LowdbSync<schemaType>;
  constructor(routeItems: Route[] = []) {
    super(routeItems);
    this.database = lowdb(new FileSync("./db/RouteItems.json"));
    if (this.database.has("routes").value())  { // Si existe la base de datos
      const dbItems = this.database.get("routes").value();
      dbItems.forEach(item => this.routeMap.set(item.idRuta_,
      new Route(item.idRuta_, item.nombreRuta_, item.geoInicio_, item.geoFin_, item.longitudRutaKm_, item.desnivelMedio_, item.idUsuariosRuta_, item.tipoActividad_, item.calificacionMediaRuta_)));
      this.nextId = this.database.get("routes").value().length + 1;
    } else { // No existe la base de datos
        this.database.set("routes", routeItems).write();
        routeItems.forEach(item => this.routeMap.set(item.idRuta, item));
        this.nextId = this.database.get("routes").value().length + 1;
    }
  }

  /**
   * Almacena las tareas en la base de datos
   * @returns void
   * 
   */
  private storeTasks() {
    this.database.set("routes", [...this.routeMap.values()]).write();
  }

  /**
   * Devuelve el siguiente id de la base de datos
   * @returns number
   * 
   */
  getNextId() {
    return this.nextId;
  }
}

```
En el ejemplo he omitido el resto de métodos de la clase para no alargar el documento, pero se puede ver que se hace un extend de la clase original y se añaden los métodos necesarios para la gestión de la base de datos.

Lo importante y principal diferencia con el resto de clases es que en el constructor se realiza la gestión de la base de datos, en este caso se comprueba si existe la base de datos y en caso de que exista se carga en la colección de objetos, en caso contrario se crea la base de datos y se almacenan los objetos que se le pasan al constructor. También se añade un método para obtener el siguiente id de la base de datos, pues este id se utiliza para identificar cada objeto de la colección, esto es debido a que el usuario no es el encargado de autoasignar el id al objeto, sino que es el propio sistema el que se encarga de asignar el id al objeto.

En el resto de clases Json se realiza la misma gestión de la base de datos, es decir, en el constructor se comprueba si existe la base de datos y en caso de que exista se carga en la colección de objetos, en caso contrario se crea la base de datos y se almacenan los objetos que se le pasan al constructor.

Cada fichero Json esta alojado en la carpeta db, en la raíz del proyecto, y se encarga de almacenar los objetos de cada colección de objetos.

## Modulo Inquirer para la gestión de la interfaz de usuario

Llegados a este punto vamos a utilizar el modulo Inquirer para la gestión de la interfaz de usuario, este modulo nos permite crear un menú de opciones para el usuario, en el cual el usuario puede seleccionar una opción y realizar una acción. Para ello vamos a crear una clase que se encargue de gestionar el menú de opciones.

Para esta interfaz grafica vamos a crear diferentes ```Prompts``` para cada una de las opciones del menú, por ejemplo para la gestión avanzada de usuarios hemos creado el siguiente ```Prompt```:

```typescript

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
```
Como podemos ver en el código anterior, se crea un ```Prompt``` con diferentes opciones, en este caso se crea un ```Prompt``` para la gestión avanzada de usuarios, en el cual el usuario puede seleccionar como quiere visualizar los usuarios, si los quiere ordenar , ya sea alfabeticamente o por kilometraje, y en caso de que elija ordenar por kilometraje, puede seleccionar la frecuencia de kilometraje, ya sea semanal, mensual o anual.

Estos pasos los hemos llevado a cabo con cada de las funcionalidades del menú, es decir, para cada una de las opciones del menú se ha creado un ```Prompt``` con las opciones que el usuario puede seleccionar.


## Clase Gestor 

En cuanto a la clase Gestor, se nos ha pedido una clase que se encargue de gestionar  el tratamiento de la información del sistema.

Para ello hemos creado esta clase gestor con cada uno de los requisitos que se nos han pedido:

* Ser capaz de que el usuario pueda registrarse en el sistema. Esto lo hemos realizado a través de un método que se encarga de crear un nuevo usuario y añadirlo a la base de datos, esto también se realiza a través de un ```Prompt``` que se encarga de pedir los datos al usuario y crear el nuevo usuario.

* Visualizar todas las rutas que hay en el sistema. Para ello se ha creado un método que se encarga de mostrar todas las rutas que hay en la base de datos. También se ha creado un prompt para que el usuario pueda seleccionar una ruta y ver los detalles de la ruta.

* Unirse a un grupo existente. Para ello se ha creado un método que se encarga de unir al usuario a un grupo existente, esto se realiza a través de un ```Prompt``` que se encarga de pedir los datos al usuario y unir al usuario al grupo.

* Crear un grupo. Para ello se ha creado un método que se encarga de crear un nuevo grupo, esto se realiza a través de un ```Prompt``` que se encarga de pedir los datos al usuario y crear el nuevo grupo.

* Borra un grupo. Para ello se ha creado un método que se encarga de borrar un grupo que haya sido creado por el usuario, esto se realiza a través de un ```Prompt``` que se encarga de pedir los datos al usuario y borrar el grupo.

* Visualizar los grupos a los que pertenece. Para ello se ha creado un método que se encarga de mostrar los grupos a los que pertenece el usuario, esto se realiza a través de un ```Prompt``` que se encarga de pedir los datos al usuario y mostrar los grupos a los que pertenece.

La clase gestor ha quedado de la siguiente manera:

```typescript
export class Gestor {
  private groupCollection: jsonGroupCollection;
  private routeCollection: jsonRouteCollection;
  private retosCollection: jsonRetosCollection;
  private userCollection: jsonUserCollection;

  constructor() {
    this.groupCollection = new jsonGroupCollection();
    this.routeCollection = new jsonRouteCollection();
    this.retosCollection = new jsonRetosCollection();
    this.userCollection =  new jsonUserCollection();
  }

  // propiedades temporales del usuario
  private nombreUsuario = "";
  private actividadesUsuario: Actividad[] = [];
  private amigos: number[] = [-1];
  private estadisticas: stats = [[0,0],[0,0],[0,0]];

  /**
   * Metodo para registrar un usuario en el sistema
   * @returns 
   */
  registrarSistema() {
    ...
  }

  /**
   * Metodo para añadir amigos a un usuario
   * @returns
   */
  añadirAmigosUsuario() {
    ...
  }

  /**
   * Metodo para añadir estadisticas a un usuario
   */
  añadirEstadisticasUsuario() {
    ...
  }
  
  /**
   * Metodo para mostrar las rutas del sistema
   * @returns 
   */
  mostrarRutas() {
    ...
  }

  /**
   * Metodo para mostrar los grupos del sistema
   * @returns void
   */
  visualizarGrupos() {
    ...
  }

  /**
   * Metodo para crear un grupo
   * @returns void
   */
  crearGrupo(idUsuario: number) {
    ...
  }
    /**
     * Metodo para borrar un grupo
     * @returns void
     */
    ereaseGroup(idUsuario: number) {
      ...
    }
  }
```
## Conclusiones

Para concluír, podemos decir que esta practica ha sido muy util para aprender a utilizar los ```Prompts``` y a utilizar la librería ```Inquirer```, ya que nos ha permitido crear un menú interactivo con el usuario, y que el usuario pueda seleccionar las opciones que desee.

Además, hemos aprendido a utilizar la librería ```Lowdb``` para poder crear una base de datos en formato JSON, y poder guardar los datos de los usuarios, rutas, grupos y retos.

Por último, destacar que hemos reforzado los conocimientos que ya teníamos sobre la programación orientada a objetos, ya que hemos tenido que crear diferentes clases para poder gestionar los datos de los usuarios, rutas, grupos y retos. Además de poder poner en práctica todos los conocimientos que hemos adquirido en la asignatura sobre TypeScript.

## Referencias

* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Lowdb](https://www.npmjs.com/package/lowdb)



