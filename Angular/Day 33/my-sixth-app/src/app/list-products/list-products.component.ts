import { Component, OnInit , Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
products = [
  {name:'Mobile',price:45000},
  {name:"laptop",price:200000},
  {name: 'Food',price:2503}
];
@Output()
data :EventEmitter<number>= new EventEmitter<number>();
counter=0;

@Output()
price1:EventEmitter<number>=new EventEmitter<number>();
amount=0;
send(price:number) : void {
  this.amount=this.amount+price;
  this.price1.emit(this.amount);
  this.counter=this.counter+1;
  this.data.emit(this.counter);
}
remove(price:number): void{
  this.amount=this.amount-price;
  this.price1.emit(this.amount);
  this.counter=this.counter-1;
  this.data.emit(this.counter);
}
}
