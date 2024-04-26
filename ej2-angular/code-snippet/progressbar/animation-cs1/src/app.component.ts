import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ProgressBarModule, ProgressAnnotationService } from '@syncfusion/ej2-angular-progressbar'



import { Component, OnInit } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-progressbar';

@Component({
imports: [
         ProgressBarModule
    ],

providers: [ProgressAnnotationService],
standalone: true,
    selector: 'my-app',
    template: `
    <ejs-progressbar  id='percentage' type='Linear' value=100  [animation]='animation'>
    </ejs-progressbar>
    `
})
export class AppComponent implements OnInit {
    public animation?: AnimationModel;
    ngOnInit(): void {
        this.animation = { enable: true, duration: 2000, delay: 0 };
    }
}


