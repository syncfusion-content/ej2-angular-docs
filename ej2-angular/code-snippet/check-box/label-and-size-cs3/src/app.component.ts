


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <ul>
               <!-- Label position - Left. -->
               <li><ejs-checkbox label="Left Side Label" labelPosition="Before"></ejs-checkbox></li>

               <!-- Label position - Right. -->
               <li><ejs-checkbox label="Right Side Label" [checked]="true"></ejs-checkbox></li>
               </ul>
               </div>`
})

export class AppComponent { }



