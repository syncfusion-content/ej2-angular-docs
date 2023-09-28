

import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `
        <ejs-toolbar overflowMode = 'Popup' width= 330>
          <e-items>
             <e-item text='Cut' prefixIcon = 'e-cut-icon tb-icons' overflow ='Show' showTextOn = 'overflow'></e-item>
             <e-item text='Copy' prefixIcon = 'e-copy-icon tb-icons' overflow ='Show' showTextOn = 'overflow'></e-item>
             <e-item text='Paste' prefixIcon = 'e-paste-icon tb-icons' overflow ='Show' showTextOn = 'overflow'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='bold' prefixIcon = 'e-bold-icon tb-icons' overflow ='Show' showTextOn = 'overflow' ></e-item>
             <e-item text='underline' prefixIcon = 'e-underline-icon tb-icons' overflow ='Show' showTextOn = 'overflow' ></e-item>
             <e-item text='italic' prefixIcon = 'e-italic-icon tb-icons' overflow ='Show' showTextOn = 'overflow' ></e-item>
             <e-item text='Color-Picker' prefixIcon = 'e-color-icon tb-icons' overflow ='Hide' showTextOn = 'overflow' ></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='A-Z Sort' prefixIcon = 'e-ascending-icon tb-icons' overflow ='Show' showTextOn = 'overflow'></e-item>
             <e-item text='Z-A Sort' prefixIcon = 'e-descending-icon tb-icons' overflow ='Show' showTextOn = 'overflow'></e-item>
             <e-item text='Clear' prefixIcon = 'e-clear-icon tb-icons' overflow ='Show' showTextOn = 'overflow'></e-item>
          </e-items>
        </ejs-toolbar>
        `
})

export class AppComponent {
  
}


