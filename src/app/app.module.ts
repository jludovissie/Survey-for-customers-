import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OrdersDashboardComponent } from './orders-dashboard/orders-dashboard.component';
import { FirstOrdersComponent } from './first-orders/first-orders.component';
import { LastOrdersComponent } from './last-orders/last-orders.component';




@NgModule({
  imports:[ BrowserModule, FormsModule ],
  declarations:[OrdersDashboardComponent, FirstOrdersComponent, LastOrdersComponent, AppComponent, HelloComponent],

  bootstrap:    [ AppComponent ]

})
export class AppModule { }
