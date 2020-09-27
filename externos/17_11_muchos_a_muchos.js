class Computadora {
  constructor(modelo) {
    this.modelo = modelo;
    this.usada = null;
  }
}
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
    this.usa = [];
  }
}
const tQk = new Usuario("qk");
let tPp = new Usuario("pp");
let tChp1 = new Computadora("chp 1");
let tDella2 = new Computadora("della 2");
tQk.usa = [tChp1, tDella2];
tPp.usa = [tDella2];
tChp1.usada = [tPp];
tDella2.usada = [tPp, tChp1];
tPp = null;
tChp1 = null;
tDella2 = null;