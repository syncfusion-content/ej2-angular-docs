

import { RowSelectEventArgs } from '@syncfusion/ej2-grids';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent  } from '@syncfusion/ej2-angular-treegrid';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-container',
    template: `
    <ejs-numerictextbox #numerictext  min="0" max="50" width='200' [showSpinButton]='false' format= 'N' value="0" placeHolder='Enter index to select a row' (change)='onChange($event)' ></ejs-numerictextbox>

    <ejs-treegrid #treegrid [dataSource]='data' height='260' width='100%' [treeColumnIndex]='1'  childMapping='subtasks' (rowSelected)='rowSelected($event)'[selectedRowIndex]='0'>
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }

    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    @ViewChild('numerictext')
    public numeric?: NumericTextBoxComponent;
    onChange(args: any): void {
        this.treeGridObj?.selectRow(parseInt((this.numeric as NumericTextBoxComponent).getText(), 10));
    }

    rowSelected(args: RowSelectEventArgs) {
        let rowHeight: number = (this.treeGridObj as TreeGridComponent).getRows()[(this.treeGridObj as TreeGridComponent).getSelectedRowIndexes()[0]].scrollHeight;
        (this.treeGridObj as TreeGridComponent).getContent().children[0].scrollTop = rowHeight * (this.treeGridObj as TreeGridComponent).getSelectedRowIndexes()[0];
    }
}



