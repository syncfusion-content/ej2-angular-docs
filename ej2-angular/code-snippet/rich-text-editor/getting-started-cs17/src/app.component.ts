import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, QuickToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [
    RichTextEditorModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools' [quickToolbarSettings]='quickToolbarSettings'></ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService]
})

export class AppComponent {
  public tools = {
    items: ['Image', 'CreateLink']
  };
  public quickToolbarSettings: QuickToolbarSettingsModel = {
    link: ['Open', 'Edit', 'UnLink']
  };
}