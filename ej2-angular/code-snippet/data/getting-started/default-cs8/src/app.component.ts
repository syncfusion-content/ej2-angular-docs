

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { DataManager, Query } from '@syncfusion/ej2-data';
@Component({
    selector: 'app-root',
    templateUrl: './app.template.html',
    styles: [`
            .e-table {
                border: solid 1px #e0e0e0;
                border-collapse: collapse;
                font-family: Roboto;
            }

            .e-table td, .e-table th {
                border-style: solid;
                border-width: 1px 0 0;
                border-color: #e0e0e0;
                display: table-cell;
                font-size: 14px;
                line-height: 20px;
                overflow: hidden;
                padding: 8px 21px;
                vertical-align: middle;
                white-space: nowrap;
                width: auto;
            }
    `]
})
export class AppComponent implements OnInit {

    public items?: object[] | any;

    public ngOnInit(): void {
        this.items = new DataManager(data as JSON[]).executeLocal(new Query().where('EmployeeID', 'equal', 3));
    }
}



