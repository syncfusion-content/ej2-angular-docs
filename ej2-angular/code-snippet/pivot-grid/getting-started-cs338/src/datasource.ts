let gData: Object[] = [
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1001,
        'Sold': 2

    },
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1002,
        'Sold': 3

    },
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1003,
        'Sold': 5

    },
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1004,
        'Sold': 1

    },
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1005,
        'Sold': 1

    },
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1007,
        'Sold': 2

    },
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1008,
        'Sold': 1

    },
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1009,
        'Sold': 3

    },
    {
        'Date': '1/5/2015 20:19:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1003,
        'Sold': 3
    },
    {
        'Date': '2/2/2015 10:22:07 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1002,
        'Sold': 4

    },
    {
        'Date': '2/10/2015 10:23:07 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1002,
        'Sold': 1

    },
    {
        'Date': '1/5/2015 20:19:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1004,
        'Sold': 3
    },
    {
        'Date': '2/2/2015 10:22:07 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1005,
        'Sold': 2

    },
    {
        'Date': '2/10/2015 10:23:07 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1006,
        'Sold': 4

    },
    {
        'Date': '1/5/2015 20:19:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1008,
        'Sold': 8
    },
    {
        'Date': '2/2/2015 10:22:07 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1009,
        'Sold': 1

    },
    {
        'Date': '2/10/2015 10:23:07 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1010,
        'Sold': 6

    },
    {
        'Date': '2/20/2015 11:25:07 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1002,
        'Sold': 8
    },
    {
        'Date': '2/20/2015 11:25:07 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1002,
        'Sold': 8
    },
    {
        'Date': '2/20/2015 11:25:07 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1002,
        'Sold': 8
    },
    {
        'Date': '3/07/2015 05:11:50 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1001,
        'Sold': 4
    },
    {
        'Date': '3/07/2015 05:11:50 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1001,
        'Sold': 4
    },
    {
        'Date': '3/07/2015 05:11:50 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1001,
        'Sold': 4

    },
    {
        'Date': '3/13/2015 05:11:55 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1005,
        'Sold': 2
    },
    {
        'Date': '3/13/2015 05:11:55 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1005,
        'Sold': 2
    },
    {
        'Date': '3/13/2015 05:11:55 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1005,
        'Sold': 2
    },
    {
        'Date': '9/1/2015 04:14:43 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1004,
        'Sold': 1

    },
    {
        'Date': '9/1/2015 04:14:43 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1010,
        'Sold': 2
    },
    {
        'Date': '9/1/2015 04:14:43 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1004,
        'Sold': 1
    },
];

export let Group_Data: Object[] = getGroupData(gData);

function getGroupData(data: any): Object[] {
    let date: Date;
    let products: string[] = ['Bottles and Cages', 'Cleaners', 'Fenders', 'Mountain Bikes', 'Road Bikes', 'Touring Bikes', 'Gloves', 'Jerseys', 'Shorts', 'Vests'];
    let amount: number[] = [0, 2, 3, 8, 60, 75, 65, 3, 5, 4, 2]
    for (let ln: number = 0, lt: number = data.length; ln < lt; ln++) {
        date = new Date(data[ln].Date.toString());
        data[ln].Date = date.toString();
        data[ln].Products = products[data[ln].Product_ID - 1000];
        data[ln].Sold = data[ln].Sold * (date.getFullYear() === 2015 ? 3 : date.getFullYear() === 2016 ? 4 : date.getFullYear() === 2017 ? 2 : 5);
        data[ln].Amount = ((date.getFullYear() === 2018 ? 2 : 0) + data[ln].Sold) * amount[data[ln].Product_ID - 1000];
    }
    return data as Object[];
}