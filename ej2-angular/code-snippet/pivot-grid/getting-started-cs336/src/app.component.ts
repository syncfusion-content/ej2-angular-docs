import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule, PDFExportService, HyperlinkSettings } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { employeeData } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Observable } from 'rxjs';

@Component({
    imports: [
        PivotViewAllModule,
        PivotFieldListAllModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `<div class="col-md-8">
                <ejs-pivotview #pivotview id='PivotTable' height='350' [dataSourceSettings]=dataSourceSettings 
                    allowPdfExport='true' [width]=width [gridSettings]='gridSettings' [cellTemplate]='cellTemplate' [hyperlinkSettings]='hyperlinkSettings'>
                </ejs-pivotview>
            </div>
            <div class="col-md-2"><button ej-button id='export'>Export</button></div>`,
    providers: [PDFExportService],
})
export class AppComponent implements OnInit {
    public width?: string;
    public button?: Button;
    public dataSourceSettings?: DataSourceSettingsModel;
    public gridSettings?: GridSettings;
    public observable = new Observable();
    public cellTemplate?: string;
    public hyperlinkSettings?: HyperlinkSettings;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    ngOnInit(): void {
        this.cellTemplate = '${getCellContent(data)}'

        this.dataSourceSettings = {
            dataSource: employeeData as IDataSet[],
            rows: [{ name: 'FirstName' }, { name: 'EmployeeID', caption: 'Employee Image' }],
            columns: [{ name: 'Title' }],
            values: [{ name: 'Salary' }, { name: 'OrdersCount' }],
            filterSettings: [
                { name: 'Title', type: 'Include', items: ['Sales Representative'] }
            ],
            expandAll: true,
            showSubTotals: false,
            showRowGrandTotals: false
        };

        this.hyperlinkSettings = {
            showRowHeaderHyperlink: true,
            cssClass: 'e-custom-class'
        } as HyperlinkSettings;

        this.gridSettings = {
            columnWidth: 140,
            layout: 'Tabular',
            pdfQueryCellInfo: this.observable.subscribe((args: any) => {
                if (args.data && args.data.axis === 'row') {
                    if (args.data.valueSort && args.data.valueSort.axis === 'FirstName') {
                        const firstName: any = args.data.actualText;
                        const employee: any = employeeData.find((emp: any) => emp.FirstName === firstName);
                        if (employee && employee.EmailID) {
                            args.hyperLink = {
                                target: 'mailto:' + employee.EmailID,
                                displayText: args.value
                            };
                        }
                    }
                    if (args.data.valueSort && args.data.valueSort.axis === 'EmployeeID') {
                        const employeeId: any = Number(args.data.actualText);
                        const employee: any = employeeData.find((emp: any) => emp.EmployeeID === employeeId);
                        if (employee && employee.EmployeeImage) {
                            args.image = {
                                base64: employee.EmployeeImage,
                                height: 57.5,
                                width: 57.5
                            };
                        }
                    }
                }
            }) as any,
        } as GridSettings;

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj?.pdfExport();
        };

        (<{ getCellContent?: Function }>window).getCellContent = (args: any): any => {
            if (args.cellInfo && args.cellInfo.axis === 'row' && args.cellInfo.valueSort.axis === 'EmployeeID') {
                let employeeId: number = Number(args.cellInfo.actualText);
                // eslint-disable-next-line @typescript-eslint/tslint/config
                let employee: { [key: string]: Object; } | any = employeeData.find(function (emp: any) { return emp.EmployeeID === employeeId; });
                if (employee && employee.EmployeeImage) {
                    let imgSrc: string = 'data:image/png;base64,' + employee.EmployeeImage;
                    return '<div class="image"><img class="university-logo" src="' + imgSrc + '" width="87" height="87" alt="' + (employee.EmployeeID || '') + '" onload="handleImageLoad(this)"/></div>';
                }
            }
            return '';
        };

        (<{ handleImageLoad?: Function }>window).handleImageLoad = (imgElement: any): void => {
            try {
                const cell: HTMLElement = imgElement.closest('th, td');
                if (cell) {
                    const cellValue: HTMLElement | any = cell.querySelector('.e-cellvalue');
                    if (cellValue) {
                        cellValue.style.display = 'none';
                    }
                }
            } catch (error) {
                console.warn('Error handling image load:', error);
            }
        };
    }
}
