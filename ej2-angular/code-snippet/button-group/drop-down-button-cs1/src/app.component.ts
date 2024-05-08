import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'



import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [
        
        DropDownButtonModule,
        ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                    <button class='e-btn'>HTML</button>
                    <button class='e-btn'>CSS</button>
                    <button class='e-btn'>Javascript</button>
                    <button ejs-dropdownbutton [items]='items' content='More'></button>
                </div>
                </div>`
})

export class AppComponent {
    public items: ItemModel[] = [
    {
        text: 'Learn SQL'
    },
    {
        text: 'Learn PHP'
    },
    {
        text: 'Learn Bootstrap'
    }];
 }


