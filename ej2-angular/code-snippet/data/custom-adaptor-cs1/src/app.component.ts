

import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ODataAdaptor, ReturnOption } from '@syncfusion/ej2-data';

const SERVICE_URI: string =  'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

class SerialNoAdaptor extends ODataAdaptor {
    public override processResponse(): object {
        let i: number = 0;
        //calling base class processResponse function
        let original: object[] | any = super.processResponse.apply(this, arguments as any);
        //Adding serial number
        original.forEach((item: object | any) => item['Sno'] = ++i);
        return original;
    }
}

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
        new DataManager({ url: SERVICE_URI, adaptor: new SerialNoAdaptor })
        .executeQuery(new Query().take(8)).then((e: ReturnOption) => this.items = <object[]>e.result).catch((e) => true);
    }
}


