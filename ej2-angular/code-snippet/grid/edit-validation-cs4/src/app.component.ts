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

import { Component, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditService, ToolbarService, PageService, getObject, GridComponent, EditEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
    selector: 'app-root',
    template: `
        <div class="control-section">
            <ejs-grid #grid [dataSource]='data' (actionComplete)='onActionComplete($event)' allowPaging='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' [validationRules]='orderIDRules' isPrimaryKey='true' ></e-column>
                    <e-column field='CustomerID' headerText='Customer Name' width='120' [validationRules]='customerIDRules'></e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' [validationRules]='freightRules'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' [validationRules]='countryRules' [edit]='editparams'></e-column>
                </e-columns>
            </ejs-grid>
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
    public countryRules?: Object;
    public pageSettings?: Object;
    public editparams?: Object;

    @ViewChild('grid', {static: false})
    public grid?: GridComponent;

    public ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.orderIDRules = { required: true, number: true };
        this.customerIDRules = { required: true };
        this.countryRules = { required: true };
        this.freightRules =  { required: true };
        this.editparams = { params: { popupHeight: '200px' }};
        this.pageSettings = { pageCount: 5};
    }

    public onActionComplete(args:EditEventArgs):void {
      if (args.requestType == "beginEdit" || args.requestType == "add") { 
        var valueError = getObject('valErrorPlacement', (this.grid as GridComponent).editModule).bind((this.grid as GridComponent).editModule);  
        (this.grid as GridComponent).editModule.formObj.customPlacement = (input, error) => { 
          valueError(input, error);
          debugger;
          var element = document.getElementById(input.name + '_Error');
          var tooltipWidth = (element as HTMLElement).offsetWidth;
          var  inputElement = null;
          if (document.querySelector('#' + (this.grid as GridComponent).element.id + input.name)) {
            inputElement = document.querySelector('#' +(this.grid as GridComponent).element.id + input.name);
          } else if (document.querySelector('#' + input.name)) {
            inputElement = document.querySelector('#' + input.name);
          }
          var inputPosition = ( inputElement as Element).getBoundingClientRect();
          var leftPosition =  (inputPosition.left - tooltipWidth - 16).toString() + 'px'; //for right side
          var topPosition = (inputPosition.top).toString() + 'px';
          (element as HTMLElement).style.left = leftPosition; 
          (element as HTMLElement).style.top =  topPosition;
          (element as HTMLElement).style.position = 'fixed';
        } 
      } 
    }
}