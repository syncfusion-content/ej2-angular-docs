import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarSettingsModel, ToolbarService, HtmlEditorService, QuickToolbarService, ImageService, LinkService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RichTextEditorModule],
  template: `
    <ejs-richtexteditor id="editor" [toolbarSettings]="tools" [value]="value">
    </ejs-richtexteditor>
  `,
  providers: [ToolbarService, HtmlEditorService, QuickToolbarService, ImageService, LinkService, TableService, PasteCleanupService]
})

export class AppComponent {
  public value: string = `
    <table border="1" style="width:100%; border-collapse: collapse;">
      <tr>
        <th>Department</th>
        <th>Details</th>
      </tr>
      <tr>
        <td>Sales</td>
        <td>
          <table border="1" style="width:100%; border-collapse: collapse;">
            <tr>
              <th>Employee</th>
              <th>Target</th>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>$50,000</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>$60,000</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>Marketing</td>
        <td>Campaign planning in progress</td>
      </tr>
    </table>
  `;

  public tools: ToolbarSettingsModel = {
    items: [
      'Undo',
      'Redo',
      '|',
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      '|',
      'Formats',
      'Alignments',
      '|',
      'NumberFormatList',
      'BulletFormatList',
      '|',
      'CreateLink',
      'Image',
      'CreateTable',
      '|',
      'SourceCode'
    ]
  };
}