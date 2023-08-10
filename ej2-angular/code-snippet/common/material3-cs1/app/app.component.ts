import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls:['./style.css'],
    templateUrl:'app.component.html'  
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