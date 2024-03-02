import { Component, OnInit ,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, Column } from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-container',
    template: `<div style="display: flex">
                <label style="padding: 30px 17px 0 0;">Align the text for columns :</label>
                <ejs-dropdownlist  style="padding: 26px 0 0 0" index="0" width="100" [dataSource]="alignmentData" (change) ="changeAlignment($event)"></ejs-dropdownlist>
              </div>

                <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    
    public alignmentData: Object[] = [
        { text: 'Left', value: 'Left' },
        { text: 'Right', value: 'Right' },
        { text: 'Center', value: 'Center' },
        { text: 'Justify', value: 'Justify' },
    ];
    public changeAlignment(args: ChangeEventArgs): void {
        (this.treegrid as TreeGridComponent).columns.forEach((col: Column) => {
            col.textAlign = args.value as string;
        });
        (this.treegrid as TreeGridComponent).refreshColumns();
    }
    ngOnInit(): void {
        this.data = sampleData;
    }
}



