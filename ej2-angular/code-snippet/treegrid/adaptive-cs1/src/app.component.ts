

import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<div class="e-adaptive-demo e-bigger">
                    <div class="e-mobile-layout">
                        <div class="e-mobile-content">
                           <ejs-treegrid #adaptive id="adaptivebrowser" [dataSource]='data' childMapping='subtasks' [treeColumnIndex]='1' enableAdaptiveUI='true'
                    height='100%' allowPaging='true' allowFiltering='true'
                    allowSorting='true' [editSettings]='editSettings'
                    [filterSettings]='filterSettings' [toolbar]='toolbar' (load)='onLoad($event)'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' isPrimaryKey='true' width='135' textAlign='Right'></e-column>
                        <e-column field='taskName' headerText='Task Name' width='280'></e-column>
                        <e-column field='duration' headerText='Duration' width='140' textAlign='Right'></e-column>
                        <e-column field='progress' headerText='Progress' width='145' textAlign='Right'></e-column>
                    </e-columns>
                </ejs-treegrid>
                        </div>
                    </div>
                </div>`
})

export class AppComponent implements OnInit {
    @ViewChild('adaptive')
    public treegrid?: TreeGridComponent;
    public data?: object[];
    public editSettings?: Object;
    public toolbar?: string[];
    public orderidrules?: Object;
    public customeridrules?: Object;
    public filterSettings?: Object;
    public menuFilter?: Object;
    public checkboxFilter?: Object;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
        this.orderidrules = { required: true, number: true };
        this.customeridrules = { required: true };
        this.filterSettings = { type: 'Excel' };
    }

    public onLoad(args: any): void {
        (this.treegrid as TreeGridComponent).grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
    }
}


