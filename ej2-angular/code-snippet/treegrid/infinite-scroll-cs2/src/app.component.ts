import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridComponent, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, InfiniteScrollService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit} from '@angular/core';
import { dataSource, virtualData } from './datasource';
import { ChangeEventArgs, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'

@Component({
    imports: [TreeGridModule,DropDownListModule  ],

    providers: [PageService, InfiniteScrollService],
    standalone: true,
    selector: 'app-container',
    template: `<div style="display: flex">
                    <label style="padding: 30px 20px 0 0" > Select initialBlocks count: :</label>
                    <ejs-dropdownlist #dropdown id='value' style="padding: 26px 0 0 0" #sample index='0' width='220' [dataSource]='dropDownData' (change)='valueChange($event)' ></ejs-dropdownlist>
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
    public dropDownData?: Object[] = [
        { text: 'Select count' },
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '5', value: '5' },
        { text: '6', value: '6' },
        { text: '7', value: '7' }
      ];


    ngOnInit(): void {
        dataSource();
        this.data = virtualData;
        this.pageSettings = {pageSize: 30};
        this.infiniteScrollSettings = { initialBlocks: 5};
    }
    valueChange(args: ChangeEventArgs): void {
        (this.treegrid as TreeGridComponent).infiniteScrollSettings.initialBlocks = parseInt((args.value as string), 10);
        (this.treegrid as TreeGridComponent).refresh();    
    }
}



