import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='285' [allowReordering]='true' [treeColumnIndex] ='1' childMapping='subtasks">
                   <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' [allowReordering]="false" format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
        </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('treegrid') public treegridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
    }
}