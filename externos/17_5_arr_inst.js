class Clao {
  constructor(a) {
    this.a = a;
  }
}
const arro1 = [new Clao(-3), new Clao(4), new Clao(8)];
console.log(arro1);
for (var ob of arro1) {
  console.log(ob.a);
}