
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent, EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule, ButtonModule
    ],
    standalone: true,
    providers: [EditService, ToolbarService, PageService],
    selector: 'app-container',
    template: `<button ejs-button id='delete' (click)='clickDelete($event)'>Delete Multiple Rows </button>
                <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='270' [selectionSettings]="selectOptions" [editSettings]='editSettings' childMapping='subtasks' >
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
    public toolbarOptions?: ToolbarItems[];
    public selectOptions?: Object;
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowDeleting: true,  };
        this.selectOptions = { type: 'Multiple' };
    }
    clickDelete(args:MouseEvent) {
        const selectedRows: Element[] = (this.treegrid as TreeGridComponent).getSelectedRows();
        selectedRows.forEach((row:Element) => {
          (this.treegrid as TreeGridComponent).deleteRow(row as HTMLTableRowElement);
        });
    }
    
}