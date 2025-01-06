import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, RichTextEditorComponent, ContentRender } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' #sample [(value)]='value' (created)="onCreate()"></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {
    @ViewChild('sample') public editorObj?: RichTextEditorComponent;
    public value: string = `
<p>The Rich Text Editor triggers events based on its actions. </p>
<p> The events can be used as an extension point to perform custom operations.</p>
<ul>
    <li>created - Triggers when the component is rendered.</li>
    <li>change - Triggers only when Rich Text Editor is blurred and changes are done to the content.</li>
    <li>focus - Triggers when Rich Text Editor is focused in.</li>
    <li>blur - Triggers when Rich Text Editor is focused out.</li>
    <li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li>
    <li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li>
    <li>destroyed – Triggers when the component is destroyed.</li>
</ul>`;
    onCreate() {
        const instance: RichTextEditorComponent = this.editorObj as RichTextEditorComponent;
        (instance.contentModule as ContentRender).getDocument().addEventListener("keydown", function (e: KeyboardEvent): void {
            if (e.key === 's' && e.ctrlKey === true) {
                e.preventDefault(); // to prevent default ctrl+s action
                instance.updateValue(); // to update the value after editing
                let value: any = instance.value; // you can get the Rich Text Editor content to save in the desired database
            }
        });
    }
}