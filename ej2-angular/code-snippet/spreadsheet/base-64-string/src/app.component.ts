import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet'

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, BeforeSaveEventArgs, SaveCompleteEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { data } from './datasource';

@Component({
imports: [
        
        SpreadsheetModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div class="control-section">
    <button class="e-btn custom-btn" (click)='import()'>Import Base64</button>
    <button class="e-btn custom-btn" (click)='export()'>Export as Base64</button>
    <ejs-spreadsheet #spreadsheet openUrl="https://services.syncfusion.com/angular/production/api/spreadsheet/open" (beforeSave)="beforeSave($event)" (saveComplete)="saveComplete($event)">
        <e-sheets>
            <e-sheet name="Car Sales Report">
                <e-ranges>
                    <e-range [dataSource]="data"></e-range>
                </e-ranges>
                <e-columns>
                    <e-column [width]=180></e-column>
                    <e-column [width]=130></e-column>
                    <e-column [width]=130></e-column>
                    <e-column [width]=180></e-column>
                    <e-column [width]=130></e-column>
                    <e-column [width]=120></e-column>
                </e-columns>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>
</div>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj!: SpreadsheetComponent;

    data: Object[] = data;
    base64String!: string | ArrayBuffer;
    beforeSave(args: BeforeSaveEventArgs): void {
        args.needBlobData = true; // To trigger the saveComplete event.
        args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
    };
    saveComplete(args: SaveCompleteEventArgs): void {
        // Convert blob data to base64 string.
        let reader: FileReader = new FileReader();
        reader.readAsDataURL(args.blobData);

        reader.onloadend = () => {
            this.base64String = reader.result ? reader.result : '';
        };
    };
    import(): void {
        fetch(this.base64String as string)
            .then((response) => response.blob())
            .then((fileBlob) => {
                let file: File = new File([fileBlob], 'Sample.xlsx');
                this.spreadsheetObj.open({ file: file });
            });
    };
    export(): void {
        this.spreadsheetObj.save({
            url: 'https://services.syncfusion.com/angular/production/api/spreadsheet/save',
            fileName: 'Worksheet',
            saveType: 'Xlsx',
        }); // Specifies the save URL, file name, file type need to be saved.
        // Logs base64 string into the console.
        console.log('Base64 String - ', this.base64String);
    }
}

