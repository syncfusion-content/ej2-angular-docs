
export let inventoryData: Object[] = [
    {
        'Item Code': 'AG940Z',
        'Item Name': 'Laser Printer',
        'Quantity': '44',
        'Purchase Price': '45.50',
        'Selling Price': '82.00',
        'Profit': '=E3-D3',
        'Last Updated': '5/25/22',
        'Rating': '4.5',
    },
    {
        'Item Code': 'BJ120K',
        'Item Name': 'Scientific Calculator',
        'Last Updated': '7/28/23',
        'Quantity': '16',
        'Purchase Price': '15.80',
        'Selling Price': '33.00',
        'Profit': '=E4-D4',
        'Rating': '4.0',
    },
    {
        'Item Code': 'BC120M',
        'Item Name': 'Wired Keyboard',
        'Last Updated': '3/30/22',
        'Quantity': '38',
        'Purchase Price': '16.80',
        'Selling Price': '39.00',
        'Profit': '=E5-D5',
        'Rating': '4.25',
    },
    {
        'Item Code': 'BS121L',
        'Item Name': 'Memory Card',
        'Last Updated': '7/20/23',
        'Quantity': '86',
        'Purchase Price': '19.50',
        'Selling Price': '30.00',
        'Profit': '=E6-D6',
        'Rating': '3.5',
    },
    {
        'Item Code': 'BU121K',
        'Item Name': 'Coffee Maker',
        'Last Updated': '2/2/23',
        'Quantity': '76',
        'Purchase Price': '46.50',
        'Selling Price': '65.00',
        'Profit': '=E7-D7',
        'Rating': '4.5',
    },
    {
        'Item Code': 'BD121M',
        'Item Name': 'Table Lamp',
        'Last Updated': '11/11/23',
        'Quantity': '10',
        'Purchase Price': '12.50',
        'Selling Price': '30.00',
        'Profit': '=E8-D8',
        'Rating': '5.0',
    },
    {
        'Item Code': 'AT992X',
        'Item Name': 'Document Scanner',
        'Last Updated': '4/13/23',
        'Quantity': '16',
        'Purchase Price': '65.00',
        'Selling Price': '87.00',
        'Profit': '=E9-D9',
        'Rating': '4.75',
    },
    {
        'Item Code': 'AP992Z',
        'Item Name': 'Gaming Headset',
        'Last Updated': '2/14/23',
        'Quantity': '18',
        'Purchase Price': '12.00',
        'Selling Price': '40.00',
        'Profit': '=E10-D10',
        'Rating': '4.4',
    },
    {
        'Item Code': 'AW920X',
        'Item Name': 'Laptop Bag',
        'Last Updated': '6/10/22',
        'Quantity': '22',
        'Purchase Price': '10.90',
        'Selling Price': '21.00',
        'Profit': '=E11-D11',
        'Rating': '3.9',
    },
    {
        'Item Code': 'AQ920Z',
        'Item Name': 'Table Fan',
        'Last Updated': '5/28/23',
        'Quantity': '45',
        'Purchase Price': '22.90',
        'Selling Price': '35.00',
        'Profit': '=E12-D12',
        'Rating': '3.75',
    },
    {
        'Item Code': 'AE940X',
        'Item Name': 'Electric Mop',
        'Last Updated': '12/18/22',
        'Quantity': '47',
        'Purchase Price': '123.50',
        'Selling Price': '165.00',
        'Profit': '=E13-D13',
        'Rating': '3.9',
    }
];
export let cartData: Object[] = [
    {
        "Product ID": "AG940Z",
        "Product Name": "Coffee Maker",
        "Category": "Kitchen",
        "Quantity": "43",
        "Price": "399",
        "Total": "=E4*D4"
    },
    {
        "Product ID": "BJ120K",
        "Product Name": "Apple Pencil",
        "Category": "Electronics",
        "Quantity": "7",
        "Price": "200",
        "Total": "=E5*D5"
    },
    {
        "Product ID": "BC120M",
        "Product Name": "Juicer",
        "Category": "Kitchen",
        "Quantity": "12",
        "Price": "100",
        "Total": "=E6*D6"
    },
    {
        "Product ID": "BS121L",
        "Product Name": "Toaster",
        "Category": "Kitchen",
        "Quantity": "69",
        "Price": "183",
        "Total": "=E7*D7"
    },
    {
        "Product ID": "BU121K",
        "Product Name": "Tea Kettle",
        "Category": "Kitchen",
        "Quantity": "83",
        "Price": "169",
        "Total": "=E8*D8"
    },
    {
        "Product ID": "BD121M",
        "Product Name": "Logitech Mouse",
        "Category": "Electronics",
        "Quantity": "16",
        "Price": "250",
        "Total": "=E9*D9"
    },
    {
        "Product ID": "AT992X",
        "Product Name": "Skillet",
        "Category": "Kitchen",
        "Quantity": "20",
        "Price": "149",
        "Total": "=E10*D10"
    },
    {
        "Product ID": "AP992Z",
        "Product Name": "Hamilton Blender",
        "Category": "Appliances",
        "Quantity": "68",
        "Price": "109",
        "Total": "=E11*D11"
    },
    {
        "Product ID": "AW920X",
        "Product Name": "Plate set",
        "Category": "Kitchen",
        "Quantity": "59",
        "Price": "168",
        "Total": "=E12*D12"
    }
];
export let stockData: Object[] = [
    {
        "Product ID": "AG940Z",
        "Products Received": "100",
        "Products Sold": "=100-Shopping Cart!D4",
        "Available Quantity": "=B3-C3"
    },
    {
        "Product ID": "BJ120K",
        "Products Received": "100",
        "Products Sold": "=100-Shopping Cart!D5",
        "Available Quantity": "=B3-C3"
    },
    {
        "Product ID": "BC120M",
        "Products Received": "100",
        "Products Sold": "=100-Shopping Cart!D6",
        "Available Quantity": "=B4-C4"
    },
    {
        "Product ID": "BS121L",
        "Products Received": "100",
        "Products Sold": "=100-Shopping Cart!D7",
        "Available Quantity": "=B5-C5"
    },
    {
        "Product ID": "BU121K",
        "Products Received": "100",
        "Products Sold": "=100-Shopping Cart!D8",
        "Available Quantity": "=B6-C6"
    },
    {
        "Product ID": "BD121M",
        "Products Received": "100",
        "Products Sold": "=100-Shopping Cart!D9",
        "Available Quantity": "=B7-C7"
    },
    {
        "Product ID": "AT992X",
        "Products Received": "100",
        "Products Sold": "=100-Shopping Cart!D10",
        "Available Quantity": "=B8-C8"
    },
    {
        "Product ID": "AP992Z",
        "Products Received": "100",
        "Products Sold": "=100-Shopping Cart!D11",
        "Available Quantity": "=B9-C9"
    },
    {
        "Product ID": "AW920X",
        "Products Received": "100",
        "Products Sold": "=100-Shopping Cart!D12",
        "Available Quantity": "=B10-C10"
    }
];