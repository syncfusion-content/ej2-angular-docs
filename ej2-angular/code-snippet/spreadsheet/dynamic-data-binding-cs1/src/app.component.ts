import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, OnInit,ViewChild, ViewEncapsulation } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { DataSourceChangedEventArgs } from '@syncfusion/ej2-spreadsheet';
import { data, itemData } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div>
    <div>
    <button class='e-btn' style="margin-bottom: 10px;" (click)='changeDataSource()'>Change Datasource</button>
    <ejs-spreadsheet #spreadsheet (dataSourceChanged)='dataSourceChanged($event)' [showRibbon]='false'>
    <e-sheets>
     <e-sheet>
        <e-ranges><e-range [dataSource]='data'></e-range></e-ranges>
        <e-columns><e-column [width]=90></e-column><e-column [width]=100></e-column><e-column [width]=96></e-column><e-column [width]=120></e-column><e-column [width]=130></e-column><e-column [width]=120></e-column></e-columns>
      </e-sheet>
      </e-sheets>
      </ejs-spreadsheet>
         </div>
         <div>
            <h4><b>Event Trace</b></h4>
            <div id="evt">
               <div style="height:173px;overflow: auto;min-width: 250px;">
                  <span #EventLog class="EventLog" id="EventLog" style="word-break: normal;"></span>
                </div>
                <button class='e-btn' (click)='clearTrace()'>Clear</button>
                </div>
            </div>
        </div>`,
        styles: [`
       #EventLog b {
         color: #388e3c;
        }
       #evt {
         border: 1px solid #dcdcdc;
         padding: 10px;
       }
        `],
        encapsulation: ViewEncapsulation.None

})
export class AppComponent {
    public data: object[] = data;
    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    @ViewChild('EventLog') EventLogEle: any;

    dataSourceChanged(args: DataSourceChangedEventArgs): void {
        this.appendElement("Data source changed with" + "<b>&nbsp;" + args.action + "</b> action<hr>");
    }

    changeDataSource(): void {
      this.data = itemData;
      // You can also change the datasource of the range by changing dataSource property of the range by using below line of code.
      // this.spreadsheetObj.sheets[0].ranges[0].dataSource = itemData;
    }

    clearTrace(): void {
      this.EventLogEle.nativeElement.innerHTML = "";
    }

   appendElement(html: string): void {
     let span: HTMLElement = document.createElement("span");
     span.innerHTML = html;
     let log: HTMLElement = this.EventLogEle.nativeElement;
     log.insertBefore(span, log.firstChild);
   }
  };



