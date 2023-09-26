

import { Component, OnInit } from '@angular/core';
import { headerData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' childMapping='subtasks' height='315' >
        <e-columns>
            <e-column field='taskName' width='170'><ng-template #headerTemplate>      <div>
        <div>
            <img src="__Task name.png" width="20" height="20" class="e-image" />  Task Name
        </div>
    </div></ng-template> </e-column>
            <e-column field='startDate'  width='130' format="yMd" textAlign='Right'></e-column>
            <e-column field='duration' headerText='Duration' width='80' textAlign='Right'> <ng-template #headerTemplate>    <div>
        <div>
            <img src="__Duration.png" width="20" height="20" class="e-image" />  Duration
        </div>
    </div></ng-template></e-column>
    <e-column field='progress' width='90' textAlign='Right'></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = headerData;
    }
}



