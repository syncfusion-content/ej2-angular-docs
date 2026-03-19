import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { ChangeEventArgs, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule, PageService, PageSettingsModel, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

type PrintMode = 'AllPages' | 'CurrentPage';

@Component({
    imports: [ GridModule, DropDownListAllModule],
    providers: [ToolbarService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `
    <div style="display:flex;">
        <label style="padding: 10px 10px 26px 0">Select Print Mode </label>
        <ejs-dropdownlist style="margin-top:5px" id="value" #dropdown index="0" width="120" [fields]="{ text: 'text', value: 'value' }" [dataSource]="dropdownlist" (change)="onChange($event)"></ejs-dropdownlist></div>
    <ejs-grid [dataSource]='data' [printMode]='printMode' [allowPaging]='true' [pageSettings]='pageOptions' [toolbar]='toolbarOptions'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public pageOptions?: PageSettingsModel;
    public printMode: string = 'CurrentPage';
    public dropdownlist: Array<{ text: string; value: PrintMode }> = [
        { text: 'All Pages', value: 'AllPages' },
        { text: 'Current Page', value: 'CurrentPage' },
    ];

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Print'];
        this.pageOptions = { pageSize: 6 };
    }
    onChange(args: ChangeEventArgs): void {
        this.printMode = args.value as PrintMode;
    }
}