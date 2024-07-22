import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' hideAtMedia='(min-width: 700px)' textAlign='Right' width=90></e-column>// column hides when browser screen width lessthan 700px;
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' hideAtMedia='(max-width: 500px)' textAlign='Right' format='yMd' width=90></e-column>// column shows when browser screen width lessthan or equalto 500px;
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
}