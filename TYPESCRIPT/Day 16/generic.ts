function identity<T>(a:T){
    return a;
}
let a1:number=identity<number>(20);
let a2:string=identity<string>("Abhi");
let a3:boolean=identity<boolean>(false);
document.write(`<p>a1=${a1},a2=${a2},a3=${a3}</p>`)