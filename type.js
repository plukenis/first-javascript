let sk = 15;
console.log(typeof sk); // "number"

let s = "tekstas";
console.log(typeof s); // "string"

let b = false;
console.log(typeof b); // "boolean"

let u;
console.log(typeof u); // "undefined"

let o = { vardas: "jonas" }; 
console.log(typeof o); // "object"

let m = [12, 15];
console.log(typeof m); // "object"

function suma(a, b) {
    return a + b;
}
console.log(typeof suma); // "function"

suma = suma(1, 2);
console.log(typeof suma); // "number"

let n = null; 
console.log(typeof n); // "object"

