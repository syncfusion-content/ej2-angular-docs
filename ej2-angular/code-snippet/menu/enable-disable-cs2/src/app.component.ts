

import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuComponent, MenuItemModel, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div class="control-section">
            <button ejs-button (click)='btnClick()'>Show all items</button>
            <div class="menu-section">
                <ejs-menu #menu [items]='menuItems' (beforeOpen)='beforeOpen($event)' (created)='created()'></ejs-menu>
            </div>
        </div>`
})

export class AppComponent {
    @ViewChild('menu')
    public menuObj?: MenuComponent;
    public menuItems: MenuItemModel[] = [
        {
            text: 'Events',
            items: [
                { text: 'Conferences' },
                { text: 'Music' },
                { text: 'Workshops' }
            ]
        },
        {
            text: 'Movies',
            items: [
                { text: 'Now Showing' },
                { text: 'Coming Soon' }
            ]
        },
        {
            text: 'Directory',
            items: [
                { text: 'Media Gallery' },
                { text: 'Newsletters' }
            ]
        },
        {
            text: 'Queries',
            items: [
                { text: 'Our Policy' },
                { text: 'Site Map' }
            ]
        },
        { text: 'Services' }
    ];

    public hiddenItems: string[] = ['Workshops', 'Music', 'Movies'];

    public beforeOpen(args: BeforeOpenCloseMenuEventArgs): void {
        //Handling sub menu items
        for (let i: number = 0; i < args.items.length; i++) {
            if (this.hiddenItems.indexOf(args.items[i].text as string) > -1) {
                this.menuObj?.hideItems([args.items[i].text as string], false);
            }
        }
    }

    public created(): void {
        // Disable menu items
        this.menuObj?.hideItems(this.hiddenItems, false);
    }

    public btnClick(): void {
        // Show menu items
        this.menuObj?.showItems(this.hiddenItems, false);
        this.hiddenItems = [];
    }
}


