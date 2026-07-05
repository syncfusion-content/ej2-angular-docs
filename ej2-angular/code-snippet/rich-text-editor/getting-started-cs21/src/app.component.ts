import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarSettingsModel, ToolbarService, HtmlEditorService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [(value)]='value' [toolbarSettings]='tools' [undoRedoSteps] ='steps' [undoRedoTimer]='timer'>
               </ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, PasteCleanupService],
})
export class AppComponent {
    public value: string = "<p>The Rich Text Editor triggers events based on its actions. </p><p> The events can be used as an extension point to perform custom operations.</p><ul><li>created - Triggers when the component is rendered.</li><li>change - Triggers only when Rich Text Editor is blurred and changes are done to the content.</li><li>focus - Triggers when Rich Text Editor is focused in.</li><li>blur - Triggers when Rich Text Editor is focused out.</li><li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li><li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li><li>destroyed – Triggers when the component is destroyed.</li></ul>";
    public tools: ToolbarSettingsModel = { items: ['Undo', 'Redo'] };
    public steps: number = 50;
    public timer: number = 400;
}
