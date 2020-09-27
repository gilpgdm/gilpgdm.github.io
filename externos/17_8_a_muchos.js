class Juguete {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
class Infante {
  constructor(nombre) {
    this.nombre = nombre;
    this.tiene = [];
  }
}
const tTt = new Infante("tt");
let tSpid = new Juguete("spiderant");
let tWon = new Juguete("wonderant");
tTt.tiene = [tSpid, tWon];
tSpid = null;
tWon = null;