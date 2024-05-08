import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'



import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
imports: [
        
        CalendarModule //declaration of ej2-angular-calendars module into NgModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-calendar #ejCalendar [value]='dateValue' (change)='onChange($event)'></ejs-calendar>
        <p id=output style="margin-left:18%; margin-left: 31%;word-wrap: break-word;"></p>`
})

export class AppComponent {
    @ViewChild('ejCalendar') ejCalendar: any;
    public dateValue: Date = new Date();
    constructor() {
    }
    ngAfterViewInit(): void {
        (document.getElementById('output') as HTMLElement).textContent = "" + this.ejCalendar.value;
    }
    onChange(args:any) {
        (document.getElementById('output') as HTMLElement).textContent = "" + args.value;
    }
}


