import { RibbonModule, RibbonAllModule } from '@syncfusion/ej2-angular-ribbon'

import { Component } from "@angular/core";
import { RibbonColorPickerSettingsModel } from '@syncfusion/ej2-angular-ribbon';


@Component({
imports: [ RibbonModule, RibbonAllModule],
standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public colorSettings: RibbonColorPickerSettingsModel = { value: '#123456' };
}