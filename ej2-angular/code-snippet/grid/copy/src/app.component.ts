import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='272px' [selectionSettings]='selectionOptions'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;

    ngOnInit(): void {  
        this.data = data;
        this.selectionOptions = { type: 'Multiple'};
    }
}
