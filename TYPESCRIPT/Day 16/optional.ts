function test1(a:number,b?:number,c?:number){
    document.write(`<p>a=${a},b=${b},c=${c}</p>`);
}
test1(23);
test1(23,22);
test1(40,32,22);
let user:{firstname:string,lastname?:string,phone:number};
user={firstname:"alex",phone:4555788878}
document.write(`<p> Name:${user.firstname},phone:${user.phone}</p>`);
