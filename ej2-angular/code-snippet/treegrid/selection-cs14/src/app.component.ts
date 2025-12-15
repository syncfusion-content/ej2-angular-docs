import { NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule,VirtualScrollService } from '@syncfusion/ej2-angular-treegrid'

import { Component, OnInit, ViewChild } from '@angular/core';
import { taskData } from './datasource';
import { TreeGridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-treegrid'
@Component({
    imports: [
        TreeGridModule,
    ],
    providers: [VirtualScrollService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #Treegrid [dataSource]='data' [treeColumnIndex]='1' [enableVirtualization]=true height='600'  idMapping='TaskID' parentIdMapping='ParentID' 
                [selectionSettings]='selectionSettings' [isRowSelectable]='isRowSelectable'>
                    <e-columns>
                        <e-column type="checkbox" width=90></e-column>
                        <e-column field='Task'  headerText='Task'  width=300></e-column>
                        <e-column field='TaskID' isPrimaryKey="true" visible="false"></e-column>
                        <e-column field='AssignedTo'  headerText='Assigned To'  width=140></e-column>
                        <e-column field='StartDate' headerText='Start' format='yMd' width=180></e-column>
                        <e-column field='DueDate' headerText='Due' format='yMd' width=180></e-column>
                        <e-column field='Priority' headerText='Priority' width=90></e-column>
                        <e-column field='Progress' headerText='Progress' width=110></e-column>
                    </e-columns>
               </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public data: Object[] = [];
    public selectionSettings?: SelectionSettingsModel;
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    ngOnInit(): void {
        this.data = taskData;
        this.selectionSettings = { persistSelection: true };
    }
    isRowSelectable(data: any,columns:any): boolean {
        return data.Progress !== 'Completed';
    }
}