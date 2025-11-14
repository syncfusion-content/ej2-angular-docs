import { Component, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, ToolbarItem, PdfExportProperties, GanttModule, PdfExportService, SelectionService, ToolbarService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { editingData } from './data';

@Component({
  selector: 'app-root',
  imports: [GanttModule],
  providers: [ToolbarService, PdfExportService, SelectionService],
  standalone: true,
  template: `
  <div class="form-container">
    <form id="formComponent">
      <div class="e-input-group">
        <input class="e-input" id="name" type="text" placeholder=" " required />
        <span class="e-float-text">Name</span>
      </div>
      <div class="e-input-group">
        <input class="e-input" id="email" type="email" placeholder=" " required />
        <span class="e-float-text">Email</span>
      </div>
      <div class="e-input-group">
        <textarea class="e-input" id="message" rows="2" placeholder=" "></textarea>
        <span class="e-float-text">Message</span>
      </div>
    </form>
  </div>
  <div class="gantt-container">
    <ejs-gantt #gantt id="ganttDefault" height="520px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar"
    (toolbarClick)="toolbarClick($event)" allowPdfExport="true" [treeColumnIndex]="1"
    ></ejs-gantt>
  </div>`,
  styles: [`
      .form-container {
        background: #ffffff;
        padding: 24px 28px;
        border: 1px solid #d1d9e0;      
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,.1);
        width: 500px;                 
        text-align: center;
      }

      .e-input-group {
        margin-bottom: 16px;
      }
      .e-input-group .e-input {
        height: 38px;
        padding: 0 10px;
        font-size: 13.5px;
        border-radius: 6px;
      }
      .e-input-group textarea.e-input {
        height: auto;
        padding: 8px 10px;
        resize: none;
        border-radius: 6px;
      }
      .e-float-text {
        font-size: 12.5px;
        color: #2874A6;
        font-weight: 500;
      }
      .e-input:focus {
        border-color: #2874A6 !important;
        box-shadow: 0 0 0 2px rgba(40,116,166,.15);
      }
    `]
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttChart!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public toolbar: ToolbarItem[] = ['PdfExport'];

  public ngOnInit(): void {
    this.data = editingData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID',
    };
  }

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_pdfexport') {
      const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
      const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
      const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';

      const headerText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

      const exportProperties: PdfExportProperties = {
        header: {
          fromTop: 100,
          height: 150,
          contents: [
            {
              type: 'Text',
              value: headerText,

              position: { x: 50, y: 30 },

              style: {
                textBrushColor: '#C25050',
                fontSize: 30,
                hAlign: 'Center',
                vAlign: 'Top',
              },
            },
          ],
        },
        footer: {
          fromBottom: 0,
          height: 0,
          contents: [],
        },
        fitToWidthSettings: {
          isFitToWidth: true,
        },
      };
      this.ganttChart.pdfExport(exportProperties);
    }
  }
}