


import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    styleUrls: ['./index.css'],
    template: `<div class="multiline">
                <ejs-textbox id='default' [multiline]='true' floatLabelType='Auto' placeholder='Enter your address' ></ejs-textbox>
               </div>
              `
})
export class AppComponent {
    constructor() {
    }
}



