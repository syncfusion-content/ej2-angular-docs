import { CommonModule } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

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
        <div class="checkbox-wrapper">
            <input type="checkbox" checkBox id="disabled" [(ngModel)]="isDisabled" (change)="onCheckboxChange()"/>
            <label class="checkbox-label" for="disabled">Disabled</label>
        </div>
        <div class="content-wrapper">
        <form [formGroup]="form">
                <ejs-richtexteditor #fromEditor  formControlName="editor" ></ejs-richtexteditor>         
        </form>
        </div>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService]
})

export class AppComponent {
  public form: FormGroup;
  public isDisabled = true;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      editor: new FormControl({ value: '', disabled: true }),
    });
  }

  public onCheckboxChange(): void {
    if (this.isDisabled) {
      (this.form as any).get('editor').disable();
      return;
    }
    (this.form as any).get('editor').enable();
  }
}