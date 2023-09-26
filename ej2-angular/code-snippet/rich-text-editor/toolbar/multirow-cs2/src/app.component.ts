

import { Component } from '@angular/core';
import { ToolbarService, HtmlEditorService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' [toolbarSettings]='tools' [pasteCleanupSettings]="pasteCleanupSettings">
    <ng-template #valueTemplate>
      <p>RichTextEditor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format.</p>
      <p><b>Paste Cleanup properties:</b></p>
      <ul>
          <li>
              <p>prompt - specifies whether to enable the prompt when pasting in RichTextEditor.</p>
          </li>
          <li>
              <p>plainText - specifies whether to paste as plain text or not in RichTextEditor.</p>
          </li>
          <li>
              <p>keepFormat- specifies whether to keep or remove the format when pasting in RichTextEditor.</p>
          </li>
          <li>
              <p>deniedTags - specifies the tags to restrict when pasting in RichTextEditor.</p>
          </li>
          <li>
              <p>deniedAttributes - specifies the attributes to restrict when pasting in RichTextEditor.</p>
          </li>
          <li>
              <p>allowedStyleProperties - specifies the allowed style properties when pasting in RichTextEditor.</p>
          </li>
      </ul>
    </ng-template>
    </ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, PasteCleanupService]
})
export class AppComponent  {
    public tools: object = {
        type: 'MultiRow',
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|',
    'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };
    public pasteCleanupSettings: object = {
    prompt: true,
    plainText: false,
    keepFormat: false,
    deniedTags: ['a'],
    deniedAttrs: ['class', 'title', 'id'],
    allowedStyleProps: ['color', 'margin', 'font-size']
};
}



