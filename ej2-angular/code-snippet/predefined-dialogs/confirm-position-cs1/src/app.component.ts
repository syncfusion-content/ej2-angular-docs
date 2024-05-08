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
      position: { X: 'center', Y: 'center' }
    });
  };
}



