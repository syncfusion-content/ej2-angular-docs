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
      title: 'About SYNCFUSION Succinctly Serires',
      content: 'In the Succinctly series, Syncfusion created a robust, free library of more than 130 technical e-books formatted for PDF, Kindle, and EPUB.Each title in the Succinctly series is written by a carefully chosen expert and provides essential content in about 100 pages. The Succinctly series was born in 2012 out of a desire to provide concise technical e-books for software developers.',
      cssClass : 'customClass'
    });
  };
}



