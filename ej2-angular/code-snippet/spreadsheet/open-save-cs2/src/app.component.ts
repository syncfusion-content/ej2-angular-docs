import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        DropDownButtonModule,
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet (created)='created()' openUrl='https://services.syncfusion.com/angular/production/api/spreadsheet/open' allowOpen='true'> </ejs-spreadsheet>"
})
export class AppComponent {
    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
     created () {
        fetch("https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx") // fetch the remote url
          .then((response) => {
            response.blob().then((fileBlob) => { // convert the excel file to blob
            let file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
            this.spreadsheetObj!.open({ file: file }); // open the file into Spreadsheet
            })
          })
    }
}


