

import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='315px'[enableHover]="false">
                    <e-columns>
                        <e-column field='FirstName' headerText='FirstName' width=100></e-column>
                        <e-column field='LastName' headerText='Last Name' width=100></e-column>
                        <e-column field='City' headerText='City' width=100></e-column>
                        <e-column headerText='Change the color of row' width='120' textAlign='Center'>
                            <ng-template #template let-data>
                                <div class="colorpicker">
                                    <input ejs-colorpicker #colorPicker id="color-picker" type="color" [mode]="modeSettings" (change)="change($event)"/>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public modeSettings = 'Palette'
    @ViewChild('grid') public grid?: GridComponent;

    change(args: any) {
        const selectedRows = (this.grid as any).getSelectedRows() as HTMLElement[];
        for (const row of selectedRows) {
            row.style.backgroundColor = (args as any).value;
        }
        (this.grid as any).clearSelection();
    }

    ngOnInit(): void {
        this.data = employeeData;
    }
}




