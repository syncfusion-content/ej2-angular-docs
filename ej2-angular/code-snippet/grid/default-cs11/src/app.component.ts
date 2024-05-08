import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService,DetailRowService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild, ViewContainerRef, Inject, AfterViewInit } from '@angular/core';
import { data, employeeData } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
        SortService,
        FilterService,
        GroupService,DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='parentData' height='315px' [childGrid]='childGrid'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=100></e-column>
                        <e-column field='LastName' headerText='Last Name' width=100></e-column>
                        <e-column field='City' headerText='City' width=100></e-column>
                    </e-columns>
                </ejs-grid>
                <ng-template #childtemplate let-data>
                    <div class="image">
                        <img src="https://ej2.syncfusion.com/angular/demos/assets/grid/images/{{data.EmployeeID}}.png" alt="{{ data.EmployeeID }}"/>
                    </div>
                </ng-template>`,
})
export class AppComponent implements OnInit, AfterViewInit {

    constructor(@Inject(ViewContainerRef) private viewContainerRef?: ViewContainerRef) {

    }
    public parentData?: object[];
    @ViewChild('childtemplate' , { static: true }) public childtemplate?: any;
    public childGrid?: any;

    ngAfterViewInit() {
        this.childtemplate.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
        this.childtemplate.elementRef.nativeElement.propName = 'template';
    }

    ngOnInit(): void {
        this.parentData = employeeData;
        this.childGrid = {
            dataSource: data,
            queryString: 'EmployeeID',
            load() {
                this.registeredTemplate = {};   // set registerTemplate value as empty in load event
            },
            columns: [
                { headerText: 'Employee Image', textAlign: 'Center', template: this.childtemplate, width: 120 },
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
                { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
                { field: 'ShipCity', headerText: 'Ship City', width: 100 },
                { field: 'ShipName', headerText: 'Ship Name', width: 120 }
            ],
        };
    }
}



