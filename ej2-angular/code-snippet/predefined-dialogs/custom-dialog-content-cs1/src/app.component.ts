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
    template: `<button ejs-button [isPrimary]="true" #promptButton (click)="promptBtnClick()">Prompt</button>`
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    public promptBtnClick = (): void => {
    DialogUtility.confirm({
        title: 'Join Chat Group',
        content: '<p>Enter your name:</p><input class="e-input" placeholder="Type here.." />',
        width: '300px'
    });
  };
}



