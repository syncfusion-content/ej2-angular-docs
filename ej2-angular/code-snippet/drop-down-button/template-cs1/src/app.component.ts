

import { Component } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render DropDownButton. -->
               <button ejs-dropdownbutton [items]='items' content='Paste' iconCss='e-ddb-icons e-paste' iconPosition='Top' cssClass='e-vertical' (beforeItemRender)='itemBeforeEvent($event)'></button>`
})

export class AppComponent {
   // Initialize action items.
   public items: ItemModel[] = [
    {
        text: 'Edit'
    },
    {
        text: 'Cut'
    }];

    public itemBeforeEvent (args: MenuEventArgs) {
    // To append span and div element in each li rendering.
    if (args.item.text === 'Edit') {
      args.element.innerHTML = '<span></span><div><b>Paste Text</b><div>Provides option to paste only the<br>selected text.</div></div>';
      args.element.style.height = '80px';
      let span: Element = args.element.children[0];
      span.setAttribute('class','e-cm-icons e-pastetext e-align');
      let div: Element = args.element.children[1];
      div.setAttribute('class', 'e-div-align');
    } else {
      args.element.innerHTML = '<span></span><div><b>Paste Special</b><div>Provides options to paste formulas,<br> values, comments, validations etc...</div></div>';
      args.element.style.height = '80px';
      let span: Element = args.element.children[0];
      span.setAttribute('class','e-cm-icons e-pastespecial e-align');
      let div: Element = args.element.children[1];
      div.setAttribute('class', 'e-div-align');
    }
    }
}


