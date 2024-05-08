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
        <ejs-tooltip id="tooltip" content='Tooltip content' tipPointerPosition='Start'>
            <button ejs-button>Show tooltip</button>
        </ejs-tooltip>
        `,
    styles: [`
        #tooltip {
           display: block;
            margin: 80px auto;
            width: 200px;
            text-align: center;
            color: #424242;
            font-size: 20px;
        }
    `]
})

export class AppComponent {
}



