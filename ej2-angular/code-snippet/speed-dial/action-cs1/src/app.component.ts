

import { Component } from '@angular/core';
import { SpeedDialItemEventArgs, SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To Render SpeedDial component with bind clicked event. -->
        <button ejs-speeddial id="speeddial" content='Edit' (clicked)='clicked($event)' target='#targetElement' [items]='items'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
  ];
  public clicked(args: SpeedDialItemEventArgs) {
    alert(args.item.text + ' is clicked');
  }
}


