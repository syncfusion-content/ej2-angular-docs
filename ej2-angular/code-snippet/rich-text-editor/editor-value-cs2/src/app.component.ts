import { Component, ViewChild } from '@angular/core';
import { RichTextEditorAllModule, ChangeEventArgs } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, ToolbarSettingsModel, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

@Component({
    imports: [RichTextEditorAllModule],
    standalone: true,
    selector: 'app-root',
    template:  `<ejs-richtexteditor #autoSaveEditor (change)="onChange($event)" [toolbarSettings]='tools' placeholder='Start to type a content to save' >
                </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent  {
  @ViewChild('autoSaveEditor')
  public editorObj!: RichTextEditorComponent;
  private editorValue!: string;

  private changedValue!: string;

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

  public onChange(args: ChangeEventArgs){
    //here you can add your code
    this.changedValue = args.value;
  }

  ngAfterViewInit() {
    //insert the content to the editor using value property
    this.editorObj.value = '<p>Welcome to the Syncfusion Rich Text Editor</p>';

    //Get the value from the editor
    this.editorValue = this.editorObj.value;
  }
}



