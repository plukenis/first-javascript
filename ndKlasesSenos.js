function Zmogus(vardas, pavarde, gimimoMetai) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.gimimoMetai = gimimoMetai;
}

Object.defineProperty(Zmogus.prototype, "amzius", {
    configurable: true,
    enumerable: true,
    get: function() {
        return 2021 - this.gimimoMetai;
    }
});

Object.defineProperty(Zmogus.prototype, "pilnasVardas", {
    configurable: true,
    enumerable: true,
    get: function() {
        return this.vardas + " " + this.pavarde;
    },
    set: function(value) {
        const vardai = value.split(" ");
        this.vardas = vardai[0];
        this.pavarde = vardai[1];
    }
});

Zmogus.prototype.labas = function() {
    console.log("Labas", this.vardas, this.pavarde);
};

function Studentas(vardas, pavarde, gimimoMetai, mokykla, kursas) {
    Zmogus.call(this, vardas, pavarde, gimimoMetai);
    this.mokykla = mokykla;
    this.kursas = kursas;
}

Studentas.prototype = Object.create(Zmogus.prototype);
Studentas.prototype.constructor = Studentas;

Studentas.prototype.labas = function() {
    console.log("Labas", this.vardas, this.pavarde, "mokausi", this.mokykla);
};

Studentas.prototype.pereitiIKitaKursa = function(balai) {
    if (balai < 1 || balai > 100) {
        console.log("negali buti tokie balai");
        return;
    }
    if (balai < 35) {
        console.log("pasiliekam kartoti kurso");
    } else {
        console.log("pereinam i kita kursa");
        this.kursas++;
    }
};

let z1 = new Zmogus("Jonas", "Jonaitis", 2000);
console.log(z1);
console.log(z1.amzius);
z1.labas();
z1.pilnasVardas = "John Smith";
z1.labas();

let s1 = new Studentas("Petras", "Petraitis", 1999, "BIT", 1);
console.log(s1);
console.log(s1.amzius);
s1.labas();
s1.pereitiIKitaKursa(-1);
s1.pereitiIKitaKursa(101);
s1.pereitiIKitaKursa(27);
s1.pereitiIKitaKursa(87);
console.log(s1);
s1.pilnasVardas = "Jane Smit";
s1.labas();
