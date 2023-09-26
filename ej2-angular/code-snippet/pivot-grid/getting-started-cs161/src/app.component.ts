

import { Component, ViewChild, OnInit } from '@angular/core';
import { IDataOptions, PivotView, IAxisSet, IFieldOptions, PivotViewComponent, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { renewableEnergy } from './datasource';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings (dataBound)='trend()' width=width height=height [cellTemplate]=cellTemplate></ejs-pivotview>`
})

export class AppComponent implements OnInit {

    public width?: string;
    public height?: number;
    public dataSourceSettings?: IDataOptions;
    public cellTemplate?: string;

    @ViewChild('pivotview',{static: false})
    public pivotGridObj?: PivotViewComponent;

    trend(): void {
        let cTable: HTMLElement[] = [].slice.call(document.getElementsByClassName("e-table"));
        let colLen: number = this.pivotGridObj?.pivotValues[3].length as number;
        let cLen: number = cTable[3].children[0].children.length;
        let rLen: number = cTable[3].children[1].children.length;
        let rowIndx: number;

        for (let k: number = 0; k < rLen; k++) {
            if (this.pivotGridObj?.pivotValues[k] && this.pivotGridObj?.pivotValues[k][0] !== undefined) {
                rowIndx = ((this.pivotGridObj?.pivotValues[k][0]) as IAxisSet).rowIndex as number;
                break;
            }
        }
        let rowHeaders: HTMLElement[] = [].slice.call(cTable[2].children[1].querySelectorAll('td'));
        let rows: IFieldOptions[] = this.pivotGridObj?.dataSourceSettings.rows as IFieldOptions[];
        if (rowHeaders.length > 1) {
            for (let i: number = 0, Cnt = rows; i < Cnt.length; i++) {
                let fields: any = {};
                let fieldHeaders: any = [];
                for (let j: number = 0, Lnt = rowHeaders; j < Lnt.length; j++) {
                    let header: any = rowHeaders[j];
                    if (header.className.indexOf('e-gtot') === -1 && header.className.indexOf('e-rowsheader') > -1 && header.getAttribute('fieldname') === rows[i].name) {
                        var headerName = rowHeaders[j].getAttribute('fieldname') + '_' + rowHeaders[j].textContent;
                        fields[rowHeaders[j as number].textContent as string] = j;
                        fieldHeaders.push(rowHeaders[j].textContent);
                    }
                }
                if (i === 0) {
                    for (let rnt: number = 0, Lnt = fieldHeaders; rnt < Lnt.length; rnt++) {
                        if (rnt !== 0) {
                            let row: number = fields[fieldHeaders[rnt]];
                            let prevRow: number = fields[fieldHeaders[rnt - 1]];
                            for (let j: number = 0, ci = 1; j < cLen && ci < colLen; j++ , ci++) {
                                let node: HTMLElement = cTable[3].children[1].children[row].childNodes[j] as HTMLElement;
                                let prevNode: HTMLElement = cTable[3].children[1].children[prevRow].childNodes[j] as HTMLElement;
                                let ri: any = undefined;
                                let prevRi: any = undefined;
                                if (node) {
                                    ri = node.getAttribute("index");
                                }
                                if (prevNode) {
                                    prevRi = prevNode.getAttribute("index");
                                }
                                if (ri && ri < [].slice.call(this.pivotGridObj?.pivotValues).length) {
                                    if (((this.pivotGridObj?.pivotValues[prevRi][ci] as IAxisSet).value as number) > ((this.pivotGridObj?.pivotValues[ri][ci]  as IAxisSet).value as number) &&
                                    node.querySelector('.tempwrap')) {
                                        let trendElement: HTMLElement = node.querySelector('.tempwrap') as HTMLElement;
                                        trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-loss');
                                    } else if (((this.pivotGridObj?.pivotValues[prevRi][ci]  as IAxisSet).value as number) < ((this.pivotGridObj?.pivotValues[ri][ci]  as IAxisSet).value as number) &&
                                    node.querySelector('.tempwrap')) {
                                        let trendElement: HTMLElement = node.querySelector('.tempwrap') as HTMLElement;
                                        trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-profit');
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    ngOnInit(): void {

        this.width = "100%";
        this.height = 350;

        this.cellTemplate = '<span class="tempwrap sb-icon-neutral e-icons"></span>';

        this.dataSourceSettings = {
            dataSource: renewableEnergy as IDataSet[],
            expandAll: true,
            enableSorting: true,
            drilledMembers: [{ name: 'Year', items: ['FY 2015', 'FY 2017', 'FY 2018'] }],
            formatSettings: [{ name: 'ProCost', format: 'C0' }],
            rows: [
                { name: 'Year', caption: 'Production Year' }
            ],
            columns: [
                { name: 'EnerType', caption: 'Energy Type' },
                { name: 'EneSource', caption: 'Energy Source' }
            ],
            values: [
                { name: 'ProCost', caption: 'Revenue Growth' }
            ],
            filters: []
        };
    }
 }



