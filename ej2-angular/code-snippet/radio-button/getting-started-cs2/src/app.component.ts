import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'




import { Component } from '@angular/core';

@Component({
imports: [
        
        RadioButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // To customize RadioButton appearance
    template: ` <div class="e-section-control">
                <ul>
               <li><ejs-radiobutton label="Option 1" name="default" enableRtl="true" checked="true"></ejs-radiobutton></li>
               <li><ejs-radiobutton label="Option 2" name="default" enableRtl="true"></ejs-radiobutton></li>
               </ul>
               </div>`
})

export class AppComponent { }



