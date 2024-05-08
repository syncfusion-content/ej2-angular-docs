import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'




import { Component, OnInit, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { getComponent, print } from '@syncfusion/ej2-base';
@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet (created)='created()'> <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='data'></e-range></e-ranges><e-columns><e-column [width]=80></e-column><e-column [width]=80></e-column><e-column [width]=80></e-column><e-column [width]=80></e-column><e-column [width]=80></e-column><e-column [width]=80></e-column><e-column [width]=280></e-column><e-column [width]=180></e-column><e-column [width]=80></e-column><e-column [width]=180></e-column><e-column [width]=180></e-column></e-columns> </e-sheet></e-sheets></ejs-spreadsheet>"
})
export class AppComponent implements OnInit {

    @ViewChild('spreadsheet')
    public spreadsheetObj: SpreadsheetComponent | undefined;
    public data?: DataManager;

    ngOnInit(): void {
        this.data = new DataManager({
            url: 'https://services.syncfusion.com/angular/production/api/Orders',
            adaptor: new WebApiAdaptor(),
            crossDomain: true
        });
    }

    created(){
         //Applies cell and number formatting to specified range of the active sheet
         this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' },
            'A1:K1');
    };
}



