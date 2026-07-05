import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor'
import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, PasteCleanupService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [
    RichTextEditorModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor id='defaultRTE' #sample [placeholder]='placeholder'></ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, PasteCleanupService, HtmlEditorService]
})

export class AppComponent {
  public placeholder: String = 'Type Something';
}