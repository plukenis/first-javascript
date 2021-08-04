var m = [5, 8, 12];
console.log(m);
console.log(m[1]);
m[2] = 53;
console.log(m);
console.log(m.length);
var i = 0;
console.log(m[i]);


var m = [5, 8, 12];
var suma = 0;
for (var i = 0; i < m.length; i++) {
suma += m[i];
}
var vidurkis = suma / m.length;
console.log(vidurkis);

st[1] = [13, 14, 15, 16, 17];
console.log(st);
console.log(st[1][2]);

var suma = 0;
for (var i = 0; i < st.length; i++) {
for (var j = 0; j < st[i].length; j++) {
suma += st[i][j];
}
}
console.log(suma);