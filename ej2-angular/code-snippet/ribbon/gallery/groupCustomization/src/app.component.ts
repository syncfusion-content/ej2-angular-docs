import { Component } from "@angular/core";
import {RibbonGallerySettingsModel, RibbonSplitButtonSettingsModel, RibbonButtonSettingsModel } from "@syncfusion/ej2-angular-ribbon";
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pasteOptions: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge Format" }, { text: "Keep Text Only" }];
  public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: 'e-icons e-paste', items: this.pasteOptions, content: 'Paste' };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-format-painter", content: "Format Painter" };
  public gallerySettings: RibbonGallerySettingsModel = {
    groups: [{
      header: 'Styles',
      cssClass: "custom-group",
      items: [
          {
              content: 'Normal'
          }, {
              content: 'No Spacing'
          }, {
              content: 'Heading 1'
          }, {
              content: 'Heading 2'
          }
        ]
    }]
  };
}