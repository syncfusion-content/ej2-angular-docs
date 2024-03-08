import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
  selector: 'app-container',
  template: `<div>
              <button ejs-button id="small" cssClass="e-small" (click)="clickHandler($event)">
                Change height 20px</button>

              <button ejs-button id="medium" cssClass="e-small" (click)="clickHandler($event)">
                Default height 42px</button>

              <button ejs-button  id="big" cssClass="e-small" (click)="clickHandler($event)">
                Change height 60px</button>
            </div>

            <div class="control-section"  style="padding-top:20px">
              <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' [enableHover]='false' rowHeight='42' childMapping='subtasks' >
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                  </e-columns>
              </ejs-treegrid>
            </div>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;
  public heightRow: { [key: string]: number } = {
    small: 20,
    medium: 40,
    big: 60,
  };
  ngOnInit(): void {
    this.data = sampleData;
  }
  clickHandler(args: MouseEvent): void {
    (this.treegrid as TreeGridComponent).rowHeight =
      this.heightRow[(args.target as HTMLElement).id];
  }
}
