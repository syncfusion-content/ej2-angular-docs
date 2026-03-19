import { employeeData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Column, GridComponent, GridModule, GroupService, PdfExportService, PdfQueryCellInfoEventArgs, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

interface PdfGridImage {
    base64: string;
    height: number;
    width: number;
}

interface ColumnDataType {
    EmployeeImage: string;
    EmailID: string;
}

@Component({
    imports: [ ButtonModule, GridModule ],
    providers: [ToolbarService, PdfExportService, GroupService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id="ColumnTemplateGrid" [dataSource]="data" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)"
               [allowPdfExport]="true" (pdfQueryCellInfo)="pdfQueryCellInfo($event)" height='273px'>
                    <e-columns>
                        <e-column headerText='Employee Image' width='150' textAlign='Center'>
                            <ng-template #template let-data>
                                <div class="image">
                                    <img src="https://ej2.syncfusion.com/angular/demos/assets/grid/images/{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}"/>
                                </div>
                            </ng-template>
                        </e-column>
                        <e-column field='FirstName' headerText='Name' width='130'></e-column>
                        <e-column headerText="Email ID" width='180'>
                            <ng-template #template let-data>
                                <div class="url">
                                    <a href="mailto:{{ data.EmailID }}">{{ data.EmailID }}</a>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-grid>`,
    styleUrls: ['app.style.css']
})

export class AppComponent implements OnInit {

    public data?: object[];
    public toolbar?: string[];
    @ViewChild('grid')
    public grid?: GridComponent;

    public ngOnInit(): void {
        this.data = employeeData;
        this.toolbar = ['PdfExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ColumnTemplateGrid_pdfexport') {
            this.grid!.pdfExport();
        }
    }
    pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs): void {
        const columnHeaderText = (args.column as Column).headerText;

        if (columnHeaderText === 'Employee Image' && args.data && ('EmployeeImage' in args.data)) {
            args.image = {
                base64: args.data['EmployeeImage'] as string,
                height: 50,
                width: 50,
            } as PdfGridImage;
        }
        if (columnHeaderText === 'Email ID' && args.data && ('EmailID' in args.data)) {
            args.hyperLink = {
                target: 'mailto:' + (args.data['EmailID'] as string),
                displayText: args.data['EmailID'] as string,
            };
        }
    }

}
