import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids'

import { Component, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditService, ToolbarService, PageService, EditEventArgs, GridComponent } from '@syncfusion/ej2-angular-grids';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule
    ],

providers: [PdfExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `
        <div class="control-section">
        <div class="col-lg-9">
            <ejs-grid #normalgrid id='Normalgrid' [dataSource]='data' allowPaging='true' (actionComplete)="onActionComplete($event)" [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar'  (actionComplete)='onActionComplete($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey='true' [validationRules]='orderIDRules'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width='140' [validationRules]='customerIDRules'></e-column>
                    <e-column field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit' [validationRules]='freightRules' [edit]='edit'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='120' editType='datetimepickeredit' [format]='formatoptions' textAlign='Right'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' [edit]='editparams'></e-column>
                </e-columns>
            </ejs-grid>
        </div>
       </div>`,
    providers: [ToolbarService, EditService, PageService]
})
export class AppComponent {
  
    public data?: Object[];
    public editSettings?: Object;
    public toolbar?: string[];
    public orderIDRules?: Object;
    public customerIDRules?: Object;
    public freightRules?: Object;
    public editparams?: Object;
    public edit?: Object;
    public pageSettings?: Object;
    public formatoptions?: Object;
    public formElement?: HTMLFormElement;

    public customFn: (args: { [key: string]: number }) => boolean = (args: { [key: string]: number }) => {
        return (args['value'] <= 1000);
    }

    public customFn1: (args: { [key: string]:  number}) => boolean = (args: { [key: string]:  number }) => {
      return (args['value'] >= 1);
    }

    public ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true , newRowPosition: 'Top' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true, number: true };
        this.customerIDRules = { required: true };
        this.freightRules = {
            required: true,
            maxLength: [this.customFn, 'Please enter a value less than 1000'],
            minLength: [this.customFn1, 'Please enter a value greater than 1']
        };
        this.editparams = { params: { popupHeight: '300px' } };
        this.edit = {params: { change: this.onChange.bind(this)}}
        this.pageSettings = { pageCount: 5 };
        this.formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
    }

    onActionComplete(args: EditEventArgs): void {
        if (args.requestType === "beginEdit" || args.requestType === "add") {
            this.formElement = args.form;
        }
    }
    onChange(): void {
        (this.formElement as HTMLFormElement)['ej2_instances'][0].validate();
    }
}
