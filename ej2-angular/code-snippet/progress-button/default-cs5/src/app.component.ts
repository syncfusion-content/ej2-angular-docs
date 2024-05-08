import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ProgressButtonModule } from '@syncfusion/ej2-angular-splitbuttons'



import { Component } from '@angular/core';

@Component({
imports: [
        
        ProgressButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <button ejs-progressbutton content='Vertical Progress' [enableProgress]='true' cssClass='e-hide-spinner e-vertical' [duration]='4000'></button>
                <button ejs-progressbutton content='Progress Top' [enableProgress]='true' cssClass='e-hide-spinner e-progress-top' [duration]='4000'></button>
                <button ejs-progressbutton content='Reverse Progress' [enableProgress]='true' cssClass='e-hide-spinner e-reverse-progress' [duration]='4000'></button>
                </div>`
})

export class AppComponent {
}


