

import { Component, OnInit } from '@angular/core';
import { SpreadsheetComponent, BeforeSaveEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { data } from './datasource';

@Component({
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet (beforeSave)='beforeSave($event)' saveUrl='https://services.syncfusion.com/angular/production/api/spreadsheet/save' allowSave='true'> <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='data'></e-range></e-ranges><e-columns><e-column [width]=90></e-column><e-column [width]=100></e-column><e-column [width]=96></e-column><e-column [width]=120></e-column><e-column [width]=130></e-column><e-column [width]=120></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>"
})
export class AppComponent implements OnInit {
    public data?: object[];
    ngOnInit(): void {
        this.data = data;
    }
    beforeSave (args: BeforeSaveEventArgs) {
        args.customParams = { customParams: 'you can pass custom params in server side'}; // you can pass the custom params
    }
 }


