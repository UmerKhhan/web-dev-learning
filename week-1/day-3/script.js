let arr = [1,2,3,4]

arr.push(5);
arr.push(5);
arr.push(5);

arr.pop(5)
arr.pop(5)
arr.pop(5)

arr.push(5);

arr.shift();
arr.unshift(1);
arr.unshift(0);
let ascend = (a,b)=>{
    return a - b;
}
let descend = (a,b)=>{
    return b - a;
}

let newarr = arr.map((val)=>{
    return val+1;
})
let filteredarr = newarr.filter((val)=>{
    if(val % 2 === 0) return val;

}
)
let reducedarr = arr.reduce((accumulator,val)=>{
    console.log(val,accumulator,accumulator + val)
    return accumulator + val;
},0) ;

// find some every

let fa = arr.find((val)=>{
    return val === 2;
});

let sa = arr.some((val)=>{
    return val > 3;
})
let eve = arr.every((val)=>{
    return val > 3;
})