import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { orderDetails } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-root',
    template: `
               <div>
                    <label style="padding: 30px 17px 0 0">Select page index:</label>
                    <ejs-textbox #textbox width="120"></ejs-textbox>
                    <button ejs-button id="button" (click)=click($event)>click button</button>
               </div>
               <div style="padding:20px 0 0 0">
                    <ejs-grid #grid [dataSource]='data' allowPaging='true' height="200">
                            <e-columns>
                                <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                                width=90></e-column>
                                <e-column field='CustomerID' headerText='Customer ID' width=120>
                                </e-column>
                                <e-column field='Freight' headerText='Freight' textAlign='Right' 
                                format='C2' width=90></e-column>
                                <e-column field='OrderDate' headerText='Order Date' textAlign='Right' 
                                format='yMd' width=120></e-column>
                            </e-columns>
                        </ejs-grid>
                </div>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid') grid?:GridComponent;
    @ViewChild('textbox') public textbox?: TextBoxComponent;

    ngOnInit(): void {
        this.data = orderDetails;
    }
    click(args:ClickEventArgs)
    {
        (this.grid as GridComponent).pagerModule.goToPage(parseInt(this.textbox.value, 10));
    }
}