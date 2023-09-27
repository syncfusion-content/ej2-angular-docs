

import { Component, OnInit } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { DataManager, Query, ODataAdaptor, ReturnOption } from '@syncfusion/ej2-data';
import { FieldSettingsModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<ejs-menu *ngIf='menuItems' [items]='menuItems' [fields]='menuFields'></ejs-menu>`
})

export class AppComponent implements OnInit {

    private SERVICE_URI: string = 'https://js.syncfusion.com/ejServices/Wcf/Northwind.svc/';

    // Menu fields definition.
    public menuFields: FieldSettingsModel = {
        text: ['FirstName', 'ShipName'],
        children: ['Orders']
    };

    public menuItems?: { [key: string]: Object }[];

    public ngOnInit(): void {
        // Getting remote data using DataManager.
        new DataManager({ url: this.SERVICE_URI, adaptor: new ODataAdaptor, crossDomain: true })
            .executeQuery(
                new Query().from('Employees').take(5).hierarchy(
                    new Query()
                        .foreignKey('EmployeeID')
                        .from('Orders').take(13),
                    function () {
                        return [1, 2, 3, 4, 5]
                    }
                ))
            .then((e: ReturnOption) => {
                //Assign result data to menu items
                this.menuItems = e.result as { [key: string]: Object }[];
                (document.getElementById('loader') as HTMLElement).style.display = "none";
            });
    }
}


