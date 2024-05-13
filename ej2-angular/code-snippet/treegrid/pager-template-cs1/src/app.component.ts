import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {PageSettingsModel, TreeGridComponent, PageService} from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-inputs';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
    TreeGridAllModule, NumericTextBoxModule
    ],
    providers:[PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=250 [treeColumnIndex]='1' [allowPaging]='true'  [pageSettings]='PageSettings' childMapping='subtasks' >
                    <ng-template #pagerTemplate let-data>
                        <div class="e-pagertemplate">
                            <div class="col-lg-12 control-section">
                                <div class="content-wrapper"  style="margin-top:5px;margin-left:30px;border: none; display: inline-block ">
                                    <ejs-numerictextbox  step='1' width='75' min='1' max='3' value={{data.currentPage}} (change)='change($event)'></ejs-numerictextbox>
                                </div>
                            </div>
                            <div id="totalPages" class="e-pagertemplatemessage"
                                style="margin-top:5px;margin-left:30px;border: none; display: inline-block ">
                                    <span class="e-pagenomsg"> {{data.currentPage}} of {{data.totalPages}} pages ({{data.totalRecordsCount}} items)</span>
                            </div>
                        </div>
                    </ng-template>
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
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    public PageSettings?: PageSettingsModel;
    ngOnInit(): void {
        this.data = sampleData;
        
    }
        change(args:ChangeEventArgs){
            this.PageSettings = { currentPage: args.value };
        }
}