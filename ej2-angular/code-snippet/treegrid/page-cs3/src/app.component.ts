

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {TreeGridComponent} from '@syncfusion/ej2-angular-treegrid';
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' (dataBound)='dataBound()' [treeColumnIndex]='1' [allowPaging]='true' [pageSettings]='pageSettings' childMapping='subtasks' >
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
    public initialGridLoad?: boolean;
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
        this.pageSettings = {pageSize: 7, pageSizes: true};
        this.initialGridLoad = true;
    }
    dataBound(){
    if (this.initialGridLoad) {
        this.initialGridLoad = false;
        var pager = document.getElementsByClassName('e-gridpager');
        var topElement;
        if ((this.treeGridObj as TreeGridComponent).toolbar) {
            topElement = document.getElementsByClassName('e-toolbar');
        } else {
            topElement = document.getElementsByClassName('e-gridheader');
        }
        topElement[0].before(pager[0]);
    }
}
}



