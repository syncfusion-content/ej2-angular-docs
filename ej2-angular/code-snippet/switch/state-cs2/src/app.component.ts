import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'




import { Component } from '@angular/core';

@Component({
imports: [
        
        SwitchModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <table class='size'>
                <tr>
                    <td class='lSize'>Small</td>
                    <td>
                        <ejs-switch cssClass="e-small"></ejs-switch>
                    </td>
                </tr>
                <tr>
                    <td class='lSize'>Default</td>
                    <td>
                        <ejs-switch></ejs-switch>
                    </td>
                </tr>
               </table>
               </div>`
})

export class AppComponent { }



