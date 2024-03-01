

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<div >
                <button ejs-button id="small" cssClass="e-small" (click)="changeHeaderHeight($event)">Change height 20px</button>
                <button ejs-button id="medium" cssClass="e-small" (click)="changeHeaderHeight($event)">Default height 42px</button>
                <button ejs-button  id="big" cssClass="e-small" (click)="changeHeaderHeight($event)">Change height 60px</button>
              </div>

              <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                 <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                  </e-columns>
              </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;

    }
    changeHeaderHeight(event: MouseEvent): void {
        const heightMap: { [key: string]: string } = {
          small: '20px',
          medium: '42px',
          big: '60px'
        };    const headerCells = (this.treegrid as TreeGridComponent).getHeaderContent().querySelectorAll('.e-headercell');
        headerCells.forEach((headerCell:Element) => {
          (headerCell as HTMLElement).style.height = (heightMap)[
            (event.target as HTMLButtonElement).id
          ];
        });
      }
}



