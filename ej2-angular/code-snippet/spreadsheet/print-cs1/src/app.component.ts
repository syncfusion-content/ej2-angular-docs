import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, OnInit,ViewChild } from '@angular/core';
import { dataSource1, dataSource2, printElement, isPrint } from './datasource';
import { SpreadsheetComponent, CellModel, UsedRangeModel, SheetModel } from '@syncfusion/ej2-angular-spreadsheet';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { getComponent, print } from '@syncfusion/ej2-base';

@Component({
imports: [
        
        DropDownButtonModule,
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<button ejs-dropdownbutton [items]='items' content='Print' (select)='itemSelect($event)'></button>
    <ejs-spreadsheet #spreadsheet id="spreadsheet" (created)="created()" (dataBound)="dataBound()">
                <e-sheets>
                  <e-sheet name="Budget">
                    <e-ranges>
                      <e-range [dataSource]="budgetData"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                    </e-columns>
                  </e-sheet>
                  <e-sheet name="Salary">
                    <e-ranges>
                      <e-range [dataSource]="salaryData"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;

    budgetData: object[] = dataSource1;

    salaryData: object[] = dataSource2;
    public items: ItemModel[] = [
    {
      text: "Print"
    },
    {
      text: "Print All"
    }];
    public itemSelect(args: MenuEventArgs) {
      let spreadsheet = getComponent((document as any).getElementById("spreadsheet"), "spreadsheet");
      if (args.item.text === 'Print') {
      printElement.querySelector(".e-sheet-content")!.innerHTML = document.querySelector(
        ".e-sheet-content"
      )!.outerHTML; //  To add the spreadsheet table
      let usedRange: UsedRangeModel = (spreadsheet as any).getActiveSheet().usedRange;
      let tbody: Element = printElement.querySelector('tbody') as Element;
      for (let i: number = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
        if (tbody.getElementsByClassName('e-row')[i] && parseInt((tbody as any).getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex! + 1) {
          tbody.getElementsByClassName('e-row')[i].remove();
        }
      }
      (printElement.querySelector('.e-sheet-content')!.children[0].getElementsByClassName('e-virtualtrack')[0] as HTMLElement).style.height = 'auto';
      print(printElement);
      printElement.querySelector(".e-sheet-content")!.innerHTML = '';
    }
    if (args.item.text === 'Print All') {
      let sheets: SheetModel[] = (spreadsheet as any).sheets;
      if ((spreadsheet as any).activeSheetIndex === 0) {
        printElement.querySelector(".e-sheet-content")!.innerHTML = document.querySelector(
          ".e-sheet-content"
        )!.outerHTML; //  To add the spreadsheet table

        let usedRange: UsedRangeModel = (spreadsheet as any).getActiveSheet().usedRange;
        let tbody: Element = printElement.querySelector('tbody') as Element;
        for (let i: number = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
          if (tbody.getElementsByClassName('e-row')[i] && parseInt((tbody.getElementsByClassName('e-row')[i] as any).getAttribute('aria-rowindex')) > usedRange.rowIndex! + 1) {
            tbody.getElementsByClassName('e-row')[i].remove();
          }
        }

        if (sheets[(spreadsheet as any).activeSheetIndex + 1]) {
          (spreadsheet as any).goTo(sheets[(spreadsheet as any).activeSheetIndex + 1].name + "!A1");

        } else {
          print(printElement);
          printElement.querySelector(".e-sheet-content")!.innerHTML = '';
        }
      } else {
        if (sheets[0]) {
          (spreadsheet as any).goTo(sheets[0].name + "!A1");

        }
      }
    }
    }
    created() {
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold'}, 'Salary!A11:D11');
    }
  dataBound() {
    if (isPrint) {
      let spreadsheet = getComponent(document.getElementById("spreadsheet") as any, "spreadsheet");
      printElement.querySelector(
        '.e-sheet-content'
      )!.innerHTML += document.querySelector('.e-sheet-content')!.outerHTML;
      let usedRange: UsedRangeModel = (spreadsheet as any).getActiveSheet()
        .usedRange;
      let tbody: Element = printElement
        .querySelector('.e-sheet-content')!
        .children[(spreadsheet as any).activeSheetIndex].querySelector('tbody') as Element;
      for (
        let i: number = tbody.getElementsByClassName('e-row').length;
        i >= 0;
        i--
      ) {
        if (
          tbody.getElementsByClassName('e-row')[i] &&
          parseInt(
            tbody
              .getElementsByClassName('e-row')
              [i].getAttribute('aria-rowindex') as any
          ) >
            usedRange.rowIndex! + 1
        ) {
          tbody.getElementsByClassName('e-row')[i].remove();
        }
      }
      let sheets: SheetModel[] = (spreadsheet as any).sheets;
      if (sheets.length - 1 === (spreadsheet as any).activeSheetIndex) {
        let count: number = printElement.querySelector('.e-sheet-content')!
          .childElementCount;
        if (count > 1) {
          for (let i: number = 0; i < count; i++) {
            (printElement
              .querySelector('.e-sheet-content')!
              .children[i].getElementsByClassName(
                'e-virtualtrack'
              )[0] as HTMLElement).style.height = 'auto';
            printElement
              .querySelector('.e-sheet-content')!
              .children[i].setAttribute('style', 'page-break-after: always;');
          }
        }
        print(printElement);

        printElement.querySelector('.e-sheet-content')!.innerHTML = '';
      } else {
        if (sheets[(spreadsheet as any).activeSheetIndex + 1]) {
          (spreadsheet as any).goTo(
            sheets[(spreadsheet as any).activeSheetIndex + 1].name + '!A1'
          );
        }
      }
    }
  }
}



