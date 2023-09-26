


import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-root',
    template: `<div class="control-section">    <div class="content-wrapper">        <div id="content" class="box-form" style="margin: 0 auto; max-width:750px; padding:25px">            <form [formGroup]="rteForm" (ngSubmit)="onSubmit()">                <div class="form-group">                    <ejs-richtexteditor #fromRTE formControlName="name" (created)="rteCreated()">                    </ejs-richtexteditor>                    <div *ngIf="rteForm!.invalid && rteForm!.controls['name'].touched" class="alert alert-danger">                        <div *ngIf="rteForm.controls['name'].errors!['required']">                            Value is required.                        </div>                    </div>                </div>                <div class="form-group">                    <button type="submit" ejs-button [disabled]="!rteForm.valid">Submit</button>                    <button type="reset" ejs-button (click)="rteForm.reset()" style="margin-left: 20px">Reset</button>                </div>            </form>        </div>    </div></div>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent {

    rteForm!: FormGroup;

    @ViewChild('fromRTE')
    private rteEle: RichTextEditorComponent | undefined;

    constructor() {
        // <--- inject FormBuilder
    }

    ngOnInit(): void {
        this.rteForm = new FormGroup({
            'name': new FormControl(null, Validators.required)
        });
    }

    rteCreated(): void {
        this.rteEle!.element.focus();
    }

    onSubmit(): void {
        alert('Form submitted successfully');
    }
}



