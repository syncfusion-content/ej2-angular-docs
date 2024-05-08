import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit,ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315' (dataBound)="dataBound()">
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
    dataBound() {
        let header = (this.grid as GridComponent).getHeaderContent().querySelector('.e-headercell');
        (header as HTMLElement).style.backgroundColor = 'red';
        (header as HTMLElement).style.color = 'white';
        let cell = (this.grid as GridComponent).getCellFromIndex(1, 2);
        (cell as HTMLElement).style.background = '#f9920b';
        (cell as HTMLElement).style.color = 'white';
    }
}



