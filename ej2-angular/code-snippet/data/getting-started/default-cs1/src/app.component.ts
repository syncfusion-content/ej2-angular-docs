import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core';
import { DataManager, Query, JsonAdaptor } from '@syncfusion/ej2-data';
import { CommonModule } from '@angular/common';
import { data } from './datasource';

@Component({
    imports: [CommonModule],
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
    `]
})
export class AppComponent implements OnInit {
    public items?: object[] | any;

    public ngOnInit(): void {
        const dataManager = new DataManager({ 
            json: data, 
            adaptor: new JsonAdaptor() 
        });
        this.items = dataManager.executeLocal(new Query().take(8));
    }
}