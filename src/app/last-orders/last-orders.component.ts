import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-orders',
  templateUrl: './last-orders.component.html',
  styleUrls: ['./last-orders.component.css']
})
export class LastOrdersComponent implements OnInit {
  @Input('getOrders') orders: string [] = [];    

  constructor() { }

  ngOnInit() {
  }

}