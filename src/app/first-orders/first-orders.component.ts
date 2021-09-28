import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-orders',
  templateUrl: './first-orders.component.html',
  styleUrls: ['./first-orders.component.css']
})
export class FirstOrdersComponent implements OnInit {
@Input('getOrders') orders:string [] = [] ;
  constructor() { }

  ngOnInit() {
  }

}