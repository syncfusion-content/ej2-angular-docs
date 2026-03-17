import { ColumnDataType, data } from './datasource';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogEditEventArgs, EditService, EditSettingsModel, GridComponent, GridModule, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { SelectingEventArgs, TabAllModule, TabComponent } from '@syncfusion/ej2-angular-navigations';
import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

@Component({
    imports: [
        ButtonModule,
        CheckBoxAllModule,
        TabAllModule,
        GridModule,
        DropDownListAllModule, 
        ReactiveFormsModule, 
        FormsModule,
        CommonModule,
        NumericTextBoxAllModule
    ],
    providers: [EditService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    templateUrl: `tablikeedit.html`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public shipCountryDistinctData?: { [key: string]: Object }[];
    @ViewChild('grid')
    grid?: GridComponent;
    @ViewChild('orderForm')
    orderForm: FormGroup;
    @ViewChild('tab')
    tabObj: TabComponent;
   

    ngOnInit(): void {
        // Initialize component properties
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true) as { [key: string]: Object }[];
    }
    // Handle completion of editing dialog
    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable default validation.
            (args.form as HTMLFormElement)['ej2_instances'][0].removeRules();           
            setTimeout(() => {
                new DropDownList({
                    value: (args.rowData as ColumnDataType).ShipCountry!==undefined ?(args.rowData as ColumnDataType).ShipCountry : "Germany" ,
                    popupHeight: '200px',
                    floatLabelType: 'Always',
                    dataSource: this.shipCountryDistinctData,
                    placeholder:'ShipCountry',
                    fields: { text: 'ShipCountry', value: 'ShipCountry' }
                
                    }, (args.form as HTMLFormElement).elements.namedItem('ShipCountry') as HTMLInputElement);
                
            }, 1);
                
            // hide dialog button
            (args.dialog as HTMLFormElement)['element'].querySelector('.e-footer-content').classList.add('e-hide');
            // Add validation rules
            (args.form as HTMLFormElement)['ej2_instances'][0].addRules('Freight', { max: 500 });
            // Set initial focus
            if (args.requestType === 'beginEdit') {
                setTimeout(() => {
                    ((args.form as HTMLFormElement).elements.namedItem('CustomerID') as HTMLInputElement).focus();
                }, 1);
            }
            if(args.requestType === 'add') {
                setTimeout(() => {
                    ((args.form as HTMLFormElement).elements.namedItem('OrderID') as HTMLInputElement).focus();
                }, 1);
            }
        }

    }
    // Move to the next tab
    nextBtn() {
        if (this.orderForm.valid) 
            this.moveNext();  
    }
    // Move to the previous tab
    previousBtn() {
        this.movePrevious();
    }

    // Handle tab selection
    selecting(e: SelectingEventArgs) {
        if (e.isSwiped) e.cancel = true;
        e.cancel = !this.orderForm.valid;

    }

    // Move to the next tab if the form is valid
    moveNext() {
        if (this.orderForm?.valid ) 
            this.tabObj.select(1);
        
        else
            this.tabObj.select(1);    
    }

    // Move to the previous tab if the form is valid
    movePrevious() {
        if (this.orderForm.valid) 
            this.tabObj.select(0);   
    }

    // Handle submit button click
    submitBtn() {
        if (this.orderForm.valid) 
            (this.grid as GridComponent).endEdit();     
    }
}
