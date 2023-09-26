

import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                    <button class='e-btn'>Cut</button>
                    <button class='e-btn'>Copy</button>
                    <ejs-splitbutton content="Paste" [items]='items'></ejs-splitbutton>
                </div>`
})

export class AppComponent {
    public items: ItemModel[] = [
    {
        text: 'Paste'
    },
    {
        text: 'Paste Text'
    },
    {
        text: 'Paste Special'
    }];
 }


