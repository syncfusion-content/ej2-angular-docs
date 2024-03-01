

import { Component, OnInit , ViewChild} from '@angular/core';
import { textdata } from './datasource';


@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' [enableHover]="false">
                    <e-columns>
                        <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                        <e-column  field = 'Name' headerText = 'Employee Name' width = '150'></e-column>
                        <e-column field = 'Designation' headerText = 'Designation' width = '150'></e-column>
                        <e-column headerText = 'Country' width = '150'>
                            <ng-template #template let-data>
                                <div>
                                    <ejs-dropdownlist [value]='data.Country' width="100" [dataSource]='dropData' [popupHeight]='150' [popupWidth]='150' >
                                    </ejs-dropdownlist>
                                </div>
                            </ng-template>
            <           /e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

        public data?: Object[] ;
        public dropData?: string[];
            
        ngOnInit(): void {
            this.data =textdata;
            this.dropData = ['USA', 'UK', 'London'];
        }
        
    }



