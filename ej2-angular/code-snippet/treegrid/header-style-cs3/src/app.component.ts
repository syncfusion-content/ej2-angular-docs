

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' (dataBound)="dataBound()" [treeColumnIndex]='1' childMapping='subtasks'>
                 <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' [customAttributes]="{class:'customcss'}" width=120></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right'[customAttributes]="{class:'customcss'}" width=120></e-column>
                    <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid:TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
    }
    dataBound() {
        ((this.treegrid as TreeGridComponent).getColumnHeaderByIndex(0) as HTMLElement).style.color = '#0d0b0b';
        ((this.treegrid as TreeGridComponent).getColumnHeaderByField('taskName') as HTMLElement).style.background = '#f45ddeab';
        ((this.treegrid as TreeGridComponent).getColumnHeaderByField('taskName') as HTMLElement).style.color = '#0d0b0b';
        ((this.treegrid as TreeGridComponent).getColumnHeaderByUid('grid-column2') as HTMLElement).style.background = '#f45ddeab';
        const columnIndex = (this.treegrid as TreeGridComponent).getColumnIndexByField('duration');
        ((this.treegrid as TreeGridComponent).getColumnHeaderByIndex(columnIndex) as HTMLElement).style.color = '#0d0b0b';
        const index = (this.treegrid as TreeGridComponent).getColumnIndexByUid('grid-column2');
        ((this.treegrid as TreeGridComponent).getColumnHeaderByIndex(index) as HTMLElement).style.color = '#0d0b0b';
      }
}



