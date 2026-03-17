import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditService, GridComponent, GridModule, PageService, RowSelectEventArgs, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule,DropDownListModule ],
    providers: [PageService, ToolbarService, EditService],
    standalone: true,
    selector: 'app-root',
    template: `   
            <div style="display: flex">
                <label style="padding: 5px 5px 0 0" > Select row index :</label>
                <ejs-dropdownlist #dropdown id='value' #sample index='0' 
                width='220' [dataSource]='dropDownData' (change)='valueChange($event)' height='250px'>
                </ejs-dropdownlist>
            </div>
            <div style="padding: 5px 5px 0 0">
                <ejs-grid #grid [dataSource]='data' height='300' width='100%' (rowSelected)='rowSelected($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                        <e-column field='Frieght' headerText='Employee ID' textAlign='Right' width=120></e-column>
                        <e-column field='ShipAddress' headerText='Ship Address' width=150></e-column>
                    </e-columns>
                </ejs-grid>
            </div>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public dropDownData?: Object[] = [
        { text: 'Select count' },
        { text: '10', value: '10' },
        { text: '20', value: '20' },
        { text: '30', value: '30' },
        { text: '80', value: '80' },
        { text: '100', value: '100' },
        { text: '200', value: '200' },
        { text: '232', value: '232' },
        { text: '300', value: '300' },
        { text: '500', value: '500' },
        { text: '800', value: '800' },
        { text: '820', value: '850' },
        { text: '920', value: '920' },
        { text: '2020', value: '2020' },
        { text: '3000', value: '3000' },
        { text: '4000', value: '4000' },
        { text: '4999', value: '4999' }

      ];
    ngOnInit(): void {
        this.data = data;
    }

    valueChange(args: ChangeEventArgs): void  {
        (this.grid as GridComponent).selectionModule.selectRow(parseInt((args.value as string), 10));   
    }
    rowSelected(args: RowSelectEventArgs) {
        const rowHeight: number = (this.grid as any).getRows()[(this.grid as GridComponent).getSelectedRowIndexes()[0]].scrollHeight;
        (this.grid as GridComponent).getContent().children[0].scrollTop = rowHeight * (this.grid as GridComponent).getSelectedRowIndexes()[0];
    }
}
