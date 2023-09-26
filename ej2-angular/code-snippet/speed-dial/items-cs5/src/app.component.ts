

import { Component } from '@angular/core';
import { SpeedDialAnimationSettingsModel, SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';
@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"><div>
    <!-- To Render SpeedDial component. -->
    <button ejs-speeddial id="speeddial" openIconCss='e-icons e-edit' content='Edit' closeIconCss='e-icons e-close' target='#targetElement' [items]='items' [animation]= 'animation'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut', iconCss: 'e-icons e-cut' },
    { text: 'Copy', iconCss: 'e-icons e-copy' },
    { text: 'Paste', iconCss: 'e-icons e-paste' }
  ];
  public animation: SpeedDialAnimationSettingsModel =
    { effect: 'Zoom' };
}
