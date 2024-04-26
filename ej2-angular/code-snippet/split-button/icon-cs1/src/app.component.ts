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
               <ejs-splitbutton content="Paste" [items]='items' iconCss="e-sb-icons e-paste"></ejs-splitbutton>
               <ejs-splitbutton content="Paste" [items]='items' iconCss="e-sb-icons e-paste" iconPosition="Top"></ejs-splitbutton></div>`
})

export class AppComponent {
  public items: ItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }
     ];
}


