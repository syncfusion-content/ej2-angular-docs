import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { textdata } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { Internationalization } from '@syncfusion/ej2-base';

let instance: Internationalization = new Internationalization();

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' >
                <e-columns>
                        <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                        <e-column field = 'Address' headerText = 'Employee Details' width = '350'></e-column>
                        <e-column field = 'DOB' headerText = 'DOB' width = '150'></e-column>
                </e-columns>
        <ng-template #rowTemplate let-data>
                <tr>
                        <td class="border" style='padding-left:18px;'>
                            <div>{{data.EmpID}}</div>
                        </td>
                        <td class="border">
                            <div>
                                <div style="position:relative;display:inline-block;">
                                    <img src="{{data.FullName}}.png" alt="{{data.FullName}}" />
                                </div>
                                <div style="display:inline-block;">
                                    <div style="padding:5px;">{{data.Address}}</div>
                                    <div style="padding:5px;">{{data.Country}}</div>
                                    <div style="padding:5px;font-size:12px;">{{data.Contact}}</div>
                                </div>
                            </div>
                        </td>
                        <td class="border" style='padding-left: 20px;'>
                            <div>{{format(data.DOB)}}</div>
                        </td>
                </tr>
        </ng-template>
</ejs-treegrid>`,
styleUrls: ['./app.style.css']
})
export class AppComponent implements OnInit {

    public data?: Object[];

    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = textdata;
    }

    public format(value: Date): string {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
}
export interface DateFormat extends Window {
    format?: Function;
}