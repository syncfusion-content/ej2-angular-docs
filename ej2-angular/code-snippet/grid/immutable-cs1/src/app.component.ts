

import { Component, ViewChild, OnInit } from "@angular/core";
import { ButtonComponent } from "@syncfusion/ej2-angular-buttons";
import { GridComponent } from "@syncfusion/ej2-angular-grids";
import { data } from "./datasource";

@Component({
    selector: 'app-root',
    templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {
  public data?: Object[] = [];
  public pageSettings?: Object = { pageSize: 50 };
  public immutableStart?: number;
  public normalStart?: number;
  public primaryKey?: number = 0;
  @ViewChild("immutable")
  public immutablegrid?: GridComponent;
  @ViewChild("normal")
  public normalgrid?: GridComponent;
  @ViewChild("addtop")
  public addtop?: ButtonComponent;
  @ViewChild("addbottom")
  public addbottom?: ButtonComponent;
  @ViewChild("delete")
  public delete?: ButtonComponent;
  @ViewChild("reverse")
  public reverse?: ButtonComponent;
  @ViewChild("paging")
  public paging?: ButtonComponent;
  public immutableInit?: boolean = true;
  public init?: boolean = true;

  ngOnInit(): void {
    this.data = data;
  }

  immutableBeforeDataBound(args: any): void {
    this.immutableStart = new Date().getTime();
  }

  immutableDataBound(args: any): void {
    let val: number | string = this.immutableInit ? '' : new Date().getTime() - (this.immutableStart as number);
    (document.getElementById("immutableDelete") as any).innerHTML =
      "Immutable rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
    this.immutableStart = 0; this.immutableInit = false;
  }

  normalBeforeDataBound(args: any): void {
    this.normalStart = new Date().getTime();
  }

  normalDataBound(args: any): void {
    let val: number | string  = this.init ? '' : new Date().getTime() - (this.normalStart as number);
    (document.getElementById("normalDelete") as any).innerHTML =
      "Normal rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
    this.normalStart = 0; this.init = false;
  }

  addTopEvent(): void {
    let addedRecords: object[] = [
      { 'OrderID': ++(this.primaryKey as number), 'ProductName': 'Chai', 'ProductID': 'Sasquatch Ale', 'CustomerID': 'QUEDE', 'CustomerName': 'Yoshi Tannamuri' },
      { 'OrderID': ++(this.primaryKey as number), 'ProductName': 'Georg Pipps', 'ProductID': 'Valkoinen suklaa', 'CustomerID': 'RATTC', 'CustomerName': 'Martín Sommer' },
      { 'OrderID': ++(this.primaryKey as number), 'ProductName': 'Yoshi Tannamuri', 'ProductID': 'Gula Malacca', 'CustomerID': 'COMMI', 'CustomerName': 'Ann Devon' },
      { 'OrderID': ++(this.primaryKey as number), 'ProductName': 'Palle Ibsen', 'ProductID': 'Rogede sild', 'CustomerID': 'RATTC', 'CustomerName': 'Paula Wilson' },
      { 'OrderID': ++(this.primaryKey as number), 'ProductName': 'Francisco Chang', 'ProductID': 'Mascarpone Fabioli', 'CustomerID': 'ROMEY', 'CustomerName': 'Jose Pavarotti' }
    ];
    var aData = addedRecords.concat((this.immutablegrid as any).dataSource as object[]);
    (this.normalgrid as any).setProperties({ dataSource: aData });
    (this.immutablegrid as any).setProperties({ dataSource: aData });
  }

  addBottomEvent(): void {
    let addedRecords: object[] = [
      { 'OrderID': ++(this.primaryKey as number), 'ProductName': 'Chai', 'ProductID': 'Sasquatch Ale', 'CustomerID': 'QUEDE', 'CustomerName': 'Yoshi Tannamuri' },
      { 'OrderID': ++(this.primaryKey as number), 'ProductName': 'Georg Pipps', 'ProductID': 'Valkoinen suklaa', 'CustomerID': 'RATTC', 'CustomerName': 'Martín Sommer' },
      { 'OrderID': ++(this.primaryKey as number), 'ProductName': 'Yoshi Tannamuri', 'ProductID': 'Gula Malacca', 'CustomerID': 'COMMI', 'CustomerName': 'Ann Devon' },
      { 'OrderID': ++(this.primaryKey as number), 'ProductName': 'Palle Ibsen', 'ProductID': 'Rogede sild', 'CustomerID': 'RATTC', 'CustomerName': 'Paula Wilson' },
      { 'OrderID': ++(this.primaryKey as number), 'ProductName': 'Francisco Chang', 'ProductID': 'Mascarpone Fabioli', 'CustomerID': 'ROMEY', 'CustomerName': 'Jose Pavarotti' }
    ]
    let aData = addedRecords.concat((this.immutablegrid as any).dataSource as object[]);
    (this.normalgrid as any).setProperties({ dataSource: aData });
    (this.immutablegrid as any).setProperties({ dataSource: aData });
  }

  deleteEvent(): void {
    ((this.immutablegrid as any).dataSource as object[]).splice(0, 5);
    (this.normalgrid as any).setProperties({ dataSource: (this.immutablegrid as any).dataSource });
    (this.immutablegrid as any).setProperties({ dataSource: (this.immutablegrid as any).dataSource });
  }

  sortEvent(): void {
    let aData: object[] = ((this.immutablegrid as any).dataSource as object[]).reverse();
    (this.normalgrid as any).setProperties({ dataSource: aData });
    (this.immutablegrid as any).setProperties({ dataSource: aData });
  }

  pageEvent(): void {
    let totalPage: number = ((this.immutablegrid as any).dataSource as object[]).length / (this.immutablegrid as any).pageSettings.pageSize;
    let page: number = Math.floor(Math.random() * totalPage) + 1;
    (this.normalgrid as any).setProperties({ pageSettings: { currentPage: page } });
    (this.immutablegrid as any).setProperties({ pageSettings: { currentPage: page } });
  }
}



