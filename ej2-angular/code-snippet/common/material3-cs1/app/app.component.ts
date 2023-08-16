import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls:['./style.css'],
    template:`<div [ngClass]="{'e-dark-mode': isChecked, 'dark': isChecked}">
    <ejs-checkbox label="Enable Darkmode" (change)="toggleCheckbox()"></ejs-checkbox><br/>
   
     <!-- Primary Button - Used to represent a primary action. -->
     <button ejs-button cssClass="e-primary">Button</button>
   
     <!-- Success Button - Used to represent a positive action. -->
     <button ejs-button cssClass="e-success">Button</button>
   
     <!-- Info Button - Used to represent an informative action -->
     <button ejs-button cssClass="e-info">Button</button>
   
     <!-- Warning Button - Used to represent an action with caution. -->
     <button ejs-button cssClass="e-warning">Button</button>
   
     <!-- Danger Button - Used to represent a negative action. -->
     <button ejs-button cssClass="e-danger">Button</button>
     </div>`  
})

export class AppComponent { 
  public className:string="";
  public checked:boolean=true;

  public isChecked = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      document.body.classList.add('dark');
    }
    else{
      document.body.classList.remove('dark');
    } 
  }
  
}