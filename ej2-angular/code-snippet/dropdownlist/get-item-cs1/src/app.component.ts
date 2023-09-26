

import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data'

@Component({
    selector: 'control-content',
    // specifies the template path for DropDownList component
    templateUrl: `template.html`
})
export class AppComponent {
    @ViewChild('sample')
    public dropDownListObject = DropDownListComponent;
    constructor() {

    }
    ngAfterViewInit(){
        let proxy=this;
        document.getElementById('btn')!.onclick = () => {
            // get items count using getItems method
            console.log("Total items count: " + (proxy.dropDownListObject as any).getItems().length);
            let element: HTMLElement = document.createElement('p');
            element.innerText = "Total items count: " + (proxy.dropDownListObject as any).getItems().length;
            document.getElementById('event')!.append(element);
        }
    }
    //bind the DataManager instance to dataSource property
    public data: DataManager = new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        });
    // maps the appropriate column to fields property
    public fields: Object = { text: 'ContactName', value: 'CustomerID' };
    //bind the Query instance to query property
    public query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
    //set the placeholder to DropDownList input
    public text: string = "Select a customer";
    //sort the result items
    public sorting: string = 'Ascending';
    public actionComplete(e: any): void {
         // get total items count
        console.log("Total items count: " + e.result.length);
        let element: HTMLElement = document.createElement('p');
        element.innerText = "Total items count: " + e.result.length;
        document.getElementById('event')!.append(element);
    }
}



