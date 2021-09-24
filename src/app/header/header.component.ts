import {Component} from '@angular/core'

@Component({
  selector: 'app-header' ,
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  isSatisfied = true; 
  notSatisfied= true; 
  
  toggleClick(){
    this.isSatisfied= !this.isSatisfied ;
  }

  toggleClicks() {
    this.notSatisfied= !this.notSatisfied; 
  }
}