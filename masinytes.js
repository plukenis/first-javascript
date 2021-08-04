/*
Masinu lenktynes

masyvas is 8 masinu (nuvaziuoti kilometrai)

vyksta lenktyes (ciklas):
kiekvieno ciklo metu kiekviena masina pavaziuoja random (1..5) km
lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km

pabaigoj atspausdinam kelinta masina ir kiek nuvaziavo

*)
komentatorius
kas 100 km reikia atspausdinti lyderio numeri ir nuvaziuota atstuma

*/

// const masinos = [0, 0, 0, 0, 0, 0, 0, 0];

// let lyderis = 0;
// let check = 100;

// // lenktyniu ciklas
// while (masinos[lyderis] < 1000) {
//     // visos masinos pavaziavo
//     for(let i = 0; i < masinos.length; i++) {
//         masinos[i] += Math.trunc(Math.random() * 5 + 1);
//         // ir paziurim ji nuvaziavusi daugiau uz esama lyderi
//         if (masinos[i] > masinos[lyderis]) {
//             // i-toji masina tampa nauju lyderiu
//             lyderis = i;
//         }
//     }
//     // tikrinam ar lyderis nuvaziavo dar 100 km
//     if (masinos[lyderis] > check) {
//         console.log("siuo metu pirmauja", lyderis, masinos[lyderis]);
//         check += 100;
//     }
// }

// // spausdinam laimetoja
// console.log(masinos);
// console.log(lyderis, masinos[lyderis]);

const masinos = [
    {
        pavadinimas: "pirma",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "antra",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "trecia",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "ketvirta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "penkta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "sesta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "septinta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "astunta",
        kelias: 0,
        greitis: 0
    },
];
let lyderis = 0;
let check = 100;

// lenktyniu ciklas
while (masinos[lyderis].kelias < 1000) {
    // visos masinos pakeicia greiti ir pavaziuoja
    for(let i = 0; i < masinos.length; i++) {
        // pakeiciam masinos greiti
        masinos[i].greitis += Math.trunc(Math.random() * 11 - 5);
        // atbulinio ner
        if (masinos[i].greitis < 0) {
            masinos[i].greitis = 0;
        }
        // pavaziuojam
        masinos[i].kelias += masinos[i].greitis;
        // ir paziurim ji nuvaziavusi daugiau uz esama lyderi
        if (masinos[i].kelias > masinos[lyderis].kelias) {
            // i-toji masina tampa nauju lyderiu
            lyderis = i;
        }
    }
    // tikrinam ar lyderis nuvaziavo dar 100 km
    if (masinos[lyderis].kelias > check) {
        console.log("siuo metu pirmauja", masinos[lyderis]);
        check += 100;
    }
    // console.log(masinos);
    // console.log("----------------");
}
// surusiuojam turnyrine lentele
for (let i = 0; i < masinos.length - 1; i++) {
    for (let j = i + 1; j < masinos.length; j++) {
        if (masinos[i].kelias < masinos[j].kelias) {
            let tmp = masinos[i];
            masinos[i] = masinos[j];
            masinos[j] = tmp;
        }
    }
}

console.log(masinos);
/*
8 masinos su savybem:
pavadinimas
kelias
greitis

vyksta lenktyes (ciklas):
kiekvieno ciklo metu kiekviena masina pakeicia savo greiti random (-5..5) km
atbuliniu masina vaziuot negali
kiekvieno ciklo metu kiekviena masina pavaziuoja per tiek, koks yra jos greitis

lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km

pabaigoj atspausdinam visa turnyrine lentele isrusiuota pagal nuvaziuota kelia mazejimo tvarka


*)komentatorius



*/
