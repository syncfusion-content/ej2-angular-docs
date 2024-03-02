/**
 * TreeGrid DataSource
 */

export let stackedData: Object[] = [
    {
        orderID: '1',
        orderName: 'Order 1',
        orderDate: new Date('02/03/2017'),
        shippedDate: new Date('02/09/2017'),
        units: '1395',
        unitPrice: '47.00',
        price: 133.66,
        shipMentCategory: 'Seafood',
        subtasks: [
            { orderID: '1.1', orderName: 'Mackerel', shipMentCategory: 'Frozen seafood', units: '35',
                orderDate: new Date('03/03/2017'), shippedDate: new Date('03/10/2017'), unitPrice: '12.56', price: 28.20 },
            { orderID: '1.2', orderName: 'Yellowfin Tuna', shipMentCategory: 'Frozen seafood', units: '324',
                orderDate: new Date('05/03/2017'), shippedDate: new Date('05/10/2017'), unitPrice: '28.26', price: 25.92 },
            { orderID: '1.3', orderName: 'Herrings', shipMentCategory: 'Frozen seafood', units: '48',
                orderDate: new Date('05/08/2017'), shippedDate: new Date('05/15/2017'), unitPrice: '11.35', price: 52.68 },
            { orderID: '1.4', orderName: 'Preserved Olives', shipMentCategory: 'Edible', units: '125',
               orderDate: new Date('06/10/2017'), shippedDate: new Date('06/17/2017'), unitPrice: '29.23', price: 11.25 },
            { orderID: '1.5', orderName: 'Sweet corn Frozen', shipMentCategory: 'Edible', units: '223',
                orderDate: new Date('07/12/2017'), shippedDate: new Date('07/19/2017'), unitPrice: '47.17', price: 15.61 }

         ]
    },
    {
        orderID: '2',
        orderName: 'Order 2',
        orderDate: new Date('01/10/2018'),
        shippedDate: new Date('01/16/2018'),
        units: '1944',
        unitPrice: '58.45',
        price: 21.23,
        shipMentCategory: 'Seafood',
        subtasks: [
            { orderID: '2.1', orderName: 'Tilapias', shipMentCategory: 'Frozen Seafood',
            orderDate: new Date('02/05/2018'), shippedDate: new Date('02/12/2018'), units: '278', unitPrice: '15.25', price: 41.70 },
            { orderID: '2.2', orderName: 'White Shrimp', shipMentCategory: 'Frozen seafood', units: '560',
            orderDate: new Date('05/22/2018'), shippedDate: new Date('05/29/2018'), unitPrice: '72.45', price: 39.20 },
            { orderID: '2.3', orderName: 'Fresh Cheese', shipMentCategory: 'Dairy', units: '323', unitPrice: 12.45,
            orderDate: new Date('06/08/2018'), shippedDate: new Date('06/15/2018'), price: 38.76 },
            { orderID: '2.4', orderName: 'Blue Veined Cheese', shipMentCategory: 'Dairy', units: '370', unitPrice: 15.36,
            orderDate: new Date('07/10/2018'), shippedDate: new Date('07/17/2018'), price: 55.50 },
            { orderID: '2.5', orderName: 'Butter', shipMentCategory: 'Dairy', units: '413', unitPrice: '19.35',
            orderDate: new Date('09/18/2018'), shippedDate: new Date('09/25/2018'), price: 37.17 }
        ]
    },
    {
        orderID: '3',
        orderName: 'Order 3',
        orderDate: new Date('09/10/2018'),
        shippedDate: new Date('09/20/2018'),
        units: '1120',
        unitPrice: '33.34',
        price: 10.80,
        shipMentCategory: 'Seafood',
        subtasks: [
            { orderID: '3.1', orderName: 'Lead glassware', shipMentCategory: 'Solid crystals',
                orderDate: new Date('02/07/2018'), shippedDate: new Date('02/14/2018'), units: '542', unitPrice: '46.45', price: 32.52 },
            { orderID: '3.2', orderName: 'Pharmaceutical', shipMentCategory: 'Solid crystals',
                orderDate: new Date('04/19/2018'), shippedDate: new Date('04/26/2018'), units: '324', unitPrice: '11.56', price: 35.64 },
            { orderID: '3.3', orderName: 'Glass beads', shipMentCategory: 'Solid crystals', units: '254',
                orderDate: new Date('05/22/2018'), shippedDate: new Date('03/22/2018'), unitPrice: '16.25', price: 40.64 }
        ]
    }
];

