import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataManager, Query, UrlAdaptor, ReturnOption } from '@syncfusion/ej2-data';

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
  `]
})
export class AppComponent implements OnInit {
  public data?: DataManager;
  public result: Order[] = [];

  ngOnInit(): void {
    this.data = new DataManager({
      // Use remote server host and port instead of 'xxxx'.
      url: 'https://localhost:xxxx/api/orders',
      adaptor: new UrlAdaptor()
    });

    this.data.executeQuery(new Query().take(10)).then((e: ReturnOption) => {
      const response = e.result as { result: Order[] };
      this.result = response.result;
    }).catch((error: Error) => {
      console.error("Data fetch failed:", error);
    });
  }
}