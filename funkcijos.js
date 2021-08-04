function skaiciuSuma(nuo, iki) {
    let suma = 0;
    for (let i = nuo; i <= iki; i++) {
    suma += i;
    }
    return suma;
    }
let nuo = 5;
let iki = 10;
console.log(skaiciuSuma(nuo, iki));
nuo = 1;
iki = 3;
console.log(skaiciuSuma(nuo, iki));
nuo = 65165;
iki = 789165;
console.log(skaiciuSuma(nuo, iki));