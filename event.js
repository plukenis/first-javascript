const fs = require("fs");
console.log("pradzia");
fs.readFile("a.txt", {
encoding: "utf-8"
}, function(err, data) {
if (err) {
console.log("nepavyko perskaityti failo");
console.log(err);
return;
}
console.log("perskaiciau faila");
console.log(data);
});
setTimeout(function() {
console.log("dirbu");
}, 2000);
console.log("pabaiga");
