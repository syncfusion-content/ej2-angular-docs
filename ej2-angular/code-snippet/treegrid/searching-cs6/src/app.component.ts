

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='270' [treeColumnIndex]='1' [toolbar]='toolbarOptions' childMapping='subtasks' (created)='created($event)'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Search'];
    }
    created(args: any): void {
        (document.getElementById((this.treegrid as TreeGridComponent).grid.element.id + "_searchbar") as HTMLElement).addEventListener('keyup', () => {
                (this.treegrid as TreeGridComponent).search(((event as any).target as HTMLInputElement).value)
        });
    }
}



