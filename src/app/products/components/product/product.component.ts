import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() data:any = {}

  @Output() item = new EventEmitter()

  toQuantity:boolean = false;
  quantity:number = 0
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    this.item.emit({item:this.data, quantity:this.quantity})
  }
}
