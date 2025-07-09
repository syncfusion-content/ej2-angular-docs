import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManager, RemoteSaveAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Order {
  OrderID: number;
  CustomerID: string;
  EmployeeID: number;
  ShipCountry: string;
}

@Component({
  imports: [CommonModule, HttpClientModule],
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
  public items: Order[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Use remote server host and port instead of 'xxxx'.
    this.http.get<Order[]>('https://localhost:xxxx/api/orders')
      .subscribe((value: Order[]) => {
        this.data = new DataManager({
          json: value,
          adaptor: new RemoteSaveAdaptor(),
        });

        this.data.executeQuery(new Query().take(8)).then((e: ReturnOption) => {
          this.items = e.result as Order[];
        }).catch((error: Error) => {
          console.error("Data fetch failed:", error);
        });
      });
  }
}
