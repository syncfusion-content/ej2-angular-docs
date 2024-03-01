

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
    template: `<ejs-treegrid #treegrid [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [height]='194' [treeColumnIndex]='1' (created)='setHeaderHeight($event)'  >
                     <e-columns>
                        <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
                        <e-column field='TaskName' headerText='Task Name' width='100' ></e-column>
                        <e-column field='StartDate' headerText='Start Date' width='90' format="yMd" textAlign='Right' ></e-column>
                        <e-column field='EndDate' headerText='End Date' width='90' format="yMd" textAlign='Center' [customAttributes]='customAttributes' ></e-column>
                        <e-column field='Duration' headerText='Duration' width='90' textAlign='Right' ></e-column>
                        <e-column field='Progress' headerText='Progress' width='90' textAlign='Right' ></e-column>
                    </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public customAttributes?: Object;

    ngOnInit(): void {
        this.data = projectData;
        this.customAttributes = { class: 'orientationcss' };
    }
    setHeaderHeight(args: any) {
        const textWidth: number = (document.querySelector('.orientationcss > div') as Element).scrollWidth as number; // Obtain the width of the headerText content.
        const headerCell: NodeList = document.querySelectorAll('.e-headercell');
        for (let i = 0; i < headerCell.length; i++) {
            // Assign the obtained textWidth as the height of the headerCell.
            (headerCell.item(i) as HTMLElement).style.height = textWidth + 'px';
        }
    }
}



