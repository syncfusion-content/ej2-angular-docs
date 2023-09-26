


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    selector: 'app-root',
    template: `<div class="control-section">
    <div class="content-wrapper">
        <div id='content' class='box-form' style="margin: 0 auto; max-width:750px; padding:25px">
            <form (ngSubmit)="onSubmit()" #rteForm="ngForm">
                <div class="form-group">
                    <ejs-richtexteditor #fromRTE #name='ngModel' [(value)]='value' required name="name"
                        [(ngModel)]="value" (created)="rteCreated()"></ejs-richtexteditor>
                    <div *ngIf="(name.invalid && name.touched)" class="alert alert-danger">
                        <div *ngIf="name.errors!['required']">
                            Value is required.
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" ejs-button [disabled]="!rteForm.valid">Submit</button>
                    <button type="reset" ejs-button style="margin-left: 20px">Reset</button>
                </div>
            </form>
        </div>
    </div>
</div>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent  {

    public value: string |null = null;

    @ViewChild('fromRTE')
    private rteEle: RichTextEditorComponent | undefined;

    rteCreated(): void {
        this.rteEle!.element.focus();
    }

    onSubmit(): void {
        alert('Form submitted successfully');
    }
}



