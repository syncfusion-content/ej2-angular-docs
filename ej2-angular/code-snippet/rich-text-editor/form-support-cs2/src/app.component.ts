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
        <form [formGroup]="editorForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
        <ejs-richtexteditor #fromEditor formControlName="name" (created)="editorCreated()">
        </ejs-richtexteditor>
        <div id="error"></div>
        </div>
        <div class="form-group">
        <button type="submit" ejs-button>Submit</button>
        <button type="reset" ejs-button (click)="editorForm.reset()" style="margin-left: 20px">Reset</button>
        </div>
        </form>
        </div>
        </div>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {

    editorForm!: FormGroup;

    @ViewChild('fromEditor')
    private editorEle: RichTextEditorComponent | undefined;

    constructor() {
        // <--- inject FormBuilder
    }

    ngOnInit(): void {
        this.editorForm = new FormGroup({
            'name': new FormControl(null, Validators.required)
        });
    }

    editorCreated(): void {
        this.editorEle!.element.focus();
    }

    onSubmit(): void {
        alert('Form submitted successfully');
    }
}



