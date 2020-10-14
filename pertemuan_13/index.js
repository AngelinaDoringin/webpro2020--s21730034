// Rest Parameter & Spread Operator


/*const hitung = (a, b, c, d, e, f, g) => {
    const angka = [a, b, c, d, e, f, g];
    let total = 0;
    for (let i = 0; i < 7; i++) {
        total = total + angka[i];
    }
    return total;
}
console.log (hitung(1,2,3,4,5,6,7)); */

// Rest Operator
/*const hitung = (param1, param2, ...params) => {
    console.log(param1);
    console.log(param2);
    console.log(params);
    let total = 0;
    params.forEach((el) => {
        total = total + el;
    });
    return total;
};
console.log(hitung (1,2,3,4,5,6,7,8,9,10)); */

//Spread Operator
//1. Duplikasi Array
/*const angka = [1, 2, 3, 4, 5];
const angka2 = [...angka];
angka[0] = 10;
console.log(angka);
console.log(angka2);
console.log(angka);
console.log(...angka); */

//2.Menggabungkan Array
const angka1 = [1, 2, 3, 4, 5];
const angka2 = [6, 7, 8, 9, 10];
const angka3 = [12, 13];
const gabung5 = angka1.concat(angka2, angka3);
console.log(gabung5); 

const gabung6 = [...angka1, ...angka2, 11, ...angka3];
console.log(gabung6);

let orang = {
    name : "Angel",
    age : 21,
};

// orang.pekerjaan = "Mahasiswa";
// orang.pendidikan = "S1";

orang = {...orang, pekerjaan : "Mahasiswa", pendidikan : "S1"};
console.log(orang); 