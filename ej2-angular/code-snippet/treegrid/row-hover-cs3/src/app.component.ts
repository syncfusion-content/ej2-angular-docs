import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { sampleData } from './datasource';
import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-container',
  template: `<div id='show' style="padding:0px 0px 20px 0px;" >
            </div>
            <p id="message">{{message}}</p>
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
  public message: string = '';

  ngOnInit(): void {
    this.data = sampleData;
  }

  rowDataBound(args: RowDataBoundEventArgs): void {
    //Here bind mouse over event while hovering over the row
    (args.row as HTMLElement).addEventListener(
      'mouseover',
      (mouseargs: MouseEvent) => {
        //Here button creation
        const buttonId = 'element_' + (args.data as any)['taskID'];
        const buttonElement = document.createElement('button');
        buttonElement.id = buttonId;
        buttonElement.textContent = 'Row details';
        let target: any;

        //Set tooltip target
        if (mouseargs && mouseargs.target != null) {
          if ((mouseargs.target as any).classList.contains('e-rowcell')) {
            target = mouseargs.target;
          } else {
            target = null;
          }
        }
        
        //Tooltip creation
        const tooltip: Tooltip = new Tooltip(
          {
            content: buttonElement,
            width: '100px',
            height: '40px',
            opensOn: 'Hover',
          },
          target
        );
        
        //Button click event
        buttonElement.addEventListener('click', () => {
          // Handle button click here
          this.message = `Button clicked for task ID: ${
            (args.data as any)['taskID']
          }`;
        });
      }
    );
  }
}
