import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';

export interface RowData {
  TaskID: number; 
  Title: string;  
  Status: string;
  Priority: string;
  Assignee?: string;   
}
@Component({
    imports: [ GridModule],
    standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data' height="260" [isRowPinned]="isRowPinned">
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
