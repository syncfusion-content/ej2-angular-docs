import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, RichTextEditorComponent, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [
    RichTextEditorModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<button id="btn" style="margin:0 0 20px 0" class="e-btn" (click)="selectParagraph()">Select Paragraph</button>
    <ejs-richtexteditor #rte id="editor" [value]="value"></ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})

export class AppComponent {
  @ViewChild('rte') editor!: RichTextEditorComponent;

  public value: string = `<p>This is paragraph one.</p><p>This is paragraph two.</p>`;

  selectParagraph(): void {
    const panel = (this.editor as any).contentModule.getEditPanel();
    const paragraphs = panel.querySelectorAll('p');

    if (paragraphs.length > 1) {
      const range = document.createRange();
      range.selectNode(paragraphs[1]); // Select the second paragraph

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
}