import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { RadioButtonAllModule, ButtonAllModule } from '@syncfusion/ej2-angular-buttons'
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'




import { Component, OnInit,ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        CommonModule, SpreadsheetAllModule,  TextBoxAllModule, RadioButtonAllModule, DropDownListAllModule, MultiSelectAllModule, ButtonAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet [showRibbon]="false" [allowResizing]="false" [showFormulaBar]="false" [allowOpen]="false" [allowSave]="false"
        [scrollSettings]="{ isFinite: true }" (created)="created()" [allowEditing]="false" [selectionSettings]="{ mode: 'None' }">
        <e-sheets>
            <e-sheet name="Registration Form" [rowCount]=40 [colCount]=30 [showGridLines]="false">
                <e-rows>
                    <e-row [height]=55>
                        <e-cells>
                            <e-cell [index]=1 value="Interview Registration Form" [style]="{ fontSize: '12pt', fontWeight: 'bold',
                                textAlign: 'center', verticalAlign: 'middle', textDecoration: 'underline' }"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row [height]=55>
                        <e-cells>
                            <e-cell [index]=1 value="Name:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row [height]=45>
                        <e-cells>
                            <e-cell [index]=1 value="Date of Birth:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row [height]=45>
                        <e-cells>
                            <e-cell [index]=1 value="Gender:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row [height]=45>
                        <e-cells>
                            <e-cell [index]=1 value="Year of Experience:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row [height]=45>
                        <e-cells>
                            <e-cell [index]=1 value="Areas of Interest:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row [height]=45>
                        <e-cells>
                            <e-cell [index]=1 value="Mobile Number:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row [height]=45>
                        <e-cells>
                            <e-cell [index]=1 value="Email:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row [height]=82>
                        <e-cells>
                            <e-cell [index]="1" value="Address:"></e-cell>
                        </e-cells>
                    </e-row>
                </e-rows>
                <e-columns>
                    <e-column [index]=1 [width]=190></e-column>
                    <e-column [width]=350></e-column>
                </e-columns>
                <e-ranges>
                    <e-range address="C2">
                        <ng-template #template>
                            <ejs-textbox placeholder="Name"></ejs-textbox>
                        </ng-template>
                    </e-range>
                    <e-range address="C3">
                        <ng-template #template>
                            <ejs-textbox placeholder="DOB"></ejs-textbox>
                        </ng-template>
                    </e-range>
                    <e-range address="C4">
                        <ng-template #template>
                            <div>
                                <ejs-radiobutton name="gender" value="male" label="Male"></ejs-radiobutton>
                                <ejs-radiobutton name="gender" value="female" label="Female"></ejs-radiobutton>
                            </div>
                        </ng-template>
                    </e-range>
                    <e-range address="C5">
                        <ng-template #template>
                            <ejs-dropdownlist placeholder="Experience" [dataSource]="experience"></ejs-dropdownlist>
                        </ng-template>
                    </e-range>
                    <e-range address="C6">
                        <ng-template #template>
                            <ejs-multiselect [showClearButton]="false" placeholder="Areas of Interest" [dataSource]="languages"></ejs-multiselect>
                        </ng-template>
                    </e-range>
                    <e-range address="C7">
                        <ng-template #template>
                            <ejs-textbox placeholder="Mobile Number"></ejs-textbox>
                        </ng-template>
                    </e-range>
                    <e-range address="C8">
                        <ng-template #template>
                            <ejs-textbox placeholder="Email"></ejs-textbox>
                        </ng-template>
                    </e-range>
                    <e-range address="C9">
                        <ng-template #template>
                            <ejs-textbox rows="2" [multiline]="true"></ejs-textbox>
                        </ng-template>
                    </e-range>
                    <e-range address="C11">
                        <ng-template #template>
                            <button ejs-button cssClass='e-flat' style='float:right'>Add</button>
                        </ng-template>
                    </e-range>
                </e-ranges>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;

    public experience: string[] =  ['0 - 1 year', '1 - 3 years', '3 - 5 years', '5 - 10 years'];
    public languages: string[] = ['JAVA', 'C#', 'SQL'];
    created() {
        // Applies format to specified range
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold' }, 'B2:B9');
        // Merges B1 and C1 cells
        this.spreadsheetObj!.merge('B1:C1');
    }
  };



