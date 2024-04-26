import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';
import { getInstance } from '@syncfusion/ej2-base';
import { MenuItemModel, ContextMenu } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        ContextMenuModule,
        ButtonModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
            <!-- To Render ContextMenu. -->
            <ejs-contextmenu id='contextmenu' [items]= 'menuItems'></ejs-contextmenu>
            <!-- To Render Button. -->
            <button ejs-button (click)="btnClick()">Open ContextMenu</button>
            </div>`
})

export class AppComponent  {
    // Initialize action items.
    public menuItems: MenuItemModel[] = [
        {
            text: 'Cut'
        },
        {
            text: 'Copy'
        },
        {
            text: 'Paste'
        }];

    btnClick() {
        let contextmenuObj: ContextMenu = getInstance(document.getElementById("contextmenu_0") as HTMLElement, ContextMenu) as ContextMenu;
        contextmenuObj.open(40, 20);
    }
}


