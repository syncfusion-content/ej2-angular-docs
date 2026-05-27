import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService, IHtmlFormatterModel, HTMLFormatter } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [RichTextEditorModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor id='editor' #sample [formatter]='formatter' [value]='value'>
  </ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService]
})

export class AppComponent {
  public value: string = "<p>The Rich Text Editor triggers events based on its actions. </p><p> The events can be used as an extension point to perform custom operations.</p><ul><li>created - Triggers when the component is rendered.</li><li>change - Triggers only when editor is blurred and changes are done to the content.</li><li>focus - Triggers when editor is focused in.</li><li>blur - Triggers when editor is focused out.</li><li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li><li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li><li>destroyed – Triggers when the component is destroyed.</li></ul>";
  public customHTMLModel: IHtmlFormatterModel = { // formatter is used to configure the custom key
    keyConfig: {
      'insert-link': 'ctrl+q', // confite the desired key
    }
  };
  public formatter: HTMLFormatter = new HTMLFormatter(this.customHTMLModel); // to configure custom key
}