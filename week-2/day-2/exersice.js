const getUser = async ()=>{
    try{
        let URL = "https://jsonplaceholder.typicode.com/users/1";
        const response = await fetch(URL);
        const user  = await response.json();

        console.log(user.name);
        console.log(user.email);
    }
    catch(error){
        console.log(error);
    }
}

getUser();


const getJoke = async ()=>{
    try{
        let URL = "https://official-joke-api.appspot.com/random_joke";
    const response = await fetch(URL);

    const joke = await response.json();

    let setup = joke.setup;
    let punchline = joke.punchline;

   
        console.log(setup);
        setTimeout(()=>{
            console.log(punchline)
        }, 1500)

    }
    catch(error){
        console.log(error)
    }
}
getJoke();