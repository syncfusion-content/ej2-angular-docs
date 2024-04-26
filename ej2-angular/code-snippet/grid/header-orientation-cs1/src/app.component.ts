import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='240' 
                (created)='setHeaderHeight()'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                         width=100>
                        </e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120>
                        </e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Center'
                        format='C2' [customAttributes]='customAttributes' width=80>
                        </e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100 >
                        </e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public customAttributes?: object;

    ngOnInit(): void {
        this.data = data;
        this.customAttributes = { class: 'orientationcss' };
    }
    setHeaderHeight() {
        // Obtain the width of the headerText content.
        const textWidth = (document.querySelector('.orientationcss > div') as Element).scrollWidth;
        const headerCell: NodeList = document.querySelectorAll('.e-headercell');
        for (let i = 0; i < headerCell.length; i++) {
            // Assign the obtained textWidth as the height of the headerCell.
            (headerCell.item(i) as HTMLElement).style.height = textWidth + 'px';
        }
    }

}



