import { taskData } from './datasource';
import { Component, OnInit } from '@angular/core';
import { ContextMenuService, GridModule, PageService, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

export interface RowData {
  TaskID: number; 
  Title: string;  
  Status: string;
  Priority: string;
  Assignee?: string;   
}

@Component({
    imports: [ GridModule ],
    providers: [PageService, ContextMenuService],
    standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data' [isRowPinned]="isRowPinned" height='210' [allowPaging]="true" [pageSettings]="pageSettings" [contextMenuItems]="contextMenuItems">
                    <e-columns>                  
                        <e-column field="TaskID" headerText="ID" width="80" isPrimaryKey="true" textAlign="Right"></e-column>        
                        <e-column field="Title" headerText="Title" width="100"></e-column>
                        <e-column field="Status" headerText="Status" width="100"></e-column>
                        <e-column field="Assignee" headerText="Assignee" width="100"></e-column>
                        <e-column field="Priority" headerText="Priority" width="100"></e-column>
                    </e-columns>
                 </ejs-grid>
            </div>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public contextMenuItems: string[] = ['PinRow', 'UnpinRow'];
    public pageSettings: PageSettingsModel = { pageSize: 15 };

    ngOnInit(): void {
        this.data = taskData;
    }
    public isRowPinned=( data: RowData)=>
    {
        if (data && data.Status === 'Open' && data.Priority === 'Critical') {
            return true;
        }
        return false;
    }
}
