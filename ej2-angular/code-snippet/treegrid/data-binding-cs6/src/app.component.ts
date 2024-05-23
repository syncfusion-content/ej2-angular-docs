import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import {ButtonModule} from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
imports: [
        
        TreeGridModule,
        ButtonModule
    ],

providers: [PageService,
                SortService,
                FilterService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' parentIdMapping='ParentItem' idMapping='TaskID' height=265 [allowPaging]="true">
        <e-columns>
            <e-column field='Sno' headerText='SNO' width='60' textAlign='Right'></e-column>
            <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: DataManager;

    ngOnInit(): void {
        class SerialNoAdaptor extends WebApiAdaptor {
            public override processResponse(): Object[] {
                let i: number = 0;
                // calling base class processResponse function
                let original: Object[] | any = super.processResponse.apply(this, arguments as any);
                // adding serial number
                original.forEach((item: Object | any) => item['Sno'] = ++i);
                return original;
            }
}
        this.data = new DataManager({
                url: 'https://services.syncfusion.com/angular/production/api/SelfReferenceData',
                adaptor: new SerialNoAdaptor, crossDomain: true, offline: true
            });
    }
}


