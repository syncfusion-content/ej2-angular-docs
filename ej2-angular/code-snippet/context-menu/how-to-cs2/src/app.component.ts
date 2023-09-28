

import { Component } from '@angular/core';
import { BeforeOpenCloseMenuEventArgs, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-navigations';
import { createCheckBox } from '@syncfusion/ej2-buttons';
import { closest, createElement } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  template: `
  <div id="target">Right click / Touch hold to open the ContextMenu</div>
  <ejs-contextmenu id='contextmenu' [target]='target' [items]= 'menuItems' (beforeItemRender)='itemRender($event)' (beforeClose)='beforeClose($event)'></ejs-contextmenu>`
})

export class AppComponent  {
   public target: string = '#target';
   public menuItems: MenuItemModel[] = [
    { text: 'Option 1' },
    { text: 'Option 2' },
    { text: 'Option 3' }
   ];

    public beforeClose(args:BeforeOpenCloseMenuEventArgs ) {
        if ((args.event.target as Element).closest('.e-menu-item')) {
            args.cancel = true;
            let selectedElem: NodeList = args.element.querySelectorAll('.e-selected');
            for(let i:number=0; i < selectedElem.length; i++){
                let ele: Element = selectedElem[i] as Element;
                ele.classList.remove('e-selected');
            }
            let checkbox: HTMLElement = closest(args.event.target as Element, '.e-checkbox-wrapper') as HTMLElement;
            let frame: HTMLElement = checkbox.querySelector('.e-frame') as HTMLElement;
            if (checkbox && frame.classList.contains('e-check')) {
                frame.classList.remove('e-check');
            } else if (checkbox) {
                frame.classList.add('e-check');
            }
        }
    }

    public itemRender(args: MenuEventArgs ) {
        let check: Element = createCheckBox(createElement, false, {
            label: args.item.text,
            checked: (args.item.text == 'Option 2') ? true : false
        });
        args.element.innerHTML = '';
        args.element.appendChild(check);
    }
}


