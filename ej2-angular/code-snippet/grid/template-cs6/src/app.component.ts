import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs'



import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { ColorPickerEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        
        ButtonModule,
        GridModule,
        ColorPickerModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
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
    @ViewChild('grid') 
    public grid?: GridComponent;

    change(args: ColorPickerEventArgs) {
        const selectedRows = (this.grid as GridComponent).getSelectedRows() as HTMLElement[];
        for (const row of selectedRows) {
            row.style.backgroundColor = args.value as string;
        }
        (this.grid as GridComponent).clearSelection();
    }

    ngOnInit(): void {
        this.data = employeeData;
    }
}




