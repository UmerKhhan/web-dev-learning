// functions
let string = 'code runs immediatly';

console.log(`${string}`);


function explainFunction() { 
console.log("code runs when user wants to or developer wants to or when a fucntion is called");
}
myname(); // calling the function

function myname() {                 //function declaration or statement
    console.log(`my name is`);
}

let mynameAgain = function(name){       //function expression
    console.log(`my name is ${name}`);
}

//fat arrow funtion
let arrowfnc = ()=>{
    console.log("this is a fat arrow function");
}

function prinT(...input){
    console.log(input)
}

let adding = function (num1, num2){
       return num1 + num2;
}

let subtracting = (v1,v2)=>{ 
    console.log(v1 - v2);
}


let multiplying  =(num1, num2)=>{
    return num1 * num2;
}


abcd(); // calling the function inside the function

function abcd(){
    return function(){
       return "it is getting freaky";
    }
}
abcd()(); // calling the function inside the function

//pure vs impure function

let abc = () => {
    return 'abc';
}
let xyz = () => {
    console.log('xyz');
};
(function (){
    return 13+14;
})();//immediately invoked function expression (IIFE);