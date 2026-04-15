import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { data } from './datasource';

@Component({
    imports: [FormsModule, CommonModule],
    standalone: true,
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

        .e-form {
            display: block;
            padding-bottom: 10px;
        }

        .e-form input {
            width: 15%;
        }
    `]
})
export class AppComponent implements OnInit {

    public items: object[] | any = [];

    public edit: { OrderID: number | null; CustomerID: string | null; EmployeeID: number | null } = {
        OrderID: null,
        CustomerID: null,
        EmployeeID: null
    };

    public dataManager?: DataManager;
    public text = 'Remove';
    public show = false;

    public ngOnInit(): void {
        this.dataManager = new DataManager(data.slice(0, 5));
        this.dataManager.executeQuery(new Query())
            .then((res: ReturnOption) => {
                this.items = res.result as object[];
            });
    }

    public removeRecord(): void {
        (this.dataManager as DataManager).remove('OrderID', {
            OrderID: this.edit.OrderID
        });

        (this.dataManager as DataManager).executeQuery(new Query())
            .then((res: ReturnOption) => {
                this.items = res.result as object[];
            });
    }
}



