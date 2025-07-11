import { Component, OnInit } from '@angular/core';
import { DataManager, GraphQLAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .e-table {
        border: solid 1px #e0e0e0;
        border-collapse: collapse;
        font-family: Roboto;
        width: 100%;
    }
    .e-table th, .e-table td {
        border: 1px solid #e0e0e0;
        padding: 8px 12px;
        text-align: left;
        white-space: nowrap;
    }
  `]
})
export class AppComponent implements OnInit {
  public dataManager!: DataManager;
  public items: Order[] = [];

  ngOnInit(): void {
    this.dataManager = new DataManager({
      // Use remote server host and port instead of 'xxxx'.
      url: 'http://localhost:4205/graphql',
      adaptor: new GraphQLAdaptor({
        response: {
          result: 'getOrders.result',
          count: 'getOrders.count'
        },
        query: `query getOrders($datamanager: DataManager) {
          getOrders(datamanager: $datamanager) {
            count,
            result {
              OrderID,
              CustomerID,
              ShipCity,
              ShipCountry
            }
          }
        }`
      })
    });

    const query = new Query().skip(0).take(8).search('Cunewalde', ['ShipCity']).where('ShipCountry', 'equal', 'Germany').sortBy('OrderID', 'descending');
    this.dataManager.executeQuery(query).then((e: ReturnOption) => {
      const response = e.result as { result: Order[] };
      this.items =  response.result
    }).catch((error) => {
      console.error('GraphQL data fetch error:', error);
    });
  }
}
interface Order {
  OrderID: number;
  CustomerID: string;
  ShipCity: string;
  ShipCountry: string;
}
