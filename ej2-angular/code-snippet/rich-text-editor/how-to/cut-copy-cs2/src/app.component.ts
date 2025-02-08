import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, NodeSelection, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, RichTextEditorComponent, ContentRender } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [
    RichTextEditorModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor id='editor' #sample (created)="onCreate()" [(value)]="value"></ejs-richtexteditor>
  <div><input id="btn" class="e-btn" type="button" value="Set cursor point" /></div>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})

export class AppComponent {
  @ViewChild('sample') public editorObj?: RichTextEditorComponent;
  public value: string = "<p>The Rich Text Editor is WYSIWYG (&quot;what you see is what you get&quot;) editor useful to create and edit content, and return the valid <a href=\"https://ej2.syncfusion.com/home/\" target=\"_blank\">HTML markup</a> or <a href=\"https://ej2.syncfusion.com/home/\" target=\"_blank\">markdown</a> of the content</p> <p id=\"key\"><b>Toolbar</b></p> <ol><li><p> Toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operations, HTML view, etc </p></li><li><p> Toolbar is fully customizable </p></li></ol>";
  onCreate() {
    const element: Element = (this.editorObj!.contentModule as ContentRender).getDocument().getElementById("key") as Element;
    document.getElementById('btn')!.onclick = function () {
      const selectioncursor: NodeSelection = new NodeSelection();
      const range: Range = document.createRange();
      range.setStart((element.childNodes[0] as HTMLElement).firstChild as Text, element.textContent!.length); // to set the range
      selectioncursor.setRange(document, range); // to set the cursor
    };
  }
}