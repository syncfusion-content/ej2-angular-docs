

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild,ViewEncapsulation} from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='275' [treeColumnIndex]='1' [selectionSettings]="selectOptions" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText="Task Name Column for Tree Grid"  textAlign='Left' width=90></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    styles:[`
    .e-treegrid td.e-cellselectionbackground {
        background: #9ac5ee;
        font-style: italic;
      }
    `]
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public selectOptions: any= {
        mode: 'Cell',
        type: 'Multiple',
    };
    ngOnInit(): void {
        this.data = sampleData;
    }
    
}



