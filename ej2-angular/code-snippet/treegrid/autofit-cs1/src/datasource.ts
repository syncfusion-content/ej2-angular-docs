/**
 * TreeGrid DataSource
 */

export let formatData: Object[] = [
    {
        orderID: '1',
        orderName: 'Order 1',
        orderDate: new Date('02/03/2017'),
        shippedDate: new Date('10/03/2018'),
        units: '1395',
        unitPrice: '47',
        price: 133.66,
        Category: 'seafood',
        subtasks: [
            { orderID: '1.1', orderName: 'Mackerel', Category: 'Frozen seafood', units: '235',
            orderDate: new Date('02/03/2017'), shippedDate: new Date('05/13/2018'), unitPrice: '12', price: 28.20 },
            { orderID: '1.2', orderName: 'Yellowfin Tuna', Category: 'Frozen seafood', units: '324',
            orderDate: new Date('05/03/2017'), shippedDate: new Date('05/22/2018'), unitPrice: '8', price: 25.92 },
            { orderID: '1.3', orderName: 'Herrings', Category: 'Frozen seafood', units: '488',
            orderDate: new Date('10/03/2017'), shippedDate: new Date('10/14/2018'), unitPrice: '11', price: 52.68 },
            { orderID: '1.4', orderName: 'Preserved Olives', Category: 'Edible', units: '125',
            orderDate: new Date('08/03/2017'), shippedDate: new Date('08/03/2018'), unitPrice: '9', price: 11.25 },
            { orderID: '1.5', orderName: 'Sweet corn Frozen', Category: 'Edible', units: '223',
            orderDate: new Date('09/03/2017'), shippedDate: new Date('09/03/2018'), unitPrice: '7', price: 15.61 }
         ]
    },
    {
        orderID: '2',
        orderName: 'Order 2',
        orderDate: new Date('05/03/2017'),
        shippedDate: new Date('03/15/2018'),
        units: '1944',
        unitPrice: '58',
        price: 212.33,
        Category: 'seafood',
        subtasks: [
            { orderID: '2.1', orderName: 'Tilapias', Category: 'Frozen seafood',
            orderDate: new Date('03/05/2017'), shippedDate: new Date('03/15/2018'), units: '278', unitPrice: '15', price: 41.70 },
            { orderID: '2.2', orderName: 'White Shrimp', Category: 'Frozen seafood', units: '560',
            orderDate: new Date('07/05/2017'), shippedDate: new Date('03/15/2018'), unitPrice: '7', price: 39.20 },
            { orderID: '2.3', orderName: 'Fresh Cheese', Category: 'Dairy', units: '323', unitPrice: '12',
            orderDate: new Date('09/03/2017'), shippedDate: new Date('09/19/2018'), price: 38.76 },
            { orderID: '2.4', orderName: 'Blue Veined Cheese', Category: 'Dairy', units: '370', unitPrice: '15',
            orderDate: new Date('11/03/2017'), shippedDate: new Date('11/13/2018'), price: 55.50 },
            { orderID: '2.5', orderName: 'Butter', Category: 'Dairy', units: '413', unitPrice: '9',
            orderDate: new Date('10/23/2017'), shippedDate: new Date('10/23/2018'), price: 37.17 }
        ]
    },
    {
        orderID: '3',
        orderName: 'Order 3',
        orderDate: new Date('03/10/2017'),
        shippedDate: new Date('03/20/2018'),
        units: '1120',
        unitPrice: '33',
        price: '108.80',
        Category: 'seafood',
        subtasks: [
            { orderID: '3.1', orderName: 'Lead glassware', Category: 'Solid crystals',
            orderDate: new Date('08/03/2017'), shippedDate: new Date('03/18/2018'), units: '542', unitPrice: '6', price: '32.52' },
            { orderID: '3.2', orderName: 'Pharmaceutical Glassware', Category: 'Solid crystals',
            orderDate: new Date('03/10/2017'), shippedDate: new Date('03/20/2018'), units: '324', unitPrice: '11', price: '35.64' },
            { orderID: '3.3', orderName: 'Glass beads', Category: 'Solid crystals', units: '254',
            orderDate: new Date('03/02/2017'), shippedDate: new Date('03/22/2018'), unitPrice: '16', price: '40.64' }
        ]
    }

];

