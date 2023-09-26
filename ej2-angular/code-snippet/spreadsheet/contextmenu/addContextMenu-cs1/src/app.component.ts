

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (contextMenuBeforeOpen)="contextMenuBeforeOpen($args)">
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;
$args: any;

     contextMenuBeforeOpen(args : any) {
       if (args.element.id === this.spreadsheetObj!.element.id + '_contextmenu') {
        // To add context menu items.
      this.spreadsheetObj!.addContextMenuItems([{ text: 'Custom Item' }], 'Paste Special', false); //To pass the items, Item before / after that the element to be inserted, Set false if the items need to be inserted before the text.
     }
    }
}


