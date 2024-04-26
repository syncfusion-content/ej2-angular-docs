import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TooltipModule } from '@syncfusion/ej2-angular-popups'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';

@Component({
imports: [
        
        TooltipModule,
        ButtonModule
    ],


standalone: true,
    selector: 'my-app',
    template: `
    <ejs-tooltip id="tooltip" content='Tooltip from disabled element'>
        <div><input ejs-button type="button" disabled value="Disabled button" /></div>
    </ejs-tooltip>
    `,
    styles: [`
    #tooltip {
        display: inline-block;
        position: relative;
        top:50px;
        left: 40%;
    }
    #tooltip [disabled] {
        pointer-events: none;
        font-size: 22px;
        padding: 10px;
    }
    `]
})

export class AppComponent {
}



