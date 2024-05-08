import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'

import { Component } from '@angular/core';
import { employeeData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

let instance: Internationalization = new Internationalization();

@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<div class="control-section">
                <ejs-grid #grid [dataSource]='data' id='Grid'>
                    <ng-template #detailTemplate let-data>
                        <table class="detailtable" width="100%">
                            <colgroup>
                                <col width="35%">
                                <col width="35%">
                                <col width="30%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td rowspan="4" style="text-align: center;">
                                        <img class='photo' src="https://ej2.syncfusion.com/angular/demos/assets/grid/images/{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}" />
                                    </td>
                                    <td>
                                        <span style="font-weight: 500;">First Name: </span> {{data.FirstName}}
                                    </td>
                                    <td>
                                        <span style="font-weight: 500;">Postal Code: </span> {{data.PostalCode}}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style="font-weight: 500;">Last Name: </span> {{data.LastName}}
                                    </td>
                                    <td>
                                        <span style="font-weight: 500;">City: </span> {{data.City}}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style="font-weight: 500;">Title: </span> {{data.Title}}
                                    </td>
                                    <td>
                                        <span style="font-weight: 500;">Phone: </span> {{data.HomePhone}}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style="font-weight: 500;">Address: </span> {{data.Address}}
                                    </td>
                                    <td>
                                        <span style="font-weight: 500;">HireDate: </span> {{format(data.HireDate)}}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </ng-template>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' width='125' 
                        textAlign='Right'></e-column>
                        <e-column field='FirstName' headerText='Name' width='120'>
                        </e-column>
                        <e-column field='Title' headerText='Title' width='170'></e-column>
                        <e-column field='HireDate' headerText='Hire Date' width='135' 
                        textAlign='Right' format='yMd'></e-column>
                        <e-column field='ReportsTo' headerText='Reports To' width='120' 
                        textAlign='Right'></e-column>
                    </e-columns>
                </ejs-grid>
            </div>`
})
export class AppComponent {

    public data?: Object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
    public format(value: Date): string {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
}

export interface DateFormat extends Window {
    format?: Function;
}