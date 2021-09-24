import { Component } from "@angular/core";

import {} from '@angular/core'

@Component({
  selector: 'app-contact' ,
  templateUrl: 'contact.component.html'
})
export class ContactComponent {
  firstId= '' ;
  lastId= 'Ludovissie' ;
  isSubmitted= true;  

  toggleForm() {
  this.isSubmitted=!this.isSubmitted  ; 

  
  }
}