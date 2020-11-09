// Destructing
// --------------------------
// Memecah item atau properti pada array datau object dalam variable yang berbeda

// 1. Array

// const colors = [ 'merah', 'kuning', 'hijau'];
// let satu = colors[0];
// let dua = colors[1];
// let tiga = colors[2];
// console.log(satu, dua, tiga);

// Dectructuring array
const colors = [ 'merah', 'kuning', 'hijau'];
let[satu, dua, tiga]= colors;
 console.log(satu, dua, tiga);
 
// Mengambil dan menghilangkan elemen
let[satuu, ,tigaa]=colors;
 console.log(satu, tiga);



 // 2. Object
 //cara lama
 
// const user ={
//    name :"Jhon",
//     gender: "male",
//      age: 33,
// };
// let name=user.name;
// let gender=user.gender;
// let age=user.age;
// console.log(name, gender, age);

const user ={
    name :"Jhon",
    gender: "male",
    age: 33,
};
//let {name, gender, age} =user;
 //console.log(name, gender, age);
 
 let { name, gender, age, born = "Manado"}= user;
 console.log(name, gender, age, born);


 //3. array object
 const users = [
     { id: 1, name: "jhon"},
     {id: 2, name: "Jane"},
     {id: 3, name: "Bob"},
 ];
 let [user1, user2, user3]= users;
 //console.log(user1, user2, user3);
 let[
     {id:idUser1, name:nameUser1},
     {id:idUser2, name:nameUser2},
     {id:idUser3, name:nameUser3},
    ]= users;
 console.log(idUser1, nameUser1);
 //4. kombinasi dengan rest operator
 const warna = [ "merah", "kuning", "hijau","biru"];
 let [one, ...lainnya] =colors;
console.log(one);
console.log(lainnya);
