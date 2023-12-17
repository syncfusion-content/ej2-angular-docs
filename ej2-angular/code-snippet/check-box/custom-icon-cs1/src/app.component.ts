


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // To customize CheckBox appearance
    template:  `<div class="e-section-control">
                <ul>
                    <li><ejs-checkbox label="Buy Groceries" cssClass="e-checkicon" [checked]="true"></ejs-checkbox></li>

                    <li><ejs-checkbox label="Pay Rent" cssClass="e-checkicon"></ejs-checkbox></li>

                    <li><ejs-checkbox label="Make Dinner" cssClass="e-checkicon"></ejs-checkbox></li>

                    <li><ejs-checkbox label="Finish To-do List Article" cssClass="e-checkicon"></ejs-checkbox></li>
                </ul>
                </div>`
})

export class AppComponent { }



