import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    imports: [
    TreeGridAllModule,DropDownListAllModule 
    ],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: ` <div style="display: flex">
                    <label style="padding: 10px 10px 26px 0"> Change the clip mode: </label>
                    <ejs-dropdownlist style="margin-top:5px" index="0" width="150" [fields]='fields' [dataSource]="ddlData" (change)="valueChange($event)"></ejs-dropdownlist>
                </div>
                <ejs-treegrid #treegrid [dataSource]='data' height='275' gridLines='Both' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' clipMode='EllipsisWithTooltip' textAlign='Left' width=100></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=80></e-column>
                        <e-column field='priority' headerText='Priority' width=50></e-column>
                    </e-columns>
                </ejs-treegrid>`,
   
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;

    public fields: object = { text: 'text', value: 'value' };
    public ddlData: object[] = [
    { text: 'Ellipsis', value: 'Ellipsis' },
    { text: 'Clip', value: 'Clip' },
    { text: 'Ellipsis with Tooltip', value: 'EllipsisWithTooltip' },
  ];

    ngOnInit(): void {
        this.data = sampleData;
    }

    valueChange(args: ChangeEventArgs): void {
        var column_inx=(this.treegrid as TreeGridComponent).getColumnIndexByField('taskName');
        ((this.treegrid as TreeGridComponent).columns[column_inx] as any).clipMode = (args.value as any);
        (this.treegrid as TreeGridComponent).refreshColumns();
      }
   
}
