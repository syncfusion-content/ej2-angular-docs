import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';
import { MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        ContextMenuModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
            <div id="target">Right click / Touch hold to open the ContextMenu</div>
            <ejs-contextmenu id='contextmenu' target='#target' [items]='menuItems'
            (beforeItemRender)='itemBeforeEvent($event)'></ejs-contextmenu>
            </div>`,
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
     {
        text: 'Flipkart',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?source=hp&q=flipkart'
    },
    {
        text: 'Amazon',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?q=amazon'
    },
    {
        text: 'Snapdeal',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?q=snapdeal'
    }];

    public itemBeforeEvent (args: MenuEventArgs) {
        args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
    }
}


