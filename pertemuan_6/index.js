/*
    Objek
- Array kumpulan nilai yang memiliki indeks dan menggunakan []
- Objel kumpukan nilai yang memiliki nama dan menggunakan {}

*/

// 1. cara mendeklarasikan objek menggunakan literal
const mhs1 = {
    namaDepan: "Angel",
    namaBelakang: "Doringin",
    umur: 21,
    sudahLulus: false,
    alamat: {
        jalan: "Jl. Arnold Mononuntu",
        kecamtatam: "Airmadidi",
        kabupaten: "Minahasa Utara",
        
    },
    IPSemester: [3.05, 3.25, 3.0, 3.4],
    hitungIPK: function () {
        let total = 0;
        this.IPSemester.forEach (function (el) {
            total = total + el;
        });
       this.IPKumulatif = total / 4;
    },
    
};
// hapus nama
delete mhs1.namaBelakang
console.log(mhs1);


//2. Kata Kunci new
const mhs2 = new Object();
mhs2.namaDepan = "Angel";
mhs2.namaBelakang = "Doringin";

//3. Mengakses properti OBjek
// a. Dot notation
console.log (mhs1.umur);

// b. Bracket notation
console.log(mhs1["namaBelakang"]);


console.log (mhs1.alamat);
console.log (mhs1.alamat.jalan);
mhs1.hitungIPK();
console.log(mhs1);