const hitung = (a, b, c, d) => {
    const angka = {a, b, c, d};
    let total = 0;
    for (let i = 0; i < 7; i++){
        total = total + angka[i];
    }
    
};
const hitung = (...angka) => {
    let total = 0;
    angka.forEach((el) => {
        total = total + angka[i];
    });
    
    return total;
}
console.log(hitung (1, 2, 3, 4));