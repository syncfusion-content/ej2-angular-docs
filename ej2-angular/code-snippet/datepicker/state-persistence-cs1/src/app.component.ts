


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<button id='btn' (click)='refresh($event)'> Refresh</button><br>
       <br> <ejs-datepicker placeholder='Enter date'></ejs-datepicker>
        `
})

export  class  AppComponent  {
    refresh(args: any):void {
        document.location.reload();
    }
    constructor() {
    }
}


