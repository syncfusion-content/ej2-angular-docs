

import { Component, OnInit,ViewChild } from '@angular/core';
import { stringData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='name' headerText='Full Name' textAlign='Right' [valueAccessor]='orderFormatter' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = stringData;
    }
    orderFormatter(field: string, data: Object | any, column: Object): string {
        return data[field].map(function (s: {lastName: string, firstName: string}): string {
            return s.lastName || s.firstName }).join(' ');
    }   
}



