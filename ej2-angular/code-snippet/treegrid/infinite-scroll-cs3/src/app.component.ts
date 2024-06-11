import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridComponent, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, InfiniteScrollService } from '@syncfusion/ej2-angular-treegrid'
import { ChangeEventArgs, SwitchModule} from '@syncfusion/ej2-angular-buttons'
import { Component, OnInit } from '@angular/core';
import { dataSource, virtualData } from './datasource';

@Component({
    imports: [TreeGridModule, SwitchModule  ],

    providers: [PageService, InfiniteScrollService],
    standalone: true,
    selector: 'app-container',
    template: `<div style="padding: 20px 0px 20px 0px">
                    <label>Enable/Disable Cache mode</label>
                    <ejs-switch #switch id="switch" [checked]='true' (change)="toggleCacheMode($event)"></ejs-switch>
                </div>
                <ejs-treegrid #treegrid [dataSource]='data' [enableInfiniteScrolling]=true height=275 [infiniteScrollSettings]='infiniteScrollSettings' [pageSettings]='pageSettings' childMapping='Crew' [treeColumnIndex]='1' >
                    <e-columns>
                        <e-column field='TaskID' headerText='Player Jersey' width='120' textAlign='Right'></e-column>
                        <e-column field='FIELD1' headerText='Player Name' width='120'></e-column>
                        <e-column field='FIELD2' headerText='Year' width='100' textAlign='Right'></e-column>
                        <e-column field='FIELD3' headerText='Stint' width='120' textAlign='Right'></e-column>
                        <e-column field='FIELD4' headerText='TMID' width='120' textAlign='Right'></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public pageSettings?: Object;
    public infiniteScrollSettings?: Object;
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;


    ngOnInit(): void {
        dataSource();
        this.data = virtualData;
        this.pageSettings = {pageSize: 30};
        this.infiniteScrollSettings = { enableCache: true};
    }
    toggleCacheMode(args:ChangeEventArgs): void {
        (this.treegrid as TreeGridComponent).infiniteScrollSettings.enableCache = args.checked;
        (this.treegrid as TreeGridComponent).refresh();
      }
}



