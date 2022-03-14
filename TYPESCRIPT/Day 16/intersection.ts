interface a{
    name:string;
}
interface b{
    phone:number;
}
let obj1:a&b;
obj1={name:'abhi',phone:099987777}
document.write(`<p>name:${obj1.name},phone=${obj1.phone}</p>`)