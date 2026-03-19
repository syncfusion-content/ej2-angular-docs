import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { DetailRowService, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule],
    providers: [DetailRowService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [enableHover]='false' [allowSelection]='false' [height]='315' [rowHeight]='60'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    ngOnInit(): void {
        this.data = data;
    }
}
