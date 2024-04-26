import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar'



import { Component, OnInit } from '@angular/core';
@Component({
imports: [
         ProgressBarModule
    ],


standalone: true,
    selector: 'my-app',
    template:
    ` <ejs-progressbar  id='percentage' type='Linear' height='60' value=100>
      </ejs-progressbar>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {}

}


