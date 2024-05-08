import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { data, addImage } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService, EditService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `
        <div class="control-section">
            <ejs-grid [dataSource]='data' allowPaging='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey='true' [validationRules]='orderidrules'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width='140' [validationRules]='customeridrules'></e-column>
                    <e-column field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit' [validationRules]='freightrules'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='120' editType='datetimepickeredit' [format]='formatoptions' textAlign='Right'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' [edit]='editparams'></e-column>
                </e-columns>
                
                <ng-template #emptyRecordTemplate>
                    <div class='emptyRecordTemplate'>
                        <img [src] = "imgUrl" class="e-emptyRecord" alt="No record">
                        <span>There is no data available to display at the moment.</span>
                    </div>
                </ng-template>
            </ejs-grid>
        </div>`,
    styleUrls: ['app.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    public data!: Object[];
    public imgUrl!: string;
    public pageSettings!: Object;
    public editSettings!: Object;
    public toolbar!: string[];
    public customeridrules!: Object;
    public orderidrules!: Object;
    public freightrules!: Object;
    public editparams!: Object;
    public formatoptions!: Object;

    ngOnInit(): void {
        this.data = [];       
        this.imgUrl = addImage;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.editparams = { params: { dataSource: new DataManager(data), fields: {text:'ShipCountry',value:'ShipCountry'}}};
        this.pageSettings = { pageCount: 5 };
        this.customeridrules = { required: true };
        this.orderidrules = { required: true, number: true };
        this.freightrules = { required: true, number: true };
        this.formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
    }
}