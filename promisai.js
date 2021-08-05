console.log("Pradzia");
let p = new Promise(
(resolve, reject) => {
console.log("vykdau executor'iu");
setTimeout( () => {
if (Math.random() < 0.5) {
resolve("Promisas patvirtintas");
} else {
reject("Promisas atmestas");
}
});
}
);
console.log(p);
console.log("Pabaiga");