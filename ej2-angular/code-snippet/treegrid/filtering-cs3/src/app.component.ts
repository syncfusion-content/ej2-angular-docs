import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild} from '@angular/core';
import { DataManager,Query, WebApiAdaptor,UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
    imports: [
    TreeGridAllModule,
    ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' [query]='query' parentIdMapping='ParentItem' hasChildMapping='isParent' idMapping='TaskID' height=265 allowPaging='true' allowFiltering='true' [pageSettings]='pageSettings' [filterSettings]='filterSettings'>
                    <e-columns>
                        <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                        <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
                        <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
                        <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: DataManager;
    public query?: Query;
  public pageSettings: Object | undefined;
  public filterSettings: Object | undefined;

    ngOnInit(): void {
        this.data = new DataManager({
                url: 'https://services.syncfusion.com/angular/production/api/SelfReferenceData',
                adaptor: new WebApiAdaptor, crossDomain: true
            });
        this.query = new Query().addParams('ej2treegrid', 'true');
        this.pageSettings = { pageCount: 5 };
        this.filterSettings = { type: 'Excel', enableInfiniteScrolling: true };
}
}