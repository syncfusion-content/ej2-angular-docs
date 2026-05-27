import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, HtmlEditorService, QuickToolbarService, ImageService, LinkService, PasteCleanupService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [
    RichTextEditorModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor  #rte id='editor' [(value)]='value'></ejs-richtexteditor>
   <br>
    <button ejs-button (click)='clearUndoRedoStack(rte)' cssClass='e-primary'>Clear Undo/Redo Stack</button>`,
  providers: [ToolbarService, HtmlEditorService, QuickToolbarService, ImageService, LinkService, PasteCleanupService]
})

export class AppComponent {
  public value: string = "<p>The Rich Text Editor triggers events based on its actions. </p><p> The events can be used as an extension point to perform custom operations.</p><ul><li>created - Triggers when the component is rendered.</li><li>change - Triggers only when Rich Text Editor is blurred and changes are done to the content.</li><li>focus - Triggers when Rich Text Editor is focused in.</li><li>blur - Triggers when Rich Text Editor is focused out.</li><li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li><li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li><li>destroyed – Triggers when the component is destroyed.</li></ul>";
  clearUndoRedoStack(rte: RichTextEditorComponent): void {
    rte.clearUndoRedo();
  }
}