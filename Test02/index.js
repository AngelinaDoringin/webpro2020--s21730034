//no 1-1
const calculateAge = (birthYear, currentYear) => {
    return 2019 - birthYear;
}

const yearUntilRetirement = (object, firstName) => {
    const age = calculateAge (object.year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log (firstName + " retires in " + retirement + " years ");
    } else {
        console.log (firstName + " is already retired ");
    }
}
console.log (yearUntilRetirement(`1987`,`Jhon`));

//no 1-2    
const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    for(let i=0; i < numbers.length; i++){
            sum = sum + numbers [i];
        }
    return sum;

 }
console.log(addNumber(1,2,3,4,5,6,7));

//no 1-4
const makeAjaxRequest = (url, method) => {
    if(!method){
           method = 'GET'
    }
    console.log(url, method);
    }
     
    makeAjaxRequest('www.google.com');
    

//no 2-1
const warnaKesukaan = (warna) => {
    return console.log (" Warna kesukaan saya adalah " + (warna));
}
warnaKesukaan("putih");
//no. 2-2 Spread Operator
let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];
let semuaNamaBuah;

namaBuah1 = [...namaBuah1, ...namaBuah2];
console.log (namaBuah1);


