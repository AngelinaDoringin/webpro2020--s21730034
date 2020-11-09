/* 
    Destrukturisasi
*/

// Destrukturisasi array

let hari =["senin", "selasa", "rabu"] 
let [hari2, hari3, hari4]= hari;
console.log(hari2);
console.log(hari4);

//untuk menukar antar 2 variable
let hewan1 ="ayam";
let hewan2 ="babi";
[hewan1,hewan2] = [hewan2,hewan1];
console.log(hewan1); //ouput babi
console.log(hewan2); //output ayam



// Destrukturisasi Object

 let student = {
    Nama: "Angel",
    Umur: 21,
    Fakultas:"Computer Science",
    Jurusan: "Sistem Informasi",
    MhsAktif: true
  };
  let { Nama, Umur, Fakultas, Jurusan, MhsAktif}=student; //destrukturisasi object
  console.log(Nama);
  console.log(Umur);
  console.log(Fakultas);
  console.log(Jurusan);
  console.log(MhsAktif);

// Destrukturisasi objek bertingkat
  let Mahasiswa = {
    name: "Angel",
    age: 21,
    faculty:"Computer Science",
    Prody: "Sistem Informasi",
    IPpersemester:{
        semester1 : 3.00 ,
        semester2 : 3.50 ,
        semester3 : 3.80 , 
        semester4 : 3.32 ,
    }
  };
 let {
     IPpersemester: {semester4}     
    }=Mahasiswa;
    console.log(semester4);
