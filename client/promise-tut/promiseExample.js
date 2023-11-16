
// PART 1 Promise Code
let prms = new Promise((resolve,reject) => {
    let a = Math.floor(Math.random() * (10 - 1) + 1);
    
    if(a % 2 == 0){
        resolve("Success");
    }else{
        reject("Failed");
    }
});

prms.then((message) => {
    console.log("This is in the then " + message);
})

prms.catch((message)=>{
    console.log("This is in the catch " + message);
});






//PART 3 Promise Methods 

const recordVideoOne = new Promise((resolve,reject) => {
    resolve("Video 1 recorded");
});


const recordVideoTwo = new Promise((resolve,reject) => {
    resolve("Video 2 recorded");
});


const recordVideoThree = new Promise((resolve,reject) => {
    resolve("Video 3 recorded");
});

Promise.all([recordVideoOne,recordVideoTwo,recordVideoThree]).then((message) => {
    console.log(message);
});