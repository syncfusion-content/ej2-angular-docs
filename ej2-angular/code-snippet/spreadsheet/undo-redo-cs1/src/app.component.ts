import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, OnInit,ViewChild } from '@angular/core';
import { defaultData } from './datasource';
import { addClass, removeClass } from '@syncfusion/ej2-base';
import { SpreadsheetComponent, getRangeIndexes } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<button id='customBtn' class='e-btn' (click)='updateCollection()'> add/remove Class</button>   <ejs-spreadsheet #spreadsheet (actionComplete)='actionComplete($event)'> <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='defaultData'></e-range></e-ranges><e-columns><e-column [width]=130></e-column><e-column [width]=92></e-column><e-column [width]=96></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>"
})
export class AppComponent implements OnInit {

    public defaultData?: object[];
    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    ngOnInit(): void {
        this.defaultData = defaultData;
    }
    actionComplete (args: any) {
        let actionEvents: any = args;
        if (actionEvents.eventArgs.action == "customCSS") {
            let Element:HTMLElement = this.spreadsheetObj!.getCell(actionEvents.eventArgs.rowIdx,actionEvents.eventArgs.colIdx);
            if (actionEvents.isUndoRedo && actionEvents.isUndo) {
                removeClass([Element],'customClass'); // To remove the custom class in undo action
            }
            else {
                addClass([Element],'customClass');// To add the custom class in redo action
            }
        }
    }
    updateCollection() {
        var cell = this.spreadsheetObj!.getActiveSheet().activeCell;
        var cellIdx = getRangeIndexes(cell as any);
        var Element= this.spreadsheetObj!.getCell(cellIdx[0], cellIdx[1]);
        if (!Element.classList.contains("customClass")) {
            Element.classList.add('customClass'); // To add the custom class in active cell element
            this.spreadsheetObj!.updateUndoRedoCollection({ eventArgs: { class: 'customClass', rowIdx: cellIdx[0], colIdx: cellIdx[1], action: 'customCSS' } }); // To update the undo redo collection
        }
  }
}



