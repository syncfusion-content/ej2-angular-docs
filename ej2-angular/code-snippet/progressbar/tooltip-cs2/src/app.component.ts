import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar'



import { Component, OnInit } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-progressbar';
@Component({
imports: [
         ProgressBarModule
    ],


standalone: true,
    selector: 'my-app',
    template:
    `<ejs-progressbar  id='percentage' type='Linear' height='90' value=90  [animation]='animation' [tooltip]='tooltip'>
      </ejs-progressbar>`
})
export class AppComponent implements OnInit {
    public animation?: AnimationModel;
    public tooltip: Object = {
        enable: true,
        format: "Progress: ${value}"
    };
    ngOnInit(): void {
        this.animation = { enable: true, duration: 2000, delay: 0 };
    }
}


