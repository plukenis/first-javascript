
var a = 1;

var b = ++a + a++;
//            paimam reiksme is a ir atsimenam -> 1
//            reiksme padidnam 1 -> 2
//            padedam padidinta reiksme i a <- 2
//            toliau naudojam atsiminta reiksme -> 1
//            1
//      paimam reiksme is a -> 2
//      reiksme padidnam 1 -> 3
//      padedam padidinta reiksme i a <- 3
//      toliau naudojam gauta reiksme -> 3
//      3
//      3   + 1
//         4


// var b = a++ + ++a;
// //      paimam reiksme is a ir atsimenam -> 1
// //      reiksme padidnam 1 -> 2
// //      padedam padidinta reiksme i a <- 2
// //      toliau naudojam atsiminta reiksme -> 1
// //      1
// //             paimam reiksme is a -> 2
// //             reiksme padidnam 1 -> 3
// //             padedam padidinta reiksme i a <- 3
// //             toliau naudojam gauta reiksme -> 3
// //             3
// //      1   + 3
// //         4


// var b = 3 + ++a;
// //          paimam reiksme is a -> 1
// //          reiksme padidnam 1 -> 2
// //          padedam padidinta reiksme i a <- 2
// //          toliau naudojam gauta reiksme -> 2
// //      3 + 2
// //  b =   5

// var b = 3 + a++;
// //          paimam reiksme is a ir atsimenam -> 1
// //          reiksme padidnam 1 -> 2
// //          padedam padidinta reiksme i a <- 2
// //          toliau naudojam atsiminta reiksme -> 1
// //      3 + 1
// //  b =   4

console.log(a);
console.log(b);
