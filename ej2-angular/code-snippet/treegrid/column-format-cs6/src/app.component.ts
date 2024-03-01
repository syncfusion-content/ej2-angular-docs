import { Component, OnInit,ViewChild } from '@angular/core';
import { formatData } from './datasource';
 
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='orderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='orderName' headerText='Order Name' textAlign='Left' width=180></e-column>
                        <e-column field='orderDate' headerText='Order Date' textAlign='Right' [format]='dateFormatOptions' width=120></e-column>
                        <e-column field='units' headerText='Units' textAlign='Right' [format]='numberFormatOptions' type='number' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public numberFormatOptions?: object;
    public dateFormatOptions?: object;

    ngOnInit(): void {
        this.data = formatData;
        this.numberFormatOptions = {
            // Custom format for numeric columns
            format: '##.0000',
        };
        this.dateFormatOptions = {
            // Custom format for date columns
            type: 'Date',
            format: "EEE, MMM d, ''yy",
        };
    }
}



