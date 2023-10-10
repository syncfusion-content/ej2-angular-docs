import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ReturnType } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                        <e-column field='ShipCountry' headerText='ShipCountry' width=100></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate>
                            <e-columns>
                                <e-column
                                columnName="ShipCountry"
                                type="Custom"
                                [customAggregate]="customAggregateFn"
                                >
                                <ng-template #footerTemplate let-data> {{ data.Custom }}
                                </ng-template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];

    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            (this.grid as any).pdfExport();
        }
    }

    public customAggregateFn(data: { result: { filter: (arg0: (item: { [x: string]: string; }) => boolean) => { (): any; new(): any; length: any; }; }; filter: (arg0: (item: { [x: string]: string; }) => boolean) => { (): any; new(): any; length: any; }; }) {
        const brazilCount = data.result
        ? data.result.filter(
            (item: { [x: string]: string }) => item['ShipCountry'] === 'Brazil'
        ).length
        : data.filter(
            (item: { [x: string]: string }) => item['ShipCountry'] === 'Brazil'
        ).length;

    return `Brazil count: ${brazilCount}`; 
    }
}



