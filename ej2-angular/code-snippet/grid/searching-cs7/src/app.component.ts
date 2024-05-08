import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SearchService, ToolbarService } from '@syncfusion/ej2-angular-grids'


import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, SearchSettingsModel, GridComponent, SearchEventArgs, Column } from '@syncfusion/ej2-angular-grids';
import { Predicate, Query,  } from '@syncfusion/ej2-data';

@Component({
imports: [
        
        GridModule
    ],

providers: [SearchService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #Grid [dataSource]='data' [toolbar]='toolbarOptions' [searchSettings]='searchOptions'(actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)" height='400' width='100%'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public values?: string;
    public key = '';
    public removeQuery = false;
    public valueAssign = false;
    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public searchOptions?: SearchSettingsModel;
    @ViewChild('Grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.searchOptions = {
            fields: [
                'OrderID',
                'CustomerID',
                'EmployeeID',
                'ShipCity',
                'ShipCountry',
                'ShipName'
            ],
            operator: 'contains',
            key: '',
            ignoreCase: true,
        };
        this.toolbarOptions = ['Search'];
    }
    actionBegin({ requestType, searchString }: SearchEventArgs) {
        if (requestType == 'searching') {
            const keys = (searchString as string).split(',');
            var flag = true;
            var predicate: any;
            if (keys.length > 1) {
                if ((this.grid as GridComponent).searchSettings.key !== '') {
                    this.values = searchString;
                    keys.forEach((key: string) => {
                        (this.grid as GridComponent).getColumns().forEach((col: Column) => {
                            if (flag) {
                                predicate = new Predicate(col.field, 'contains', key, true);
                                flag = false;
                            }
                            else {
                                var predic = new Predicate(col.field, 'contains', key, true);
                                predicate = predicate.or(predic);
                            }
                        });
                    });
                    
                    (this.grid as GridComponent).query = new Query().where(predicate);
                    (this.grid as GridComponent).searchSettings.key = '';
                    this.valueAssign = true;
                    this.removeQuery = true;
                    (this.grid as GridComponent).refresh();
                }
            }
        }
    }
    actionComplete(args: SearchEventArgs) {
        if (args.requestType === 'refresh' && this.valueAssign) {
            const searchBar = document.querySelector<HTMLInputElement>('#' + (this.grid as GridComponent).element.id + '_searchbar');
            if (searchBar) {
                searchBar.value = this.values || '';
                this.valueAssign = false;
            }
            else if (
                args.requestType === 'refresh' &&
                this.removeQuery
            ) {
                const searchBar = document.querySelector<HTMLInputElement>('#' + (this.grid as GridComponent).element.id + '_searchbar');
                if (searchBar) {
                    searchBar.value = '';
                }
                (this.grid as GridComponent).query = new Query();
                this.removeQuery = false;
                (this.grid as GridComponent).refresh();
            }
        }
    }
}



