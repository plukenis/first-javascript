function labas(vardas = "bevardis", pavarde = "bepavardis") {
/*
vardas:"bevardis"
pavarde:"bepavardis"
*/
console.log(arguments);
console.log("Labas", vardas, pavarde);
}
labas("Jonas", "Jonaitis");
labas("Jonas");
labas();
labas("Jonas", "Jonaitis", "Misteris");
labas(undefined, "Jonaitis");
labas(undefined, undefined, "Ponas", "Misteris");
// function suma(a, b) {
// /*
// a:undefined
// b:undefined
// arguments: {length:0}
// */
// console.log("----------");
// console.log("a", a);
// console.log("b", b);
// console.log(arguments);
// console.log(arguments.length);
// console.log("----------");
// let suma = 0;
// for(let i = 0; i < arguments.length; i++) {
// suma += arguments[i];
// }
// return suma;
// }
// console.log(suma());