import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'

import { Component, ViewChild, OnInit } from '@angular/core';
import {
    PivotView, FieldListService, LoadEventArgs
} from '@syncfusion/ej2-angular-pivotview';;
import { enableRipple } from '@syncfusion/ej2-base';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
enableRipple(false);

let parentProp: any = {};
let dataSource: Object[][];

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
    selector: 'app-container',
    providers: [FieldListService],
    // specifies the template string for the pivot table component
    template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings 
    showFieldList='true' width='100%'  height='350' showFieldList='true' (load)='load($event)'
    showToolbar='true'></ejs-pivotview>`
})

export class AppComponent implements OnInit {

    public dataSourceSettings?: DataSourceSettingsModel;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    load(args: LoadEventArgs | any) {
        dataSource = JSON.parse(JSON.stringify(args.dataSourceSettings.dataSource));
        args.dataSourceSettings.dataSource = this.complexToFlatJson(dataSource);
        let rows: any = [];
        for (let i: number = 0; i < args.dataSourceSettings.rows.length; i++) {
            if (args.dataSourceSettings.rows[i].name in parentProp) {
                rows = rows.concat(parentProp[args.dataSourceSettings.rows[i].name]);
            } else {
                rows.push(args.dataSourceSettings.rows[i]);
            }
        }
        args.dataSourceSettings.rows = rows;
        let columns: any = [];
        for (let i: number = 0; i < args.dataSourceSettings.columns.length; i++) {
            if (args.dataSourceSettings.columns[i].name in parentProp) {
                columns = columns.concat(
                    parentProp[args.dataSourceSettings.columns[i].name]
                );
            } else {
                columns.push(args.dataSourceSettings.columns[i]);
            }
        }
        args.dataSourceSettings.columns = columns;
    }

    complexToFlatJson(data: Object[][]) {
        let flatArray: any = [];
        let flatObject: any = {};
        for (let index = 0; index < data.length; index++) {
            for (let prop in data[index]) {
                let value: Object = data[index][prop];
                if (Array.isArray(value)) {
                    for (let i: number = 0; i < value.length; i++) {
                        let childProp: any = [];
                        for (let inProp in value[i]) {
                            flatObject[inProp] = value[i][inProp];
                            let object = {
                                name: inProp,
                            };
                            childProp.push(object);
                        }
                        parentProp[prop] = childProp;
                    }
                } else {
                    flatObject[prop] = value;
                }
            }
            flatArray.push(flatObject);
            flatObject = {};
        }
        return flatArray;
    }

    data() {
        return [
            {
                CustomerID: 'VINET',
                Freight: 32.38,
                OrderDetails: [
                    {
                        OrderID: 10248,
                        OrderDate: '1996-07-04T10:10:00.000Z',
                    }
                ],
                ShipDetails: [
                    {
                        ShipName: 'Vins et alcools Chevalier',
                        ShipAddress: "59 rue de l'Abbaye",
                        ShipCity: 'Reims',
                        ShipRegion: null,
                        ShipCountry: 'France',
                        ShippedDate: '1996-07-16T12:20:00.000Z',
                    }
                ]
            },
            {
                CustomerID: 'GALED',
                Freight: 10.14,
                OrderDetails: [
                    {
                        OrderID: 10366,
                        OrderDate: '1996-11-28T00:00:00.000Z',
                    }
                ],
                ShipDetails: [
                    {
                        ShippedDate: '1996-12-30T00:00:00.000Z',
                        ShipName: 'Galería del gastronómo',
                        ShipAddress: 'Rambla de Cataluña, 23',
                        ShipCity: 'Barcelona',
                        ShipRegion: null,
                        ShipCountry: 'Spain',
                    }
                ]
            },
            {
                CustomerID: 'VAFFE',
                Freight: 13.55,
                OrderDetails: [
                    {
                        OrderID: 10367,
                        OrderDate: '1996-12-02T00:00:00.000Z',
                    }
                ],
                ShipDetails: [
                    {
                        ShippedDate: '1996-12-30T00:00:00.000Z',
                        ShipName: 'Vaffeljernet',
                        ShipAddress: 'Smagsloget 45',
                        ShipCity: 'Århus',
                        ShipRegion: null,
                        ShipCountry: 'Denmark',
                    }
                ]
            },
            {
                CustomerID: 'ERNSH',
                Freight: 101.95,
                OrderDetails: [
                    {
                        OrderID: 10368,
                        OrderDate: '1996-11-29T00:00:00.000Z',
                    }
                ],
                ShipDetails: [
                    {
                        ShippedDate: '1996-12-30T00:00:00.000Z',
                        ShipName: 'Ernst Handel',
                        ShipAddress: 'Kirchgasse 6',
                        ShipCity: 'Graz',
                        ShipRegion: null,
                        ShipCountry: 'Austria',
                    }
                ]
            },
            {
                CustomerID: 'SPLIR',
                Freight: 195.68,
                OrderDetails: [
                    {
                        OrderID: 10369,
                        OrderDate: '1996-11-28T00:00:00.000Z',
                    }
                ],
                ShipDetails: [
                    {
                        ShippedDate: '1996-12-30T00:00:00.000Z',
                        ShipName: 'Split Rail Beer & Ale',
                        ShipAddress: 'P.O. Box 555',
                        ShipCity: 'Lander',
                        ShipRegion: 'WY',
                        ShipCountry: 'USA',
                    },
                ]
            }
        ];
    }
    ngOnInit(): void {

        this.dataSourceSettings = {
            expandAll: true,
            enableSorting: true,
            dataSource: this.data() as any,
            columns: [{ name: 'OrderDetails' }],
            values: [{ name: 'Freight', caption: 'Units Sold' }],
            rows: [{ name: 'ShipDetails' }],
            valueSortSettings: { headerDelimiter: ' - ' },
            formatSettings: [{ name: 'Amount', format: 'C0' }]
        };
    }
}