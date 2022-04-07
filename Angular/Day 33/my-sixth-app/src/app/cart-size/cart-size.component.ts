import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-size',
  templateUrl: './cart-size.component.html',
  styleUrls: ['./cart-size.component.css']
})
export class CartSizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  size :number=0;
  amount : number =0;
}
