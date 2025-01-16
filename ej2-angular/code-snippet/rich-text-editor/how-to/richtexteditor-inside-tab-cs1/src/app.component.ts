import { Component, ViewChild } from '@angular/core';
import { TabComponent, TabModule } from '@syncfusion/ej2-angular-navigations';
import { RichTextEditorComponent, RichTextEditorModule, ToolbarSettingsModel, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  imports: [RichTextEditorModule, TabModule, ButtonModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-tab #tab>
    <e-tabitems>
    <e-tabitem>
        <ng-template #headerText>
           <div> TAB1 </div>
        </ng-template>
        <ng-template #content>
        <ejs-richtexteditor #editor [toolbarSettings]='tools'></ejs-richtexteditor>
        </ng-template>
    </e-tabitem>
    <e-tabitem>
        <ng-template #headerText>
           <div> TAB2 </div>
        </ng-template>
        <ng-template #content>
        <ejs-richtexteditor #editor [toolbarSettings]='tools'></ejs-richtexteditor>
        </ng-template>
    </e-tabitem>
    <e-tabitem>
        <ng-template #headerText>
           <div> TAB3 </div>
        </ng-template>
        <ng-template #content>
        <ejs-richtexteditor #editor [toolbarSettings]='tools'></ejs-richtexteditor>
        </ng-template>
    </e-tabitem>
</e-tabitems>
</ejs-tab>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})

export class AppComponent {

  @ViewChild('tab') tabObj!: TabComponent;
  @ViewChild('editor') editorObj!: RichTextEditorComponent;
  public tools: ToolbarSettingsModel = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
  }
}