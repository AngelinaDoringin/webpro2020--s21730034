/*

    1. Array

*/
// Deklarasi array

let angka = [1, 2, 3, 4, 5, 6, 7, 8];
console.log (angka);
let buah = ["Mangga", "Apel", "Jeruk"];
console.log (buah);

let arr = ["text",1, true];
console.log (arr);

let myFunc = function () {
    return "Hello Array";
};

let arr2 = ["text", 1, true, myFunc, [1, 2, 3, 4, 5]];
//Mengakses elemen dalam array

console.log (arr2[2]);
console.log (arr2[3]);
console.log (arr2[4][2]);

console.log (typeof arr2);
console.log (arr2.length);

// Deklarasi array menggunakan kata new
let buah2 = new Array("Salak", "Jambu", "Melon");
console.log (buah2);

// Memanipulasi array
/*
    1. Menambah isi Array
*/

let mhs = [];
mhs[0] = "Jhon";
mhs[1] = "Bob";
mhs[2] = "Jane";
mhs[3] = "Peter";

console.log[mhs];

//2. Mengubah isi array
mhs[1] = "Donny";

console.log(mhs);

//3. Menghapus isi array
mhs[2] = undefined

console.log(mhs);

//4. Menampilkan isi array
 //ganti nama mhs karna mhs sudah dideklarasi diatas
let mhss = ["Jhon", "Bob", "Jhane", "Peter"];

for (let i=0; i < 4; i++) {


console.log ("Mahasiswa ke-" + (i + 1) + " adalah " + mhss[i]);
}

// Method dalam array
// 1. Lenght 
// 2. toString
let mhsw = ["Jhon", "Bob", "Jhane", "Peter"];
console.log (mhsw.toString());

//3. Join
console.log (mhsw.join(" - "));

// 4. push, pop, unshift, shift
mhsw.push ("Angel"); // untuk menambahkan yang paling akhir
mhsw.push ("Jeremy" );
console.log (mhsw.join(" - "));
mhsw.pop(); //untuk menghapus nama yang di push atau yang dipaling akhir
mhsw.pop();
console.log (mhsw.join(" - "));

mhsw.unshift ("Angel"); // menambahkan mulai dari yang paling depan
mhsw.unshift ("Jeremy");
console.log (mhsw.join(" - "));

mhsw.shift(); // untuk mengeluarkan yang paling depan
mhsw.shift(); 
console.log (mhsw.join(" - ")); 

// 5. Concat
let fruit = ("Mangga", "Apel", "Manggis "); // ganti nama 'fruit'  karena 'buah' sudah dideklarasi diatas
let sayur = ("Kangkung", "Sawi", "Bayam");

let makanan = fruit.concat(sayur);
console.log (makanan);

//6. Splice (untuk mengganti elemen dalam array) dan Slice
 // let buahh = ("Durian", "Pisang", "Apel", "Strawberry");
//  buahh.splice (2, 0, "Melon", "Semangka");
//  console.log(buahh.join(" - "));

//  b.slice
    //let buahh2 = buah.slice (0, 3); 
    // console.log(buahh2.join(" - "));

// 7.forEach dam map
let number = [1, 2, 3, 4, 5, 6, 7, 8];

let tampilNumber = function(el){
    console.log(el); 
};
number.forEach(tampilNumber);

//  b. map
let number2 = number.map =(function(el){
    return el;
});

console.log(number2);

// 8. Sort
let angk = [1, 3, 7, 9, 2, 8];

angk.sort
console.log(angk);

// 9. Filter
let anka = [1, 3, 7, 9, 2, 8];

let anka2 = anka.filter(function(el){
    return el > 5;
});
console.log(anka2);