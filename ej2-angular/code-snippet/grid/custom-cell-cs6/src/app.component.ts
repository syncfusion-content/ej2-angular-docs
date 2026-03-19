import { employeeData } from './datasource';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DetailRowService, GridComponent, GridModule } from '@syncfusion/ej2-angular-grids';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [ GridModule, ButtonModule , TextBoxModule],
  providers: [DetailRowService],
  standalone: true,
  selector: 'app-root',
  template: `
        <div style="display: inline-block; padding: 0px 5px 0px 0px">
          <ejs-textbox #textbox placeholder="Enter the row Index" width="250px" 
          floatLabelType="Auto"></ejs-textbox>
        </div>
        <button ejs-button id="sample" (click)="btnClick()">Expand</button>
        <div style="padding: 5px 0px 0px 0px">
          <ejs-grid #grid [dataSource]="data" height="285" width="auto">
            <e-columns>
              <e-column field="FirstName" headerText="First Name" width="140"></e-column>
              <e-column field="LastName" headerText="Last Name" width="140"></e-column>
              <e-column field="Title" headerText="Title" width="150"></e-column>
              <e-column field="Country" headerText="Country" width="150"></e-column>
            </e-columns>
            <ng-template #detailTemplate let-data>
              <table class="CardTable" cellpadding="3" cellspacing="2">
                <colgroup>
                  <col width="35%">
                  <col width="35%">
                  <col width="40%">
                </colgroup>
                <tbody>
                  <tr>
                    <td class="rowphoto" rowspan="4" style="text-align: center">
                     <img src="https://ej2.syncfusion.com/angular/demos/assets/grid/images/{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}"/>
                    </td>
                    <td>
                      <span style="font-weight: 500">First Name:</span>
                      {{ data.FirstName }}
                    </td>
                    <td>
                      <span style="font-weight: 500">Postal Code:</span>
                      {{ data.PostalCode }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-weight: 500">Last Name:</span>
                      {{ data.LastName }}
                    </td>
                    <td>
                      <span style="font-weight: 500">City:</span>
                      {{ data.City }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-weight: 500">Title:</span>
                      {{ data.Title }}
                    </td>
                    <td>
                      <span style="font-weight: 500">Phone:</span>
                      {{ data.Phone }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-weight: 500">City:</span>
                      {{ data.City }}
                    </td>
                    <td>
                      <span style="font-weight: 500">Country:</span>
                      {{ data.Country }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </ng-template>
          </ejs-grid>
        </div>`
  })
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('textbox') public textbox?: TextBoxComponent;

  ngOnInit(): void {
    this.data = employeeData;
  }
  public btnClick(): void {
    const value = (this.textbox as TextBoxComponent).value;
    const index = typeof value === 'string' ? parseInt(value, 10) : Number(value);
    if (!isNaN(index)) {
      (this.grid as GridComponent).detailRowModule.expand(index);
    }
    // Expand the detail row of the specified row index
  }
}
