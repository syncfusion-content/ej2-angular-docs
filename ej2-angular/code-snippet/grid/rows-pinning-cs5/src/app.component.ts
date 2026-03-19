import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { EditService, EditSettingsModel, GridModule, PageService, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

export interface RowData {
  TaskID: number; 
  Title: string;  
  Status: string;
  Priority: string;
  Assignee?: string;   
}

@Component({
    imports: [ GridModule],
    providers: [PageService, EditService],
    standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data' height="215"  [isRowPinned]="isRowPinned"  [allowPaging]="true" [pageSettings]="pageSettings" [editSettings]="editSettings" [isRowPinned]="isRowPinned" height="200">
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
    public pageSettings: PageSettingsModel = { pageSize: 15};
    public editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };    
    ngOnInit(): void {
        this.data = data;
    }
    public isRowPinned=( data: RowData)=>
    {
        if (data && data.Status === 'Open' && data.Priority === 'Critical') {
            return true;
        }
        return false;
    }
}
