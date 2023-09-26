

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ul>
               <!-- To Render RadioButton. -->
               <li><ejs-radiobutton label="Option 1" name="default"></ejs-radiobutton></li>

               <li><ejs-radiobutton label="Option 2" name="default" checked="true"></ejs-radiobutton></li>
               </ul>`
})

export class AppComponent { }


