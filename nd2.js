// var skaiciai = [45, 7, -4, -7, 42, 7, 1, 0, 9];
// surusiuoti masyvo elementus didejimo tvarka
// surusiuoti masyvo elementus mazejimo tvarka
/*function bubbleSort(array) { 
    var done = false; 
    while (!done) { 
      done = true; 
      for (var i = 1; i < array.length; i += 1) { 
        if (array[i - 1] > array[i]) { 
          done = false; 
          var tmp = array[i - 1]; 
          array[i - 1] = array[i]; 
          array[i] = tmp; 
        } 
      } 
    } 
   
    return array; 
  } 
   
  var numbers = [12, 10, 15, 11, 14, 13, 16]; 
  bubbleSort(numbers); 
  console.log(numbers); 
function sortGreatest(arr) {
  // manually sort array from largest to smallest:
  // loop forwards through array:
  for (let i = 0; i < arr.length; i++) {
    // loop through the array, moving forwards:
    // note in loop below we set `j = i` so we move on after finding greatest value:
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i]; // store original value for swapping
        arr[i] = arr[j]; // set original value position to greater value
        arr[j] = temp; // set greater value position to original value
      };
    };
  };
  return arr;
};

console.log(sortGreatest([10,9,1000,12,-11,3]));
// => [ 1000, 12, 10, 9, 3, -11 ]
function sortLeast(arr) {
  // manually sort array from smallest to largest:
  // loop through array backwards:
  for (let i = arr.length-1; i >= 0; i--) {
    // loop again through the array, moving backwards:
    for (let j = i; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      };
    };
  };
  return arr;
};
console.log(sortLeast([10,9,1000,12,-11,3]));
// => [ -11, 3, 9, 10, 12, 1000 ]

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
const masinos = [0, 0, 0, 0, 0, 0, 0, 0];
 
let lyderis = 0;
let check = 100;
 
// lenktyniu ciklas
while (masinos[lyderis] < 1000) {
 // visos masinos pavaziavo
 for(let i = 0; i < masinos.length; i++) {
 masinos[i] += Math.trunc(Math.random() * 5 + 1);
 // ir paziurim ji nuvaziavusi daugiau uz esama lyderi
 if (masinos[i] > masinos[lyderis]) {
 // i-toji masina tampa nauju lyderiu
 lyderis = i;
 }
 }
 // tikrinam ar lyderis nuvaziavo dar 100 km
 if (masinos[lyderis] > check) {
 console.log("siuo metu pirmauja", lyderis, masinos[lyderis]);
 check += 100;
 }
}
 
// spausdinam laimetoja
console.log(masinos);
console.log(lyderis, masinos[lyderis]);