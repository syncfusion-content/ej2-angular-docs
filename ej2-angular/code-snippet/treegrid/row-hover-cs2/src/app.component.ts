import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { sampleData } from './datasource';

@Component({
  selector: 'app-container',
  template: `<div id='show' style="padding:0px 0px 20px 0px;" >
            </div>

            <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' childMapping='subtasks' (rowDataBound)='rowDataBound($event)' >
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                  </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;

  ngOnInit(): void {
    this.data = sampleData;
  }
  rowDataBound(args: RowDataBoundEventArgs): void {
    (args.row as HTMLElement).addEventListener('mouseover', (e: MouseEvent) => {
      const rowInformation = (this.treegrid as TreeGridComponent).getRowInfo(
        e.target as HTMLElement
      );
      console.log(rowInformation);
      (document.getElementById('show') as HTMLElement).innerHTML = `
        <table style="border-collapse: collapse; width: 600px;">
          <tr style="border: 2px solid;">
            <td style="padding: 2px;"><b>Row Information:</b></td>
          </tr>
          <tr style="border: 2px solid; padding: 8px;">
            <th style="border: 2px solid; padding: 8px; width: 120px;"><b>Class Name</b>
            </th>
            <td style="border: 2px solid; padding: 8px;">${
              (rowInformation.row as Element).className
            }
            </td>
          </tr>
          <tr style="border: 2px solid;">
            <th style="border: 2px solid; padding: 8px;"><b>Row Index</b>
            </th>
            <td style="border: 2px solid; padding: 8px;">${
              rowInformation.rowIndex
            }
          </td>
          </tr>
         </table>`;
    });
  }
}
