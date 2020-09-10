/*
    JavaScript Loop
    1. For Loop
*/

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

/* 2. While Loop */
let i = 4;

while (i <= 6)
{
  console.log(i);
  i++;
}

/* 3. Do while Loop */
let x = 7;

do {
  console.log(x);
  x++;
} while (x <= 10);



/*
     4.For in Loop
*/
const mahasiswa = 
{
    Nama : "Angelina Vabiola Doringin",
    TTL : "Manado, 28 Juli 1999",
    Alamat : "Airmadidi bawah"
 };
 for (a in mahasiswa)
 {
   console.log(a, ':', mahasiswa[a]);
 }

 /*
     5. For of Loop
*/
const mhs = 
[ "Mahasiswa a : Angelina Doringin", 
  "Mahasiswa b : Chealsea Wowor",
  "Mahasiswa c : Jesica Katopo"
];

for (a of mhs)
{
  console.log(a);
}

