import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<button ej-button id='edit' (click)='clickEdit()'>Edit</button>
               <button ej-button id='add' (click)='clickAdd()'>Add</button>
               <button ej-button id='delete' (click)='clickDelete()'>Delete</button>
               <button ej-button id='updaterow' (click)='clickUpdateRow()'>Update Row</button>
               <button ej-button id='updatecell' (click)='clickUpdateCell()'>Update cell</button>
               <button ej-button id='updateEntireRow' (click)='clickupdateEntireRow()'>Update entire Row</button>
               <ejs-treegrid #treegrid id="TreeGrid" [dataSource]='data' [editSettings]='editSettings' [treeColumnIndex]='1' height='270' childMapping='subtasks'>
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
    public editSettings?: EditSettingsModel;
    public data?: object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Row" };
    }

    clickEdit(){
        (this.treegrid as TreeGridComponent).startEdit();
    }
    clickAdd(){
        (this.treegrid as TreeGridComponent).addRecord({ taskID: "150", taskName: "Newly Added", priority: "Normal", duration: "5",startDate: "2/3/2017"  });
    }
    clickDelete(){
        (this.treegrid as TreeGridComponent).deleteRecord();
    }
    clickUpdateRow(){
        (this.treegrid as TreeGridComponent).updateRow(0, { taskID: 1, taskName: 'Updated', priority: 'Low', duration: 15, startDate: '12/3/2019' });
    }
    clickUpdateCell(){
        (this.treegrid as TreeGridComponent).setCellValue(((this.treegrid as TreeGridComponent).getCurrentViewRecords()[0] as any).taskID,'taskName','Value Changed');
    }
    clickupdateEntireRow() {
        (this.treegrid as TreeGridComponent).setRowData(((this.treegrid as TreeGridComponent).getCurrentViewRecords()[1] as any).taskID, (this.treegrid as TreeGridComponent).flatData[35]);
      }
}
