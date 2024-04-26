import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterService, PageService, GridComponent, GroupService, SortService, ReorderService } from '@syncfusion/ej2-angular-grids';
import { enableVersionBasedPersistence } from '@syncfusion/ej2-base';

enableVersionBasedPersistence(true);

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [GroupService],
standalone: true,
    selector: 'app-root',
    template: `<h4 id='message'>{{message}}</h4>
    <button ejs-button *ngFor="let v of versions" [id]="'restore' + v" (click)="clickHandler('v.' + v)">Version {{ v }}</button>
               <ejs-grid #grid id="OrderDetails" [dataSource]='data' [enablePersistence]='true' [ej2StatePersistenceVersion]='gridversion' 
               [allowPaging]='true' [allowFiltering]='true' [allowReordering]='true' [allowSorting]='true' [allowGrouping]='true' height='210px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [FilterService, PageService, GroupService, SortService, ReorderService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public message?: string;
    public gridversion?: string = 'v.0';
    public versions: number[] = [1, 2, 3];


    ngOnInit(): void {
        this.data = data;
    }
    clickHandler(version: string) {
        const grid = this.grid as GridComponent;
        grid.ej2StatePersistenceVersion = version;
        var persistedGridSettings: string = (window.localStorage.getItem(`gridOrderDetails` + grid.ej2StatePersistenceVersion)) as string;
        if (persistedGridSettings) {
            grid.setProperties(JSON.parse(persistedGridSettings));
            this.message = `Grid state restored to ` + version;
        } else {
            var gridData = grid.getPersistData();
            window.localStorage.setItem((`gridOrderDetails` + grid.ej2StatePersistenceVersion), gridData);
        }

    }
}
