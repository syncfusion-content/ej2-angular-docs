import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { RowDataBoundEventArgs, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'
               (rowDataBound)='rowDataBound($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
                        <e-column field='Verified' headerText='Verified' width=130 displayAsCheckBox="true"></e-column>
                    </e-columns>
                </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    rowDataBound(args: RowDataBoundEventArgs) {
        let count = 0;
        let keys = Object.keys((args as any).data);
        for (let i = 0; i < keys.length; i++) {
            if ((args as any).data[keys[i]] == null || (args as any).data[keys[i]] == '' || (args as any).data[keys[i]] == undefined) {
                count++;
            }
        }
        if (count == keys.length) {
            for (let i = 0; i < (this.grid as any).columns.length; i++) {
                if ((this.grid as any).columns[i].displayAsCheckBox) {
                    (args as any).row.children[i].innerHTML = '';
                }
            }
        }
    }
}