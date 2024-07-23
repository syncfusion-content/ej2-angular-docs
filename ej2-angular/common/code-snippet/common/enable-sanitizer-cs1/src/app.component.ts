import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TooltipModule } from '@syncfusion/ej2-angular-popups'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'


 
import { Component, ViewEncapsulation } from '@angular/core';
import { Droppable } from  '@syncfusion/ej2-base';

@Component({
imports: [
        
        TooltipModule,
        ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
    <div id='container' style="display: inline-block; position: relative; left: 50%;top: 100px;transform: translateX(-50%);">
        <ejs-tooltip id='tooltip' content='<img src=text onerror=alert("XSS_Script_Attack") \/>' target="#target">
            <button ejs-button id="target">Hover me for a tooltip!</button>
        </ejs-tooltip>
    </div>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}



 