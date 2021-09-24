import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  imports:[ BrowserModule, FormsModule ],
  declarations:[ContactComponent, HeaderComponent, AppComponent, HelloComponent],

  bootstrap:    [ AppComponent ]

})
export class AppModule { }
