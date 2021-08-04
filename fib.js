var sk1 = 1;
var sk2 = 1;
var max = 50000;
while (sk2 < max) {
    console.log(sk1);
    var naujas = sk1 + sk2;
    sk1 = sk2;
    sk2 = naujas;
}
console.log(sk1);
