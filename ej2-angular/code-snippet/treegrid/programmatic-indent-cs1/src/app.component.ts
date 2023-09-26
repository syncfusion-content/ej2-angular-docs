

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `
    <button ejs-button (click)="Indenting()">Indent</button>
    <button ejs-button (click)="Outdenting()">Outdent</button>
    <ejs-treegrid [dataSource]='data'  [treeColumnIndex]='1' height='270' childMapping='subtasks' selectedRowIndex='2' >
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public treegrid?: TreeGridComponent;
    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }

    public Indenting(): void {
        this.treegrid?.indent(this.treegrid.getCurrentViewRecords()[2]);
    }

    public Outdenting(): void {
        this.treegrid?.outdent(this.treegrid.getCurrentViewRecords()[2]);
    }
}


