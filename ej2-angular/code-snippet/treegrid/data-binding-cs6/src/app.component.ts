

import { Component, OnInit } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' parentIdMapping='ParentItem' idMapping='TaskID' height=265 [allowPaging]="true">
        <e-columns>
            <e-column field='Sno' headerText='SNO' width='60' textAlign='Right'></e-column>
            <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: DataManager;

    ngOnInit(): void {
        class SerialNoAdaptor extends WebApiAdaptor {
            public override processResponse(): Object[] {
                let i: number = 0;
                // calling base class processResponse function
                let original: Object[] | any = super.processResponse.apply(this, arguments as any);
                // adding serial number
                original.forEach((item: Object | any) => item['Sno'] = ++i);
                return original;
            }
}
        this.data = new DataManager({
                url: 'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
                adaptor: new SerialNoAdaptor, crossDomain: true, offline: true
            });
    }
}


