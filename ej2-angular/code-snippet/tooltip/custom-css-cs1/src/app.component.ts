import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TooltipModule } from '@syncfusion/ej2-angular-popups'



import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
        
        TooltipModule
    ],


standalone: true,
    selector: 'my-app',
    template: `<ejs-tooltip id="tooltip" content='Tooltip customized' cssClass='customtooltip'>
            Show tooltip
    </ejs-tooltip>
    `,
    styleUrls: ['styles.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}



