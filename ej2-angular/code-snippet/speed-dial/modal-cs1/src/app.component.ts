

import { Component } from '@angular/core';
import { SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';
@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To Render SpeedDial component. -->
        <button ejs-speeddial id="speeddial" openIconCss='e-icons e-edit' [modal]='true' target='#targetElement' [items]='items'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { iconCss:'e-icons e-cut'},
    { iconCss:'e-icons e-copy'},
    { iconCss:'e-icons e-paste'}
  ];
}
