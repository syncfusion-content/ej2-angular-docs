import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MenuModule } from '@syncfusion/ej2-angular-navigations'



import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
imports: [ MenuModule],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
            <!-- To Render Menu. -->
            <ejs-menu [items]='menuItems' orientation='Vertical'></ejs-menu></div>`
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
        {
            text: 'File',
            items: [
                { text: 'Open' },
                { text: 'Save' },
                { text: 'Exit' }
            ]
        },
        {
            text: 'Edit',
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        },
        {
            text: 'View',
            items: [
                { text: 'Toolbar' },
                { text: 'Sidebar' },
                { text: 'Full Screen' }
            ]
        },
        {
            text: 'Tools',
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }
            ]
        },
        { text: 'Help' }
    ];
}


