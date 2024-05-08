import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
imports: [
        
        ContextMenuModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
            <!-- To Render Menu. -->
            <div id="target">Right click / Touch hold to open the ContextMenu</div>
            <ejs-contextmenu #contextmenu target='#target' [items]='menuItems' showItemOnClick="true" ></ejs-contextmenu>
            </div>`
})

export class AppComponent {

    public menuItems: MenuItemModel[] = [
        {
            text: 'Show All Bookmarks'
        },
        {
            text: 'Bookmarks Toolbar',
            items: [
                {
                    text: 'Most Visited',
                    items:[
                        {
                            text: 'Gmail'
                        },
                        {
                            text: 'Google'
                        }
                    ]
                },
                {
                    text: 'Recently Added'
                }
            ]
        }
    ];
}


