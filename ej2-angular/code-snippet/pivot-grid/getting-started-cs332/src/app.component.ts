import { PivotViewAllModule, PivotFieldListAllModule, ExcelExportService, VirtualScrollService, ExportCompleteEventArgs } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
    imports: [
        PivotViewAllModule,
        PivotFieldListAllModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `<div class="col-md-8">
  <ejs-pivotview #pivotview id='PivotView' height='350' enableVirtualization='true' [dataSourceSettings]=dataSourceSettings 
  allowExcelExport='true' [width]=width (exportComplete)='exportComplete($event)'></ejs-pivotview></div>
  <div class="col-md-2"><button ej-button id='export'>Export</button></div>`,
    providers: [ExcelExportService, VirtualScrollService],
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: DataSourceSettingsModel;
    public button?: Button;
    public customername: string[] = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther',
        'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
    public city: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'Austin',
        'San Francisco', 'Columbus', 'Washington', 'Portland', 'Oklahoma', 'Las Vegas', 'Virginia', 'St. Louis', 'Birmingham'];

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    exportComplete(args: ExportCompleteEventArgs | any): void {
        this.pivotGridObj?.hideWaitingPopup();
    }

    data(count: number): Object[] {
        let result: Object[] = [];
        let dt: number = 0;
        for (let i: number = 1; i < (count + 1); i++) {
            dt++;
            let round: string;
            let toString: string = i.toString();
            if (toString.length === 1) {
                round = '0000' + (i);
            }
            else if (toString.length === 2) {
                round = '000' + i;
            }
            else if (toString.length === 3) {
                round = '00' + i;
            } else if (toString.length === 4) {
                round = '0' + i;
            } else {
                round = toString;
            }
            result.push({
                ProductID: 'PRO-' + round,
                City: this.city[Math.round(Math.random() * this.city.length)] || this.city[0],
                Year: "FY " + (dt + 2023),
                CustomerName: this.customername[Math.round(Math.random() * this.customername.length)] || this.customername[0],
                Price: Math.round(Math.random() * 5000) + 5000,
                Sold: Math.round(Math.random() * 80) + 10,
            });
            if (dt / 2 == 1) {
                dt = 0;
            }
        }
        return result;
    };

    ngOnInit(): void {

        this.dataSourceSettings = {
            dataSource: this.data(10000) as IDataSet[],
            enableSorting: false,
            expandAll: true,
            formatSettings: [{ name: 'Price', format: 'C0' }],
            rows: [{ name: 'ProductID' }],
            columns: [{ name: 'Year' }],
            values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }]
        };
        this.width = '100%';

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj?.showWaitingPopup();
            setTimeout(() => {
                this.pivotGridObj?.excelExport();
            });
        };
    }
}

