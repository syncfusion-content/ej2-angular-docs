


import { Component } from '@angular/core';
export interface User {
    selectedDate: Date;
}
export interface JSONUser {
    selectedDate: string;
}
@Component({
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



