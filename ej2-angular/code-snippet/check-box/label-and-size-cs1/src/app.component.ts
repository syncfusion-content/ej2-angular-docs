


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ul>
               <!-- checked state. -->
               <li><ejs-checkbox label="Checked State" [checked]="true"></ejs-checkbox></li>

               <!-- unchecked state. -->
               <li><ejs-checkbox label="Unchecked State"></ejs-checkbox></li>

               <!-- indeterminate state. -->
               <li><ejs-checkbox label="Indeterminate State" [indeterminate]="true"></ejs-checkbox></li>
               </ul>`
})

export class AppComponent { }



