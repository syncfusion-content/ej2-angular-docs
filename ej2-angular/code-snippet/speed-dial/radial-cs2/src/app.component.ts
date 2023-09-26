

import { Component } from '@angular/core';
import { RadialSettingsModel, SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';
@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"><div>
    <!-- To Render SpeedDial component. -->
    <button ejs-speeddial id="speeddial" openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' [items]='items' mode= 'Radial' position= 'MiddleRight' [radialSettings]= 'radialSettings'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
    { iconCss: 'e-icons e-edit' },
    { iconCss: 'e-icons e-save' }
  ];

  public radialSettings: RadialSettingsModel = { offset: '80px', direction: 'AntiClockwise', startAngle: 90, endAngle: 270 };

}


