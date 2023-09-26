

import { Component } from '@angular/core';
import { SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
    <!-- To Render SpeedDial component with icon and text -->
    <button ejs-speeddial id="speeddial" content='Edit' openIconCss='e-icons e-edit' target='#targetElement' [items]=items [itemTemplate]="itemTemplate">
    <ng-template #itemTemplate let-items="">
        <div class="itemlist">
            <span class="icon {{items.iconCss}}" style="padding:3px"></span>
            <span class="text">{{items.text}}</span>
        </div>
    </ng-template></button>`
})

export class AppComponent {
     public items: SpeedDialItemModel[] = [
    { text:'Cut', iconCss:'e-icons e-cut'},
    { text:'Copy', iconCss:'e-icons e-copy'},
    { text:'Paste', iconCss:'e-icons e-paste'}
  ];
}


