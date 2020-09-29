/*

    Arrow Function

*/

// 1. Menggunakan arrow function
// a. fungsi dengan parameter
const operasiPenjumlahan = (bil1, bil2) => {
    const hasil = bil1 + bil2;
    return hasil;
};

console.log(operasiPenjumlahan(7,7));
//b. fungsi yang tidak memiliki parameter
const namaNamaMhs = () => {
    const mhs = ["Christy", "Ken", "Meri"];
    return mhs[Math.floor(Math.random() *(mhs.length))];

}

console.log(namaNamaMhs());

//2. Implicit return value
const greeting = (nama) => `Hello ${nama}`;
console.log (greeting(`Angel`));

//Exercise
//function yearUntilRetirement(year, firstName) {
//    var age = 28;
//    var retirement = 65 - age;
//    if (retirement > 0) {
//        console.log(firstName + " retired in " + retirement + " years");
//   }else {
//       console.log(firstName + " is already retired.");
//    }
//}

//Convert to ES6 syntax
const yearUntilRetirement = (year, firstName) => {
    const age = 28;
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + " retired in " + retirement + " years");
    }else {
        console.log(firstName + " is already retired.");
    }
    return retirement > 0;
};
console.log (yearUntilRetirement(`1992`,`Rikho`));


