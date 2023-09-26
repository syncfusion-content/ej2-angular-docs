

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
    <!-- To Render TimePicker -->
    <ejs-timepicker id="timepicker" width="240px" [(value)]='user.selectedDate' (change)='onChange($event)'></ejs-timepicker>
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

    public ngOnInit() {
        this.user = this.JSONData;
    }
    onChange(args: any) {
        this.JSONData.selectedDate = args.value;
        this.model_result = JSON.stringify(this.JSONData);
    }
}



