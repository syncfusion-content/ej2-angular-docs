


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, NodeSelection, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-root',
  template: `<ejs-richtexteditor id='defaultRTE' #sample (created)="onCreate()">
  <ng-template #valueTemplate>
    <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid <a href="https://ej2.syncfusion.com/home/" target="_blank">HTML markup</a> or <a href="https://ej2.syncfusion.com/home/"
      target="_blank">markdown</a> of the content</p>
      <p id="key"><b>Toolbar</b></p>
      <ol>
          <li>
              <p> Toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operations, HTML view, etc </p>
          </li>
          <li>
              <p> Toolbar is fully customizable </p>
          </li>
      </ol>
          </ng-template>
  </ejs-richtexteditor>
  <div><input id="btn" class="e-btn" type="button" value="Set cursor point" /></div>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService ]
})
export class AppComponent  {
  @ViewChild('sample') public rteObj?: RichTextEditorComponent;
  onCreate() {
  const element: Element = (this.rteObj!.contentModule as any).getDocument().getElementById("key");
  document.getElementById('btn')!.onclick = function() {
    const selectioncursor: NodeSelection = new NodeSelection();
    const range: Range = document.createRange();
    range.setStart((element.childNodes[0] as any).firstChild, element.textContent!.length); // to set the range
    selectioncursor.setRange(document, range); // to set the cursor
  };
  }
}



