

import { Component, OnInit,ViewChild } from '@angular/core';
import { Fetch } from '@syncfusion/ej2-base';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    template: ` <button ejs-button (click)="click()">Bind Data</button>
    <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' parentIdMapping='ParentItem' idMapping='TaskID' [allowPaging]="true" height=240>
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
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    ngOnInit(): void {
    }
    click(): any{
    let fetch = new Fetch("https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData","GET");
    let trgrid = this.treegrid;
    fetch.send();
    fetch.onSuccess = function (data: string) {
        (trgrid as TreeGridComponent).hideSpinner();
        (trgrid as TreeGridComponent).dataSource = data;
    };
}
}


