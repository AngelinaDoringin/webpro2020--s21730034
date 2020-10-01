// var, let, const


//let nama = "Angel";
//let nama = "Doringin"
//consoloe.log(nama);

// Scope dalam JavaScript
// 1. Function Script(var)
// 2. Blck scope

//function tes() {
//    for (var i = 0; i < 10; i++) {
//       console.log (i);
//    }
//   
//}
//tes();

{
    let i;
    for (i = 0; i < 10; i++) {
        console.log(i)
    }
}

// Template literal

const person = {
    firstName: "Angel",
    lastName: "Doringin",
    age: 21,
};

console.log (
    "Hallo nama saya " +
    person.firstName +
    ". Umur saya adalah " +
    person.age +
    " tahun."
);

console.log (
    `Hallo nama saya ${person.firstName} ${person.lastName}. Umur saya adalah ${person.age} tahun.` 
);
