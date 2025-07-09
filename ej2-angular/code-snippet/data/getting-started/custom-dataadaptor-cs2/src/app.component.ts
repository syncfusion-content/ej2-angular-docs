import { Component, OnInit } from '@angular/core';
import { DataManager, Query, CustomDataAdaptor, ReturnOption } from '@syncfusion/ej2-data';
import { CommonModule } from '@angular/common';

interface Order {
  OrderID: number;
  CustomerID: string;
  EmployeeID: number;
  ShipCity: string;
  ShipCountry: string;
}

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
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
    `],
})
export class AppComponent implements OnInit {
  public data?: DataManager;
  public result: Order[] = [];

  ngOnInit(): void {
    this.data = new DataManager({
      adaptor: new CustomDataAdaptor({
        getData: (option: {
          onSuccess: (data: any, args: object) => void;
          onFailure: (args: object, error: any) => void;
        }) => {
          fetch("https://localhost:xxxx/api/Orders", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(option)
          }).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            return response.json();
          }).then(data => {
            option.onSuccess(data, {});
          }).catch(error => {
            option.onFailure({}, error);
          });
        }
      })
    });

    this.data.executeQuery(new Query()).then((e: ReturnOption) => {
      this.result = (e.result as any)?.result as Order[];
    }).catch((error: Error) => {
      console.error("Data fetch failed:", error);
    });
  }
}