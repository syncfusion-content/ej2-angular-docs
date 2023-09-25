

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { sampleData } from './datasource';
import { TreeGridComponent, SelectionSettingsModel  } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template:
    `<button ej-button id='copy' (click)='copy()'>Copy</button>
     <button ej-button id='copyHeader' (click)='copyHeader()'>CopyHeader</button>
        <ejs-treegrid #treegrid [dataSource]='data' [allowSelection]='true' [allowPaging]='true' height='230' [selectionSettings]='selectionOptions' [pageSettings]='pageSettings' childMapping='subtasks' [treeColumnIndex]='1'>
        <e-columns>
            <e-column field='taskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='taskName' headerText='Task Name' width='200'></e-column>
            <e-column field='startDate' headerText='Start Date' width='100' format="yMd" textAlign='Right'></e-column>
            <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='progress' headerText='Progress' width='90' textAlign='Right'></e-column>
        </e-columns>
    </ejs-treegrid>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public selectionOptions?: SelectionSettingsModel;
    public pageSettings?: Object ;
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.selectionOptions = { type: 'Multiple'};
        this.pageSettings = {pageSize: 10};
    }

    copy() {
        (this.treeGridObj as TreeGridComponent).copy();
    }

    copyHeader() {
        (this.treeGridObj as TreeGridComponent).copy(true);
    }
}


