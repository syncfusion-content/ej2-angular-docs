

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<ejs-menu #menu [items]='menuItems' (beforeItemRender)='beforeItemRender($event)'></ejs-menu>`
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
        {
            text: 'File',
            iconCss: 'em-icons e-file',
            items: [
                { text: 'Open', iconCss: 'em-icons e-open' },
                { text: 'Save', iconCss: 'e-icons e-save' },
                { separator: true },
                { text: 'Exit' }
            ]
        },
        {
            text: 'Edit',
            iconCss: 'em-icons e-edit',
            items: [
                { text: 'Cut', iconCss: 'em-icons e-cut' },
                { text: 'Copy', iconCss: 'em-icons e-copy' },
                { text: 'Paste', iconCss: 'em-icons e-paste' }
            ]
        },
        { text: 'Format' },
        { text: 'View' },
        { text: 'Bookmarks' },
        { text: 'Tools' },
        { separator: true },
        { text: 'Help' }
    ];

    public beforeItemRender(args: MenuEventArgs): void {
        if (['File', 'Open', 'Save'].indexOf(args.item.text as string ) > -1) {
            // To underline a First character.
            let underlinedText: string = '<u>' + (args.item.text as string).slice(0, 1) + '</u>' + (args.item.text as string).slice(1);
            args.element.innerHTML = args.element.innerHTML.replace(args.item.text as string, underlinedText);
        }
    }
}


