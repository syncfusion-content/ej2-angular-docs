import { Component, OnInit, ViewChild } from '@angular/core';
import { summaryData } from './datasource';
import { getObject, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { TreeGridComponent, TreeGridAllModule, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='dataSource' gridLines="Both" height='350' childMapping='subtasks' [allowPdfExport]='true' [toolbar]='toolbarOptions' (toolbarClick)='toolbarClick($event)' [treeColumnIndex]='1' (dataBound)='onDataBound($event)' (pdfAggregateQueryCellInfo)="pdfAggregateQueryCellInfo($event)">
      <e-columns>
          <e-column field='ID' headerText='Order ID' width='120' textAlign='Left'></e-column>
          <e-column field='Name' headerText='Shipment Name' textAlign="Left" clipMode='EllipsisWithTooltip' width='230' ></e-column>
          <e-column field='shipmentDate' headerText='Shipment Date' width="120" type="date" format="yMd" textAlign="Right"></e-column>
          <e-column field='category' headerText='Category' width='200' minWidth='240' textAlign="Left" ></e-column>
          <e-column field='units' headerText='Units' width='80' type='number' textAlign="Right"  ></e-column>
          <e-column field='unitPrice' headerText='Unit Price($)' width='120'  type='number' textAlign="Right" format='C2' ></e-column>
          <e-column field='price' headerText='Price($)' width='110' type='number' format='C0'  textAlign="Right" ></e-column>
      </e-columns>
      <e-aggregates >
              <e-aggregate [showChildSummary]='false'>
                  <e-columns >
                      <e-column columnName="category" type="Custom" [customAggregate]="customAggregateFn">
                          <ng-template #footerTemplate  let-data>
                             <span>Count of <input type="text" id="customers" /> : {{data.Custom}}</span>
                           </ng-template>
                      </e-column>
                  </e-columns>
              </e-aggregate>
          </e-aggregates>
  </ejs-treegrid>`,
    standalone: true,
    imports: [TreeGridAllModule],
})
export class AppComponent {
    public dataSource: Object[] = [];
    public foods: any;
    public selectedCategory: string = 'Seafood';
    public listObj!: DropDownList;
    public toolbarOptions?: ToolbarItems[];
    public customAggregateFn!: (data: Object) => number;
    public countLength: number = 0;
    public stringAlign: string = 'Left';
    public numberAlign: string = 'Right';
    @ViewChild('treegrid')
    public treegrid!: TreeGridComponent;
    ngOnInit(): void {
        this.dataSource = summaryData;
        this.foods = [
            { food: 'Seafood' },
            { food: 'Dairy' },
            { food: 'Edible' },
            { food: 'Crystal' },
        ];
        this.toolbarOptions = ['PdfExport'];
        this.customAggregateFn = this.createCustomAggregateFn(
            this.selectedCategory
        );
    }

    //Custom aggregate function to calculate the count of items for the selected category.
    private createCustomAggregateFn(
        selectedValue: string
    ): (data: Object) => number {
        return (data: Object): number => {
            const sampleDatas: any = getObject('result', data) ?? data;
            return sampleDatas
                ? sampleDatas.filter(
                    (item: Object) => getObject('category', item) === selectedValue
                ).length
                : 0;
        };
    }

    //Handles the 'pdfAggregateQueryCellInfo' event to customize aggregate cells during PDF export.
    public pdfAggregateQueryCellInfo = (args: any): void => {
        if (args.cell.column.headerText === 'Category') {
            args.value =
                'Count of ' +
                this.selectedCategory +
                ' : ' +
                args.row.data.category.Custom;
        }
    };

    //Initializes a DropDownList in the footer for category selection.
    onDataBound(args: any): void {
        if (!isNullOrUndefined(this.listObj)) {
            this.listObj.destroy();
        }
        var proxy = this;
        this.listObj = new DropDownList({
            dataSource: proxy.foods,
            fields: { value: 'food' },
            placeholder: 'Select a Category',
            width: '110px',
            value: this.selectedCategory,
            change: () => {
                setTimeout(() => {
                    this.selectedCategory = (this.listObj as any).value.toString();
                    proxy.selectedCategory = this.selectedCategory;
                    proxy.customAggregateFn = proxy.createCustomAggregateFn(
                        proxy.selectedCategory
                    );
                    proxy.treegrid.refresh();
                }, 300);
            },
        });
        this.listObj.appendTo('#customers');
    }
    toolbarClick(args: Object | any): void {
        if (args['item'].text === 'PDF Export') {
            let exportProperties: PdfExportProperties = {
                pageOrientation: 'Landscape',
            };
            this.treegrid?.pdfExport(exportProperties);
        }
    }
}
