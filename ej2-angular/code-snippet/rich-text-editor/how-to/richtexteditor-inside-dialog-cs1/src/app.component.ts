import { Component, ViewChild } from '@angular/core';
import { DialogComponent, DialogModule } from '@syncfusion/ej2-angular-popups';
import { RichTextEditorComponent, RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  imports: [RichTextEditorModule, DialogModule, ButtonModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <button ejs-button (click)="openDialog()">Open Dialog</button>
    <ejs-dialog #dialog [width]="'350px'" [height]="'350px'" [showCloseIcon]="true" [visible] ="false" (open)="onDialogOpen()">
      <ng-template #header>
        <div>Dialog Header</div>
      </ng-template>
      <ng-template #content >
        <ejs-richtexteditor #editor id='editor' [value]="value"></ejs-richtexteditor>
      </ng-template>
      <ng-template #footer>
      <div>Dialog Footer</div>
      </ng-template>
    </ejs-dialog>
  `,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService]
})
export class AppComponent {
  @ViewChild('dialog') dialogObj!: DialogComponent;
  @ViewChild('editor') editorObj!: RichTextEditorComponent;
  public value: string =
    "<p>The Rich Text Editor component is the WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update content. Users can format their content using standard toolbar commands.</p>";

  public openDialog(): void {
    this.dialogObj.show();
  }

  public onDialogOpen(): void {
    this.editorObj.refreshUI();
  }
}