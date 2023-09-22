

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 hideAtMedia='(min-width: 700px)'>
                    </e-column> //  column visibility hide when browser screen width lessthan 700px;
                    <e-column field='CustomerID' headerText='Customer ID' width=140 hideAtMedia='(max-width: 700px)'>
                    </e-column> // column Visibility show when browser screen width  500px or less;
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120
                    hideAtMedia='(min-width: 500px)'>
                    </e-column> // column visibility hide when browser screen width lessthan 500px;
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140>
                    </e-column> // it always shown
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}



