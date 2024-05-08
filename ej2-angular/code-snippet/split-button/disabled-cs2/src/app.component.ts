import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons'


 
import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [
        
        SplitButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To Render splitbutton. -->
               <ejs-splitbutton content="Autosum" [items]='items' iconCss="e-sb e-sigma" disabled= true></ejs-splitbutton></div>`
})

export class AppComponent {
  public items: ItemModel[] = [
      {
        text: 'Autosum'
    },
    {
        text: 'Average'
    },
    {
        text: 'Count numbers',
    },
    {
        text: 'Min'
    },
    {
        text: 'Max'
    }];
}


