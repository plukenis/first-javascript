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
    var zmogus;
    while (zmogus != "X") {
        var zmogus = await tekstoIvedimas("Ivesk A/P/Z/X: ");
        if (zmogus == "A" || zmogus == "P" || zmogus == "Z") {
            var r = Math.random();
            var comp;
            if (r < 0.3333) {
                comp = "A";
            } else if (r < 0.6666) {
                comp = "P";
            } else {
                comp = "Z";
            }
            console.log("Kompiuteris pasiriko:", comp);
            if (zmogus == comp) {
                console.log("Lygiosios");
            } else if (
                (zmogus == "A" && comp == "Z") ||
                (zmogus == "P" && comp == "A") ||
                (zmogus == "Z" && comp == "P")
            ) {
                console.log("Tu laimejai");
            } else {
                console.log("Laimejo kompiuteris");
            }
        }
    }

    rl.close();
}

main();
