import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { textdata } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' >
                <e-columns>
                    <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                    <e-column headerText="Employee Image" width="150" textAlign="Center"></e-column>
                    <e-column headerText="Employee Details" width="300" textAlign="Center"></e-column>
                </e-columns>
                <ng-template #rowTemplate let-data>
                    <tr>
                        <td class="rows">
                            {{data.EmpID}}
                        </td>
                        <td class="rowphoto">
                            <img src="{{data.FullName}}.png" alt="{{data.FullName}}" />
                        </td>
                        <td class="details">
                            <table class="CardTable">
                                <colgroup>
                                   <col width="30%">
                                   <col width="10%">
                                </colgroup>
                                <tbody>
                                   <tr>
                                        <td class="CardHeader">First Name</td>
                                        <span>:</span>
                                        <td class="CardData"> {{data.FirstName}}</td>
                                    </tr>
                                    <tr>
                                        <td class="CardHeader">Last Name</td>
                                        <span>:</span>
                                        <td>{{data.LastName}}</td>
                                    </tr>
                                    <tr>
                                        <td class="CardHeader">Title</td>
                                        <span>:</span>
                                        <td>{{data.Designation}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </ng-template>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  ngOnInit(): void {
    this.data = textdata;
  }
}
