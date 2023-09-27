


import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    styleUrls: ['./index.css'],
    template: `<div class="multiline">
                <ejs-textbox [multiline]='true' value= 'Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center' ></ejs-textbox>
               </div>
              `
})
export class AppComponent {
    constructor() {
    }
}



