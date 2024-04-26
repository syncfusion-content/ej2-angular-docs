import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='315' width='auto'>
        <e-columns>
            <e-column field="FirstName" headerText='First Name' width='140'></e-column>
            <e-column field="LastName" headerText='Last Name' width='140'></e-column>
            <e-column field="Title" headerText='Title' width='150'></e-column>
            <e-column field="Country" headerText='Country' width='150'></e-column>
        </e-columns>
        <ng-template #detailTemplate let-data>
                    <table class="detailtable" width="100%">
                        <colgroup>
                            <col width="35%">
                            <col width="35%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="photo" rowSpan="4" style="text-align : center">
                                    <img src="{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}" />
                                </td>
                                <td>
                                    <span style="font-weight: 500">First Name:</span>
                                    {{data.FirstName}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> Postal Code:</span>
                                     {{data.PostalCode}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-weight: 500">Last Name:</span>
                                    {{data.LastName}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> City:</span>
                                     {{data.City}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-weight: 500">Title:</span>
                                    {{data.Title}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> Phone:</span>
                                     {{data.Phone}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-weight: 500">City:</span>
                                    {{data.City}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> Country:</span>
                                     {{data.Country}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
        </ng-template>
    </ejs-grid>`,
    styleUrls: ['app.style.css']
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
}



