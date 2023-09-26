

import { Component } from '@angular/core';
import { SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';
@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To Render SpeedDial component -->
        <button ejs-speeddial id="speeddial" openIconCss='e-icons e-edit' [items]='items' target='#targetElement'></button>`
})

export class AppComponent {
// Initialize action items with tooltip
public items: SpeedDialItemModel[] = [
    { iconCss:'e-icons e-cut', title:'Cut' },
    { iconCss:'e-icons e-copy', title:'Copy' },
    { iconCss:'e-icons e-paste', title:'Paste' }
];
}
