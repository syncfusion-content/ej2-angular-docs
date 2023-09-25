

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent, Toolbar } from '@syncfusion/ej2-angular-treegrid';
import { Grid } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' (actionComplete)='actionComplete($event)' (recordDoubleClick)='recordDoubleClick($event)' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    public editSettings?: EditSettingsModel;
    public fieldName?: string;
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public toolbarOptions?: Toolbar;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Row"};
    }
    actionComplete(e: any) {
        if (e.requestType === "beginEdit") {
            // focus the column
            e.form.elements[(((this.treegrid as TreeGridComponent).grid as Grid).element as HTMLElement).getAttribute("id") as string + this.fieldName].focus();
        }
    }
    recordDoubleClick(e: any) {
        var clickedColumnIndex = e.cell.getAttribute("aria-colindex");
        this.fieldName = (this.treegrid as TreeGridComponent | any).columnModel[parseInt(clickedColumnIndex)].field;
    }
}



