import { NgModule,ViewChild, ViewEncapsulation } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PageSettingsModel, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit, } from '@angular/core';
import { sampleData } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Column, ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [TreeGridModule],
    encapsulation:ViewEncapsulation.None,
    providers: [PageService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' #treegrid height='265' [allowPaging]='true' pageSettings='pager' [treeColumnIndex]='1'
                        (beforePrint)='beforePrint()' childMapping='subtasks' [toolbar]='toolbarOptions'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='progress' headerText='Progress' [visible]='false' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=110></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    styles:[`
        .e-treegrid .e-headercell {
            background: #24a0ed !important;
        }
        .e-treegrid .e-row .e-rowcell {
            background: #cbecff !important;
        }
        .e-treegrid .e-altrow .e-rowcell{
            background: #e7d7f7 !important;
        }`
    ]
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public toolbarOptions?: ToolbarItems[];
    public pager?: PageSettingsModel;
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Print'];
        this.pager = { pageSize: 6 };
    }
    beforePrint() {
        var styleElement = document.createElement('style');
        styleElement.innerHTML = `
        .e-treegrid .e-headercell {
            background: #24a0ed !important;
        }
        .e-treegrid .e-row .e-rowcell {
            background: #cbecff !important;
        }
        .e-treegrid .e-altrow .e-rowcell{
            background: #e7d7f7 !important;
        }
        `;
        (document.querySelector('head') as Element).appendChild(styleElement);
    }
}



