import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { conditionalFormatData } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #default [openUrl]="openUrl" [saveUrl]="saveUrl" (created)="created()">
        <e-sheets>
            <e-sheet name="PriceDetails" >
                <e-rows>
                    <e-row>
                        <e-cells>
                            <e-cell value="Seller Name" [style]="style"></e-cell>
                            <e-cell value="Customer Id" [style]="style"></e-cell>
                            <e-cell value="Customer Name" [style]="style"></e-cell>
                            <e-cell value="Product Name" [style]="style"></e-cell>
                             <e-cell value="Product Price" [style]="style"></e-cell>
                            <e-cell value="Sales Date" [style]="style"></e-cell>
                            <e-cell value="Billing Time" [style]="style"></e-cell>
                            <e-cell value="Total Price" [style]="style"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="John"></e-cell>
                            <e-cell value="1" [validation]="validation"></e-cell>
                            <e-cell value="Nash"></e-cell>
                            <e-cell value="Digger" [validation]="listValidation"></e-cell>
                            <e-cell value="50000" [validation]="listValidation1"></e-cell>
                            <e-cell value="04/11/2019"></e-cell>
                            <e-cell value="11:34:32 AM"></e-cell>
                            <e-cell value="1,45,000.00"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Mike"></e-cell>
                            <e-cell value="2" [validation]="validation"></e-cell>
                            <e-cell value="Jim" ></e-cell>
                            <e-cell value="Cherrypicker" [validation]="listValidation2"></e-cell>
                            <e-cell value="45000" [validation]="validation"></e-cell>
                            <e-cell value="04/11/2019"></e-cell>
                            <e-cell value="10:15:00 AM"></e-cell>
                            <e-cell value="1,40,040.00"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="shane"></e-cell>
                            <e-cell value="3" [validation]="validation"></e-cell>
                            <e-cell value="Sean"></e-cell>
                            <e-cell value="Kango" [validation]="validation3"></e-cell>
                            <e-cell value="450" [validation]="validation4"></e-cell>
                            <e-cell value="06/25/2019"></e-cell>
                            <e-cell value="01:30:11 PM"></e-cell>
                            <e-cell value="545.00"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="John"></e-cell>
                            <e-cell value="1" [validation]="validation"></e-cell>
                            <e-cell value="Nash"></e-cell>
                            <e-cell value="JCB" [validation]="validation5"></e-cell>
                            <e-cell value="90000" [validation]="validation6"></e-cell>
                            <e-cell value="09/22/2019"></e-cell>
                            <e-cell value="12:30:02 PM"></e-cell>
                            <e-cell value="1,00,095.00"></e-cell>
                        </e-cells>
                    </e-row>
                </e-rows>
                <e-columns>
                    <e-column [width]=88></e-column>
                    <e-column [width]=88></e-column>
                    <e-column [width]=106></e-column>
                    <e-column [width]=98></e-column>
                    <e-column [width]=88></e-column>
                    <e-column [width]=86></e-column>
                    <e-column [width]=81></e-column>
                </e-columns>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('default')
    spreadsheetObj: SpreadsheetComponent | undefined;

    public style: any = { fontWeight: "bold", textAlign: "center" };
    public validation = { type: 'WholeNumber', operator: 'NotEqualTo', value1: '1' };
    public listValidation = { type: 'List', value1: 'Digger, Digger, Cherrypicker' };
    public listValidation1 = { type: 'List', value1: '50000,50000,45000' };
    public listValidation2 = { type: 'List', value1: 'Cherrypicker, JCB, Wheelbarrow' };
    public validation2 = { type: 'List', value1: '45000,90000,40' };
    public validation3 = { type: 'List', value1: 'Kango, Ropes' };
    public validation4 = { type: 'List', value1: '450, 95' };
    public validation5 = { type: 'List', value1: 'JCB, Ropes, scaffolding' };
    public validation6 = { type: 'List', value1: '90000, 95, 10000' };
openUrl: any;
saveUrl: any;
    created() {
      //Add Data validation to range.
      this.spreadsheetObj!.addDataValidation({ type: 'TextLength', operator: 'LessThanOrEqualTo', value1: '4' }, 'A2:A5');
      this.spreadsheetObj!.addDataValidation({ type: 'WholeNumber', operator: 'NotEqualTo', value1: '1' }, 'B2:B5');
      this.spreadsheetObj!.addDataValidation({ type: 'Date', operator: 'NotEqualTo', value1: '04/11/2019' }, 'F2:F5');
      this.spreadsheetObj!.addDataValidation({ type: 'Time', operator: 'Between', value1: '10:00:00 AM', value2: '11:00:00 AM' }, 'G2:G5');
      this.spreadsheetObj!.addDataValidation({ type: 'Decimal', operator: 'LessThan', value1: '100000.00' }, 'H2:H5');
      //Highlight Invalid Data.
      this.spreadsheetObj!.addInvalidHighlight('A1:H5');
    }
}


