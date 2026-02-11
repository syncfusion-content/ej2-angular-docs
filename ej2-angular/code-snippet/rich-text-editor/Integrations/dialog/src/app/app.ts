import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DialogComponent, DialogModule } from '@syncfusion/ej2-angular-popups';
import { RichTextEditorComponent, RichTextEditorModule, ToolbarSettingsModel, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  imports: [RichTextEditorModule, DialogModule, ButtonModule],
  standalone: true,
  selector: 'app-root',
  styleUrl: 'app.css',
  encapsulation: ViewEncapsulation.None,
  template: `
    <button ejs-button (click)="openDialog()">Open Dialog</button>
    <ejs-dialog #dialog [width]="'350px'" [height]="'400px'" [showCloseIcon]="true" [visible] ="false" (open)="onDialogOpen()">
      <ng-template #header>
        <div>Dialog Header</div>
      </ng-template>
      <ng-template #content >
        <ejs-richtexteditor #editor [toolbarSettings]='tools'></ejs-richtexteditor>
      </ng-template>
      <ng-template #footer>
      <div>Dialog Footer</div>
      </ng-template>
    </ejs-dialog>
  `,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class App {
  @ViewChild('dialog')
  dialogObj!: DialogComponent;
  @ViewChild('editor')
  editorObj!: RichTextEditorComponent;

  public tools: ToolbarSettingsModel = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
  };

  public openDialog(): void {
    this.dialogObj.show();
  }

  public onDialogOpen(): void {
    this.editorObj.refreshUI();
  }
}