

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the AutoComplete component and
    // input element for checking the two-way binding support using value property
    template: `<ejs-autocomplete id='atcelement' [dataSource]='sportsData' [(value)]='value'></ejs-autocomplete>
    <div style='margin-top: 50px'>
        <input type="text" [(ngModel)]="value" style="width:245px;height:25px" />
     </div>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of complex data
    public sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics'];
    // set a value to pre-select
    public value: string = 'Badminton';
}


