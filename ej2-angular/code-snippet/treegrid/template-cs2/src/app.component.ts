

import { Component, OnInit } from '@angular/core';
import { textdata } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' >
                    <e-columns>
                        <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                        <e-column headerText = 'Employee Name' width = '150'>
                             <ng-template #template let-data>
                                 <div>
                                    <a href="#" (click)="onClick($event, data.FirstName)">
                                     {{data.FirstName}}
                                    </a>
                                 </div>
                              </ng-template>
                        </e-column>
                        <e-column field = 'Designation' headerText = 'Designation' width = '150'></e-column>
                        <e-column field = 'Address' headerText = 'Employee Details' width = '350'></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = textdata;
    }
    
    onClick(event:MouseEvent, firstName: string) {
        var url = 'https://www.meaningofthename.com/';
        var searchUrl = url + firstName; 
        window.open(searchUrl);
    }
}



