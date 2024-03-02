

import { Component, OnInit , ViewChild} from '@angular/core';
import { textdata } from './datasource';
import { ColorPickerEventArgs } from '@syncfusion/ej2-angular-inputs';
import { TreeGridComponent,} from '@syncfusion/ej2-angular-treegrid'

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' [enableHover]="false">
                    <e-columns>
                        <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                        <e-column  field = 'Name' headerText = 'Employee Name' width = '150'></e-column>
                        <e-column field = 'Designation' headerText = 'Designation' width = '150'></e-column>
                        <e-column headerText='Employee Performance Rating' width='280'>
                            <ng-template #template let-data>
                                <div class="colorpicker">
                                    <input ejs-colorpicker #colorPicker id="color-picker" type="color" [mode]="modeSettings" (change)="change($event)"/>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

        public data?: Object[] ;
        @ViewChild('treegrid')
        treegrid?: TreeGridComponent;
        public modeSettings = 'Palette'
            
        ngOnInit(): void {
            this.data =textdata;
        }
        
        change(args: ColorPickerEventArgs) {
            const selectedRows = (this.treegrid as TreeGridComponent).getSelectedRows() as HTMLElement[];
            for (const row of selectedRows) {
                row.style.backgroundColor = args.value as string;
            }
            (this.treegrid as TreeGridComponent).clearSelection();
        }
    }



