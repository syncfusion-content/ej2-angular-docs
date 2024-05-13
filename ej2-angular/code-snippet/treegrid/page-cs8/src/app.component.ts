

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { Component, OnInit ,ViewChild,ViewEncapsulation} from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, PageSettingsModel, PageService } from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs, NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';


@Component({
    imports: [
    TreeGridAllModule, NumericTextBoxModule
    ],
    providers:[PageService],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: `<div style="padding:0 0 20px 0">
                    <label style="padding: 30px 17px 0 0">Select page size:</label>
                    <ejs-numerictextbox #numericTextbox placeholder='select container height' format='###.##' min=150  step="50" (change)='calculatePageSize($event)' width="200px"></ejs-numerictextbox>
                </div>
                <ejs-treegrid  #treegrid [dataSource]='data' height=230 [treeColumnIndex]='1' [allowPaging]='true' [pageSettings]='pageSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public pageSettings?: Object ;
   
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    @ViewChild('numericTextbox') public numerictextbox?: NumericTextBoxComponent;

    ngOnInit(): void {
        this.data = sampleData;
       
    }
    calculatePageSize({ value }: ChangeEventArgs) {
        (this.treegrid as TreeGridComponent).pageSettings.pageSize = (this.treegrid as TreeGridComponent).grid.calculatePageSizeByParentHeight((value as number).toString());
        
    }
}


