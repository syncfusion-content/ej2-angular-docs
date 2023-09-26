


import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='220' [treeColumnIndex]='1'  childMapping='subtasks' [toolbar]='toolbarOptions' (toolbarClick)='clickHandler($event)'>
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: object[];

    @ViewChild('treegrid') public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = [{ text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
         { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse', id: 'collapseall', align: 'Right' }];
    }

    clickHandler(args: ClickEventArgs): void {
        if (args.item.id === 'expandall') {
            (this.treegrid as TreeGridComponent).expandAll();
        }

        if (args.item.id === 'collapseall') {
            (this.treegrid as TreeGridComponent).collapseAll();
        }
    }
}



