/*let puodukas = {
    spalva: "rudas",
    turis: 300,
    kiekis: 25
    };
    console.log(puodukas);
    puodukas.kiekis -= 5;
    console.log(puodukas);
/*
let zmogus = {
    vardas: "jonas" ,
    pavarde: "jonaitis"
} ;

console.log(zmogus) ;

zmogus.pavarde = "petraitis";

console.log(zmogus);
console.log(zmogus.pavarde, zmogus.vardas);
*/
let zmogus = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    kontaktai: {
    telefonas: "+37069920000",
    email: "Jonas.Jonaitis@gmail.com"
    }
    };
let k = zmogus.kontaktai;
console.log(k);
k.telefonas = "+180055512345";
console.log(k); 