import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, QuickToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [
    RichTextEditorModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools' [enableAutoUrl]='true'></ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})

export class AppComponent {
  public tools = {
    items: ['Image', 'CreateLink']
  };
}