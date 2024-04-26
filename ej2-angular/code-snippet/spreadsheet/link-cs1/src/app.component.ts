import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'




import { Component, OnInit, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet (beforeHyperlinkClick)='beforeHyperlinkClick($event)'> <e-sheets> <e-sheet name='Monthly Budget' selectedRange='D13'>  <e-rows>  <e-row>  <e-cells>   <e-cell value='Item Name'></e-cell>   <e-cell value='Quantity'></e-cell>  <e-cell value='Price'></e-cell> <e-cell value='Amount'></e-cell> <e-cell value='Stock Detail'></e-cell>   <e-cell value='Website'></e-cell>   </e-cells>    </e-row> <e-row>     <e-cells>    <e-cell value='Casual Shoes'></e-cell>   <e-cell value='10'></e-cell>  <e-cell value='20'></e-cell>  <e-cell value='200'></e-cell> <e-cell value='OUT OF STOCK'></e-cell>  <e-cell value='Amazon' hyperlink='https://www.amazon.com/'></e-cell> </e-cells> </e-row>  <e-row> <e-cells> <e-cell value='Sports Shoes'></e-cell>  <e-cell value='20'></e-cell> <e-cell value='30'></e-cell>  <e-cell value='600'></e-cell>  <e-cell value='IN STOCK' hyperlink='Stock!A2:B2'></e-cell> <e-cell value='Overstack' hyperlink='https://www.overstock.com/'></e-cell> </e-cells> </e-row> <e-row>   <e-cells>   <e-cell value='Formal Shoes'></e-cell>   <e-cell value='20'></e-cell> <e-cell value='15'></e-cell>  <e-cell value='300'></e-cell>  <e-cell value='IN STOCK' hyperlink='Stock!A3:B3'></e-cell>  <e-cell value='Aliexpress' hyperlink='https://www.aliexpress.com/'></e-cell>  </e-cells>  </e-row>  <e-row>   <e-cells>    <e-cell value='Sandals & Floaters'></e-cell>  <e-cell value='15'></e-cell>  <e-cell value='20'></e-cell>   <e-cell value='300'></e-cell> <e-cell value='OUT OF STOCK'></e-cell>  <e-cell value='Alibaba' hyperlink='http://www.alibaba.com/'></e-cell>    </e-cells>    </e-row>  <e-row>  <e-cells>  <e-cell value='Flip-Flops & Slippers'></e-cell>   <e-cell value='30'></e-cell> <e-cell value='10'></e-cell>  <e-cell value='300'></e-cell>    <e-cell value='IN STOCK' hyperlink='Stock!A4:B4'></e-cell>  <e-cell value='Taobao' hyperlink='https://taobao.com/'></e-cell>   </e-cells>   </e-row>  </e-rows>  <e-columns>     <e-column [width]=110></e-column>     <e-column [width]=115></e-column> <e-column [width]=110></e-column> <e-column [width]=100></e-column>    <e-column [width]=120></e-column> <e-column [width]=140></e-column> </e-columns>  </e-sheet> <e-sheet name='Stock' selectedRange='D13'>  <e-rows>  <e-row> <e-cells>    <e-cell value='Item Name'></e-cell> <e-cell value='Available Count'></e-cell>     </e-cells> </e-row>  <e-row> <e-cells>  <e-cell value='Casual Shoes'></e-cell> <e-cell value='10'></e-cell>   </e-cells>  </e-row> <e-row>   <e-cells>  <e-cell value='Sports Shoes'></e-cell>  <e-cell value='20'></e-cell>  </e-cells> </e-row>  <e-row>  <e-cells> <e-cell value='Formal Shoes'></e-cell>  <e-cell value='20'></e-cell></e-cells></e-row>  <e-row> <e-cells>  <e-cell value='Sandals & Floaters'></e-cell><e-cell value='15'></e-cell>  </e-cells>  </e-row><e-row> <e-cells> <e-cell value='Flip-Flops & Slippers'></e-cell>  <e-cell value='30'></e-cell> </e-cells> </e-row> </e-rows> <e-columns> <e-column [width]=110></e-column><e-column [width]=115></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>"
})
export class AppComponent implements OnInit {

    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    ngOnInit(): void {
    }
    beforeHyperlinkClick (args : any) {
        args.target = '_self'; //change target attribute
    }
}



