/*
rekursine funksija
sk1, sk2, max
spausdinti visus fibonaci skaicius mazesnius uz max
1, 1, 500000
*/



function fib(sk1, sk2, max) {
    console.log(sk1);
    let sekantis = sk1 + sk2;
    if (sekantis > max) {
        console.log(sk2);
    } else {
        fib(sk2, sekantis, max);
    }
}
fib(1, 1, 50000);
