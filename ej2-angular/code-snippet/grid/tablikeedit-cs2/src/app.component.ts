import { data } from './datasource';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogEditEventArgs, EditService, EditSettingsModel, GridComponent, GridModule, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { DataUtil } from '@syncfusion/ej2-data';

@Component({
    imports: [
        CommonModule,
        ButtonModule,
        CheckBoxAllModule,
        TabAllModule,
        GridModule,
        DropDownListAllModule, 
        ReactiveFormsModule, 
        FormsModule
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
