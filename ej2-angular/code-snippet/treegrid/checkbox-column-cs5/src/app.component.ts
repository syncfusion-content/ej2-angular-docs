import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-container',
  encapsulation: ViewEncapsulation.None,
  template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' 
                autoCheckHierarchy='true' enableCollapseAll="true" (checkboxChange)="checkboxChange($event)">
                <e-columns>
                  <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                  <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180 [showCheckbox]='true'></e-column>
                  <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                  <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                </e-columns>
              </ejs-treegrid>`,
  styles: [
    `
  .bgcolor td {
    background-color: rgb(207 183 183) !important;
    color: white !important;
}`,
  ],
})
export class AppComponent implements OnInit {
  public data?: Object[];
  @ViewChild('treegrid')
  public treegrid!: TreeGridComponent;

  ngOnInit(): void {
    this.data = sampleData;
  }

  checkboxChange(args: any) {
    if (args.checked) {
      setTimeout(() => {
        const checkedRows = this.treegrid.element.querySelectorAll('.e-check');
        Array.from(checkedRows).map((row) => {
          row?.closest('tr')?.classList.add('bgcolor');
        });
      }, 0);
    } else {
      setTimeout(() => {
        const coloredRows = this.treegrid.element.querySelectorAll('.bgcolor');

        Array.from(coloredRows).map((row) => {
          if (row.querySelector('.e-uncheck') || row.querySelector('.e-stop')) {
            row.classList.remove('bgcolor');
          }
        });
      }, 0);
    }
  }
}
