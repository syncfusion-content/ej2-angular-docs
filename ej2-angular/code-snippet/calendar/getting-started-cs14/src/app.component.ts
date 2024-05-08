import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';

@Component({
imports: [
        
        CalendarModule //declaration of ej2-angular-calendars module into NgModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
              <!-- Sets the isMultiSelection and values properties-->
              <ejs-calendar [values]='dateValues' [isMultiSelection]='multiSelect'></ejs-calendar>
        `
})
export class AppComponent {
    public dateValues: Date[] = [new Date('1/1/2020'), new Date('1/15/2020'), new Date('1/3/2020'), new Date('1/25/2020')];
    public multiSelect: Boolean = true;
    constructor() {
    }
}



