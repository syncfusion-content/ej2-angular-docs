import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {  TreeGridModule, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid'
import { PageService, EditService, ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { projectData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { CellEditArgs, CellSaveArgs } from '@syncfusion/ej2-angular-grids';
@Component({
    imports: [TreeGridModule],

    providers: [PageService, EditService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' parentIdMapping='parentID' idMapping='TaskID' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (cellSaved)="save($event)" >
                    <e-columns>
                        <e-column field='TaskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='Priority' headerText='Priority' textAlign='Right' width=90></e-column>
                        <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' editType='datepickeredit' width=90></e-column>
                        <e-column field='Duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = projectData;
        this.editSettings = {
            showConfirmDialog: true, showDeleteConfirmDialog: true,
            allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch'
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    save(args: CellSaveArgs) {
        (this.treegrid as TreeGridComponent).endEdit();
      }
}



