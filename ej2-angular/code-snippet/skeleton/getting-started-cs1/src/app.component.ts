import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SkeletonModule } from '@syncfusion/ej2-angular-notifications'




import { Component } from '@angular/core';

@Component({
imports: [
         
        SkeletonModule
    ],


standalone: true,
    selector: 'my-app',
    template: `<ejs-skeleton height='15px'></ejs-skeleton>`
})

export class AppComponent { }


