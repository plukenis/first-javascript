function labas(zmogus) {
console.log("Labas", zmogus.vardas, zmogus.pavarde);
}
function labasNaujoviskai({ vardas : firstName, pavarde = "nera pavardes" }) {
/*
firstName: Antanas
pavarde: Antanaitis
*/
console.log(arguments);
console.log(arguments.length);
console.log("Labas", firstName, pavarde);
}
function naujasZmogus(vardas, pavarde, gimimoMetai) {
return {
gimimoMetai,
pavarde,
vardas
};
}
let z1 = naujasZmogus("Jonas", "Jonaitis", 1999);
let z2 = naujasZmogus("Petras", "Petraitis", 2000);
let z3 = naujasZmogus("Antanas", "Antanaits", 2000);
console.log(z1, z2, z3);
labas(z2);
labasNaujoviskai(z3);
let gyvunas = {
vardas: "Lordis",
veisle: "vokieciu aviganis"
};
labas(gyvunas);
labasNaujoviskai(gyvunas);