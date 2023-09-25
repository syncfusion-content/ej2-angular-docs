

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent,SelectionSettingsModel  } from '@syncfusion/ej2-angular-treegrid';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';
import { getValue } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegridObj [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID'
    [treeColumnIndex]='1' [height]='269' allowPaging='true' (rowDataBound)='rowDataBound($event)'
    (dataBound)='dataBound($event)' [selectionSettings]='selectionOptions'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100' ></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' [format]='formatOptions' editType='datepickeredit'  width='100' ></e-column>
            <e-column field='EndDate' headerText='End Date' textAlign='Right' [format]='formatOptions' editType='datepickeredit'  width='100'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='Priority' headerText='Priority' width='90'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public formatOptions?: Object;
    public selectionOptions?: SelectionSettingsModel;
    public selIndex: number[] = [];
    @ViewChild('treegridObj')
    public treegridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = projectData;
        this.formatOptions = { format: 'y/M/d', type: 'date' };
        this.selectionOptions = { type: 'Multiple' };
    }
    rowDataBound(args: RowDataBoundEventArgs) {
    if (getValue('Duration', args.data as object) > 4) {
      this.selIndex.push(parseInt((args.row as HTMLTableRowElement)
        .getAttribute('aria-rowindex') as string, 0));
    }
    }
    dataBound(args: any) {
      if (this.treegridObj && this.selIndex.length) {
        this.treegridObj.selectRows(this.selIndex);
        this.selIndex = [];
        }
    }


}
