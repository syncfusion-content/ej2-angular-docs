import { Component, OnInit } from '@angular/core';
import { DataManager, GraphQLAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 20px;
      font-family: Roboto;
    }
    th, td {
      border: 1px solid #e0e0e0;
      padding: 8px 12px;
      text-align: left;
      white-space: nowrap;
    }
    .form-section {
      margin: 10px 0;
    }
    input {
      margin-right: 10px;
      width: 120px;
    }

    #message {
      color: red;
      margin-top: 10px;
      text-align: center;
    }
      
    .e-form button {
      padding: 5px 16px;
      background-color: #3f51b5;
      color: white;
      border: none;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .e-form button:hover {
      background-color: #303f9f;
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
        query: `
          query getOrders($datamanager: DataManager) {
            getOrders(datamanager: $datamanager) {
              count,
              result {
                OrderID,
                CustomerID,
                ShipCity,
                ShipCountry
              }
            }
          }
        `,
        getMutation: (action: string) => {
          if (action === 'insert') {
            return `
              mutation CreateOrder($value: OrderInput!) {
                createOrder(value: $value) {
                  OrderID, CustomerID, ShipCity, ShipCountry
                }
              }`;
          }
          if (action === 'update') {
            return `
              mutation UpdateOrder($key: Int!, $keyColumn: String, $value: OrderInput) {
                updateOrder(key: $key, keyColumn: $keyColumn, value: $value) {
                  OrderID, CustomerID, ShipCity, ShipCountry
                }
              }`;
          }
          return `
            mutation DeleteOrder($key: Int!, $keyColumn: String) {
              deleteOrder(key: $key, keyColumn: $keyColumn) {
                OrderID, CustomerID, ShipCity, ShipCountry
              }
            }`;
        }
      }),
    });

    this.loadData();
  }

  async loadData(): Promise<void> {
    const query = new Query().setKey('OrderID');
    await this.dataManager.executeQuery(query).then((e: ReturnOption) => {
      if (e && e.result && e.result.result) {
        this.items = (e.result.result as Order[]);
      }
    }).catch((err) => {
      console.error('Failed to load data:', err);
    });
  }

 insert(): void {
  const data = this.getFormData('insert');
  if (!data.OrderID || !data.CustomerID) {
    (document.getElementById('message') as HTMLElement).innerText='OrderID and CustomerID are required';
    return;
  }
  const exists = this.items.some(item => item.OrderID === data.OrderID);
  if (exists) {
    (document.getElementById('message') as HTMLElement).innerText =`OrderID ${data.OrderID} already exists. Please use a unique OrderID.`;
    return;
  }
  (this.dataManager.insert(data, new Query()) as Promise<any>).then(() => {
    this.loadData();
  }).catch((err) => {
    console.error('Insert failed:', err);
  });
}

  update(): void {
    const data = this.getFormData('update');
    if (!data.OrderID) {
      (document.getElementById('message') as HTMLElement).innerText='OrderID is required to update';
      return;
    }

    (this.dataManager.update('OrderID', data, new Query()) as Promise<any>).then(() => {
      this.loadData();
    }).catch((err) => {
      console.error('Update failed:', err);
    });
  }

  delete(): void {
    const orderIdInput = (document.getElementById('deleteOrderID') as HTMLInputElement);
    const orderId = parseInt(orderIdInput.value, 10);
    if (!orderId) {
      (document.getElementById('message') as HTMLElement).innerText='OrderID is required to delete';
      return;
    }

    (this.dataManager.remove('OrderID', { OrderID: orderId }, new Query()) as Promise<any>).then(() => {
      this.loadData();
    }).catch((err) => {
      console.error('Delete failed:', err);
    });
  }

  getFormData(prefix: string): Order {
    return {
      OrderID: parseInt((document.getElementById(`${prefix}OrderID`) as HTMLInputElement).value, 10),
      CustomerID: (document.getElementById(`${prefix}CustomerID`) as HTMLInputElement).value,
      ShipCity: (document.getElementById(`${prefix}ShipCity`) as HTMLInputElement).value,
      ShipCountry: (document.getElementById(`${prefix}ShipCountry`) as HTMLInputElement).value,
    };
  }
}

interface Order {
  OrderID: number;
  CustomerID: string;
  ShipCity: string;
  ShipCountry: string;
}