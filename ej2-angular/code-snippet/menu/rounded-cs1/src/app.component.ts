import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MenuModule } from '@syncfusion/ej2-angular-navigations'



import { Component } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [ MenuModule],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
            <!-- To Render Menu. -->
            <ejs-menu [items]='menuItems' cssClass='e-rounded-menu'></ejs-menu>
            </div>`
})

export class AppComponent {
    menuItems: MenuItemModel[] = [
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
            { text: 'Sidebar' }
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
    { text: 'Go' },
    { text: 'Help' }];
}


