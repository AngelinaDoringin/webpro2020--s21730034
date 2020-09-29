// Var, Let, Const


var nama = "Angel";
var nama = "Doringin";

console.log(nama);

//scope dalam javascript
//1. function scoope (var)
//2. block scope

//function tes() {
//for (var i=0; i<10; i++) {
 //   console.log(i);
//  }
//}
//tes();
//console.log(i);

// Template Literal
const person = {
    firstName: "Angel",
    lastName: "Doringin",
    age: 21,
};

console.log{
    "Hallo nama saya " +
    person.firstName +
    " " +
    person.lastName +
    ", Umur saya adalah " +
    person.age +
    " tahun."
};