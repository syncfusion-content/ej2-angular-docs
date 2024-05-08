import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CheckBoxAllModule, ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'




import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { data } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems, GridComponent, DialogEditEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        CheckBoxAllModule,
        GridModule,
        ButtonModule,
        DropDownListAllModule, ReactiveFormsModule, FormsModule
    ],

providers: [EditService, ToolbarService],
standalone: true,
    selector: 'app-root',
    templateUrl: `wizardtemplate.html`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public shipCountryDistinctData?: object;
    public next = 'Next';
    public currentTab = 0;
    public hidden = true;
    @ViewChild('grid') grid?: GridComponent;
    @ViewChild('orderForm') orderForm?: FormGroup;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);
    }

    actionComplete(args: DialogEditEventArgs) {
        if (((args as any).requestType === 'beginEdit' || (args as any).requestType === 'add')) {
            (args as any).form.ej2_instances[0].rules = {}; // Disable default validation.
            // Set initial Focus
            if ((args as any).requestType === 'beginEdit') {
                ((args as any).form.elements.namedItem('CustomerID') as HTMLInputElement).focus();
            }
            this.currentTab = 0;
            this.hidden = true;
            this.next = 'Next';
        }
    }

    nextBtn(args: any) {
        if (this.orderForm?.valid) {
            if (this.next !== 'SUBMIT') {
                this.currentTab++;
                this.nextpre(this.currentTab);
            } else {
                (this.grid as any).endEdit();
            }
        }
    }

    previousBtn(args: any) {
        if (this.orderForm?.valid) {
            this.currentTab--;
            this.nextpre(this.currentTab);
        }
    }

    nextpre(current: any) {
        if (current) {
            this.hidden = false;
            this.next = 'SUBMIT';
        } else {
            this.hidden = true;
            this.next = 'NEXT';
        }
    }
}



