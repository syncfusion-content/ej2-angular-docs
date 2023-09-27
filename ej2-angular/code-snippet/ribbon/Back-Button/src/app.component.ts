import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, BackStageMenuModel, BackstageItemModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pasteButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-paste", content: "Paste" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public homeContentTemplate() {
    return "<div id='home-wrapper' style='padding: 20px;'><div id='new-section' class='new-wrapper'><div class='section-title'> New </div><div class='category_container'><div class='doc_category_image'></div><span class='doc_category_text'> New document </span></div></div><div id='block-wrapper'><div class='section-title'> Recent </div><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-open-link'></span> </td><td> <span style='display: block; font-size: 14px'> Ribbon.docx </span><span style='font-size: 12px'> EJ2 >> Components >> Navigations >> Ribbon >> default </span></td></tr></tbody></table></div></div></div>";
  }
  public menuItems: BackstageItemModel[] = [
    { id: 'home', text: 'Home', iconCss: 'e-icons e-home', content: this.homeContentTemplate() }
  ];
  public backstageSettings: BackStageMenuModel = {
    visible: true,
    items: this.menuItems,
    backButton: {
        text: 'Close',
    }
  }
}