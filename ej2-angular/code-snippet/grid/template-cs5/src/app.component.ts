

import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' width=90></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150>
                            <ng-template #template let-data>
                                <div>
                                    <a href="#" (click)="onClick($event, data.FirstName)">{{
                                    data.FirstName
                                    }}</a>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }

    onClick(event: any, firstName: any) {
        var url = 'https://www.meaningofthename.com/';
        var searchUrl = url + firstName; 
        window.open(searchUrl);
    }
}




