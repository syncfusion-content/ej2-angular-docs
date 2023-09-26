

import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ODataAdaptor, ReturnOption } from '@syncfusion/ej2-data';

const SERVICE_URI = 'http://mvc.syncfusion.com/Services/Northwnd.svc/';

@Component({
    selector: 'app-root',
    templateUrl: './app.template.html',
    styles: [`
            .e-table {
                border: solid 1px #e0e0e0;
                border-collapse: collapse;
                font-family: Roboto;
            }

            .e-table td, .e-table th {
                border-style: solid;
                border-width: 1px 0 0;
                border-color: #e0e0e0;
                display: table-cell;
                font-size: 14px;
                line-height: 20px;
                overflow: hidden;
                padding: 8px 21px;
                vertical-align: middle;
                white-space: nowrap;
                width: auto;
            }
    `]
})
export class AppComponent implements OnInit {

    public items?: object[] | any;

    public ngOnInit(): void {
        new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor()})
        .executeQuery(new Query().from('Orders').take(3).hierarchy(
                    new Query()
                        .foreignKey('OrderID')
                        .from('Order_Details')
                        .sortBy('Quantity'),
                    () => [10248, 10249, 10250] // Selective loading of child elements
                ))
        .then((e: ReturnOption) => this.items = e.result as object[]).catch((e) => true);
    }
}



