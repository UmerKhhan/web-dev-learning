// async programming
// ! promises call backs

// synchrones programming

// console.log("1. Prehead the oven to 350°F (180°C).")
// console.log("2. chop hald the chocolate into chunks and melt in microwave.")
// console.log("3. mix butter & suger")
// console.log("4. Beat in the eggs and vanilla for 1-2 munutes.")
// console.log("5. Whisk in the melted chocolate")
// console.log("6. Fold in the other hald of chocolate chunk, then transfer the batter to baking dish")
// console.log("7. Bake for 20-25 minutes, then let cool completely ")
// console.log("8. SLive, serve and enjoy")

// basic example of asynchronus programming : setTimeOut(()=>{},time in milliseconds)
function task1(callback){

    setTimeout(()=>{
        console.log("1. Prehead the oven to 350°F (180°C).")
        callback();
    },1000);
}
function task2(callback){
    setTimeout(()=>{
        console.log("2. chop hald the chocolate into chunks and melt in microwave.")
        callback();

    },2000)

}
function task3(callback){
    
    setTimeout(()=>{
        console.log("3. mix butter & suger")
        callback();

    },1500)
}
function task4(callback){
    setTimeout(()=>{
        console.log("4. Beat in the eggs and vanilla for 1-2 munutes.")
        callback();

    },3000)

}
function task5(callback){
    setTimeout(()=>{
        console.log("5. Whisk in the melted chocolate")
        callback();

    },4000)

}
function task6(callback){

    setTimeout(()=>{
        console.log("6. Fold in the other hald of chocolate chunk, then transfer the batter to baking dish")
        callback();

    },3500)
}
function task7(callback){
    setTimeout(()=>{
        console.log("7. Bake for 20-25 minutes, then let cool completely ")
        callback();

    },1800)
    
}
function task8(){
    setTimeout(()=>{
        console.log("8. SLive, serve and enjoy")
    
    },500)
}


// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 task5(()=>{
//                     task6(()=>{
//                         task7(()=>{
//                             task8();
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })
// this is also called callback hell

const showMessage = (callback)=>{
    console.log(callback)

}
const firstmsg = (callback)=>{
    setTimeout(()=>{
        showMessage("hello");
        callback();
    },2000)
}
const secondMsg = (callback)=>{
    showMessage(('world!'))
}

firstmsg(secondMsg)

// to combact this hell we use promise

// what is a promise 
// a promise is an assurance or garantee that something will happen in the future. a person can promise another person a specific out come or result. A promise is an object that holds the future value of an asych operation

// example: Requesting some data from a server, the promise promises us to get that data which we can use in the future after we get it



// promise has three states 
//? pending
//* fulfilled
//! rejected

// most of the time you consume promises and not create them

// const promise = new Promise((resolve,reject)=>{
//     const allwentwell = false;
//     if(allwentwell){
//         resolve('all thing went well')

//     } else {
//         reject("OOPs! Something went wrong")
//     }
// })
// console.log(promise)

// const promise = new Promise((resolve,reject)=>{
//     const randomNumber = Math.floor(Math.random()* 10)
//     setTimeout(()=>{
//         if(randomNumber < 4){
//             resolve("well done you guessed right");
//         } else {
//             reject("Opps you guesed wrong! try again!");
//         }
//     },2000)
// })

// promise.then((value)=>{
//     console.log(value);

// }).catch((error)=>{
//     console.log(error);
// })

// const promise = new Promise((resolve,reject)=>{
//     resolve('Welldone! promise One is resolved')
// })
// const promise2 = new Promise((resolve,reject)=>{
//     resolve('Welldone! promise 2 is resolved')
// })
// const promise3 = new Promise((resolve,reject)=>{
//     reject('promise 3 is rejected')
// })

// promise
// .then((value)=>{
//     console.log(value);
//     return promise2;
// })
// .then((value)=>{
//     console.log(value);
//     return promise3;
// })
// .catch((error)=>{
//     console.log(error);
// })
// .all method

const promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise one resolved")
    },2000)
})
const promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise two resolved")
    },1500)
})

Promise.all([promise1,promise2])
.then((val)=>{
    console.log(val[0],val[1])
}).catch((error)=>{
    console.log(error)
})