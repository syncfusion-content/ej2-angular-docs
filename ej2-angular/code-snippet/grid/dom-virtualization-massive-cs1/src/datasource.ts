export interface OrderData {
  OrderID?: number;
  CustomerID?: string;
  CustomerName?: string;
  TotalAmount?: number;
  ShipCity?: string;
  ShipAddress?: string;
  Status?: string;
}

let orderIdCounter = 1000;

export const generateMassiveData = (count: number): OrderData[] => {
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
  const customers = ['Customer A', 'Customer B', 'Customer C', 'Customer D', 'Customer E', 'Customer F', 'Customer G', 'Customer H', 'Customer I', 'Customer J'];
  const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  const data: OrderData[] = [];

  for (let i = 0; i < count; i++) {
    data.push({
      OrderID: orderIdCounter + i,
      CustomerID: 'CUST' + (Math.floor(Math.random() * 1000) + 1000),
      CustomerName: customers[Math.floor(Math.random() * customers.length)],
      TotalAmount: Math.floor(Math.random() * 50000) + 1000,
      ShipCity: cities[Math.floor(Math.random() * cities.length)],
      ShipAddress: `${Math.floor(Math.random() * 9000) + 1000} Street, Address ${i}`,
      Status: statuses[Math.floor(Math.random() * statuses.length)]
    });
  }

  return data;
};

export const massiveData = generateMassiveData(100000);
export const data = massiveData;
