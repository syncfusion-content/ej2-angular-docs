


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <ul>
               <!-- Label position - Left. -->
               <li><ejs-radiobutton label="Left Side Label" name="position" labelPosition="Before"></ejs-radiobutton></li>

               <!-- Label position - Right. -->
               <li><ejs-radiobutton label="Right Side Label" name="position" checked="true"></ejs-radiobutton></li>
               </ul>
               </div>`
})

export class AppComponent { }



