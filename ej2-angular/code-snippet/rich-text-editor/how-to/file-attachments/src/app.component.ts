import { Component, ViewChild } from '@angular/core';
import { FileInfo, SuccessEventArgs, UploaderComponent, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { ContentRender, HTMLFormatter, RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService, RichTextEditorComponent, NodeSelection } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule,
        UploaderModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' #sample [insertImageSettings]='insertImageSettings' [(value)]='value'></ejs-richtexteditor>
    <ejs-uploader #defaultupload id='defaultfileupload' [asyncSettings]='path' [dropArea]='dropElement' (success)='onImageUploadSuccess($event)'></ejs-uploader>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService]
})
export class AppComponent {
    @ViewChild('sample') public editorObj!: RichTextEditorComponent;
    @ViewChild('defaultupload') public uploadObj!: UploaderComponent;
    public value: string = "<p>The Rich Text Editor triggers events based on its actions. </p> <p> The events can be used as an extension point to perform custom operations.</p> <ul><li>created - Triggers when the component is rendered.</li><li>change - Triggers only when Rich Text Editor is blurred and changes are done to the content.</li><li>focus - Triggers when Rich Text Editor is focused in.</li><li>blur - Triggers when Rich Text Editor is focused out.</li><li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li><li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li><li>destroyed – Triggers when the component is destroyed.</li></ul>";
    public insertImageSettings: object = {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/Save",
        path: "../Files/"
    };

    public path: Object = {
        saveUrl: '[SERVICE_HOSTED_PATH]/api/uploadbox/Save',
    };
    public dropElement = '#editor'
    public selection: NodeSelection = new NodeSelection();
    public range!: Range;
    public saveSelection!: NodeSelection;
    public onImageUploadSuccess = (args: SuccessEventArgs) => {
        ((this.editorObj!.contentModule as ContentRender).getEditPanel() as HTMLElement).focus();
        this.range = this.selection.getRange(document);
        this.saveSelection = this.selection.save(this.range, document);
        var fileUrl = document.URL + this.editorObj.insertImageSettings.path + (args.file as FileInfo).name;
        if ((this.editorObj!.formatter as HTMLFormatter).getUndoRedoStack().length === 0) {
            (this.editorObj!.formatter as HTMLFormatter).saveData();
        }
        this.saveSelection.restore();
        this.editorObj.executeCommand('createLink', { url: fileUrl, text: fileUrl, selection: this.saveSelection });
        (this.editorObj!.formatter as HTMLFormatter).saveData();
        (this.editorObj!.formatter as HTMLFormatter).enableUndo(this.editorObj);
        this.uploadObj.clearAll();
    }
}