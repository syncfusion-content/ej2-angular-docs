

import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `
        <ejs-toolbar>
          <e-items>
             <e-item text='Bold'  [htmlAttributes] = 'boldAttribute'></e-item>
             <e-item text='Italic' [htmlAttributes] = 'italicAttribute'></e-item>
             <e-item text='Underline' [htmlAttributes] = 'underAttribute'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Uppercase' cssClass = 'e-txt-casing'></e-item>
          </e-items>
        </ejs-toolbar>
        `
})

export class AppComponent {
    @ViewChild('element') element?: any;
     public boldAttribute: any = { 'class': 'custom_bold', 'id': 'itemId' };
     public italicAttribute: any = { 'class': 'custom_italic' };
     public underAttribute: any = { 'class': 'custom_underline' };
    ngAfterViewInit() {
    }
}


