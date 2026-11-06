let obj = {
    name : "uk",
    Id: 67 , 
    arr: [1,2,3,4,5]
};

console.log(obj.arr.push(6));

obj.name = "ensane"
 
const user = {
    name: "Umer",
    address: {
        city: "karachi",
        pin: 32323344 ,
        location: {
            lat: 23.2,
            lng: 77.4,
        },
    },
}
// this is nesting

// deep access
user.address.location.lng;
// user.address.locations.lng; // error location s

// object destructuring

user.address.location.lng; // instead of writng this many times we do

let {lat,lng}= user.address.location;

console.log(lat , lng);



let obj2 = {
    name : "uk",
    age: 20 ,
    email: "umerg8225@gmail.com" 

};

for(let key in obj2){
    console.log(key , ":",obj2[key]);
}

let obj3 = {
    name:"last killer",
    rank: 'silver',
    peak: "gold",
    age: 42,
    ...obj2}

let obj4 = Object.assign({name: "amsal amin",Id: 8243,program: "BsCS"}, obj);

// deep copy or clone

// let user2 = {...user};
// user2.name = 'Pooplegend'
// user2.address.city= "lahore";


let user2 = JSON.parse(JSON.stringify(user));

user2.address.city = "multan";

//optional chaining and computed properties

obj?.address?.city; //elimination error risky because returns undefined

//computed property

let role = "admin";

let user0 = {[role]:"riot",...JSON.parse(JSON.stringify(user))}
user0.name = "the dev"