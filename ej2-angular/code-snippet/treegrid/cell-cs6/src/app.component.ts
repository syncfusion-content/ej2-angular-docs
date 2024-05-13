import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='300' [treeColumnIndex]='1' (dataBound)="dataBound()" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`,
   
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
    }
    dataBound() {
        let header = (this.treegrid as TreeGridComponent).getHeaderContent().querySelector('.e-headercell');
        (header as HTMLElement).style.backgroundColor = 'red';
        (header as HTMLElement).style.color = 'white';
        let cell = (this.treegrid as TreeGridComponent).getCellFromIndex(1, 3);
        (cell as HTMLElement).style.background = '#f9920b';
        (cell as HTMLElement).style.color = 'white';
    }
}