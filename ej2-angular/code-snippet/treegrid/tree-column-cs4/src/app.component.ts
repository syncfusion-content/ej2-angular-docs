

import { Component, OnInit } from '@angular/core';
import { expandData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' expandStateMapping="isExpanded" >
                  <e-columns>
                    <e-column field="taskID" headerText="Task ID" width="70" textAlign="Right"></e-column>
                    <e-column field="taskName" headerText="Task Name" width="200"></e-column>
                    <e-column field="startDate" headerText="Start Date" width="90" format="yMd" textAlign="Right"></e-column>
                    <e-column field="endDate" headerText="End Date" width="90" format="yMd" textAlign="Right"></e-column>
                    <e-column field="duration" headerText="Duration" width="80" textAlign="Right"></e-column>
                    <e-column field="progress" headerText="Progress" width="80" ></e-column>
                    <e-column field="priority" headerText="Priority" width="90"></e-column>   
                  </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = expandData;
    }
}


