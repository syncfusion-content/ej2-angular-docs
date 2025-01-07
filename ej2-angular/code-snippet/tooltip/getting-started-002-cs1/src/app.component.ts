import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TooltipModule } from '@syncfusion/ej2-angular-popups'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    imports: [
        TooltipModule,
        ButtonModule
    ],
    standalone: true,
    selector: 'my-app',
    template: `
    <div id='container' style="display: inline-block; position: relative; left: 50%;top: 100px;transform: translateX(-50%);">
        <ejs-tooltip id='tooltip' content="This tooltip has 180px width and 40px height" width='180px' height='40px' target="#target" >
            <button ejs-button id="target">Show Tooltip</button>
        </ejs-tooltip>
    </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }


