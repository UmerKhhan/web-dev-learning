//create an array with 3 fruits and print second fruit
let fruits = ["apple","banana"]

console.log(fruits[1])

// add mango at the end and pineapple at the begining of this array
fruits.push("mango");
fruits.unshift("pineapple")
console.log(fruits)

function fruitbasket(fruit,fruitlist){

    let uptfruits = fruitlist.map((val)=>{
        if (val === fruit) return "kiwi"; 
        else return val ;

    })
    console.log(uptfruits)
}
//extract only the middle 3 elements from this array
let items = [1,2,3,4,5,6]

function mid3(arr,...val){
    if (typeof(arr) == "object"){
        let len = arr.length
        let mid = len / 2;
        if (len % 2 === 0 ){
            mid = mid + 1;
             return arr.slice(mid - 2,mid + 1);
        } else {
            mid = mid + 0.5;
            return arr.slice(mid - 2, mid+1);
        }

    } else {
        val.unshift(arr);
        let len = val.length;
        let mid = len / 2;
         if (len % 2 === 0 ){
            mid = mid + 1;
            return val.slice(mid - 2,mid + 1);
        } else {
            mid = mid + 0.5;
            return val.slice(mid - 2, mid+1);
        }
    }

}

let names = ["zara","arjun",'mira',"bhavya"];
let sorted = names.sort().reverse();

let arr = [1,2,3,4];
let newarr = arr.map((a)=>{
    return a**2;
})

let array = [12,15,3,8,20];
array.find(val =>{
    return val < 10;
})

let newArr = array.filter((a)=>{
    return a >= 10;
})

let Arr=[10,20,30];

arr.reduce((acc,val) =>{
    return acc + val;
},0)
