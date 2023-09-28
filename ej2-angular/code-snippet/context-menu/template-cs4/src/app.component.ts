

import { Component } from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
import { MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  template: `<!--target element-->
            <div id="target">Right click / Touch hold to open the ContextMenu</div>
            <!-- To Render ContextMenu. -->
            <ejs-contextmenu id='contextmenu' #contextmenu target='#target' [items]='menuItems' (beforeItemRender)='itemBeforeEvent($event)'></ejs-contextmenu>`
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
        {
            text: 'Save as...'
        },
        {
            text: 'View page source'
        },
        {
            text: 'Inspect'
        }];

    public itemBeforeEvent (args: MenuEventArgs) {
        let shortCutSpan: HTMLElement = createElement('span');
        let text: string = args.item.text as string;
        let shortCutText: string = text === 'Save as...' ? 'Ctrl + S' : (text === 'View page source' ? 'Ctrl + U'      : 'Ctrl + Shift + I');
        shortCutSpan.textContent = shortCutText;
        args.element.appendChild(shortCutSpan);
        shortCutSpan.setAttribute('class','shortcut');
    }
}


