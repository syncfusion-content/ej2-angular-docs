import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataUtil } from '@syncfusion/ej2-data';
import { data, ColumnDataType } from './datasource';
import { EditSettingsModel, ToolbarItems, GridComponent, DialogEditEventArgs, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { SelectingEventArgs, TabComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    templateUrl: `./tablikeedit.html`
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
            (args.dialog as HTMLFormElement)['element'].classList.add('hide-default-buttons');
            // Add validation rules
            (args.form as HTMLFormElement)['ej2_instances'][0].addRules('Freight', { max: 500 });
            // Set initial focus
            if (args.requestType === 'beginEdit') {
                setTimeout(() => {
                    ((args.form as HTMLFormElement).elements.namedItem('CustomerID') as HTMLInputElement).focus();
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
        if (e.isSwiped) 
            e.cancel = true;
        
        if (e.selectingIndex === 1) 
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