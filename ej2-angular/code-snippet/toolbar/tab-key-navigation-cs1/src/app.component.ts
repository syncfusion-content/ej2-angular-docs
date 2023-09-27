

import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `
        <ejs-toolbar>
          <e-items>
             <e-item text='Cut' tabIndex=0></e-item>
             <e-item text='Copy' tabIndex=0></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Paste' tabIndex=0></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Undo' tabIndex=0></e-item>
             <e-item text='Redo' tabIndex=0></e-item>
          </e-items>
        </ejs-toolbar>
        `
})

export class AppComponent {

}


