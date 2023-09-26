

import { Component } from '@angular/core';
import { SpreadsheetComponent, BeforeSaveEventArgs, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
    selector: 'app-container',
    template: "<ejs-spreadsheet (beforeOpen)='beforeOpen($event)' openUrl='https://services.syncfusion.com/angular/production/api/spreadsheet/open' allowOpen='true'> </ejs-spreadsheet>"
})
export class AppComponent {
     beforeOpen (args: BeforeOpenEventArgs) {
        // your code snippets here
    }
}


