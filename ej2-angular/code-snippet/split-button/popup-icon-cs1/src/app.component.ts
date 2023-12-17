
 
import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
               <ejs-splitbutton content="Paste" iconCss ="e-sb-icons e-paste"[items]='items'></ejs-splitbutton></div>`
})

export class AppComponent {
  public items: ItemModel[] = [
    {
        text: 'Cut',
        iconCss: 'e-sb-icons e-cut'
    },
    {
        text: 'Copy',
        iconCss: 'e-icons e-copy'
    },
    {
        text: 'Paste',
        iconCss: 'e-sb-icons e-paste'
    }
     ];
}



