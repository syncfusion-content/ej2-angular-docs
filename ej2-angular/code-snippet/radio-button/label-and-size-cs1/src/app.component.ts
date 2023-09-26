


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ul>
               <!-- checked state. -->
               <li><ejs-radiobutton label="Option 1" name="state" checked="true"></ejs-radiobutton></li>

               <!-- unchecked state. -->
               <li><ejs-radiobutton label="Option 2" name="state"></ejs-radiobutton></li>
               </ul>`
})

export class AppComponent { }



