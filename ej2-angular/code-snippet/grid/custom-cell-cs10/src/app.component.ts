import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

const instance: Internationalization = new Internationalization();

@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height=335 width='auto'>
        <e-columns>
            <e-column headerText='Employee Image' width='150' textAlign='Center'></e-column>
            <e-column headerText='Employee Details' width='300' textAlign='Center'>
            </e-column>
        </e-columns>
        <ng-template #rowTemplate let-data>
            <tr>
                <td class="rowphoto">
                  <img src="{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}" />
                </td>
                <td class="details">
                    <table class="CardTable" cellpadding="3" cellspacing="2">
                        <colgroup>
                            <col width="30%">
                            <col width="10%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="CardHeader"> First Name </td>
                                <span>:</span>
                                <td>{{data.FirstName}} </td>
                            </tr>
                            <tr>
                                <td class="CardHeader"> Last Name </td>
                                <span>:</span>
                                <td>{{data.LastName}} </td>
                            </tr>
                            <tr>
                                <td class="CardHeader"> Title </td>
                                <span>:</span>
                                <td>{{data.Title}}</td>
                            </tr>
                            <tr>
                                <td class="CardHeader"> Birth Date </td>
                                <span>:</span>
                                <td>{{format(data.BirthDate)}}</td>
                            </tr>
                            <tr>
                                <td class="CardHeader"> Hire Date </td>
                                <span>:</span>
                                <td>{{format(data.HireDate)}}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </ng-template>
    </ejs-grid>`,
    styleUrls: ['app.style.css']
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
    public format(value: Date): string {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
}
export interface DateFormat extends Window {
    format?: (value: Date) => string;
}




