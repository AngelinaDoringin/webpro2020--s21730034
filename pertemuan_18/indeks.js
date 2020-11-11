// Syncronus

//const second = () =>{
//    console.log ('Second');
// }
// const first = () => {
//     console.log ('first');
//     second ();
//    console.log ('the end');
// }
// first();



// Asyncronus

// const second = () =>{
 //   const num = 10;
//   setTimeout(() => {
//    console.log ('Second');
//    console.log (num);
//    }, 3000, num);
//}
//const first = () => {
//    console.log ('first');
//    second ();
//    console.log ('the end');
//}
//first();


// Masalah callback hell

// const second = () =>{
//    const num = 10;
//    setTimeout(() => {
//    console.log ('async 1');
//    console.log (num);
//    setTimeout(()=> {
//        console.log('Async 2');
//        setTimeout(()=> {
//            console.log('Async 3');
//        },3000)
//    },3000)
//    }, 3000, num);
//}
//const first = () => {
//    console.log ('first');
//    second ();
//    console.log ('the end');
//}
//first();
//

// Promise

//const getData = () => {
//    return new Promise (( resolve, reject )=>{
//        setTimeout(()=>{
//            const error = true;
//            if (error){
//                reject('Success');
//            } else{
//                resolve('Error');
//            }
//        }, 2000);
//    })
//}
//getData()
//.then(success => console.log(success))
//.catch (error => console.log(error))


// Chaining

//const getData = () => {
//    return new Promise (( resolve, reject )=>{
//        setTimeout(()=>{
//            const error = true;
//            if (error){
//                reject('Success');
//            } else{
//                resolve(10);
//            }
//       }, 2000);
//    })
//}
//const getName = id => {
//    return new Promise((resolve, reject)=>{
//        setTimeout(() => {
//            resolve ( `ID: $(id) Success`)
//        }, 2000)
//    })
//}
//getData()
//. then (id => getNname(id))
//.then(success => console.log(success))
//.catch (error => console.log(error))


// Aysnc dan Await 

const getData = () => {
    return new Promise (( resolve, reject )=>{
       setTimeout(()=>{
            const error = false;
            if (error){
                reject('Error');
            } else{
                resolve(10);
            }
        }, 2000);
    })
}
const getName = id => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve ( `ID: $(id) Success`)
        }, 2000)
    })
}
const getNamebyId = async () => {
    let id, success;
    try {
        id = await getData();
        success = await getName (id);
        //console.log(success);
    }catch (error){
        console.log (error);
    }
    return success;
}
//getNamebyId(result); 
getNamebyId().then(result => console.log(result));
