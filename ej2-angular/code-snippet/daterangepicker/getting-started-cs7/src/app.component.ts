


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-daterangepicker [format]='dateFormat' separator='to' placeholder='Select a range'></ejs-daterangepicker>`
})
export class AppComponent {
    public dateFormat: String = "yyyy-MM-dd";
    constructor() {
    }
}



