import { ViewChild} from '@angular/core'
import { GridModule, PageService, GridComponent } from '@syncfusion/ej2-angular-grids'
import { L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import frFRLocalization from './locale.json';
L10n.load(frFRLocalization);
setCulture('fr-FR'); // Change the Grid culture
setCurrencyCode('EUR');
@Component({
imports: [GridModule],

providers: [PageService],
standalone: true,
    selector: 'app-root',
    template: `
    <ejs-grid #grid1 id='Grid1' style="padding: 10px 10px" [dataSource]='data' [allowPaging]='true' height='220px' [locale]='locale'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='Freight' headerText='Freight' format="C2"  width=90></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="100"></e-column>
        </e-columns>
    </ejs-grid>
    <ejs-grid #grid2 id='Grid2' [dataSource]='data' height='220px' [allowPaging]="true" [locale]='locale1'>
        <e-columns> 
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='Freight' headerText='Freight' format="C2"  width=90></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="100"></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
    @ViewChild('grid1')
    grid1!: GridComponent;
    @ViewChild('grid2')
    grid2!: GridComponent;
    public data?: object[];
    public locale: any = 'fr-FR';
    public locale1: any = 'en-US';
    ngOnInit(): void {
        this.data = data;
    }
}