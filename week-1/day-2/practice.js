// // function calculateGrade(...scores){
// //     let total = 0;
// //     scores.forEach((element) => {
// //         total += element;
// //     });
// //     return total;
// // }

// // console.log(calculateGrade(12,15,16,17,12,15,13,10,7,19,18,10));


// function checkAge(age){
//     if(age < 18) return "too young";
//     return "perfect!";
// }

// // what does it mean when we say "functions are first-class citizens"

// let add = (a,b,...val)=>{
//     if (val.length == 0) return a+b * c; 
//     let total = 0;
//     console.log(val);
//         val.forEach((element) => {
//             total += element;
//     });
//     return total + a + b * c;

// }

// function outer(){
//     let count =0;
//     return function (){
//         count++;
//         console.log(count)
//     }
// }

// const counter = outer();
// // counter();
// // counter();

// //convert normak function into IIFE

// function init(){
//     console.log("Initialized");

// }

// (function(){
//     console.log("Initialized");
// })();

function bmiCalc(weight,height){
    let bmi = weight / height ** 2;
    return bmi;
}
 let itemscost=0;

function discountCalc(discount){
    return function(price){
       return price - price * (discount/100);
    }

}
let discounter = discountCalc(10);

discounter(200);


function double(val){
    return val * 2;
}



let iamhim = (function (){
    let username = "ensane"
    let password = "iam_sane"

    return {
        getUser: function(){
        return username;
    },getPass: function(){
        return password
    }
    }
})();