


import { Component, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<button ejs-button cssClass="e-success" #confirmButton (click)="confirmBtnClick()">Confirm</button>`
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    public confirmBtnClick = (): void => {
    DialogUtility.confirm({
      title: 'Delete Multiple Items',
      content: 'Are you sure you want to permanently delete these items?',
      width:'300px',
      okButton: { text: 'Yes', icon:'e-icons e-check'},
      cancelButton: {text:'No', icon:'e-icons e-close'}
    });
  };
}



