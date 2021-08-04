function calc(veiksmas, a, b) {
function sum (sk1, sk2) {
return sk1 + sk2;
}
if (veiksmas === "suma") {
return sum(a, b);
} else if (veiksmas === "atimtis") {
 return sub (a, b);
} else {
console.log("nezinomas veiksmas");
}
function sub (b, c) {
return b - c;
}
}
console.log(calc("suma", 3, 4));
console.log(calc("atimtis", 15, 7));
console.log(calc("daugyba", 15, 7));