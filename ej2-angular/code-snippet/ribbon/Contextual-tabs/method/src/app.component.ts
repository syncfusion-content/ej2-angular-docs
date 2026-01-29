import { RibbonModule, RibbonContextualTabService } from '@syncfusion/ej2-angular-ribbon'

import { Component, ViewChild } from "@angular/core";
import { RibbonButtonSettingsModel, RibbonComponent } from '@syncfusion/ej2-angular-ribbon';

@Component({
imports: [ RibbonModule],

providers: [ RibbonContextualTabService ],
standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  @ViewChild('ribbon') ribbon!: RibbonComponent;
  @ViewChild('showContextual') showElement!: HTMLElement;
  @ViewChild('hideContextual') hideElement!: HTMLElement;

  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Format Painter" };

  public forwardButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-bring-forward", content: "Bring Forward" };
  public backwardButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-send-backward", content: "Send Backward" };
  public selectionButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-show-hide-panel", content: "Selection Pane" };

  toggleRibbonTabs = (value: string) => {
    (this.ribbon as any)[value]('ArrangeView', true);
  }

}
