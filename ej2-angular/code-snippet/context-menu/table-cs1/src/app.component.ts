

import { Component } from '@angular/core';
import { ContextMenu, BeforeOpenCloseMenuEventArgs, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-navigations';
import { createCheckBox } from '@syncfusion/ej2-buttons';
import { closest } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  template: `
  <div id="target">Right click / Touch hold to open the ContextMenu</div>
  <ejs-contextmenu id='contextmenu' [target]='target' [items]= 'menuItems' (beforeItemRender)='itemRender($event)'></ejs-contextmenu>`
})

export class AppComponent  {
public target: string = '#target';

public menuItems: MenuItemModel[] = [
{
    text: 'Cut',
    iconCss: 'e-cm-icons e-cut'
},
{
    text: 'Copy',
    iconCss: 'e-cm-icons e-copy'
},
{
    text: 'Paste',
    iconCss: 'e-cm-icons e-paste'
},
{
    separator: true
},
{
    text: 'Link',
    iconCss: 'e-icons e-link'
},
{
    text: 'Table',
    iconCss: 'e-icons e-table',
    items: [
        {
            id: 'table'
        }
    ]
}];

public itemRender(args:MenuEventArgs ) {
   if (args.item.id === 'table') {
     args.element.classList.add('bg-transparent');
     args.element.appendChild(this.createHeader());
     args.element.appendChild(this.createTable());
   }
}

public createHeader() {
  let header: HTMLElement = document.createElement('h4');
  header.textContent = 'Insert Table';
  return header;
}
public createTable() {
    let table: HTMLElement = document.createElement('table');
    for (let i: number = 0; i < 5; i++) {
        let row: HTMLElement = document.createElement('tr');
        table.appendChild(row);
    for (let j: number = 0; j < 6; j++) {
        let col: HTMLElement = document.createElement('td');
        row.appendChild(col);
    col.setAttribute('class', 'e-data');
    }
}
return table;
}
}


