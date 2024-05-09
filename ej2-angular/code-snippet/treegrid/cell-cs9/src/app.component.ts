import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    imports: [
    TreeGridAllModule,DropDownListAllModule
    ],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: ` <div style="display: flex">
                    <label style="padding:  10px 10px 26px 0"> Change the grid lines: </label> 
                    <ejs-dropdownlist style="margin-top:5px" id="value" #dropdown index="0" width="100" [dataSource]="ddlData" (change)="valueChange($event)"></ejs-dropdownlist>
                </div>
                    <ejs-treegrid #treegrid [dataSource]='data' height='275' gridLines='Both' [treeColumnIndex]='1' childMapping='subtasks' >
                        <e-columns>
                            <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=100></e-column>
                            <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                            <e-column field='priority' headerText='Priority' textAlign='Right' width=80></e-column>
                        </e-columns>
                    </ejs-treegrid>`,
   
})
export class AppComponent implements OnInit {

    public data?: Object[];
    
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    
    public ddlData: object[] = [
        { text: 'Default', value: 'Default' },
        { text: 'Both', value: 'Both' },
        { text: 'Horizontal', value: 'Horizontal' },
        { text: 'Vertical', value: 'Vertical' },
        { text: 'None', value: 'None' },
    ];

    ngOnInit(): void {
        this.data = sampleData;
    }

    valueChange(args: ChangeEventArgs): void {
        (this.treegrid as TreeGridComponent).gridLines = args.value as any;
    }
   
}