import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { TabAllModule } from '@syncfusion/ej2-angular-navigations'




import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataUtil } from '@syncfusion/ej2-data';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, GridComponent, DialogEditEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        ButtonModule,
        CheckBoxAllModule,
        TabAllModule,
        GridModule,
        DropDownListAllModule, ReactiveFormsModule, FormsModule
    ],

providers: [EditService, ToolbarService],
standalone: true,
    selector: 'app-root',
    templateUrl: `tablikeedit.html`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public shipCountryDistinctData?: object;
    @ViewChild('grid')
    grid?: GridComponent;
    @ViewChild('orderForm')
    orderForm?: FormGroup;
    @ViewChild('tab')
    tabObj: any;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true );
    }

    actionComplete(args: DialogEditEventArgs) {
        if (((args as any).requestType === 'beginEdit' || (args as any).requestType === 'add')) {
            // Disable default validation.
            (args as any).form.ej2_instances[0].rules = {};
            // Set initial Focus
            if ((args as any).requestType === 'beginEdit') {
                ((args as any).form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
            }
        }
    }

    nextBtn() {
        this.moveNext();
    }

    selecting(e: any) {
        if(e.isSwiped){
            e.cancel = true;
        }
        if(e.selectingIndex === 1) {
            e.cancel = !this.orderForm?.valid;
        }
    }

    moveNext() {
        if (this.orderForm?.valid) {
            this.tabObj.select(1);
        }
    }

    submitBtn() {
        if (this.orderForm?.valid) {
            (this.grid as any).endEdit();
        }
    }
}



