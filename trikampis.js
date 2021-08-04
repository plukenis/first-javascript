/*
parasyti funkcija, kuri paskaiciuoja trikampio plota
pagal nurodyus krastiniu ilgius
(Herono formule)
pradzioj reikia patikrinti ar susidaro trikampis
jei nesusidaro - atspausdinti
"ne trikampis"
ir grazinti -1;
2, 4, 5
654, 15, 666
65, 48, 11
*/
/*
function plotas(a, b, c) {
    if (a >= b + c || b >= a + c || c >= a + b) {
        console.log("ne trikampis");
        return -1;
    }
    p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

console.log(plotas(2, 4, 5));
console.log(plotas(654, 15, 666));
console.log(plotas(65, 48, 11));
*/

function div(a, b) {
console.log(superTetis);
// console.log(tetis);
return a/b;
}
function calc(veiksmas, a, b) {
function sum (sk1, sk2) {
console.log(superTetis);
console.log(tetis);
return sk1 + sk2;
}
let tetis = "tetis";
if (veiksmas === "suma") {
return sum(a, b);
} else if (veiksmas === "atimtis") {
return sub (a, b);
} else if (veiksmas === "dalyba") {
return div (a, b);
} else {
console.log("nezinomas veiksmas");
}
function sub (b, c) {
return b - c;
}
}
let superTetis = "superTetis";
console.log(calc("suma", 3, 4));
// console.log(calc("atimtis", 15, 7));
// console.log(calc("daugyba", 15, 7));
console.log(calc("dalyba", 15, 7));