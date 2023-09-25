

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Column, ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' (toolbarClick)='toolbarClick($event)' #treegrid height='265' [allowPaging]='true' pageSettings='pager' printMode='CurrentPage' [treeColumnIndex]='1'
    (printComplete)='printComplete()' childMapping='subtasks' [toolbar]='toolbarOptions'>
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Print'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.text === 'Print') {
            let cols: Column[] = (this.treeGridObj as TreeGridComponent).columns as Column[];
            for (var i = 0; i < cols.length; i++) {
                if (cols[i].field == "duration") {
                    cols[i].visible = true;
                }
                else if (cols[i].field == "startDate") {
                    cols[i].visible = false;
                }
            }
        }
    }
    printComplete(): void {
        let cols: Column[] = (this.treeGridObj as TreeGridComponent).columns as Column[];
        for (var i = 0; i < cols.length; i++) {
            if (cols[i].field == "duration") {
                cols[i].visible = false;
            }
            else if (cols[i].field == "startDate") {
                    cols[i].visible = true;
            }
        }
    }
}



