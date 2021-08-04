const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function skaiciausIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(parseInt(data));
        });
    });
}

async function tekstoIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(data);
        });
    });
}

async function main() {
    // var sk = await skaiciausIvedimas("Ivesk skaiciu:");
    // var ksk = await skaiciausIvedimas("Ivesk kita skaiciu:");
    // console.log(sk + ksk);

    var v = await tekstoIvedimas("Ivesk varda:");
    console.log("Labas, ", v);

    rl.close();
}

main();
