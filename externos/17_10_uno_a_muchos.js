class Juguete2 {
  constructor(nombre) {
    this.nombre = nombre;
    this.pertenece = null;
  }
}
class Infante2 {
  constructor(nombre) {
    this.nombre = nombre;
    this.tiene = [];
  }
}
const tTt = new Usuario("tt");
let tSpid = new Juguete2("spiderant");
let tWon = new Juguete2("wonderant");
tTt.tiene = [tSpid, tWon];
tSpid.pertenece = tTt;
tWon.pertenece = tTt;
tSpid = null;
tWon = null;