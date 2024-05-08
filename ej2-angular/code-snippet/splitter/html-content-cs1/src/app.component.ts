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
         <ejs-splitter #markup height='200px' width='600px'>
            <e-panes>
                <e-pane size='200px' content='<div class="content"><h3 class="h3">PARIS </h3>Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the romanticism...</div>'>
                </e-pane>
                <e-pane size='200px' content='<div class="content"><h3 class="h3">CAMEMBERT </h3>The village in the Orne département of Normandy where the famous French cheese is originated from.</div>'>
                </e-pane>
                <e-pane size='200px' content='<div class="content"><h3 class="h3">GRENOBLE </h3>The capital city of the French Alps and a major scientific center surrounded by many ski resorts, host of the Winter Olympics in 1968.</div>'>
                </e-pane>
            </e-panes>
          </ejs-splitter>
      </div>`
})
export class AppComponent {
    constructor() {
    }
}



