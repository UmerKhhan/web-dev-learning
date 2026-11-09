// create an object for student with name, age, and isEnrolled

let student = {
    name: "Aarij",
    age: 14,
    isEnrolled: false,
};
// can an object key be a number of boolean?
 const obj = { 
    true: "yes",
    42: "yes",
    
 }

 // Access the value of "first-name" from this object:
 

const user = {
    "first-name":"Umer",
}
user["first-name"];

//given a dynamic key let key="age",how will you access user [key]?

let key = "age";
let user2 = {
    age: 26,
}

user2[key];

// from the object below, print the latitude:

const userlocation = {
    city: "karachi",
    coordinates: {
        lat: 23.2,
        lng: 77.4,
    }
}
console.log(userlocation.coordinates.lat);

//what will happen if the coordinates is missing how can you prevent errors?
console.log(userlocation?.coordinates?.lat);

// destructure the city and lat from the location object

let {city} = userlocation;
let {lat} = userlocation.coordinates;


//destructure the key "first-name" as variable called firstname.

let firstname = user['first-name']
// ORRR
let {"first-name": firstname2} = user;

// use for-in to log all keys in this object

let course = {
    title:"javascript",
    duration: "4 weeks",
}

for(let key in course){
    console.log(key,":",course[key]);
}

// use Object.entries() to print all key-value pairs as:
//title : javascript

function keyValuep(obj){
    Object.entries(obj).forEach((arr)=>{
        console.log(arr[0]+ ':',arr[1]);
    })
}
keyValuep(course)

// copy this obj using spread op

const orignal = {a:1,b:2}
const local = {...orignal}

// deep cloning

const obj1 = {info: {score: 80 }}
const clone = {...obj1};
clone.info.score = 89;
console.log(obj1.info.score);

// right way to clone

const clone2 = JSON.parse(JSON.stringify(obj1));

clone2.info.score = 91;

// rewrite thi safly using optional chaining

const person = {};
// console.log(person.profile.name);
console.log(person?.profile?.name);

//use a varibale to dynamically assign a property

let key2 = "role"
let newobj = {
    [key2] : "riot dev",
}