import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridComponent, GridModule, SearchService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [ GridModule, ButtonModule,TextBoxModule],
    providers: [SearchService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `
    <div class="e-float-input" style="width: 120px; display: inline-block;">
        <ejs-textbox #searchInput width="100" placeholder="Search text"></ejs-textbox>
        <span class="e-float-line"></span>
    </div>
    <button ejs-button id='search' (click)='search()'>Search</button>
        <ejs-grid #grid [dataSource]='data' height='260px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    @ViewChild('grid') public grid?: GridComponent;
    @ViewChild('searchInput') public searchInput?: TextBoxComponent;

    ngOnInit(): void {
        this.data = data;
    }

    search() {
        const searchText: string = (this.searchInput as TextBoxComponent).value;
        (this.grid as GridComponent).search(searchText);
    }
}
