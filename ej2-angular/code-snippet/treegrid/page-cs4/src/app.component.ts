import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, PageService } from '@syncfusion/ej2-angular-treegrid';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, PageSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { SwitchComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [
    TreeGridAllModule, SwitchModule
    ],
    providers:[PageService],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: `<div style="padding: 20px 0px 20px 0px">
                    <label>Enable/Disable Query String</label>
                    <ejs-switch #switch id="switch" [(checked)]="enableQuery" (change)="toggleQueryString($event)"></ejs-switch>
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
    public initialPage?: object;
    @ViewChild('switch') public switch?: SwitchComponent;
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public enableQuery = true;
    ngOnInit(): void {
        this.data = sampleData;
        this.pageSettings={pageSize:8,enableQueryString:this.enableQuery};
        
    }
    toggleQueryString(args:any): void {
       (this.treegrid as TreeGridComponent).pageSettings.enableQueryString = args.checked;
    }
}