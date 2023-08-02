

import { Component, OnInit } from '@angular/core';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

class SerialNoAdaptor extends ODataAdaptor {
    override processResponse() { 
        let i = 0;
        const Sno = 'Sno';
        // calling base class processResponse function
        const original: any = super.processResponse.apply(this, arguments as any);
        // Adding serial number
        original.result.forEach((item: any) => item[Sno] = ++i);
        return { result: original.result, count: original.count };
    }
}

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data'>
                <e-columns>
                    <e-column field='Sno' headerText='SNO' textAlign='Right' width=150></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: DataManager;

    ngOnInit(): void {
        this.data = new DataManager({
            url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders?$top=7',
            adaptor: new SerialNoAdaptor()
        });
    }
}



