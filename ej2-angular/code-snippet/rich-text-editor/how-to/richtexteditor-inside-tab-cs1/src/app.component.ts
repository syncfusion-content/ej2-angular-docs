import { Component } from '@angular/core';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { RichTextEditorModule, ToolbarSettingsModel, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
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
        <ejs-richtexteditor #editor1 [toolbarSettings]='tools' [value]="value"></ejs-richtexteditor>
        </ng-template>
    </e-tabitem>
    <e-tabitem>
        <ng-template #headerText>
           <div> TAB2 </div>
        </ng-template>
        <ng-template #content>
        <ejs-richtexteditor #editor2 [toolbarSettings]='tools' [value]="value"></ejs-richtexteditor>
        </ng-template>
    </e-tabitem>
    <e-tabitem>
        <ng-template #headerText>
           <div> TAB3 </div>
        </ng-template>
        <ng-template #content>
        <ejs-richtexteditor #editor3 [toolbarSettings]='tools' [value]="value"></ejs-richtexteditor>
        </ng-template>
    </e-tabitem>
</e-tabitems>
</ejs-tab>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService]
})

export class AppComponent {

  public value: string =
    "<p>The Rich Text Editor component is the WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update content. Users can format their content using standard toolbar commands.</p>";
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