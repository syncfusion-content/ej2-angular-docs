
 
import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To Render splitbutton. -->
               <ejs-splitbutton content="Paste" [items]='items' iconCss="e-sb-icons e-paste"></ejs-splitbutton>
               <ejs-splitbutton content="Paste" [items]='items' iconCss="e-sb-icons e-paste" iconPosition="Top"></ejs-splitbutton>`
})

export class AppComponent {
  public items: ItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }
     ];
}


