// Arrow Function (Basic): Convert this into a one-line arrow function:
// function multiply(a, b) { return a * b; }
// Log the result of multiply(4, 5).
let multiply = (a, b) => {
    return a * b;
}
let add = (a,b)=>{
    return a + b;
}
//Default Parameters: Write a function greet(name, greeting = "Hello"). It should return "${greeting}, ${name}!".
//Test it twice: once with greet("Ali") and once with greet("Ali", "Salam").
function greet(name,greeting = "Hello"){
    console.log(`${greeting}, ${name}!`);
}
greet("Ali");
greet("Ali", "Asalam o alikum");

//Callbacks (Basics): Write a function runTask(taskName, callback). Inside it, log "Starting: " + taskName, then call callback().
//Pass in a simple arrow function as the callback that logs "Task finished!".

function runtask(taskName, callback = ()=>{console.log("Task finished!")}) { 
    console.log("Starting: " + taskName);
    callback();
}

function calculate(num1,num2, operation = multiply){
    return operation(num1,num2);
}

let getObject = ()=>{
    return {name:"Zain", age: 20 }
}
