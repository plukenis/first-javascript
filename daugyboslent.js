//var nuo = 2;
//var iki = 4;

/*daugybos lentele;
4 (2*2)
6 (2*3)
8 (2*4)
6 (3*2)
9 (3*3)
12 (3*4)
8 (4*2)
12 (4*3)
16 (4*4)
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function skaiciausIvedimas(msg) {
  return new Promise((resolve, reject) => {
    rl.question(msg, (data) => {
      resolve(parseInt(data));
    });
  });
}

async function tekstoIvedimas(msg) {
  return new Promise((resolve, reject) => {
    rl.question(msg, (data) => {
      resolve(data);
    });
  });
}

async function main() {
  console.log('daugybos lentele');
  var nuo = await skaiciausIvedimas("Iveskite skaiciu nuo: ");
  var iki = await skaiciausIvedimas("Iveskite skaiciu iki: ");
  for (i = nuo; i <= iki; i++) {
    for (j = nuo; j <= iki; j++) {
      console.log(`${i} x ${j} = ${i * j}`);     
    }  
  }
  
  rl.close();
}
main();
