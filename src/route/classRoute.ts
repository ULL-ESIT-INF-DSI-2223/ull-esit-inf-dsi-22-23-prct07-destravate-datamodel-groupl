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

/**
 * Tipo que permite determina el tipo de actividad
 */
export type Actividad = "bicicleta" | "correr";

/**
 * Tipo para representar una coordenada
 */
export type GeoLocalization = [number, number];

/**
 * Clase que representa una ruta
 */
export class Route {

  /**
   * Constructor de una ruta
   * @param idRuta_ Id único de la ruta
   * @param nombreRuta_ Nombre de la ruta
   * @param geoInicio_ Coordenadas de inicio
   * @param geoFin_ Coordenadas de final
   * @param longitudRutaKm_ Longitud de la ruta en km
   * @param desnivelMedio_ Desnivel medio de la ruta
   * @param idUsuariosRuta_ Id de los usuarios de la ruta
   * @param tipoActividad_ Tipo de actividad que se puede hacer en la ruta
   * @param calificacionMediaRuta_ Calificación media de la ruta 
   */
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

  /**
   * Método para obtener el id de la ruta 
   * @return Id de la ruta 
   */
  get idRuta() {
    return this.idRuta_;
  }

  /**
   * Método que permite obtener el nombre de la ruta 
   * @return Nombre de la ruta 
   */
  get nombreRuta() {
    return this.nombreRuta_;
  }

  /**
   * Método para obtener la geolocalización del inicio de la ruta
   * @return Coordenadas del inicio de la ruta
   */
  get geoInicio() {
    return this.geoInicio_;
  }

  /**
   * Método para obtener la geolocalización del final de la ruta
   * @return Coordenadas del final de la ruta
   */
  get geoFin() {
    return this.geoFin_;
  }

  /**
   * Método para obtener la longitud de la ruta en km
   * @return Longitud de la ruta 
   */
  get longitudRutaKm() {
    return this.longitudRutaKm_;
  }

  /**
   * Método para obtener el desnivel medio de la ruta 
   * @return Desnivel medio de la ruta 
   */
  get desnivelMedio() {
    return this.desnivelMedio_;
  }

  /**
   * Método para obtener todos los ids de los usuarios que han realizado una ruta
   * @return ids de los usuarios de la ruta
   */
  get idUsuariosRuta() {
    return this.idUsuariosRuta_;
  }

  /**
   * Método para obtener el tipo de actividad para el que se prevé la ruta
   * @return Tipo de actividad 'bicicleta' o 'correr'
   */
  get tipoActividad() {
    return this.tipoActividad_;
  }

  /**
   * Método para obtener la calificación media de 
   */
  get calificacionMediaRuta() {
    return this.calificacionMediaRuta_;
  }

  /**
   * Método para establecer el id de la ruta
   * @param nombreRuta Nombre de la ruta
   */
  setNombreRuta(nombreRuta: string) {
    this.nombreRuta_ = nombreRuta;
  }

  /**
   * Método para establecer la geolocalización del inicio de la ruta
   * @param geoInicio Coordenadas del inicio de la ruta
   */
  setGeoInicio(geoInicio: GeoLocalization) {
    this.geoInicio_ = geoInicio;
  }

  /**
   * Método para establecer la geolocalización del final de la ruta
   * @param geoFin Coordenadas del final de la ruta
   */
  setGeoFin(geoFin: GeoLocalization) {
    this.geoFin_ = geoFin;
  }

  /**
   * Método para establecer la longitud de la ruta en km
   * @param longitudRutaKm Longitud de la ruta en km
   */
  setLongitudRutaKm(longitudRutaKm: number) {
    this.longitudRutaKm_ = longitudRutaKm;
  }

  /**
   * Método para establecer el desnivel medio de la ruta
   * @param desnivelMedio Desnivel medio de la ruta
   */
  setDesnivelMedio(desnivelMedio: number) {
    this.desnivelMedio_ = desnivelMedio;
  }

  /**
   * Método para establecer el id de los usuarios de la ruta
   * @param idUsuariosRuta Id de los usuarios de la ruta
   */
  setIdUsuarioRuta(idUsuariosRuta: number) {
    this.idUsuariosRuta_.push(idUsuariosRuta);
  }

  /**
   * Método para establecer el tipo de actividad para el que se prevé la ruta
   * @param tipoActividad Tipo de actividad 'bicicleta' o 'correr'
   */
  setTipoActividad(tipoActividad: Actividad) {
    this.tipoActividad_ = tipoActividad;
  }

  /**
   * Método para establecer la calificación media de la ruta
   * @param calificacionMediaRuta 
   */
  setCalificacionMediaRuta(calificacionMediaRuta: number) {
    this.calificacionMediaRuta_ = calificacionMediaRuta;
  }

}
