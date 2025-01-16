import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Component, ViewChild } from '@angular/core';
import { RichTextEditorAllModule, ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [
        RichTextEditorAllModule,
        FormsModule,
        ButtonModule,
        ReactiveFormsModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<div class="control-section">
    <div class="content-wrapper">
        <div id='content' class='box-form' style="margin: 0 auto; max-width:750px; padding:25px">
            <form (ngSubmit)="onSubmit()" #editorForm="ngForm">
                <div class="form-group">
                    <ejs-richtexteditor #fromEditor #name='ngModel' [(value)]='value' required name="name"
                        [(ngModel)]="value" (created)="editorCreated()"></ejs-richtexteditor>
                    <div *ngIf="(name.invalid && name.touched)" class="alert alert-danger">
                        <div *ngIf="name.errors!['required']">
                            Value is required.
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" ejs-button [disabled]="!editorForm.valid">Submit</button>
                    <button type="reset" ejs-button style="margin-left: 20px">Reset</button>
                </div>
            </form>
        </div>
    </div>
</div>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent {

    public value: string | null = null;

    @ViewChild('fromEditor')
    private editorEle: RichTextEditorComponent | undefined;

    editorCreated(): void {
        this.editorEle!.element.focus();
    }

    onSubmit(): void {
        alert('Form submitted successfully');
    }
}