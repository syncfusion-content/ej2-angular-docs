

import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column headerText='Employee Image' width='150' textAlign='Center'>
                            <ng-template #template let-data>
                                <div class="image">
                                    <img src="{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}"/>
                                </div>
                            </ng-template>
                        </e-column>
                        <e-column field='FirstName' headerText='FirstName' width=100></e-column>
                        <e-column field='LastName' headerText='Last Name' width=100></e-column>
                        <e-column field='City' headerText='City' width=100></e-column>
                    </e-columns>
                </ejs-grid>`,
    styleUrls: ['app.style.css']
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
}




