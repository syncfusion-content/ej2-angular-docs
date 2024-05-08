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
            <!--target element-->
            <div id="target">Right click / Touch hold to open the ContextMenu</div>
            <!-- To Render ContextMenu. -->
            <ejs-contextmenu id='contextmenu' #contextmenu target='#target' [items]='menuItems' [animationSettings]='animation'></ejs-contextmenu>
            </div>`
})

export class AppComponent {
    public animation = {
        effect: 'FadeIn',
        duration: 800
    };
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
        }];

}


