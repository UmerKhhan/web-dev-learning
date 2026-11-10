// async await

const preHeatOven = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const preHeatOven = true;

            if(preHeatOven){
                resolve("Preheat oven to 180 deg")
            } else{
                reject("failed task")
            }

        },1000 );
    })
}

const addsugerandchocochips = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const addchoco= false;

            if(addchoco){
                resolve("Place butter and chocolate chips, stir until melted and smoooth")
            } else{
                reject("failed task")
            }

        },1000 );
    })
}
const addFlourcocoandsalt = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const addsaltflour = true;

            if(addsaltflour){
                resolve("add flour, coco and salt and stir until smooth")
            } else{
                reject("failed task")
            }

        },1000 );
    })
}
const Bakemixture = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const Bakemixture = true;

            if(Bakemixture){
                resolve("bake for 24 minutes for really gooey center ")
            } else{
                reject("failed task")
            }

        },1000 );
    })
}


const bakechocolateBrownies= async ()=>{
    try{
        const taskOne = await preHeatOven();
    console.log(taskOne)
    const taskTwo = await addsugerandchocochips();
    console.log(taskTwo)
    const taskThree = await addFlourcocoandsalt();
    console.log(taskThree);
    const taskFour = await Bakemixture();
    console.log(taskFour)

    console.log("Enjoy! your Perfect Brownies")
    }
    catch(error){
        console.log(error)

    }
}
bakechocolateBrownies();