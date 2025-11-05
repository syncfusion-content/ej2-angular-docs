import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, RichTextEditorComponent, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [
    RichTextEditorModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<button id="btn" class="e-btn" style="margin-bottom: 20px;" (click)="selectCell()">Select Cell</button>
    <ejs-richtexteditor #rte [height]="300" [value]="value"></ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})

export class AppComponent {
 @ViewChild('rte') rte!: RichTextEditorComponent;

  public value: string = `
    <table style="width:100%; border-collapse: collapse;" border="1">
      <thead>
        <tr>
          <th style="font-weight:bold; padding:8px;">Product</th>
          <th style="font-weight:bold; padding:8px;">Price</th>
          <th style="font-weight:bold; padding:8px;">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:8px;">Product A</td>
          <td style="padding:8px;">$25</td>
          <td style="padding:8px;">Available</td>
        </tr>
        <tr>
          <td style="padding:8px;">Product B</td>
          <td style="padding:8px;">$40</td>
          <td style="padding:8px;">Out of Stock</td>
        </tr>
      </tbody>
    </table>
  `;

  selectCell(): void {
    const panel = (this.rte as any).contentModule.getEditPanel();
    const cells = panel.querySelectorAll('td');

    if (cells.length > 2) {
      const cell = cells[2]; // Third cell
      const range = document.createRange();
      range.selectNode(cell);

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }

      cell.style.backgroundColor = '#cce5ff';
      cell.classList.add('e-cell-select');
    }
  }
}