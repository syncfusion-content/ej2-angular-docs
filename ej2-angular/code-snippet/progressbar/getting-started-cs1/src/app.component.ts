import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar'



import { Component } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-progressbar';

@Component({
imports: [
         ProgressBarModule
    ],


standalone: true,
    selector: 'my-app',
    // specifies the template string for the Progressbar component
    template: `<ejs-progressbar id='percentage'  type='Linear' height='160' [value]='value' [animation]='animation'> </ejs-progressbar>`
})

export class AppComponent {
   public animation: AnimationModel = { enable: true, duration: 2000, delay: 0 };
   public value: number = 40;
}


