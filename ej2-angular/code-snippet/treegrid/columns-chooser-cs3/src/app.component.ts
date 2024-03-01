import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<button id='show' ej-button class='e-flat' (click)='show()'> open Column Chooser </button>
              
                <ejs-treegrid #treegrid id="TreeGrid" [dataSource]='data' [treeColumnIndex]='1' [showColumnChooser]='true' height='270' childMapping='subtasks'>
                     <e-columns>
                          <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                          <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                          <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                          <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' width=90>
                          </e-column>
                          <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                     </e-columns>
                 </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: object[] = [];
    @ViewChild('treegrid')

    public treegrid?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
    }
    show() {
        (this.treegrid as TreeGridComponent).columnChooserModule.openColumnChooser(200, 50); // give X and Y axis
    }
}