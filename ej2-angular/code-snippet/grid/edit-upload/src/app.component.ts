import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'

import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';
import {
    EditSettingsModel,
    ToolbarItems,
    SaveEventArgs
} from '@syncfusion/ej2-angular-grids';
import { FileInfo, SuccessEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule,
        UploaderModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
    selector: 'app-root',
    template: `
        <ejs-grid [dataSource]='data' allowPaging='true' [editSettings]='editSettings' [toolbar]='toolbar' (actionBegin)='actionBegin($event)'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                <e-column field='FirstName' headerText='First Name' textAlign='Left'  width=120></e-column>
                <e-column field='LastName' headerText='Last Name'  textAlign='Left' width=120></e-column>
                <e-column field='Title' headerText='Title'  textAlign='Left' width=120 ></e-column>
                <e-column headerText='Employee Image' width='150' textAlign='Center'>
                    <ng-template #template let-data>
                        <div class="image">
                        <img [src]="!data.Image ? 'https://ej2.syncfusion.com/angular/demos/assets/grid/images/' + data.EmployeeID + '.png' : data.Image"  alt="{{data.EmployeeID}}" />
                        </div>
                    </ng-template>
                    <ng-template #editTemplate let-data>
                        <ejs-uploader #defaultupload (success)="onUploadSuccess($event)" [asyncSettings]='path' multiple='false'></ejs-uploader>
                    </ng-template>
                </e-column>
            </e-columns>
        </ejs-grid>
    `,
})
export class AppComponent implements OnInit {
    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderData?: object | any;
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightRules?: object;
    public strm?:string;
    public path: object = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };

    ngOnInit(): void {
        this.data = employeeData;
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 5 };
        this.freightRules = { required: true, min: 1, max: 1000 };
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as columnDataType)['Image'] = this.strm;
        }
    }

    onUploadSuccess(args: SuccessEventArgs) {
        if (args.operation === 'upload') {
            const fileBlob = (args.file as FileInfo).rawFile as Blob;
            const file = new File([fileBlob], (args.file as FileInfo).name);
            this.strm = this.getBase64(file);
        }
    }

    getBase64(file:File): string {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.strm = reader.result as string;
        };
        return (this.strm as string); 
    }
}

export interface columnDataType{
    Image?: string;
 }