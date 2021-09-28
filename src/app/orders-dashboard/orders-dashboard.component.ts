import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-dashboard',
  templateUrl: './orders-dashboard.component.html',
  styleUrls: ['./orders-dashboard.component.css']
})
export class OrdersDashboardComponent implements OnInit {
 orders:string[] = [
 "order 1",
 "order 2",
 "order 3",
 "order 4",
 "order 5",
 "order 6",
 "order 7",
 "order 8",
 "order 9",
 "order 10" 
 ]
 timeout:any; 
  constructor() { }

  ngOnInit() {
  }

onStartDay() {
this.timeout= setInterval(() => {
  this.orders.push ("order " + (this.orders.length + 1))
} ,2000) ; 
   
    }
  onEndDay() {
clearInterval(this.timeout) 
  } 
} 