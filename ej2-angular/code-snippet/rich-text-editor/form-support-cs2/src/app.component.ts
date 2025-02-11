import { CommonModule } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { FormControl, FormGroup, Validators, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
    imports: [
        RichTextEditorModule,
        FormsModule,
        CommonModule,
        ButtonModule,
        ReactiveFormsModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<div class="control-section">
        <div class="content-wrapper">
        <div id="content" class="box-form" style="margin: 0 auto; max-width:750px; padding:25px">
         <form [formGroup]="editorForm">
            <div >
                Rich Text Editor contents:
                <pre>{{ editorForm.controls['editor'].value }}</pre>

            </div>
            <div class="example-wrapper">
                <ejs-richtexteditor #fromEditor formControlName="editor" saveInterval=1 >
                </ejs-richtexteditor>
            </div>
        </form>
        </div>
        </div>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {

    public editorForm: FormGroup = new FormGroup({
        editor: new FormControl(
          '<p><b>Rich Text Editor</b> with Reactive Form</p>'
        ),
      });
}



