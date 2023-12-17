import { Component, OnInit,ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315' (dataBound)="dataBound($event)">
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
                        <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    @ViewChild('grid', { static: true })
    public grid?: GridComponent;
    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
    dataBound(args: any) {
        let header = (this.grid as any).getHeaderContent().querySelector('.e-headercell');
        header.style.backgroundColor = 'red';
        header.style.color = 'white';
        let cell = (this.grid as any).getCellFromIndex(1, 2);
        (cell as any).style.background = '#f9920b';
        (cell as any).style.color = 'white';
    }
}



