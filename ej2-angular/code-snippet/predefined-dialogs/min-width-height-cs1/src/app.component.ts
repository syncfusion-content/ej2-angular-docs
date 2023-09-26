


import { Component, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<button ejs-button cssClass="e-danger" #alertButton (click)="alertBtnClick()">Alert</button>`
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    public alertBtnClick = (): void => {
    DialogUtility.alert({
      title: 'About SYNCFUSION Succinctly Serires',
      content: 'The Succinctly series was born in 2012.',
      cssClass : 'customClass'
    });
  };
}



