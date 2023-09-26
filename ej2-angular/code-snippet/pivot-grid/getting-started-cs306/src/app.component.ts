import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, PDFExportService, DisplayOption } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Button } from '@syncfusion/ej2-buttons';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [PDFExportService],
  template: `<div class="col-md-8">
  <ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings allowPdfExport='true'
  [displayOption]='displayOption' [chartSettings]='chartSettings' width=width></ejs-pivotview></div>
  <div class="col-md-2"><button ej-button id='export'>Export</button></div>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: IDataOptions;
    public displayOption?: DisplayOption;
    public chartSettings?: ChartSettings;
    public button?: Button;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            rows: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            values: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
        this.width = '100%';

        this.displayOption = { view: 'Both' } as DisplayOption;
        this.chartSettings = { chartSeries: { type: 'Column' }} as ChartSettings;

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj?.pdfExport(undefined, false, undefined, false, true);
        };
    }
}



