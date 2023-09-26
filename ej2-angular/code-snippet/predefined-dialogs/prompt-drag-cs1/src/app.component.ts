


import { Component, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<button ejs-button [isPrimary]="true" #promptButton (click)="promptBtnClick()">Prompt</button>`
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    public promptBtnClick = (): void => {
    DialogUtility.confirm({
      title: 'Join Chat Group',
      content:'<p>Enter your name:</p> <input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
      isDraggable :  true,
      width: '300px'
    });
  };
}



