

import { Component, OnInit } from '@angular/core';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
        <span class="content-title"> Select customer name: </span>
        <ejs-inplaceeditor id="element" mode="Inline" type="DropDownList" value="Maria Anders" [model]="model"></ejs-inplaceeditor>
    </div>
    `
})

export class AppComponent implements OnInit {
    public fields: object = { text: 'ContactName', value: 'CustomerID' };
    public model?: object;
    ngOnInit(): void {
        new DataManager({
            url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Customers/',
            adaptor: new WebApiAdaptor
        }).executeQuery(new Query().take(8)).then((e: any) => {
        this.model = { dataSource: e.result.d,  placeholder: 'Select a customer', fields: this.fields };
        });
    }
}


