export interface ProductData {
  SKUID?: string;
  ProductName?: string;
  Category?: string;
  AvailableStock?: number;
  UnitPrice?: number;
}

let skuCounter = 10000;

export const generateBufferData = (count: number): ProductData[] => {
  const products = [
    'Laptop', 'Desktop', 'Tablet', 'Smartphone', 'Monitor', 'Keyboard', 'Mouse', 'Headphones',
    'Speaker', 'Webcam', 'Router', 'Modem', 'SSD', 'RAM', 'Processor', 'Graphics Card',
    'Motherboard', 'Power Supply', 'Case', 'Cooling System'
  ];
  
  const categories = ['Electronics', 'Accessories', 'Storage'];

  const data: ProductData[] = [];

  for (let i = 0; i < count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    data.push({
      SKUID: 'SKU' + (skuCounter + i),
      ProductName: products[Math.floor(Math.random() * products.length)] + ' ' + (i + 1),
      Category: category,
      AvailableStock: Math.floor(Math.random() * 5000) + 100,
      UnitPrice: Math.floor(Math.random() * 2000) + 100
    });
  }

  return data;
};

export const bufferData = generateBufferData(10000);
export const data = bufferData;
