import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, MarkdownEditorService, HtmlEditorService, ImageService, LinkService, TableService, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [RichTextEditorModule],
  standalone: true,
  selector: "app-root",
  template: `<ejs-richtexteditor [editorMode]="mode"></ejs-richtexteditor>`,
  providers: [ToolbarService, HtmlEditorService, MarkdownEditorService, ImageService, LinkService, TableService],
})
export class App {
  public mode: string = 'Markdown';
}