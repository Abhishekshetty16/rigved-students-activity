class calci{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    addition(){
        return(this.x+this.y);
    }
    findMin(...i){
        let temp=i[0];
        i.forEach((item)=>{
            if(item<temp){
                temp=item;
            }
        });
        return temp;
    }
    findMax(...i){
        let temp=i[0];
        i.forEach((item)=>{
            if(item>temp){
                temp=item;
            }
        });
        return temp;
    }
}
let c1=new calci(44,10);
let r=c1.addition();
console.log(`result=${r}`);
let min=c1.findMin(20,12,35,58);
console.log(`Min value is:${min}`);
let max=c1.findMax(20,500,23,45,78);
console.log(`max value is:${max}`);