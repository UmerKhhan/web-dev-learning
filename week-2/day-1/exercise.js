const delay = ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("time's up!");
    },2000)
})
}

delay().then((val)=>{
    console.log(val)
}).catch((error)=>{
    console.log(error)
})


const checkPassword = (password)=>{
    return new Promise((resolve,reject)=>{
        if(password === "secret123"){
            resolve("Access granted")
        } else {
            reject("password is incorrect. try again");
        }
    })
}

checkPassword("secret123").then((val)=>{
    console.log(val)
}).catch((error)=>{
    console.log(error);
})
checkPassword("wrong").then((val)=>{
    console.log(val)
}).catch((error)=>{
    console.log(error);
})

const checkNumber  = (number)=>{
    return new Promise((resolve,reject)=>{
        if(number % 2 ===0 ){
            resolve("Number is Even");

        } else {
            reject("Number is Odd");
        }

    })
}

checkNumber(4).then((val)=>{
    console.log(val);
}).catch((error)=>{
    console.log(error);
})


const fetchUser = (userid)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userid===1){
                resolve({name: "Umer", role: "Developer"})
            }else {
                reject('user not found');
            }
        },1000)
    })
}

fetchUser(1).then((val)=>{
    console.log(val);
}).catch((error)=>{
    console.log(error)
})

const addOne = (number)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(number + 1);
        },500)
    })
}
addOne(4).then((val)=>{
    console.log(val)
    return addOne(val)
}).then((val)=>{
    console.log(val);
    return addOne(val)
}).then((val)=>{
    console.log(val);
    return addOne(val)
}).catch((error)=>{
    console.log(error)
})