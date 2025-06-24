import { Component, ViewChild } from '@angular/core';
import { RichTextEditorAllModule, ChangeEventArgs } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, ToolbarSettingsModel, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

@Component({
    imports: [RichTextEditorAllModule],
    standalone: true,
    selector: 'app-root',
    template:  `<ejs-richtexteditor #editor [toolbarSettings]='tools' placeholder='Start to type a content to save' (change)="onChange($event)">
                </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent  {
  @ViewChild('editor')
  public editorObj!: RichTextEditorComponent;

  public tools: ToolbarSettingsModel = {
    items: [
      'Bold',
      'Italic',
      'Underline',
      '|',
      'Formats',
      'Alignments',
      'Blockquote',
      'OrderedList',
      'UnorderedList',
      '|',
      'CreateLink',
      'Image',
      '|',
      'SourceCode',
      'Undo',
      'Redo',
    ],
  };
  public onChange(args: ChangeEventArgs): void {
    console.log('Rich Text Editor value is:' + args.value);
  }
}



