import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { CommonModule } from '@angular/common';
import { data } from './datasource';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [CommonModule],
    templateUrl: './app.template.html',
    styles: [`
        .e-table {
            border: solid 1px #e0e0e0;
            border-collapse: collapse;
            font-family: Roboto, sans-serif;
        }

        .e-table td,
        .e-table th {
            border-style: solid;
            border-width: 1px 0 0;
            border-color: #e0e0e0;
            font-size: 14px;
            line-height: 20px;
            padding: 8px 21px;
            vertical-align: middle;
            white-space: nowrap;
        }
    `]
})
export class AppComponent implements OnInit {

    public items?: object[] | any;

    public ngOnInit(): void {
        new DataManager(data as JSON[])
        .executeQuery(new Query().search('VI', ['CustomerID']))
        .then((e: ReturnOption) => this.items = e.result as object[]).catch((e) => true);
    }
}



