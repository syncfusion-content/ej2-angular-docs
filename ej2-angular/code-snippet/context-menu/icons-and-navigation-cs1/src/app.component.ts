import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        ContextMenuModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
            <div id="target">Right click / Touch hold to open the ContextMenu</div>
            <ejs-contextmenu id='contextmenu' target='#target' [items]='menuItems'></ejs-contextmenu>
            </div>`
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
        {
            text: 'Cut',
            iconCss: 'e-cm-icons e-cut'
        },
        {
            text: 'Copy',
            iconCss: 'e-cm-icons e-copy'
        },
        {
            text: 'Paste',
            iconCss: 'e-cm-icons e-paste',
        }];
}


