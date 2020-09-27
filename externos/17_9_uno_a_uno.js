class Avión {
  constructor(modelo) {
    this.modelo = modelo;
    this.piloteado = null;
  }
}
class Piloto {
  constructor(nombre) {
    this.nombre = nombre;
    this.pilotea = null;
  }
}
const tToin121 = new Avión("toin121");
let tQk = new Piloto("qk");
tToin121.piloteado = tQk;
tQk.pilotea = tToin121;
tQk = null;