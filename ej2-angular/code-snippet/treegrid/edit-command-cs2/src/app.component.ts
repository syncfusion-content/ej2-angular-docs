import { NgModule,ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TreeGridComponent, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService,EditService,ToolbarService,CommandColumnService  } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { closest } from '@syncfusion/ej2-base';
import { sampleData } from './datasource';
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { CommandClickEventArgs, CommandModel } from "@syncfusion/ej2-angular-grids" ;
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [TreeGridModule, DialogModule, CommonModule],

    providers: [PageService, EditService, ToolbarService, CommandColumnService ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        <e-column headerText='Commands' width=120 [commands]='commands'></e-column>
                    </e-columns>
                </ejs-treegrid>
                <ejs-dialog #dialog header="Row Information" [content]="dialogContent" showCloseIcon="true" width="400px" [visible]="dialogVisible" (close)="dialogClose()"> 
                    <ng-template #dialogContent>
                        <ng-container *ngIf="rowData">
                            <p><b>Task Name:</b>{{rowData.taskName}} </p>
                            <p><b>Task ID:</b>{{rowData.taskID}} </p>
                            <p><b>Duration:</b>{{rowData.duration}} </p>
                        </ng-container>
                    </ng-template>
                </ejs-dialog> `
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public commands?: any;
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;

    public rowData: any;
    public dialogVisible: boolean = false;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: this.onClick.bind(this) } }];
    }
    public onClick(args:any): void {
        let rowIndex: number = (<HTMLTableRowElement>closest(args.target as Element, '.e-row')).rowIndex;
        this.rowData = (this.treegrid as TreeGridComponent).getCurrentViewRecords()[rowIndex];
    
        if (this.rowData) {
            this.dialogVisible = true;
        }
    }
    public dialogClose(): void {
        this.dialogVisible = false;
    }
}



