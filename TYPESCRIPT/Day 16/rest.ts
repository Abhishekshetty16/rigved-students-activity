function sum1(x,...z){
    let result=x;
    for(let i of z){
        result=result+i;
    }
    return result;
} // example of rest in jscript..
function sum2(x:number,...z:number[]): number {
let result=x;
for(let i of z){
    result=result+i;
}
return result;
}// example of tscript
let r=sum1('10',14,'22',50);
document.write(`<p>Result=${r}</p>`);
r=sum2(10,50,30,38);
document.write(`<p>Result${r}</p>`);

