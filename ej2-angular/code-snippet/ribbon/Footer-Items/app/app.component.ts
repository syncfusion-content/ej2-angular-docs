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
  public getBackstageContent(item: string): string {
      var content = "";
      switch (item) {
        case "home": 
        {
            content = "<div id='home-wrapper' style='padding: 20px;'><div id='new-section' class='new-wrapper'><div class='section-title'> New </div><div class='category_container'><div class='doc_category_image'></div><span class='doc_category_text'> New document </span></div></div><div id='block-wrapper'><div class='section-title'> Recent </div><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-open-link'></span> </td><td> <span style='display: block; font-size: 14px'> Ribbon.docx </span><span style='font-size: 12px'> EJ2 >> Components >> Navigations >> Ribbon >> default </span></td></tr></tbody></table></div></div></div>";
            break;
        }
        case "new":
        {
            content = "<div id='new-section' class='new-wrapper'><div class='section-title'> New </div><div class='category_container'><div class='doc_category_image'></div> <span class='doc_category_text'> New document </span></div></div>";
            break;
        }
        case "open":
        {
            content = "<div id='open-content' style='padding: 20px;'><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-open-link'></span> </td><td> <span style='display: block; font-size: 14px'> Open in Desktop App </span><span style='font-size: 12px'> Use the full functionality of Ribbon </span></td></tr></tbody></table></div><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-protect-sheet'></span> </td><td> <span style='display: block; font-size: 14px'> Protect Document </span><span style='font-size: 12px'>To prevent accidental changes, this document has been set to open as view-only.</span></td></tr></tbody></table></div></div>";
            break;
        }
        case "account":
        {
            content = "<div id='account-content' style='padding: 20px;'><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-people'></span> </td><td> <span style='display: block; font-size: 14px'>Account type</span><span style='font-size: 12px'>Administrator</span></td></tr></tbody></table></div><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-password'></span> </td><td> <span style='display: block; font-size: 14px'>Password protected</span><span style='font-size: 12px'>Yes</span></td></tr></tbody></table></div></div>";
            break;
        }
      }
      return content;
  }
  public menuItems: BackstageItemModel[] = [
    { id: 'home', text: 'Home', iconCss: 'e-icons e-home', content: this.getBackstageContent('home') },
    { id: 'new', text: 'New', iconCss: 'e-icons e-file-new', content: this.getBackstageContent('new') },
    { id: 'open', text: 'Open', iconCss: 'e-icons e-folder-open', content: this.getBackstageContent('open') },
    { separator: true, isFooter: true },
    { id: 'account', text: 'Account', isFooter: true, content: this.getBackstageContent('account') }
  ];
  public backstageSettings: BackStageMenuModel = {
    text: 'File',
    visible: true,
    items: this.menuItems,
    backButton: {
        text: 'Close',
    }
  }
}