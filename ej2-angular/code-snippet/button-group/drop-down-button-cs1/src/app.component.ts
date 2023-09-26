

import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                    <button class='e-btn'>HTML</button>
                    <button class='e-btn'>CSS</button>
                    <button class='e-btn'>Javascript</button>
                    <button ejs-dropdownbutton [items]='items' content='More'></button>
                </div>`
})

export class AppComponent {
    public items: ItemModel[] = [
    {
        text: 'Learn SQL'
    },
    {
        text: 'Learn PHP'
    },
    {
        text: 'Learn Bootstrap'
    }];
 }


