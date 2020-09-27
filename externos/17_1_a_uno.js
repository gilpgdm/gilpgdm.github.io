class Bebé {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
class Sonaja {
  constructor(modelo) {
    this.modelo = modelo;
    this.dueño = null;
  }  
}
const telSonajita1 = new Sonaja("sonajita1");
let telQk = new Bebé("qk");
telSonajita1.dueño = telQk;
telQk = null;