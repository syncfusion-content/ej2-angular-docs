import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import {
  ToolbarService,
  PdfExportService,
  SelectionService,
} from '@syncfusion/ej2-angular-gantt'

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  GanttComponent,
  ToolbarItem,
  PdfExportProperties
} from '@syncfusion/ej2-angular-gantt';
import { editingResources,base64Data } from './data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

@Component({
imports: [ GanttModule],

providers: [ToolbarService, PdfExportService, SelectionService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-gantt #ganttDefault id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [toolbar]="toolbar" [labelSettings]="labelSettings" (pdfColumnHeaderQueryCellInfo)="pdfColumnHeaderQueryCellInfo($event)"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [allowResizing] = 'true' [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"  [splitterSettings]="splitterSettings" [resourceFields]="resourceFields" [resources]="resources">
       <e-columns>
           <e-column field='TaskName' width='250'>
             <ng-template #headerTemplate>
             <img
             src="https://ej2.syncfusion.com/angular/demos/assets/gantt/images/Task name.png"
             width="20"
             height="20"
           /> Task Name
             </ng-template>
           </e-column>
         <e-column field='StartDate'>
           <ng-template #headerTemplate>
               < <img src="https://ej2.syncfusion.com/angular/demos/assets/gantt/images/Start date.png" width="20" height="20" /> Start Date
           </ng-template>
         </e-column>
        </e-columns>
     </ejs-gantt>`,
     styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public labelSettings?: object;
  public resources?: object[];
  public i: number = 0;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public toolbar?: ToolbarItem[];
  @ViewChild('ganttDefault', { static: true })
  public ganttChart?: GanttComponent;
  
  public resourceFields?: object;
  public ngOnInit(): void {
    this.data = base64Data;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      resourceInfo: 'Resources',
      progress : 'Progress',
      startDate: 'StartDate',
      duration: 'Duration',
      parentID:'ParentID',
    };
    this.toolbar = ['PdfExport'];
    this.splitterSettings = {
      columnIndex: 1,
    };
    this.resourceFields = {
      id: 'ResourceId',
      name: 'ResourceName',
    };
    this.labelSettings = {
      taskLabel: '${Progress}%',
    };
    this.resources = editingResources;
    this.projectStartDate= new Date('03/24/2019');
    this.projectEndDate= new Date('04/30/2019');
  }
  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_pdfexport') {
      let exportProperties: PdfExportProperties = {
        fileName: 'new.pdf',
      };
      this.ganttChart!.pdfExport(exportProperties);
    }
  }
  public pdfColumnHeaderQueryCellInfo(args: any): void {  
    let base64Array: Object[] = [
      { 'TaskName': '/9j/4AAQSkZJRgABAQIAHAAcAAD/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAMAAAITAAMAAAABAAEAAAAAAAAAAAAcAAAAAQAAABwAAAAB/9sAQwADAgICAgIDAgICAwMDAwQGBAQEBAQIBgYFBgkICgoJCAkJCgwPDAoLDgsJCQ0RDQ4PEBAREAoMEhMSEBMPEBAQ/9sAQwEDAwMEAwQIBAQIEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAIAAgAwERAAIRAQMRAf/EABgAAQEBAQEAAAAAAAAAAAAAAAYIAAcF/8QALBAAAQQCAgEDAwIHAAAAAAAAAQIDBAUGBxESAAgTIRQVQRYxFzhXdpa01f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwB7gessOlaiw2zpdS4Ld2cqngOyl2rLbHcqjpLiy6IzylL7/gp/J+RxwQQt68w6mewu7XrfEKC+azXGuiqiO2r2ybqKnhD3stLVy2TyOg/cj5A5IXr4G8Cf9+aD0XT6K2Nb1GlsEgz4OJW8mLKjY5DaeYdRDdUhxC0thSVJUAQoEEEAjwNW2XoFprGLb1E/QEGdBeRJiyoztK08w6hQUhxC0kFKkqAIUCCCAR4CDD9sbV2RWSso19r3BrDGza2NfWWEnOH21T2Yst2MJKUs1ryAhwslSeHFfBHyRwSHnW26tv12qpO5Ier8GtMdYoVZI2qJm01L0iCGPfC0IeqEcKLfyErKT+DwfjwFvqO/l62h/Zl3/oveB0TwJTe2FRYxX5RqrLrj065HUuZRdzXIOQ7GRHc6yLV+YlmVDcgPJS6044AQVHhTY/I58Ao3lmJUeibfRWBZH6bKCFbUL1K7PTtRpTrzjsQRlzJCWqxoPyFISkqWepUQOfj48Ctdj4j/ABA15lGB/cPoP1JSzaj6v2vd+n+oYW17nTsnv1789ew5445H7+Ad+x+oX+qGu/8AA53/AGPA5drHb+D4rru/xSy3nrPG86i5hkwnOXDjbTIkG9lrU4qCqY271W0R0BfJSFI5UvqQQKWW5cOT6NMhxTZO+9d5Fl72ByIYjQrmM9LMo1oQll0iXIMuSH+3Z9BSlaiFBCeOSH//2Q==' },
      { 'StartDate': '/9j/4AAQSkZJRgABAQIAHAAcAAD/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAMAAAITAAMAAAABAAEAAAAAAAAAAAAcAAAAAQAAABwAAAAB/9sAQwADAgICAgIDAgICAwMDAwQGBAQEBAQIBgYFBgkICgoJCAkJCgwPDAoLDgsJCQ0RDQ4PEBAREAoMEhMSEBMPEBAQ/9sAQwEDAwMEAwQIBAQIEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAIAAgAwERAAIRAQMRAf/EABcAAQEBAQAAAAAAAAAAAAAAAAcABgX/xAAzEAAABAQDBwEGBwAAAAAAAAABAgMEBQYHEQgSEwAUFRYYITI0IiQxMzVCN0NRVWaCg//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBIUH/2gAMAwEAAhEDEQA/AG2t2PafKP4qHFI3sLlRGR4bE4QlEIi4Yu1XqLJdBsq5UAU1spjEKqoJQBIfEoZTD8QCJcxxTdhwp3JlI6RxCQ5yYQmGOVYjEVYbE8oPVoi8VFNMVRanEoInbjcUvIxwAw27BTHjim7EfTuc6R1ciEhyawi0MbKw6IpQ2J5ReoxFmqCagpC6OBRRI4G4JeRSAJgv3B3ojj2nysGKhvSNlC5UWkeJROLpQ+It2LtJ6syQQcqtlBFRbKUxypJiYBSDyMGUo/AOtP7GoFVcRtTZRkWjGHiLcm8F3qKTvLi68Qd72wIoTMslm1MmmcgXAtigmAXsO1lSwYwJKqEwV0mLD8yw54TiTFLMNJFXblWUHAMjpHK2MAJnC5xNZ2n2EgB2N37BdCqOpVQl+uku4fnuHPCceYpmhp4q0cpSg4FkRIhXJhBQ42OBrNFOwEEO5e/cbIUnSAxqBSrEbTKUZ6oxh4hPOXGt1ikkS4uhEGm6MDqHyrK5dPPqEINgNcoqANrhskLWameB0/jWL2uPPWIuYaV6PLO68Jm5CB8SvCy58+qA62nYlreOqN/INmGiCT5cpetjBnmEvcV00w2XUIAio0ndKem6L2Jq5GN2ykQEMixQEygaYBcN3KH5Y7PTxThLlL0cYMjQlliummJS6vAFlHc7qz03WewxXI+s2TiABkRKIlTDTELjvBg/MDZ6eF+WIHT+C4vaHci4i5hqprczb1xabkI5w20LNkyaQBo6lz3v5aQW8R2aYz1VOkrq9rP1Sfx3gX1P9rJvPof8PP8Ar92zDQxLHQ71NzbzJ+EHBkuAfV/X5Gefw968t8+Z7P6fZs4dUz9DvU3KXLf4QcGV4/8AV/X5HmTz968tz+X7P6/fs4dM9K+krq9ox0t/yLjv1P8Aaz7t67/fw/t9uzTH/9k=' },
    ]
    while (this.i < base64Array.length) {
      const key = Object.keys(base64Array[this.i])[0];
      const value = (base64Array[this.i] as any)[key];;
      if (key === args.column.field) {
        args.headerTemplate.image = [{
          base64: value, width: 20, height: 20
        }];
        args.headerTemplate.value = args.column.field;
        break;
      }
      this.i++;
    }
  }
}
