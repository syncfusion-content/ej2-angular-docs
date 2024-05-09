

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent,ToolbarItems, PageSettingsModel, PageService } from '@syncfusion/ej2-angular-treegrid';


@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers:[PageService],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: ` <ejs-treegrid  #treegrid [dataSource]='data' height=230 [treeColumnIndex]='1' [allowPaging]='true' [pageSettings]='pageSettings' (dataBound)='dataBound()' childMapping='subtasks' >
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
    public toolbar?: ToolbarItems[];
    public initialGridLoad: boolean = true;
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
   
    ngOnInit(): void {
        this.data = sampleData;
        this.pageSettings = { pageSizes: true, pageSize: 12 };
    }
    dataBound() {
        if (this.initialGridLoad) {
            this.initialGridLoad = false;
            const pager = document.getElementsByClassName('e-gridpager');
            let topElement;
            if ((this.treegrid as any).toolbar) {
                topElement = document.getElementsByClassName('e-toolbar');
            } else {
                topElement = document.getElementsByClassName('e-gridheader');
            }
            topElement[0].before(pager[0]);
        }
    }
}


