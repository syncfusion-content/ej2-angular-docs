import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';
export interface User {
    selectedDate: Date;
}
export interface JSONUser {
    selectedDate: string;
}
@Component({
imports: [
        
        CalendarModule //declaration of ej2-angular-calendars module into NgModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
    <!-- To Render Calendar -->
    <ejs-calendar id="calendar" [(value)]='user.selectedDate' (change)='onChange($event)'></ejs-calendar>
    <div class="valuestring">
    <b>User model</b>:  <br/>{{user | json }}
    <br/><br/>
    <b>JSON Data</b>: <br/>{{ model_result }}
    <br/><br/>
    </div>`
})
export class AppComponent {
    public user?: User | any;
    public JSONData: JSONUser = JSON.parse('{ "selectedDate": "2018-12-18T08:56:00+00:00"}');
    public model_result: string = JSON.stringify(this.JSONData);

    constructor() {}
    public ngOnInit() {
        this.user = this.JSONData;
    }
    onChange(args: any) {
        this.JSONData.selectedDate = args.value;
        this.model_result = JSON.stringify(this.JSONData);
    }
}



