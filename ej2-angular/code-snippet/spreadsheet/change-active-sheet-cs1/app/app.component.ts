import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (openComplete)='openCompleteHandler($event)' openUrl='https://services.syncfusion.com/angular/production/api/spreadsheet/open'></ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent;

    openCompleteHandler(args: Object) {
        if (this.spreadsheetObj) {
            this.spreadsheetObj.activeSheetIndex = 2;
        }
    }
}

