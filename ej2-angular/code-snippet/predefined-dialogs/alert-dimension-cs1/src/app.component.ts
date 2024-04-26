import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
imports: [
        
        DialogModule,
        ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<button ejs-button cssClass="e-danger" #alertButton (click)="alertBtnClick()">Alert</button>`
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    public alertBtnClick = (): void => {
    DialogUtility.alert({
      title: 'Not enough space',
      content: 'Delete certain files to free up space to store more items.',
      width : '250px',
      height: '200px'
    });
  };
}



