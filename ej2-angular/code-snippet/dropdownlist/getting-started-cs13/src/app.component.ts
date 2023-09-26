

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownList component and
    // input element for checking the two-way binding support using value property
    template: `
    <ejs-dropdownlist id='ddlelement' [dataSource]='data' [(value)]='value' placeholder='Select a game'></ejs-dropdownlist>
    <div style='margin-top: 50px'>
        <input type="text" [(ngModel)]="value" style="width:245px;height:25px" />
     </div>
    `
})
export class AppComponent {
    constructor() {
    }
    // defined the array of complex data
    public data: string[] = [ 'Badminton', 'Basketball', 'Cricket', 'Football' ];
    // set a value to pre-select
    public value: string = 'Badminton';
}



