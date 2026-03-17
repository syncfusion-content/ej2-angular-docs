import { data } from './datasource';
import { Component, NgModule, OnInit } from '@angular/core';
import { DetailRowService, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule],
    providers: [DetailRowService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' [customAttributes]="{class: 'custom-css'}"
                         textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='ShipCity' headerText='Ship City' [customAttributes]="{class: 'custom-css'}" width=130 ></e-column>
                        <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}
