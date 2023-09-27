

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel, OpenCloseMenuEventArgs, BeforeOpenCloseMenuEventArgs, MenuEventArgs } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
selector: 'app-root',
template: `<div class="control-section">
    <div class="menu-section">
        <ejs-menu id='menu' [items]='menuItems' (beforeOpen)='beforeOpen($event)' (beforeClose)='beforeClose($event)' (onClose)='onClose($event)' (onOpen)='onOpen($event)' (select)='select($event)'></ejs-menu>
    </div>
    <div class="property-section">
        <table id="propertyTable" title="Event trace">
            <tbody>
                <th>Event trace:-</th>
                <tr>
                <td [innerHTML]="eventTrace"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <button id='clear' ejs-button cssClass='e-small' (click)='btnClick()'>Clear</button>
    </div>`
})

export class AppComponent {
    public eventTrace: string = '';
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

    public beforeOpen(args: BeforeOpenCloseMenuEventArgs): void {
        this.updateEventLog(args);
    }

    public beforeClose(args: BeforeOpenCloseMenuEventArgs): void {
        this.updateEventLog(args);
    }

    public onClose(args: OpenCloseMenuEventArgs): void {
        this.updateEventLog(args);
    }

    public onOpen(args: OpenCloseMenuEventArgs): void {
        this.updateEventLog(args);
    }

    public select(args: MenuEventArgs): void {
        this.updateEventLog(args);
    }

    public updateEventLog(args: any): void {
        this.eventTrace = this.eventTrace + args.name + ' Event triggered. <br />'
    }

    public btnClick(): void {
        this.eventTrace = '';
    }
}


