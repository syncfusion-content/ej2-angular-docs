

import { Component } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { enableRipple, createElement } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<!-- To Render splitbutton. -->
               <ejs-splitbutton iconCss ="e-sb-icons e-paste" [items]='items' (beforeItemRender)='addClass($event)'></ejs-splitbutton>`
})

export class AppComponent {
  public items: ItemModel[] = [
    {
       text: 'Cut',
     },
     {
       text: 'Copy',
     },
     {
       text: 'Paste',
      }
     ];

      public addClass(args: MenuEventArgs) {
        let shortCutSpan: HTMLElement = createElement('span');
        let text: string | any = args.item.text;
        args.element.appendChild(shortCutSpan);
        shortCutSpan.setAttribute('class','shortcut');
        let clsName: string = (text == 'Copy') ? 'e-icons' : 'e-sb-icons';
        shortCutSpan.classList.add(clsName);
        (text === 'Cut') ? shortCutSpan.classList.add('e-cut') : (text === 'Paste') ? shortCutSpan.classList.add('e-paste') : shortCutSpan.classList.add('e-copy');
      }
}



