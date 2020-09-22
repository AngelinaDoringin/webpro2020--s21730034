/*

        1. Function
*/

function penjumlahanDuaBujurSangkar(a, b){
    let LuasA = a*a;
    let LuasB = b*b;
    let total = LuasA + LuasB;

    return total;
}

console.log (penjumlahanDuaBujurSangkar(8,3));
console.log (penjumlahanDuaBujurSangkar(10,5));

/*
    Cara memanggil fungsi
*/

 console.log(tambah(kali(5, 2), kali(10,2)));

 function tambah (a,b) {
    return a + b;
 }
 function kali (a,b) {
    return a * b;
 }