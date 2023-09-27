

import { Component } from '@angular/core';
import { enableRipple, closest } from '@syncfusion/ej2-base';
import { MenuItemModel, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Menu. -->
            <ejs-menu [items]='menuItems' (beforeOpen)='onBeforeOpen($event)'></ejs-menu>`
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

    onBeforeOpen(args: BeforeOpenCloseMenuEventArgs): void {
        // Getting parent menu item element offset
        let relativeOffset: ClientRect = closest(args.event.target as Element, '.e-menu-item').getBoundingClientRect();
        // Getting sub menu wrapper element using closest method
        let subMenuEle: HTMLElement = closest(args.element, '.e-menu-wrapper') as HTMLElement;
        subMenuEle.style.display = 'block';
        args.top = (relativeOffset.top - subMenuEle.getBoundingClientRect().height) + pageYOffset;
        args.left = relativeOffset.left + pageXOffset;
        subMenuEle.style.display = '';
    }
}


