class student{
    constructor(public name:string,public age:number){}
        display():void{
            document.write(`<p>Name:${this.name},Age:${this.age}`)
        }
    }
    let s1=new student('Abhi',23);
    s1.display();