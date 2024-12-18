import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
    imports: [
        SpreadsheetAllModule
    ],
    standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet> <e-sheets> <e-sheet selectedRange='D13'><e-rows> <e-row><e-cells> <e-cell value='Order ID'></e-cell> <e-cell value='Customer ID'></e-cell> <e-cell value='Employee ID'></e-cell>  <e-cell value='Ship Name'></e-cell> <e-cell value='Ship City'></e-cell>  <e-cell value='Ship Address'></e-cell>  </e-cells>  </e-row>  <e-row>  <e-cells>  <e-cell value='10248'></e-cell>  <e-cell value='VINET'></e-cell>  <e-cell value='5'></e-cell>  <e-cell value='Vins et alcools Chevalier'></e-cell>  <e-cell value='Reims'></e-cell>  <e-cell value='59 rue de lAbbaye'></e-cell>  </e-cells>  </e-row>  <e-row>  <e-cells>  <e-cell value='10249'></e-cell>  <e-cell value='TOMSP'></e-cell>  <e-cell value='3'></e-cell> <e-cell value='Toms Spezialitäten'></e-cell>  <e-cell value='Münster'></e-cell>  <e-cell value='Luisenstr. 48'></e-cell>  </e-cells>  </e-row>  <e-row>  <e-cells>  <e-cell value='10250'></e-cell>  <e-cell value='HANAR'></e-cell>  <e-cell value='2'></e-cell>  <e-cell value='Hanari Carnes'></e-cell>  <e-cell value='Rio de Janeiro'></e-cell> <e-cell value='Rua do Paço, 67'></e-cell> </e-cells>  </e-row>  <e-row>  <e-cells> <e-cell value='10251'></e-cell>  <e-cell value='VICTE'></e-cell> <e-cell value='3'></e-cell> <e-cell value='Victuailles en stock'></e-cell> <e-cell value='Lyon'></e-cell>  <e-cell value='2, rue du Commerce'></e-cell> </e-cells> </e-row> <e-row> <e-cells> <e-cell value='10252'></e-cell>  <e-cell value='SUPRD'></e-cell>   <e-cell value='4'></e-cell><e-cell value='Suprêmes délices'></e-cell><e-cell value='Charleroi'></e-cell><e-cell value='Boulevard Tirou, 255'></e-cell></e-cells></e-row></e-rows><e-columns><e-column [width]=110></e-column><e-column [width]=115></e-column><e-column [width]=110></e-column> <e-column [width]=130></e-column> <e-column [width]=140></e-column><e-column [width]=150></e-column> </e-columns></e-sheet></e-sheets><e-rows></e-rows></ejs-spreadsheet>"
})

export class AppComponent {
    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
}