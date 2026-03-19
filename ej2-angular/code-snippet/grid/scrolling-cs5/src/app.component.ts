import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    standalone: true,
    selector: 'app-root',
    template: `<div id="scroller" style="width: 100%; overflow-x: auto;"></div>
                <ejs-grid #grid [dataSource]='data' height='315' width='500' (created)='created()'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
                        <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' textAlign='Right'></e-column>
                        <e-column field='Freight' headerText='Freight' width=80></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
                        <e-column field='ShipAddress' headerText='Ship Address' width=140></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
                        <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
                        <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=110></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    @ViewChild('grid') public grid?: GridComponent;
    public data?: object[];

    public ngOnInit(): void {
        this.data = data;
    }

    public created(): void {
        const scroller = document.getElementById('scroller') as HTMLDivElement;
        const content = (this.grid as GridComponent).getContent().firstElementChild as HTMLDivElement;
        const contentTable = (this.grid as GridComponent).getContentTable() as HTMLTableElement;
        (this.grid as GridComponent).element.insertBefore(scroller, content.parentElement);

        scroller.onscroll = (): void => { 
            content.scrollLeft = scroller.scrollLeft; 
        };
        
        content.onscroll = (): void => { 
            scroller.scrollLeft = content.scrollLeft; 
        };

        const setScroller = () : void => {
          scroller.innerHTML = `<div style="width: ${contentTable.offsetWidth}px; height: 18px;"></div>`;
          scroller.style.height = content.scrollWidth <= content.clientWidth ? '0px' : '18px';
        };

        setScroller();
        window.onresize = setScroller;
    }
}