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

import 'mocha';
import {expect} from 'chai';
import {User} from '../../src/user/classUser';


describe('Clase User', () => {
  const user1 = new User(1, "username1", ["bicicleta", "correr"], [], [], [[10, 2],[40,8],[150, 50]], [1], [1,4], [["18-03-23",[1,2,3]]]);

  it("Getter del id del usuario resulta 1", () => {
    expect(user1.Id).to.be.eql(1);
  });

  it("Getter del nombre de usuario resulta 'username1' ", () => {
    expect(user1.userName).to.be.eql("username1");
  });

  it("Setter de las actividades del usuario resulta ['bicicleta', 'correr'] ", () => {
    user1.setActivities(["bicicleta", "correr"]);
    expect(user1.activities).to.be.eql(["bicicleta", "correr"]);
  });

  it("Setter del amigo con id 0 resulta [0]", () => {
    user1.setFriend(0);
    expect(user1.friends).to.be.eql([0]);
  });

  it("Setter de los grupos del usuario resulta [1,2]", () => {
    user1.setGroup(1);
    user1.setGroup(2);
    expect(user1.groups).to.be.eql([1,2]);
  });

  it("Setter de las estadísticas resulta [[10, 2],[40,8],[150, 50]]", () => {
    user1.setStats([[10, 2],[40,8],[150, 50]]);
    expect(user1.stats).to.be.eql([[10, 2],[40,8],[150, 50]]);
  });

  it("Setter de la ruta favorita añadiendo la 1, resulta [1]", () => {
    user1.setFavouriteRoute(2);
    expect(user1.favouriteRoutes).to.be.eql([1, 2]);
  });

  it("Setter de reto favoraito se añade el 1 y el 4, resulta [1,4]", () => {
    user1.setChallenge(5);
    user1.setChallenge(6);
    expect(user1.challenges).to.be.eql([1,4, 5, 6]);
  });

  it("Setter del histórico de rutas resulta [[18-03-23],[1,2,3]]", () => {
    user1.setHistoric(["23-03.23",[1,2,3]])
    expect(user1.historic).to.be.eql([["18-03-23",[1,2,3]], ["23-03.23",[1,2,3]]]);
  });
});