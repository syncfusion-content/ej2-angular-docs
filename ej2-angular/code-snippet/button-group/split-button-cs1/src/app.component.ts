import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons'



import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [
        
        SplitButtonModule,
        ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template:  `<div class="e-section-control">
                <!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                    <button class='e-btn'>Cut</button>
                    <button class='e-btn'>Copy</button>
                    <ejs-splitbutton content="Paste" [items]='items'></ejs-splitbutton>
                </div>
                </div>`
})

export class AppComponent {
    public items: ItemModel[] = [
    {
        text: 'Paste'
    },
    {
        text: 'Paste Text'
    },
    {
        text: 'Paste Special'
    }];
 }


