import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { SplitterModule } from '@syncfusion/ej2-angular-layouts'




import { Component } from '@angular/core';

@Component({
imports: [
         FormsModule, SplitterModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
    <div id='container'>
          <ejs-splitter #horizontal height='250px' width='600px'>
            <e-panes>
                <e-pane></e-pane>
                <e-pane></e-pane>
                <e-pane></e-pane>
            </e-panes>
          </ejs-splitter>
    </div>`
})
export class AppComponent {
    constructor() {
    }
}



