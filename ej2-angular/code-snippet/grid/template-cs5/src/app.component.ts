import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
imports: [
        
        ButtonModule,
        GridModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' width=90></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150>
                            <ng-template #template let-data>
                                <div>
                                    <a href="#" (click)="onClick($event, data.FirstName)">
                                    {{data.FirstName}}
                                    </a>
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

    onClick(event:MouseEvent, firstName: string) {
        var url = 'https://www.google.com/search?q=';
        var searchUrl = url + firstName; 
        window.open(searchUrl);
    }
}




