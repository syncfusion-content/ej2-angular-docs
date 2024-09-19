import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PageService, SortService, FilterService, ToolbarService, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { ChipListModule } from '@syncfusion/ej2-angular-buttons'
import { Component, OnInit, } from '@angular/core';
import { textdata } from './datasource';

@Component({
    imports: [TreeGridModule, ButtonModule, ChipListModule],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' [enableHover]="false">
                    <e-columns>
                        <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                        <e-column  field = 'Name' headerText = 'Employee Name' width = '150'></e-column>
                        <e-column field = 'Designation' headerText = 'Designation' width = '150'></e-column>
                        <e-column headerText='FirstName' width=150>
                            <ng-template #template let-data>
                                <div class="chip">
                                  <ejs-chiplist id="chip" [text]="data.Name"></ejs-chiplist>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = textdata;
    }

}



