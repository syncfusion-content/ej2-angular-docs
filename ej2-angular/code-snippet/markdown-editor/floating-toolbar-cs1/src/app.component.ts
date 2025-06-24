import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'
import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, HtmlEditorService, MarkdownEditorService, ImageService, LinkService, TableService, RichTextEditorComponent, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
@Component({
  imports: [
    RichTextEditorModule,
    CheckBoxModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor #typeEditor id='editor' [editorMode]='mode' [toolbarSettings]='tools' [(value)]='value'>
    </ejs-richtexteditor>
     <div>
    <ejs-checkbox #float label="Enable Floating" [checked]="true" (change)="onChangeFloat()"></ejs-checkbox>
    </div>`,
  providers: [ToolbarService, HtmlEditorService, MarkdownEditorService, ImageService, LinkService, TableService]
})
export class AppComponent {
  @ViewChild('float') editorFloatObj: CheckBoxComponent | undefined;
  @ViewChild('typeEditor') editorObj: RichTextEditorComponent | undefined;
  public mode: string = 'Markdown';
  public value: string = "<p>The Rich Text Editor triggers events based on its actions. </p><p> The events can be used as an extension point to perform custom operations.</p><ul><li>created - Triggers when the component is rendered.</li><li>change - Triggers only when Rich Text Editor is blurred and changes are done to the content.</li><li>focus - Triggers when Rich Text Editor is focused in.</li><li>blur - Triggers when Rich Text Editor is focused out.</li><li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li><li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li><li>destroyed – Triggers when the component is destroyed.</li></ul>";
  public tools: ToolbarSettingsModel = {
    enableFloating: false
  };
  public onChangeFloat(): void {
    this.editorObj!.toolbarSettings.enableFloating = this.editorFloatObj!.checked;
  }
}