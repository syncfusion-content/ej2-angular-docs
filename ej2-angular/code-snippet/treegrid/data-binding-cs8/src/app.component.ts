

import { Component, OnInit,ViewChild } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid  #treegrid [treeColumnIndex]='1' (actionFailure)="onActionFailure($event)"
    parentIdMapping='ParentItem' [dataSource]='data' idMapping='TaskID' [allowPaging]="true">
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
        this.data = new DataManager({
    url: 'http://some.com/invalidUrl'
});
}
 onActionFailure(e: any): any {
       let span: HTMLElement = document.createElement('span');
       ((this.treegrid?.element as HTMLElement).parentNode as ParentNode).insertBefore(span, (this.treegrid as TreeGridComponent).element);
       span.style.color = '#FF0000'
       span.innerHTML = 'Server exception: 404 Not found';
    }
}


