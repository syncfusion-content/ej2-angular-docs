

import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `
        <ejs-toolbar width="300px">
          <e-items>
             <e-item text='Cut' prefixIcon = 'e-cut-icon tb-icons'></e-item>
             <e-item text='Copy' prefixIcon = 'e-copy-icon tb-icons'></e-item>
             <e-item text='Paste' prefixIcon = 'e-paste-icon tb-icons'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='bold' prefixIcon = 'e-bold-icon tb-icons'></e-item>
             <e-item text='underline' prefixIcon = 'e-underline-icon tb-icons'></e-item>
             <e-item text='italic' prefixIcon = 'e-italic-icon tb-icons'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='A-Z Sort' prefixIcon = 'e-ascending-icon tb-icons'></e-item>
             <e-item text='Z-A Sort' prefixIcon = 'e-descending-icon tb-icons'></e-item>
             <e-item text='Clear' prefixIcon = 'e-clear-icon tb-icons'></e-item>
          </e-items>
        </ejs-toolbar>
        `
})

export class AppComponent {

}


