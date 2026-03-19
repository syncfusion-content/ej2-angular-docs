import { employeeData } from './datasource';
import { Component, OnInit } from '@angular/core';
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ ChipListModule, GridModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column headerText='Employee Image' width='150' templateOptions="imageTemplateOptions" textAlign='Center'>
                            <ng-template #template let-data>
                                <div class="image">
                                    <img src="https://ej2.syncfusion.com/angular/demos/assets/grid/images/{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}"/>
                                </div>
                            </ng-template>
                        </e-column>
                        <e-column field='FirstName' headerText='FirstName' templateOptions="nameTemplateOptions" width=100>
                            <ng-template #template let-data>
                                <div class="chip">
                                    <ejs-chiplist id="chip" [text]="data.FirstName"></ejs-chiplist>
                                </div>
                            </ng-template>
                        </e-column>
                        <e-column field='LastName' headerText='Last Name' width=100></e-column>
                        <e-column field='City' headerText='City' width=100></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public imageTemplateOptions: object;
    public nameTemplateOptions: object;
    ngOnInit(): void {
        this.data = employeeData;
        this.imageTemplateOptions = { enableAriaLabel: true };
        this.nameTemplateOptions = { enableAriaLabel: false };
    }
}