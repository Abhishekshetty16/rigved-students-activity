let a=30;
let b=40;
let c=a*b;
console.log(`c=${c}`);
setTimeout(()=>{
    console.log('inside callback');
},0);
console.log('end of program');
