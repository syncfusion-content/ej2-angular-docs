

import { Component } from '@angular/core';
import { MultiSelectComponent, VirtualScroll } from '@syncfusion/ej2-angular-dropdowns';
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

MultiSelectComponent.Inject(VirtualScroll);

@Component({
    selector: 'app-root',
    // specifies the virtual-scroll url path  
    templateUrl: 'virtual-scroll.html'
})
export class AppComponent {
    // bind the DataManager instance to dataSource property
    public customerData: DataManager = new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/orders',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    // maps the appropriate column to fields property
    public customerField: { [key: string]: string } = { text: 'OrderID', value: 'OrderID' };
    // set the placeholder to AutoComplete input
    public waterMark: string = 'OrderID ';   
}


