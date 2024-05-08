import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'




import { Component } from '@angular/core';

@Component({
imports: [
        
        CheckBoxModule,
        ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    //Name and Value attribute in form submit.
    template: `<div class="e-section-control">
                <form>
                <ul>
                    <li><ejs-checkbox name="Sport" value="Cricket" label="Cricket" [checked]="true"></ejs-checkbox></li>

                    <li><ejs-checkbox name="Sport" value="Hockey" label="Hockey" [checked]="true"></ejs-checkbox></li>

                    <li><ejs-checkbox name="Sport" value="Tennis" label="Tennis" [disabled]="true"></ejs-checkbox></li>

                    <li><ejs-checkbox name="Sport" value="Basketball" label="Basketball"></ejs-checkbox></li>

                    <li><button ejs-button [isPrimary]="true">Submit</button></li>
                </ul>
               </form>
               </div>`
})

export class AppComponent { }



