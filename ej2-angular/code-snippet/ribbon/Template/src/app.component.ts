
import { Component, ViewChild } from "@angular/core";
import { RibbonModule, RibbonBackstageService, RibbonButtonSettingsModel, BackStageMenuModel } from '@syncfusion/ej2-angular-ribbon';
import { Ribbon } from '@syncfusion/ej2-ribbon';

@Component({
  imports: [ RibbonModule ],
  providers: [ RibbonBackstageService ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('ribbon') ribbonObj!: Ribbon;
  constructor(private renderer: Renderer2) {}
  public pasteButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-paste", content: "Paste" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };

  public contentClick(id: string) {
    let ribbonEle = document.getElementById('ribbon');
    if(ribbonEle) {
      let content = ribbonEle.querySelector('.content-open');
      if (content) {
        content.classList.replace('content-open', 'content-close');
      }
      ribbonEle.querySelector('#' + id + '-wrapper')?.classList.add('content-open');
    }
  }

  public closeContent() {
    if (this.ribbonObj) {
      ( this.ribbonObj.element.querySelector('#ribbon_backstagepopup') as HTMLElement).style.display = 'none';
    }
  }

  public ribbonCreated() {
    if (this.ribbonObj) {
      this.ribbonObj.element.querySelector('.e-ribbon-backstage')?.addEventListener('click', this.displayPopup);
    }
  }

  public displayPopup() {
    let backstagePopup = this.ribbonObj.element.querySelector('#ribbon_backstagepopup') as HTMLElement;
    if (backstagePopup) {
      backstagePopup.style.display = 'block';
    }
  }

  public homeContentTemplate() {
    return  "<div id='temp-content' style='width: 550px; height: 350px; display: flex'><div id='items-wrapper' style='width: 130px; height:100%; background: #779de8;'><ul><li id='close'><span class='e-icons e-close'></span>Close</li><li id='new'><span class='e-icons e-file-new'></span>New</li><li id='open'><span class='e-icons e-folder-open'></span>Open</li><li id='save'><span class='e-icons e-save'></span>Save</li></ul></div><div id='content-wrapper'><div id='new-wrapper' class='content-open' style='padding: 20px;'><div id='new-section' class='new-wrapper'><div class='section-title'>New</div><div class='category_container'><div class='doc_category_image'></div><span class='doc_category_text'>New document</span></div></div></div><div id='save-wrapper' class='content-close' style='padding: 20px;'><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td><span class='doc_icon e-icons e-save'></span></td><td><span style='display: block; font-size: 14px'>Save as</span><span style='font-size: 12px'>Save as copy online</span></td></tr></tbody></table></div><div class='section-content' style='padding: 12px 0px cursor: pointer'><table><tbody><tr><td><span class='doc_icon e-icons e-rename'></span></td><td><span style='display: block; font-size: 14px'>Rename</span><span style='font-size: 12px'>Rename this file.</span></td></tr></tbody></table></div></div><div id='open-wrapper' class='content-close' style='padding: 20px;'><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td><span class='doc_icon e-icons e-open-link'></span></td><td><span style='display: block; font-size: 14px'>Ribbon.docx</span><span style='font-size: 12px'>EJ2 >> Components >> Navigations >> Ribbon >> default</span></td></tr></tbody></table></div><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td><span class='doc_icon e-icons e-open-link'></span></td><td><span style='display: block; font-size: 14px'>Classic_layout.docx</span><span style='font-size: 12px'>EJ2 >> Components >> Navigations >> Ribbon >> layouts</span></td></tr></tbody></table></div><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td><span class='doc_icon e-icons e-open-link'></span></td><td><span style='display: block; font-size: 14px'>Simplified_layout.docx</span><span style='font-size: 12px'>EJ2 >> Components >> Navigations >> Ribbon >> layouts</span></td></tr></tbody></table></div></div></div></div>";
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const closeBtn = document.getElementById('close');
      const newBtn = document.getElementById('new');
      const openBtn = document.getElementById('open');
      const saveBtn = document.getElementById('save');
      if (closeBtn) { this.renderer.listen(closeBtn, 'click', () => this.closeContent()); }
      if (newBtn) { this.renderer.listen(newBtn, 'click', () => this.contentClick('new')); }
      if (openBtn) { this.renderer.listen(openBtn, 'click', () => this.contentClick('open')); }
      if (saveBtn) { this.renderer.listen(saveBtn, 'click', () => this.contentClick('save')); }
    }, 100);
  }

  public backstageSettings: BackStageMenuModel = {
    visible: true,
    template: this.homeContentTemplate()
  }
}