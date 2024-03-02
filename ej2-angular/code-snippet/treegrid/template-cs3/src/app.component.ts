

import { Component, OnInit , ViewChild} from '@angular/core';
import { textdata } from './datasource';
import { Sparkline } from '@syncfusion/ej2-angular-charts';
import { TreeGridComponent,} from '@syncfusion/ej2-angular-treegrid'

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' (created)="renderGridSparkline()" >
                    <e-columns>
                        <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                        <e-column  field = 'Name' headerText = 'Employee Name' width = '150'></e-column>
                        <e-column field = 'Designation' headerText = 'Designation' width = '150'></e-column>
                        <e-column headerText='Employee Performance Rating' width='280'>
                            <ng-template #template let-data>
                                <div id="spkline{{data.EmployeeID}}"></div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

        public data?: Object[] =textdata;
        @ViewChild('treegrid')
        treegrid?: TreeGridComponent;
        public lineData: object[] = [
            [0, 6, -4, 1, -3, 2, 5],
            [5, -4, 6, 3, -1, 2, 0],
            [6, 4, 0, 3, -2, 5, 1],
            [4, -6, 3, 0, 1, -2, 5],
            [3, 5, -6, -4, 0, 1, 2],
            [1, -3, 4, -2, 5, 0, 6],
            [2, 4, 0, -3, 5, -6, 1],
            [5, 4, -6, 3, 1, -2, 0],
            [0, -6, 4, 1, -3, 2, 5],
            [6, 4, 0, -3, 2, -5, 1],
        ];
        public getSparkData(type: string, count: number) {
            return this.lineData[count] as number[];
        }
            
        ngOnInit(): void {
            
        }
        
        public renderGridSparkline(): void {
            setTimeout(() => {
            const length =(this.treegrid as TreeGridComponent).getDataRows().length
            for (let i: number = 1; i <= length; i++) {
                let line: Sparkline = new Sparkline({
                height: '50px',
                width: '90%',
                lineWidth: 2,
                valueType: 'Numeric',
                fill: '#3C78EF',
                dataSource: this.getSparkData('line', i)
                });
                line.appendTo('#spkline' + i);
            }
            }, 100)
        }
    }



