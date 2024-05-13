import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RibbonModule, RibbonGalleryService } from '@syncfusion/ej2-angular-ribbon'

import { Component } from "@angular/core";
import {RibbonGallerySettingsModel, RibbonSplitButtonSettingsModel, RibbonButtonSettingsModel } from "@syncfusion/ej2-angular-ribbon";
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [ RibbonModule],

providers: [ RibbonGalleryService ],
standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public pasteOptions: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge Format" }, { text: "Keep Text Only" }];
  public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: 'e-icons e-paste', items: this.pasteOptions, content: 'Paste' };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-format-painter", content: "Format Painter" };
  public gallerySettings: RibbonGallerySettingsModel = {
    groups: [{
      header: 'Transitions',
      items: [
          {
              content: 'None',
              iconCss: 'e-icons e-rectangle'
          }, {
              content: 'Fade',
              iconCss: 'e-icons e-send-backward'
          }, {
              content: 'Reveal',
              iconCss: 'e-icons e-bring-forward'
          }, {
              content: 'Zoom',
              iconCss: 'e-icons e-zoom-to-fit'
        }
      ]
    }]
  };
}