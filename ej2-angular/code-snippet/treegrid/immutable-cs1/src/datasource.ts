/**
    *Sample data
*/


export let virtualData: Object[] = [];
export function dataSource(): void {
    let parent: number = -1;
    let parentId: number | any = null;
    let names: string[] = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
    'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
    'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
    'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
    'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
    'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
    'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
    for (let i: number = 0; i < 10000; i++) {
        if (i % 5 === 0) {
            parent = i;
        }
        if (i % 5 !== 0) {
            let crew: string = 'Crew';
            let num: number = isNaN((virtualData.length % parent) - 1) ?  0 : (virtualData.length % parent) - 1;
            (virtualData as any)[num][crew].push({
                'TaskID': i + 1,
                'FIELD1': names[Math.floor(Math.random() * names.length)],
                'FIELD2': 1967 + (i % 10),
                'FIELD3': Math.floor(Math.random() * 200),
                'FIELD4': Math.floor(Math.random() * 100),
                'FIELD5': Math.floor(Math.random() * 2000),
                'FIELD6': Math.floor(Math.random() * 1000),
                'FIELD7': Math.floor(Math.random() * 100),
                'FIELD8': Math.floor(Math.random() * 10),
                'FIELD9': Math.floor(Math.random() * 10),
                'FIELD10': Math.floor(Math.random() * 100),
                'FIELD11': Math.floor(Math.random() * 100),
                'FIELD12': Math.floor(Math.random() * 1000),
                'FIELD13': Math.floor(Math.random() * 10),
                'FIELD14': Math.floor(Math.random() * 10),
                'FIELD15': Math.floor(Math.random() * 1000),
                'FIELD16': Math.floor(Math.random() * 200),
                'FIELD17': Math.floor(Math.random() * 300),
                'FIELD18': Math.floor(Math.random() * 400),
                'FIELD19': Math.floor(Math.random() * 500),
                'FIELD20': Math.floor(Math.random() * 700),
                'FIELD21': Math.floor(Math.random() * 800),
                'FIELD22': Math.floor(Math.random() * 1000),
                'FIELD23': Math.floor(Math.random() * 2000),
                'FIELD24': Math.floor(Math.random() * 150),
                'FIELD25': Math.floor(Math.random() * 1000),
                'FIELD26': Math.floor(Math.random() * 100),
                'FIELD27': Math.floor(Math.random() * 400),
                'FIELD28': Math.floor(Math.random() * 600),
                'FIELD29': Math.floor(Math.random() * 500),
                'FIELD30': Math.floor(Math.random() * 300),
            });
        } else {
            virtualData.push({
                'TaskID': i + 1,
                'Crew': [],
                'FIELD1': names[Math.floor(Math.random() * names.length)],
                'FIELD2': 1967 + (i % 10),
                'FIELD3': Math.floor(Math.random() * 200),
                'FIELD4': Math.floor(Math.random() * 100),
                'FIELD5': Math.floor(Math.random() * 2000),
                'FIELD6': Math.floor(Math.random() * 1000),
                'FIELD7': Math.floor(Math.random() * 100),
                'FIELD8': Math.floor(Math.random() * 10),
                'FIELD9': Math.floor(Math.random() * 10),
                'FIELD10': Math.floor(Math.random() * 100),
                'FIELD11': Math.floor(Math.random() * 100),
                'FIELD12': Math.floor(Math.random() * 1000),
                'FIELD13': Math.floor(Math.random() * 10),
                'FIELD14': Math.floor(Math.random() * 10),
                'FIELD15': Math.floor(Math.random() * 1000),
                'FIELD16': Math.floor(Math.random() * 200),
                'FIELD17': Math.floor(Math.random() * 300),
                'FIELD18': Math.floor(Math.random() * 400),
                'FIELD19': Math.floor(Math.random() * 500),
                'FIELD20': Math.floor(Math.random() * 700),
                'FIELD21': Math.floor(Math.random() * 800),
                'FIELD22': Math.floor(Math.random() * 1000),
                'FIELD23': Math.floor(Math.random() * 2000),
                'FIELD24': Math.floor(Math.random() * 150),
                'FIELD25': Math.floor(Math.random() * 1000),
                'FIELD26': Math.floor(Math.random() * 100),
                'FIELD27': Math.floor(Math.random() * 400),
                'FIELD28': Math.floor(Math.random() * 600),
                'FIELD29': Math.floor(Math.random() * 500),
                'FIELD30': Math.floor(Math.random() * 300),
            });
        }
    }
}


let stringData: string = JSON.stringify([
    {
        'OrderID': 10248,
        'CustomerID': 'VINET',
        'OrderDate': '1996-07-04T00:00:00.000Z',
        'ShippedDate': '1996-07-16T00:00:00.000Z',
        'Freight': 32.38,
        'ShipName': 'Vins et alcools Chevalier',
        'ShipAddress': '59 rue de l\'Abbaye',
        'ShipCity': 'Reims',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10249,
        'CustomerID': 'TOMSP',
        'OrderDate': '1996-07-05T00:00:00.000Z',
        'ShippedDate': '1996-07-10T00:00:00.000Z',
        'Freight': 11.61,
        'ShipName': 'Toms Spezialitäten',
        'ShipAddress': 'Luisenstr. 48',
        'ShipCity': 'Münster',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10250,
        'CustomerID': 'HANAR',
        'OrderDate': '1996-07-08T00:00:00.000Z',
        'ShippedDate': '1996-07-12T00:00:00.000Z',
        'Freight': 65.83,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10251,
        'CustomerID': 'VICTE',
        'OrderDate': '1996-07-08T00:00:00.000Z',
        'ShippedDate': '1996-07-15T00:00:00.000Z',
        'Freight': 41.34,
        'ShipName': 'Victuailles en stock',
        'ShipAddress': '2, rue du Commerce',
        'ShipCity': 'Lyon',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10252,
        'CustomerID': 'SUPRD',
        'OrderDate': '1996-07-09T00:00:00.000Z',
        'ShippedDate': '1996-07-11T00:00:00.000Z',
        'Freight': 51.3,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10253,
        'CustomerID': 'HANAR',
        'OrderDate': '1996-07-10T00:00:00.000Z',
        'ShippedDate': '1996-07-16T00:00:00.000Z',
        'Freight': 58.17,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10254,
        'CustomerID': 'CHOPS',
        'OrderDate': '1996-07-11T00:00:00.000Z',
        'ShippedDate': '1996-07-23T00:00:00.000Z',
        'Freight': 22.98,
        'ShipName': 'Chop-suey Chinese',
        'ShipAddress': 'Hauptstr. 31',
        'ShipCity': 'Bern',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10255,
        'CustomerID': 'RICSU',
        'OrderDate': '1996-07-12T00:00:00.000Z',
        'ShippedDate': '1996-07-15T00:00:00.000Z',
        'Freight': 148.33,
        'ShipName': 'Richter Supermarkt',
        'ShipAddress': 'Starenweg 5',
        'ShipCity': 'Genève',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10256,
        'CustomerID': 'WELLI',
        'OrderDate': '1996-07-15T00:00:00.000Z',
        'ShippedDate': '1996-07-17T00:00:00.000Z',
        'Freight': 13.97,
        'ShipName': 'Wellington Importadora',
        'ShipAddress': 'Rua do Mercado, 12',
        'ShipCity': 'Resende',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10257,
        'CustomerID': 'HILAA',
        'OrderDate': '1996-07-16T00:00:00.000Z',
        'ShippedDate': '1996-07-22T00:00:00.000Z',
        'Freight': 81.91,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10258,
        'CustomerID': 'ERNSH',
        'OrderDate': '1996-07-17T00:00:00.000Z',
        'ShippedDate': '1996-07-23T00:00:00.000Z',
        'Freight': 140.51,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10259,
        'CustomerID': 'CENTC',
        'OrderDate': '1996-07-18T00:00:00.000Z',
        'ShippedDate': '1996-07-25T00:00:00.000Z',
        'Freight': 3.25,
        'ShipName': 'Centro comercial Moctezuma',
        'ShipAddress': 'Sierras de Granada 9993',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10260,
        'CustomerID': 'OTTIK',
        'OrderDate': '1996-07-19T00:00:00.000Z',
        'ShippedDate': '1996-07-29T00:00:00.000Z',
        'Freight': 55.09,
        'ShipName': 'Ottilies Käseladen',
        'ShipAddress': 'Mehrheimerstr. 369',
        'ShipCity': 'Köln',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10261,
        'CustomerID': 'QUEDE',
        'OrderDate': '1996-07-19T00:00:00.000Z',
        'ShippedDate': '1996-07-30T00:00:00.000Z',
        'Freight': 3.05,
        'ShipName': 'Que Delícia',
        'ShipAddress': 'Rua da Panificadora, 12',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10262,
        'CustomerID': 'RATTC',
        'OrderDate': '1996-07-22T00:00:00.000Z',
        'ShippedDate': '1996-07-25T00:00:00.000Z',
        'Freight': 48.29,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10263,
        'CustomerID': 'ERNSH',
        'OrderDate': '1996-07-23T00:00:00.000Z',
        'ShippedDate': '1996-07-31T00:00:00.000Z',
        'Freight': 146.06,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10264,
        'CustomerID': 'FOLKO',
        'OrderDate': '1996-07-24T00:00:00.000Z',
        'ShippedDate': '1996-08-23T00:00:00.000Z',
        'Freight': 3.67,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10265,
        'CustomerID': 'BLONP',
        'OrderDate': '1996-07-25T00:00:00.000Z',
        'ShippedDate': '1996-08-12T00:00:00.000Z',
        'Freight': 55.28,
        'ShipName': 'Blondel père et fils',
        'ShipAddress': '24, place Kléber',
        'ShipCity': 'Strasbourg',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10266,
        'CustomerID': 'WARTH',
        'OrderDate': '1996-07-26T00:00:00.000Z',
        'ShippedDate': '1996-07-31T00:00:00.000Z',
        'Freight': 25.73,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10267,
        'CustomerID': 'FRANK',
        'OrderDate': '1996-07-29T00:00:00.000Z',
        'ShippedDate': '1996-08-06T00:00:00.000Z',
        'Freight': 208.58,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10268,
        'CustomerID': 'GROSR',
        'OrderDate': '1996-07-30T00:00:00.000Z',
        'ShippedDate': '1996-08-02T00:00:00.000Z',
        'Freight': 66.29,
        'ShipName': 'GROSELLA-Restaurante',
        'ShipAddress': '5ª Ave. Los Palos Grandes',
        'ShipCity': 'Caracas',
        'ShipRegion': 'DF',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10269,
        'CustomerID': 'WHITC',
        'OrderDate': '1996-07-31T00:00:00.000Z',
        'ShippedDate': '1996-08-09T00:00:00.000Z',
        'Freight': 4.56,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10270,
        'CustomerID': 'WARTH',
        'OrderDate': '1996-08-01T00:00:00.000Z',
        'ShippedDate': '1996-08-02T00:00:00.000Z',
        'Freight': 136.54,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10271,
        'CustomerID': 'SPLIR',
        'OrderDate': '1996-08-01T00:00:00.000Z',
        'ShippedDate': '1996-08-30T00:00:00.000Z',
        'Freight': 4.54,
        'ShipName': 'Split Rail Beer & Ale',
        'ShipAddress': 'P.O. Box 555',
        'ShipCity': 'Lander',
        'ShipRegion': 'WY',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10272,
        'CustomerID': 'RATTC',
        'OrderDate': '1996-08-02T00:00:00.000Z',
        'ShippedDate': '1996-08-06T00:00:00.000Z',
        'Freight': 98.03,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10273,
        'CustomerID': 'QUICK',
        'OrderDate': '1996-08-05T00:00:00.000Z',
        'ShippedDate': '1996-08-12T00:00:00.000Z',
        'Freight': 76.07,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10274,
        'CustomerID': 'VINET',
        'OrderDate': '1996-08-06T00:00:00.000Z',
        'ShippedDate': '1996-08-16T00:00:00.000Z',
        'Freight': 6.01,
        'ShipName': 'Vins et alcools Chevalier',
        'ShipAddress': '59 rue de l\'Abbaye',
        'ShipCity': 'Reims',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10275,
        'CustomerID': 'MAGAA',
        'OrderDate': '1996-08-07T00:00:00.000Z',
        'ShippedDate': '1996-08-09T00:00:00.000Z',
        'Freight': 26.93,
        'ShipName': 'Magazzini Alimentari Riuniti',
        'ShipAddress': 'Via Ludovico il Moro 22',
        'ShipCity': 'Bergamo',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10276,
        'CustomerID': 'TORTU',
        'OrderDate': '1996-08-08T00:00:00.000Z',
        'ShippedDate': '1996-08-14T00:00:00.000Z',
        'Freight': 13.84,
        'ShipName': 'Tortuga Restaurante',
        'ShipAddress': 'Avda. Azteca 123',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10277,
        'CustomerID': 'MORGK',
        'OrderDate': '1996-08-09T00:00:00.000Z',
        'ShippedDate': '1996-08-13T00:00:00.000Z',
        'Freight': 125.77,
        'ShipName': 'Morgenstern Gesundkost',
        'ShipAddress': 'Heerstr. 22',
        'ShipCity': 'Leipzig',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10278,
        'CustomerID': 'BERGS',
        'OrderDate': '1996-08-12T00:00:00.000Z',
        'ShippedDate': '1996-08-16T00:00:00.000Z',
        'Freight': 92.69,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10279,
        'CustomerID': 'LEHMS',
        'OrderDate': '1996-08-13T00:00:00.000Z',
        'ShippedDate': '1996-08-16T00:00:00.000Z',
        'Freight': 25.83,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10280,
        'CustomerID': 'BERGS',
        'OrderDate': '1996-08-14T00:00:00.000Z',
        'ShippedDate': '1996-09-12T00:00:00.000Z',
        'Freight': 8.98,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10281,
        'CustomerID': 'ROMEY',
        'OrderDate': '1996-08-14T00:00:00.000Z',
        'ShippedDate': '1996-08-21T00:00:00.000Z',
        'Freight': 2.94,
        'ShipName': 'Romero y tomillo',
        'ShipAddress': 'Gran Vía, 1',
        'ShipCity': 'Madrid',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10282,
        'CustomerID': 'ROMEY',
        'OrderDate': '1996-08-15T00:00:00.000Z',
        'ShippedDate': '1996-08-21T00:00:00.000Z',
        'Freight': 12.69,
        'ShipName': 'Romero y tomillo',
        'ShipAddress': 'Gran Vía, 1',
        'ShipCity': 'Madrid',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10283,
        'CustomerID': 'LILAS',
        'OrderDate': '1996-08-16T00:00:00.000Z',
        'ShippedDate': '1996-08-23T00:00:00.000Z',
        'Freight': 84.81,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10284,
        'CustomerID': 'LEHMS',
        'OrderDate': '1996-08-19T00:00:00.000Z',
        'ShippedDate': '1996-08-27T00:00:00.000Z',
        'Freight': 76.56,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10285,
        'CustomerID': 'QUICK',
        'OrderDate': '1996-08-20T00:00:00.000Z',
        'ShippedDate': '1996-08-26T00:00:00.000Z',
        'Freight': 76.83,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10286,
        'CustomerID': 'QUICK',
        'OrderDate': '1996-08-21T00:00:00.000Z',
        'ShippedDate': '1996-08-30T00:00:00.000Z',
        'Freight': 229.24,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10287,
        'CustomerID': 'RICAR',
        'OrderDate': '1996-08-22T00:00:00.000Z',
        'ShippedDate': '1996-08-28T00:00:00.000Z',
        'Freight': 12.76,
        'ShipName': 'Ricardo Adocicados',
        'ShipAddress': 'Av. Copacabana, 267',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10288,
        'CustomerID': 'REGGC',
        'OrderDate': '1996-08-23T00:00:00.000Z',
        'ShippedDate': '1996-09-03T00:00:00.000Z',
        'Freight': 7.45,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10289,
        'CustomerID': 'BSBEV',
        'OrderDate': '1996-08-26T00:00:00.000Z',
        'ShippedDate': '1996-08-28T00:00:00.000Z',
        'Freight': 22.77,
        'ShipName': 'B\' Beverages',
        'ShipAddress': 'Fauntleroy Circus',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10290,
        'CustomerID': 'COMMI',
        'OrderDate': '1996-08-27T00:00:00.000Z',
        'ShippedDate': '1996-09-03T00:00:00.000Z',
        'Freight': 79.7,
        'ShipName': 'Comércio Mineiro',
        'ShipAddress': 'Av. dos Lusíadas, 23',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10291,
        'CustomerID': 'QUEDE',
        'OrderDate': '1996-08-27T00:00:00.000Z',
        'ShippedDate': '1996-09-04T00:00:00.000Z',
        'Freight': 6.4,
        'ShipName': 'Que Delícia',
        'ShipAddress': 'Rua da Panificadora, 12',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10292,
        'CustomerID': 'TRADH',
        'OrderDate': '1996-08-28T00:00:00.000Z',
        'ShippedDate': '1996-09-02T00:00:00.000Z',
        'Freight': 1.35,
        'ShipName': 'Tradiçao Hipermercados',
        'ShipAddress': 'Av. Inês de Castro, 414',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10293,
        'CustomerID': 'TORTU',
        'OrderDate': '1996-08-29T00:00:00.000Z',
        'ShippedDate': '1996-09-11T00:00:00.000Z',
        'Freight': 21.18,
        'ShipName': 'Tortuga Restaurante',
        'ShipAddress': 'Avda. Azteca 123',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10294,
        'CustomerID': 'RATTC',
        'OrderDate': '1996-08-30T00:00:00.000Z',
        'ShippedDate': '1996-09-05T00:00:00.000Z',
        'Freight': 147.26,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10295,
        'CustomerID': 'VINET',
        'OrderDate': '1996-09-02T00:00:00.000Z',
        'ShippedDate': '1996-09-10T00:00:00.000Z',
        'Freight': 1.15,
        'ShipName': 'Vins et alcools Chevalier',
        'ShipAddress': '59 rue de l\'Abbaye',
        'ShipCity': 'Reims',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10296,
        'CustomerID': 'LILAS',
        'OrderDate': '1996-09-03T00:00:00.000Z',
        'ShippedDate': '1996-09-11T00:00:00.000Z',
        'Freight': 0.12,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10297,
        'CustomerID': 'BLONP',
        'OrderDate': '1996-09-04T00:00:00.000Z',
        'ShippedDate': '1996-09-10T00:00:00.000Z',
        'Freight': 5.74,
        'ShipName': 'Blondel père et fils',
        'ShipAddress': '24, place Kléber',
        'ShipCity': 'Strasbourg',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10298,
        'CustomerID': 'HUNGO',
        'OrderDate': '1996-09-05T00:00:00.000Z',
        'ShippedDate': '1996-09-11T00:00:00.000Z',
        'Freight': 168.22,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10299,
        'CustomerID': 'RICAR',
        'OrderDate': '1996-09-06T00:00:00.000Z',
        'ShippedDate': '1996-09-13T00:00:00.000Z',
        'Freight': 29.76,
        'ShipName': 'Ricardo Adocicados',
        'ShipAddress': 'Av. Copacabana, 267',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10300,
        'CustomerID': 'MAGAA',
        'OrderDate': '1996-09-09T00:00:00.000Z',
        'ShippedDate': '1996-09-18T00:00:00.000Z',
        'Freight': 17.68,
        'ShipName': 'Magazzini Alimentari Riuniti',
        'ShipAddress': 'Via Ludovico il Moro 22',
        'ShipCity': 'Bergamo',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10301,
        'CustomerID': 'WANDK',
        'OrderDate': '1996-09-09T00:00:00.000Z',
        'ShippedDate': '1996-09-17T00:00:00.000Z',
        'Freight': 45.08,
        'ShipName': 'Die Wandernde Kuh',
        'ShipAddress': 'Adenauerallee 900',
        'ShipCity': 'Stuttgart',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10302,
        'CustomerID': 'SUPRD',
        'OrderDate': '1996-09-10T00:00:00.000Z',
        'ShippedDate': '1996-10-09T00:00:00.000Z',
        'Freight': 6.27,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10303,
        'CustomerID': 'GODOS',
        'OrderDate': '1996-09-11T00:00:00.000Z',
        'ShippedDate': '1996-09-18T00:00:00.000Z',
        'Freight': 107.83,
        'ShipName': 'Godos Cocina Típica',
        'ShipAddress': 'C/ Romero, 33',
        'ShipCity': 'Sevilla',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10304,
        'CustomerID': 'TORTU',
        'OrderDate': '1996-09-12T00:00:00.000Z',
        'ShippedDate': '1996-09-17T00:00:00.000Z',
        'Freight': 63.79,
        'ShipName': 'Tortuga Restaurante',
        'ShipAddress': 'Avda. Azteca 123',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10305,
        'CustomerID': 'OLDWO',
        'OrderDate': '1996-09-13T00:00:00.000Z',
        'ShippedDate': '1996-10-09T00:00:00.000Z',
        'Freight': 257.62,
        'ShipName': 'Old World Delicatessen',
        'ShipAddress': '2743 Bering St.',
        'ShipCity': 'Anchorage',
        'ShipRegion': 'AK',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10306,
        'CustomerID': 'ROMEY',
        'OrderDate': '1996-09-16T00:00:00.000Z',
        'ShippedDate': '1996-09-23T00:00:00.000Z',
        'Freight': 7.56,
        'ShipName': 'Romero y tomillo',
        'ShipAddress': 'Gran Vía, 1',
        'ShipCity': 'Madrid',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10307,
        'CustomerID': 'LONEP',
        'OrderDate': '1996-09-17T00:00:00.000Z',
        'ShippedDate': '1996-09-25T00:00:00.000Z',
        'Freight': 0.56,
        'ShipName': 'Lonesome Pine Restaurant',
        'ShipAddress': '89 Chiaroscuro Rd.',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10308,
        'CustomerID': 'ANATR',
        'OrderDate': '1996-09-18T00:00:00.000Z',
        'ShippedDate': '1996-09-24T00:00:00.000Z',
        'Freight': 1.61,
        'ShipName': 'Ana Trujillo Emparedados y helados',
        'ShipAddress': 'Avda. de la Constitución 2222',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10309,
        'CustomerID': 'HUNGO',
        'OrderDate': '1996-09-19T00:00:00.000Z',
        'ShippedDate': '1996-10-23T00:00:00.000Z',
        'Freight': 47.3,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10310,
        'CustomerID': 'THEBI',
        'OrderDate': '1996-09-20T00:00:00.000Z',
        'ShippedDate': '1996-09-27T00:00:00.000Z',
        'Freight': 17.52,
        'ShipName': 'The Big Cheese',
        'ShipAddress': '89 Jefferson Way Suite 2',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10311,
        'CustomerID': 'DUMON',
        'OrderDate': '1996-09-20T00:00:00.000Z',
        'ShippedDate': '1996-09-26T00:00:00.000Z',
        'Freight': 24.69,
        'ShipName': 'Du monde entier',
        'ShipAddress': '67, rue des Cinquante Otages',
        'ShipCity': 'Nantes',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10312,
        'CustomerID': 'WANDK',
        'OrderDate': '1996-09-23T00:00:00.000Z',
        'ShippedDate': '1996-10-03T00:00:00.000Z',
        'Freight': 40.26,
        'ShipName': 'Die Wandernde Kuh',
        'ShipAddress': 'Adenauerallee 900',
        'ShipCity': 'Stuttgart',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10313,
        'CustomerID': 'QUICK',
        'OrderDate': '1996-09-24T00:00:00.000Z',
        'ShippedDate': '1996-10-04T00:00:00.000Z',
        'Freight': 1.96,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10314,
        'CustomerID': 'RATTC',
        'OrderDate': '1996-09-25T00:00:00.000Z',
        'ShippedDate': '1996-10-04T00:00:00.000Z',
        'Freight': 74.16,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10315,
        'CustomerID': 'ISLAT',
        'OrderDate': '1996-09-26T00:00:00.000Z',
        'ShippedDate': '1996-10-03T00:00:00.000Z',
        'Freight': 41.76,
        'ShipName': 'Island Trading',
        'ShipAddress': 'Garden House Crowther Way',
        'ShipCity': 'Cowes',
        'ShipRegion': 'Isle of Wight',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10316,
        'CustomerID': 'RATTC',
        'OrderDate': '1996-09-27T00:00:00.000Z',
        'ShippedDate': '1996-10-08T00:00:00.000Z',
        'Freight': 150.15,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10317,
        'CustomerID': 'LONEP',
        'OrderDate': '1996-09-30T00:00:00.000Z',
        'ShippedDate': '1996-10-10T00:00:00.000Z',
        'Freight': 12.69,
        'ShipName': 'Lonesome Pine Restaurant',
        'ShipAddress': '89 Chiaroscuro Rd.',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10318,
        'CustomerID': 'ISLAT',
        'OrderDate': '1996-10-01T00:00:00.000Z',
        'ShippedDate': '1996-10-04T00:00:00.000Z',
        'Freight': 4.73,
        'ShipName': 'Island Trading',
        'ShipAddress': 'Garden House Crowther Way',
        'ShipCity': 'Cowes',
        'ShipRegion': 'Isle of Wight',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10319,
        'CustomerID': 'TORTU',
        'OrderDate': '1996-10-02T00:00:00.000Z',
        'ShippedDate': '1996-10-11T00:00:00.000Z',
        'Freight': 64.5,
        'ShipName': 'Tortuga Restaurante',
        'ShipAddress': 'Avda. Azteca 123',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10320,
        'CustomerID': 'WARTH',
        'OrderDate': '1996-10-03T00:00:00.000Z',
        'ShippedDate': '1996-10-18T00:00:00.000Z',
        'Freight': 34.57,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10321,
        'CustomerID': 'ISLAT',
        'OrderDate': '1996-10-03T00:00:00.000Z',
        'ShippedDate': '1996-10-11T00:00:00.000Z',
        'Freight': 3.43,
        'ShipName': 'Island Trading',
        'ShipAddress': 'Garden House Crowther Way',
        'ShipCity': 'Cowes',
        'ShipRegion': 'Isle of Wight',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10322,
        'CustomerID': 'PERIC',
        'OrderDate': '1996-10-04T00:00:00.000Z',
        'ShippedDate': '1996-10-23T00:00:00.000Z',
        'Freight': 0.4,
        'ShipName': 'Pericles Comidas clásicas',
        'ShipAddress': 'Calle Dr. Jorge Cash 321',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10323,
        'CustomerID': 'KOENE',
        'OrderDate': '1996-10-07T00:00:00.000Z',
        'ShippedDate': '1996-10-14T00:00:00.000Z',
        'Freight': 4.88,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10324,
        'CustomerID': 'SAVEA',
        'OrderDate': '1996-10-08T00:00:00.000Z',
        'ShippedDate': '1996-10-10T00:00:00.000Z',
        'Freight': 214.27,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10325,
        'CustomerID': 'KOENE',
        'OrderDate': '1996-10-09T00:00:00.000Z',
        'ShippedDate': '1996-10-14T00:00:00.000Z',
        'Freight': 64.86,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10326,
        'CustomerID': 'BOLID',
        'OrderDate': '1996-10-10T00:00:00.000Z',
        'ShippedDate': '1996-10-14T00:00:00.000Z',
        'Freight': 77.92,
        'ShipName': 'Bólido Comidas preparadas',
        'ShipAddress': 'C/ Araquil, 67',
        'ShipCity': 'Madrid',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10327,
        'CustomerID': 'FOLKO',
        'OrderDate': '1996-10-11T00:00:00.000Z',
        'ShippedDate': '1996-10-14T00:00:00.000Z',
        'Freight': 63.36,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10328,
        'CustomerID': 'FURIB',
        'OrderDate': '1996-10-14T00:00:00.000Z',
        'ShippedDate': '1996-10-17T00:00:00.000Z',
        'Freight': 87.03,
        'ShipName': 'Furia Bacalhau e Frutos do Mar',
        'ShipAddress': 'Jardim das rosas n. 32',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10329,
        'CustomerID': 'SPLIR',
        'OrderDate': '1996-10-15T00:00:00.000Z',
        'ShippedDate': '1996-10-23T00:00:00.000Z',
        'Freight': 191.67,
        'ShipName': 'Split Rail Beer & Ale',
        'ShipAddress': 'P.O. Box 555',
        'ShipCity': 'Lander',
        'ShipRegion': 'WY',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10330,
        'CustomerID': 'LILAS',
        'OrderDate': '1996-10-16T00:00:00.000Z',
        'ShippedDate': '1996-10-28T00:00:00.000Z',
        'Freight': 12.75,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10331,
        'CustomerID': 'BONAP',
        'OrderDate': '1996-10-16T00:00:00.000Z',
        'ShippedDate': '1996-10-21T00:00:00.000Z',
        'Freight': 10.19,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10332,
        'CustomerID': 'MEREP',
        'OrderDate': '1996-10-17T00:00:00.000Z',
        'ShippedDate': '1996-10-21T00:00:00.000Z',
        'Freight': 52.84,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10333,
        'CustomerID': 'WARTH',
        'OrderDate': '1996-10-18T00:00:00.000Z',
        'ShippedDate': '1996-10-25T00:00:00.000Z',
        'Freight': 0.59,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10334,
        'CustomerID': 'VICTE',
        'OrderDate': '1996-10-21T00:00:00.000Z',
        'ShippedDate': '1996-10-28T00:00:00.000Z',
        'Freight': 8.56,
        'ShipName': 'Victuailles en stock',
        'ShipAddress': '2, rue du Commerce',
        'ShipCity': 'Lyon',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10335,
        'CustomerID': 'HUNGO',
        'OrderDate': '1996-10-22T00:00:00.000Z',
        'ShippedDate': '1996-10-24T00:00:00.000Z',
        'Freight': 42.11,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10336,
        'CustomerID': 'PRINI',
        'OrderDate': '1996-10-23T00:00:00.000Z',
        'ShippedDate': '1996-10-25T00:00:00.000Z',
        'Freight': 15.51,
        'ShipName': 'Princesa Isabel Vinhos',
        'ShipAddress': 'Estrada da saúde n. 58',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10337,
        'CustomerID': 'FRANK',
        'OrderDate': '1996-10-24T00:00:00.000Z',
        'ShippedDate': '1996-10-29T00:00:00.000Z',
        'Freight': 108.26,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10338,
        'CustomerID': 'OLDWO',
        'OrderDate': '1996-10-25T00:00:00.000Z',
        'ShippedDate': '1996-10-29T00:00:00.000Z',
        'Freight': 84.21,
        'ShipName': 'Old World Delicatessen',
        'ShipAddress': '2743 Bering St.',
        'ShipCity': 'Anchorage',
        'ShipRegion': 'AK',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10339,
        'CustomerID': 'MEREP',
        'OrderDate': '1996-10-28T00:00:00.000Z',
        'ShippedDate': '1996-11-04T00:00:00.000Z',
        'Freight': 15.66,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10340,
        'CustomerID': 'BONAP',
        'OrderDate': '1996-10-29T00:00:00.000Z',
        'ShippedDate': '1996-11-08T00:00:00.000Z',
        'Freight': 166.31,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10341,
        'CustomerID': 'SIMOB',
        'OrderDate': '1996-10-29T00:00:00.000Z',
        'ShippedDate': '1996-11-05T00:00:00.000Z',
        'Freight': 26.78,
        'ShipName': 'Simons bistro',
        'ShipAddress': 'Vinbæltet 34',
        'ShipCity': 'Kobenhavn',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10342,
        'CustomerID': 'FRANK',
        'OrderDate': '1996-10-30T00:00:00.000Z',
        'ShippedDate': '1996-11-04T00:00:00.000Z',
        'Freight': 54.83,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10343,
        'CustomerID': 'LEHMS',
        'OrderDate': '1996-10-31T00:00:00.000Z',
        'ShippedDate': '1996-11-06T00:00:00.000Z',
        'Freight': 110.37,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10344,
        'CustomerID': 'WHITC',
        'OrderDate': '1996-11-01T00:00:00.000Z',
        'ShippedDate': '1996-11-05T00:00:00.000Z',
        'Freight': 23.29,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10345,
        'CustomerID': 'QUICK',
        'OrderDate': '1996-11-04T00:00:00.000Z',
        'ShippedDate': '1996-11-11T00:00:00.000Z',
        'Freight': 249.06,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10346,
        'CustomerID': 'RATTC',
        'OrderDate': '1996-11-05T00:00:00.000Z',
        'ShippedDate': '1996-11-08T00:00:00.000Z',
        'Freight': 142.08,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10347,
        'CustomerID': 'FAMIA',
        'OrderDate': '1996-11-06T00:00:00.000Z',
        'ShippedDate': '1996-11-08T00:00:00.000Z',
        'Freight': 3.1,
        'ShipName': 'Familia Arquibaldo',
        'ShipAddress': 'Rua Orós, 92',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10348,
        'CustomerID': 'WANDK',
        'OrderDate': '1996-11-07T00:00:00.000Z',
        'ShippedDate': '1996-11-15T00:00:00.000Z',
        'Freight': 0.78,
        'ShipName': 'Die Wandernde Kuh',
        'ShipAddress': 'Adenauerallee 900',
        'ShipCity': 'Stuttgart',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10349,
        'CustomerID': 'SPLIR',
        'OrderDate': '1996-11-08T00:00:00.000Z',
        'ShippedDate': '1996-11-15T00:00:00.000Z',
        'Freight': 8.63,
        'ShipName': 'Split Rail Beer & Ale',
        'ShipAddress': 'P.O. Box 555',
        'ShipCity': 'Lander',
        'ShipRegion': 'WY',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10350,
        'CustomerID': 'LAMAI',
        'OrderDate': '1996-11-11T00:00:00.000Z',
        'ShippedDate': '1996-12-03T00:00:00.000Z',
        'Freight': 64.19,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10351,
        'CustomerID': 'ERNSH',
        'OrderDate': '1996-11-11T00:00:00.000Z',
        'ShippedDate': '1996-11-20T00:00:00.000Z',
        'Freight': 162.33,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10352,
        'CustomerID': 'FURIB',
        'OrderDate': '1996-11-12T00:00:00.000Z',
        'ShippedDate': '1996-11-18T00:00:00.000Z',
        'Freight': 1.3,
        'ShipName': 'Furia Bacalhau e Frutos do Mar',
        'ShipAddress': 'Jardim das rosas n. 32',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10353,
        'CustomerID': 'PICCO',
        'OrderDate': '1996-11-13T00:00:00.000Z',
        'ShippedDate': '1996-11-25T00:00:00.000Z',
        'Freight': 360.63,
        'ShipName': 'Piccolo und mehr',
        'ShipAddress': 'Geislweg 14',
        'ShipCity': 'Salzburg',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10354,
        'CustomerID': 'PERIC',
        'OrderDate': '1996-11-14T00:00:00.000Z',
        'ShippedDate': '1996-11-20T00:00:00.000Z',
        'Freight': 53.8,
        'ShipName': 'Pericles Comidas clásicas',
        'ShipAddress': 'Calle Dr. Jorge Cash 321',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10355,
        'CustomerID': 'AROUT',
        'OrderDate': '1996-11-15T00:00:00.000Z',
        'ShippedDate': '1996-11-20T00:00:00.000Z',
        'Freight': 41.95,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10356,
        'CustomerID': 'WANDK',
        'OrderDate': '1996-11-18T00:00:00.000Z',
        'ShippedDate': '1996-11-27T00:00:00.000Z',
        'Freight': 36.71,
        'ShipName': 'Die Wandernde Kuh',
        'ShipAddress': 'Adenauerallee 900',
        'ShipCity': 'Stuttgart',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10357,
        'CustomerID': 'LILAS',
        'OrderDate': '1996-11-19T00:00:00.000Z',
        'ShippedDate': '1996-12-02T00:00:00.000Z',
        'Freight': 34.88,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10358,
        'CustomerID': 'LAMAI',
        'OrderDate': '1996-11-20T00:00:00.000Z',
        'ShippedDate': '1996-11-27T00:00:00.000Z',
        'Freight': 19.64,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10359,
        'CustomerID': 'SEVES',
        'OrderDate': '1996-11-21T00:00:00.000Z',
        'ShippedDate': '1996-11-26T00:00:00.000Z',
        'Freight': 288.43,
        'ShipName': 'Seven Seas Imports',
        'ShipAddress': '90 Wadhurst Rd.',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10360,
        'CustomerID': 'BLONP',
        'OrderDate': '1996-11-22T00:00:00.000Z',
        'ShippedDate': '1996-12-02T00:00:00.000Z',
        'Freight': 131.7,
        'ShipName': 'Blondel père et fils',
        'ShipAddress': '24, place Kléber',
        'ShipCity': 'Strasbourg',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10361,
        'CustomerID': 'QUICK',
        'OrderDate': '1996-11-22T00:00:00.000Z',
        'ShippedDate': '1996-12-03T00:00:00.000Z',
        'Freight': 183.17,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10362,
        'CustomerID': 'BONAP',
        'OrderDate': '1996-11-25T00:00:00.000Z',
        'ShippedDate': '1996-11-28T00:00:00.000Z',
        'Freight': 96.04,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10363,
        'CustomerID': 'DRACD',
        'OrderDate': '1996-11-26T00:00:00.000Z',
        'ShippedDate': '1996-12-04T00:00:00.000Z',
        'Freight': 30.54,
        'ShipName': 'Drachenblut Delikatessen',
        'ShipAddress': 'Walserweg 21',
        'ShipCity': 'Aachen',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10364,
        'CustomerID': 'EASTC',
        'OrderDate': '1996-11-26T00:00:00.000Z',
        'ShippedDate': '1996-12-04T00:00:00.000Z',
        'Freight': 71.97,
        'ShipName': 'Eastern Connection',
        'ShipAddress': '35 King George',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10365,
        'CustomerID': 'ANTON',
        'OrderDate': '1996-11-27T00:00:00.000Z',
        'ShippedDate': '1996-12-02T00:00:00.000Z',
        'Freight': 22,
        'ShipName': 'Antonio Moreno Taquería',
        'ShipAddress': 'Mataderos  2312',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10366,
        'CustomerID': 'GALED',
        'OrderDate': '1996-11-28T00:00:00.000Z',
        'ShippedDate': '1996-12-30T00:00:00.000Z',
        'Freight': 10.14,
        'ShipName': 'Galería del gastronómo',
        'ShipAddress': 'Rambla de Cataluña, 23',
        'ShipCity': 'Barcelona',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10367,
        'CustomerID': 'VAFFE',
        'OrderDate': '1996-11-28T00:00:00.000Z',
        'ShippedDate': '1996-12-02T00:00:00.000Z',
        'Freight': 13.55,
        'ShipName': 'Vaffeljernet',
        'ShipAddress': 'Smagsloget 45',
        'ShipCity': 'Århus',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10368,
        'CustomerID': 'ERNSH',
        'OrderDate': '1996-11-29T00:00:00.000Z',
        'ShippedDate': '1996-12-02T00:00:00.000Z',
        'Freight': 101.95,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10369,
        'CustomerID': 'SPLIR',
        'OrderDate': '1996-12-02T00:00:00.000Z',
        'ShippedDate': '1996-12-09T00:00:00.000Z',
        'Freight': 195.68,
        'ShipName': 'Split Rail Beer & Ale',
        'ShipAddress': 'P.O. Box 555',
        'ShipCity': 'Lander',
        'ShipRegion': 'WY',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10370,
        'CustomerID': 'CHOPS',
        'OrderDate': '1996-12-03T00:00:00.000Z',
        'ShippedDate': '1996-12-27T00:00:00.000Z',
        'Freight': 1.17,
        'ShipName': 'Chop-suey Chinese',
        'ShipAddress': 'Hauptstr. 31',
        'ShipCity': 'Bern',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10371,
        'CustomerID': 'LAMAI',
        'OrderDate': '1996-12-03T00:00:00.000Z',
        'ShippedDate': '1996-12-24T00:00:00.000Z',
        'Freight': 0.45,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10372,
        'CustomerID': 'QUEEN',
        'OrderDate': '1996-12-04T00:00:00.000Z',
        'ShippedDate': '1996-12-09T00:00:00.000Z',
        'Freight': 890.78,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10373,
        'CustomerID': 'HUNGO',
        'OrderDate': '1996-12-05T00:00:00.000Z',
        'ShippedDate': '1996-12-11T00:00:00.000Z',
        'Freight': 124.12,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10374,
        'CustomerID': 'WOLZA',
        'OrderDate': '1996-12-05T00:00:00.000Z',
        'ShippedDate': '1996-12-09T00:00:00.000Z',
        'Freight': 3.94,
        'ShipName': 'Wolski Zajazd',
        'ShipAddress': 'ul. Filtrowa 68',
        'ShipCity': 'Warszawa',
        'ShipRegion': null,
        'ShipCountry': 'Poland'
    },

    {
        'OrderID': 10375,
        'CustomerID': 'HUNGC',
        'OrderDate': '1996-12-06T00:00:00.000Z',
        'ShippedDate': '1996-12-09T00:00:00.000Z',
        'Freight': 20.12,
        'ShipName': 'Hungry Coyote Import Store',
        'ShipAddress': 'City Center Plaza 516 Main St.',
        'ShipCity': 'Elgin',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10376,
        'CustomerID': 'MEREP',
        'OrderDate': '1996-12-09T00:00:00.000Z',
        'ShippedDate': '1996-12-13T00:00:00.000Z',
        'Freight': 20.39,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10377,
        'CustomerID': 'SEVES',
        'OrderDate': '1996-12-09T00:00:00.000Z',
        'ShippedDate': '1996-12-13T00:00:00.000Z',
        'Freight': 22.21,
        'ShipName': 'Seven Seas Imports',
        'ShipAddress': '90 Wadhurst Rd.',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10378,
        'CustomerID': 'FOLKO',
        'OrderDate': '1996-12-10T00:00:00.000Z',
        'ShippedDate': '1996-12-19T00:00:00.000Z',
        'Freight': 5.44,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10379,
        'CustomerID': 'QUEDE',
        'OrderDate': '1996-12-11T00:00:00.000Z',
        'ShippedDate': '1996-12-13T00:00:00.000Z',
        'Freight': 45.03,
        'ShipName': 'Que Delícia',
        'ShipAddress': 'Rua da Panificadora, 12',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10380,
        'CustomerID': 'HUNGO',
        'OrderDate': '1996-12-12T00:00:00.000Z',
        'ShippedDate': '1997-01-16T00:00:00.000Z',
        'Freight': 35.03,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10381,
        'CustomerID': 'LILAS',
        'OrderDate': '1996-12-12T00:00:00.000Z',
        'ShippedDate': '1996-12-13T00:00:00.000Z',
        'Freight': 7.99,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10382,
        'CustomerID': 'ERNSH',
        'OrderDate': '1996-12-13T00:00:00.000Z',
        'ShippedDate': '1996-12-16T00:00:00.000Z',
        'Freight': 94.77,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10383,
        'CustomerID': 'AROUT',
        'OrderDate': '1996-12-16T00:00:00.000Z',
        'ShippedDate': '1996-12-18T00:00:00.000Z',
        'Freight': 34.24,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10384,
        'CustomerID': 'BERGS',
        'OrderDate': '1996-12-16T00:00:00.000Z',
        'ShippedDate': '1996-12-20T00:00:00.000Z',
        'Freight': 168.64,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10385,
        'CustomerID': 'SPLIR',
        'OrderDate': '1996-12-17T00:00:00.000Z',
        'ShippedDate': '1996-12-23T00:00:00.000Z',
        'Freight': 30.96,
        'ShipName': 'Split Rail Beer & Ale',
        'ShipAddress': 'P.O. Box 555',
        'ShipCity': 'Lander',
        'ShipRegion': 'WY',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10386,
        'CustomerID': 'FAMIA',
        'OrderDate': '1996-12-18T00:00:00.000Z',
        'ShippedDate': '1996-12-25T00:00:00.000Z',
        'Freight': 13.99,
        'ShipName': 'Familia Arquibaldo',
        'ShipAddress': 'Rua Orós, 92',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10387,
        'CustomerID': 'SANTG',
        'OrderDate': '1996-12-18T00:00:00.000Z',
        'ShippedDate': '1996-12-20T00:00:00.000Z',
        'Freight': 93.63,
        'ShipName': 'Santé Gourmet',
        'ShipAddress': 'Erling Skakkes gate 78',
        'ShipCity': 'Stavern',
        'ShipRegion': null,
        'ShipCountry': 'Norway'
    },

    {
        'OrderID': 10388,
        'CustomerID': 'SEVES',
        'OrderDate': '1996-12-19T00:00:00.000Z',
        'ShippedDate': '1996-12-20T00:00:00.000Z',
        'Freight': 34.86,
        'ShipName': 'Seven Seas Imports',
        'ShipAddress': '90 Wadhurst Rd.',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10389,
        'CustomerID': 'BOTTM',
        'OrderDate': '1996-12-20T00:00:00.000Z',
        'ShippedDate': '1996-12-24T00:00:00.000Z',
        'Freight': 47.42,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10390,
        'CustomerID': 'ERNSH',
        'OrderDate': '1996-12-23T00:00:00.000Z',
        'ShippedDate': '1996-12-26T00:00:00.000Z',
        'Freight': 126.38,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10391,
        'CustomerID': 'DRACD',
        'OrderDate': '1996-12-23T00:00:00.000Z',
        'ShippedDate': '1996-12-31T00:00:00.000Z',
        'Freight': 5.45,
        'ShipName': 'Drachenblut Delikatessen',
        'ShipAddress': 'Walserweg 21',
        'ShipCity': 'Aachen',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10392,
        'CustomerID': 'PICCO',
        'OrderDate': '1996-12-24T00:00:00.000Z',
        'ShippedDate': '1997-01-01T00:00:00.000Z',
        'Freight': 122.46,
        'ShipName': 'Piccolo und mehr',
        'ShipAddress': 'Geislweg 14',
        'ShipCity': 'Salzburg',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10393,
        'CustomerID': 'SAVEA',
        'OrderDate': '1996-12-25T00:00:00.000Z',
        'ShippedDate': '1997-01-03T00:00:00.000Z',
        'Freight': 126.56,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10394,
        'CustomerID': 'HUNGC',
        'OrderDate': '1996-12-25T00:00:00.000Z',
        'ShippedDate': '1997-01-03T00:00:00.000Z',
        'Freight': 30.34,
        'ShipName': 'Hungry Coyote Import Store',
        'ShipAddress': 'City Center Plaza 516 Main St.',
        'ShipCity': 'Elgin',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10395,
        'CustomerID': 'HILAA',
        'OrderDate': '1996-12-26T00:00:00.000Z',
        'ShippedDate': '1997-01-03T00:00:00.000Z',
        'Freight': 184.41,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10396,
        'CustomerID': 'FRANK',
        'OrderDate': '1996-12-27T00:00:00.000Z',
        'ShippedDate': '1997-01-06T00:00:00.000Z',
        'Freight': 135.35,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10397,
        'CustomerID': 'PRINI',
        'OrderDate': '1996-12-27T00:00:00.000Z',
        'ShippedDate': '1997-01-02T00:00:00.000Z',
        'Freight': 60.26,
        'ShipName': 'Princesa Isabel Vinhos',
        'ShipAddress': 'Estrada da saúde n. 58',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10398,
        'CustomerID': 'SAVEA',
        'OrderDate': '1996-12-30T00:00:00.000Z',
        'ShippedDate': '1997-01-09T00:00:00.000Z',
        'Freight': 89.16,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10399,
        'CustomerID': 'VAFFE',
        'OrderDate': '1996-12-31T00:00:00.000Z',
        'ShippedDate': '1997-01-08T00:00:00.000Z',
        'Freight': 27.36,
        'ShipName': 'Vaffeljernet',
        'ShipAddress': 'Smagsloget 45',
        'ShipCity': 'Århus',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10400,
        'CustomerID': 'EASTC',
        'OrderDate': '1997-01-01T00:00:00.000Z',
        'ShippedDate': '1997-01-16T00:00:00.000Z',
        'Freight': 83.93,
        'ShipName': 'Eastern Connection',
        'ShipAddress': '35 King George',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10401,
        'CustomerID': 'RATTC',
        'OrderDate': '1997-01-01T00:00:00.000Z',
        'ShippedDate': '1997-01-10T00:00:00.000Z',
        'Freight': 12.51,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10402,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-01-02T00:00:00.000Z',
        'ShippedDate': '1997-01-10T00:00:00.000Z',
        'Freight': 67.88,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10403,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-01-03T00:00:00.000Z',
        'ShippedDate': '1997-01-09T00:00:00.000Z',
        'Freight': 73.79,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10404,
        'CustomerID': 'MAGAA',
        'OrderDate': '1997-01-03T00:00:00.000Z',
        'ShippedDate': '1997-01-08T00:00:00.000Z',
        'Freight': 155.97,
        'ShipName': 'Magazzini Alimentari Riuniti',
        'ShipAddress': 'Via Ludovico il Moro 22',
        'ShipCity': 'Bergamo',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10405,
        'CustomerID': 'LINOD',
        'OrderDate': '1997-01-06T00:00:00.000Z',
        'ShippedDate': '1997-01-22T00:00:00.000Z',
        'Freight': 34.82,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10406,
        'CustomerID': 'QUEEN',
        'OrderDate': '1997-01-07T00:00:00.000Z',
        'ShippedDate': '1997-01-13T00:00:00.000Z',
        'Freight': 108.04,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10407,
        'CustomerID': 'OTTIK',
        'OrderDate': '1997-01-07T00:00:00.000Z',
        'ShippedDate': '1997-01-30T00:00:00.000Z',
        'Freight': 91.48,
        'ShipName': 'Ottilies Käseladen',
        'ShipAddress': 'Mehrheimerstr. 369',
        'ShipCity': 'Köln',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10408,
        'CustomerID': 'FOLIG',
        'OrderDate': '1997-01-08T00:00:00.000Z',
        'ShippedDate': '1997-01-14T00:00:00.000Z',
        'Freight': 11.26,
        'ShipName': 'Folies gourmandes',
        'ShipAddress': '184, chaussée de Tournai',
        'ShipCity': 'Lille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10409,
        'CustomerID': 'OCEAN',
        'OrderDate': '1997-01-09T00:00:00.000Z',
        'ShippedDate': '1997-01-14T00:00:00.000Z',
        'Freight': 29.83,
        'ShipName': 'Océano Atlántico Ltda.',
        'ShipAddress': 'Ing. Gustavo Moncada 8585 Piso 20-A',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10410,
        'CustomerID': 'BOTTM',
        'OrderDate': '1997-01-10T00:00:00.000Z',
        'ShippedDate': '1997-01-15T00:00:00.000Z',
        'Freight': 2.4,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10411,
        'CustomerID': 'BOTTM',
        'OrderDate': '1997-01-10T00:00:00.000Z',
        'ShippedDate': '1997-01-21T00:00:00.000Z',
        'Freight': 23.65,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10412,
        'CustomerID': 'WARTH',
        'OrderDate': '1997-01-13T00:00:00.000Z',
        'ShippedDate': '1997-01-15T00:00:00.000Z',
        'Freight': 3.77,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10413,
        'CustomerID': 'LAMAI',
        'OrderDate': '1997-01-14T00:00:00.000Z',
        'ShippedDate': '1997-01-16T00:00:00.000Z',
        'Freight': 95.66,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10414,
        'CustomerID': 'FAMIA',
        'OrderDate': '1997-01-14T00:00:00.000Z',
        'ShippedDate': '1997-01-17T00:00:00.000Z',
        'Freight': 21.48,
        'ShipName': 'Familia Arquibaldo',
        'ShipAddress': 'Rua Orós, 92',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10415,
        'CustomerID': 'HUNGC',
        'OrderDate': '1997-01-15T00:00:00.000Z',
        'ShippedDate': '1997-01-24T00:00:00.000Z',
        'Freight': 0.2,
        'ShipName': 'Hungry Coyote Import Store',
        'ShipAddress': 'City Center Plaza 516 Main St.',
        'ShipCity': 'Elgin',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10416,
        'CustomerID': 'WARTH',
        'OrderDate': '1997-01-16T00:00:00.000Z',
        'ShippedDate': '1997-01-27T00:00:00.000Z',
        'Freight': 22.72,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10417,
        'CustomerID': 'SIMOB',
        'OrderDate': '1997-01-16T00:00:00.000Z',
        'ShippedDate': '1997-01-28T00:00:00.000Z',
        'Freight': 70.29,
        'ShipName': 'Simons bistro',
        'ShipAddress': 'Vinbæltet 34',
        'ShipCity': 'Kobenhavn',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10418,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-01-17T00:00:00.000Z',
        'ShippedDate': '1997-01-24T00:00:00.000Z',
        'Freight': 17.55,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10419,
        'CustomerID': 'RICSU',
        'OrderDate': '1997-01-20T00:00:00.000Z',
        'ShippedDate': '1997-01-30T00:00:00.000Z',
        'Freight': 137.35,
        'ShipName': 'Richter Supermarkt',
        'ShipAddress': 'Starenweg 5',
        'ShipCity': 'Genève',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10420,
        'CustomerID': 'WELLI',
        'OrderDate': '1997-01-21T00:00:00.000Z',
        'ShippedDate': '1997-01-27T00:00:00.000Z',
        'Freight': 44.12,
        'ShipName': 'Wellington Importadora',
        'ShipAddress': 'Rua do Mercado, 12',
        'ShipCity': 'Resende',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10421,
        'CustomerID': 'QUEDE',
        'OrderDate': '1997-01-21T00:00:00.000Z',
        'ShippedDate': '1997-01-27T00:00:00.000Z',
        'Freight': 99.23,
        'ShipName': 'Que Delícia',
        'ShipAddress': 'Rua da Panificadora, 12',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10422,
        'CustomerID': 'FRANS',
        'OrderDate': '1997-01-22T00:00:00.000Z',
        'ShippedDate': '1997-01-31T00:00:00.000Z',
        'Freight': 3.02,
        'ShipName': 'Franchi S.p.A.',
        'ShipAddress': 'Via Monte Bianco 34',
        'ShipCity': 'Torino',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10423,
        'CustomerID': 'GOURL',
        'OrderDate': '1997-01-23T00:00:00.000Z',
        'ShippedDate': '1997-02-24T00:00:00.000Z',
        'Freight': 24.5,
        'ShipName': 'Gourmet Lanchonetes',
        'ShipAddress': 'Av. Brasil, 442',
        'ShipCity': 'Campinas',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10424,
        'CustomerID': 'MEREP',
        'OrderDate': '1997-01-23T00:00:00.000Z',
        'ShippedDate': '1997-01-27T00:00:00.000Z',
        'Freight': 370.61,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10425,
        'CustomerID': 'LAMAI',
        'OrderDate': '1997-01-24T00:00:00.000Z',
        'ShippedDate': '1997-02-14T00:00:00.000Z',
        'Freight': 7.93,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10426,
        'CustomerID': 'GALED',
        'OrderDate': '1997-01-27T00:00:00.000Z',
        'ShippedDate': '1997-02-06T00:00:00.000Z',
        'Freight': 18.69,
        'ShipName': 'Galería del gastronómo',
        'ShipAddress': 'Rambla de Cataluña, 23',
        'ShipCity': 'Barcelona',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10427,
        'CustomerID': 'PICCO',
        'OrderDate': '1997-01-27T00:00:00.000Z',
        'ShippedDate': '1997-03-03T00:00:00.000Z',
        'Freight': 31.29,
        'ShipName': 'Piccolo und mehr',
        'ShipAddress': 'Geislweg 14',
        'ShipCity': 'Salzburg',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10428,
        'CustomerID': 'REGGC',
        'OrderDate': '1997-01-28T00:00:00.000Z',
        'ShippedDate': '1997-02-04T00:00:00.000Z',
        'Freight': 11.09,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10429,
        'CustomerID': 'HUNGO',
        'OrderDate': '1997-01-29T00:00:00.000Z',
        'ShippedDate': '1997-02-07T00:00:00.000Z',
        'Freight': 56.63,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10430,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-01-30T00:00:00.000Z',
        'ShippedDate': '1997-02-03T00:00:00.000Z',
        'Freight': 458.78,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10431,
        'CustomerID': 'BOTTM',
        'OrderDate': '1997-01-30T00:00:00.000Z',
        'ShippedDate': '1997-02-07T00:00:00.000Z',
        'Freight': 44.17,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10432,
        'CustomerID': 'SPLIR',
        'OrderDate': '1997-01-31T00:00:00.000Z',
        'ShippedDate': '1997-02-07T00:00:00.000Z',
        'Freight': 4.34,
        'ShipName': 'Split Rail Beer & Ale',
        'ShipAddress': 'P.O. Box 555',
        'ShipCity': 'Lander',
        'ShipRegion': 'WY',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10433,
        'CustomerID': 'PRINI',
        'OrderDate': '1997-02-03T00:00:00.000Z',
        'ShippedDate': '1997-03-04T00:00:00.000Z',
        'Freight': 73.83,
        'ShipName': 'Princesa Isabel Vinhos',
        'ShipAddress': 'Estrada da saúde n. 58',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10434,
        'CustomerID': 'FOLKO',
        'OrderDate': '1997-02-03T00:00:00.000Z',
        'ShippedDate': '1997-02-13T00:00:00.000Z',
        'Freight': 17.92,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10435,
        'CustomerID': 'CONSH',
        'OrderDate': '1997-02-04T00:00:00.000Z',
        'ShippedDate': '1997-02-07T00:00:00.000Z',
        'Freight': 9.21,
        'ShipName': 'Consolidated Holdings',
        'ShipAddress': 'Berkeley Gardens 12  Brewery',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10436,
        'CustomerID': 'BLONP',
        'OrderDate': '1997-02-05T00:00:00.000Z',
        'ShippedDate': '1997-02-11T00:00:00.000Z',
        'Freight': 156.66,
        'ShipName': 'Blondel père et fils',
        'ShipAddress': '24, place Kléber',
        'ShipCity': 'Strasbourg',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10437,
        'CustomerID': 'WARTH',
        'OrderDate': '1997-02-05T00:00:00.000Z',
        'ShippedDate': '1997-02-12T00:00:00.000Z',
        'Freight': 19.97,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10438,
        'CustomerID': 'TOMSP',
        'OrderDate': '1997-02-06T00:00:00.000Z',
        'ShippedDate': '1997-02-14T00:00:00.000Z',
        'Freight': 8.24,
        'ShipName': 'Toms Spezialitäten',
        'ShipAddress': 'Luisenstr. 48',
        'ShipCity': 'Münster',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10439,
        'CustomerID': 'MEREP',
        'OrderDate': '1997-02-07T00:00:00.000Z',
        'ShippedDate': '1997-02-10T00:00:00.000Z',
        'Freight': 4.07,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10440,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-02-10T00:00:00.000Z',
        'ShippedDate': '1997-02-28T00:00:00.000Z',
        'Freight': 86.53,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10441,
        'CustomerID': 'OLDWO',
        'OrderDate': '1997-02-10T00:00:00.000Z',
        'ShippedDate': '1997-03-14T00:00:00.000Z',
        'Freight': 73.02,
        'ShipName': 'Old World Delicatessen',
        'ShipAddress': '2743 Bering St.',
        'ShipCity': 'Anchorage',
        'ShipRegion': 'AK',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10442,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-02-11T00:00:00.000Z',
        'ShippedDate': '1997-02-18T00:00:00.000Z',
        'Freight': 47.94,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10443,
        'CustomerID': 'REGGC',
        'OrderDate': '1997-02-12T00:00:00.000Z',
        'ShippedDate': '1997-02-14T00:00:00.000Z',
        'Freight': 13.95,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10444,
        'CustomerID': 'BERGS',
        'OrderDate': '1997-02-12T00:00:00.000Z',
        'ShippedDate': '1997-02-21T00:00:00.000Z',
        'Freight': 3.5,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10445,
        'CustomerID': 'BERGS',
        'OrderDate': '1997-02-13T00:00:00.000Z',
        'ShippedDate': '1997-02-20T00:00:00.000Z',
        'Freight': 9.3,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10446,
        'CustomerID': 'TOMSP',
        'OrderDate': '1997-02-14T00:00:00.000Z',
        'ShippedDate': '1997-02-19T00:00:00.000Z',
        'Freight': 14.68,
        'ShipName': 'Toms Spezialitäten',
        'ShipAddress': 'Luisenstr. 48',
        'ShipCity': 'Münster',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10447,
        'CustomerID': 'RICAR',
        'OrderDate': '1997-02-14T00:00:00.000Z',
        'ShippedDate': '1997-03-07T00:00:00.000Z',
        'Freight': 68.66,
        'ShipName': 'Ricardo Adocicados',
        'ShipAddress': 'Av. Copacabana, 267',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10448,
        'CustomerID': 'RANCH',
        'OrderDate': '1997-02-17T00:00:00.000Z',
        'ShippedDate': '1997-02-24T00:00:00.000Z',
        'Freight': 38.82,
        'ShipName': 'Rancho grande',
        'ShipAddress': 'Av. del Libertador 900',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10449,
        'CustomerID': 'BLONP',
        'OrderDate': '1997-02-18T00:00:00.000Z',
        'ShippedDate': '1997-02-27T00:00:00.000Z',
        'Freight': 53.3,
        'ShipName': 'Blondel père et fils',
        'ShipAddress': '24, place Kléber',
        'ShipCity': 'Strasbourg',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10450,
        'CustomerID': 'VICTE',
        'OrderDate': '1997-02-19T00:00:00.000Z',
        'ShippedDate': '1997-03-11T00:00:00.000Z',
        'Freight': 7.23,
        'ShipName': 'Victuailles en stock',
        'ShipAddress': '2, rue du Commerce',
        'ShipCity': 'Lyon',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10451,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-02-19T00:00:00.000Z',
        'ShippedDate': '1997-03-12T00:00:00.000Z',
        'Freight': 189.09,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10452,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-02-20T00:00:00.000Z',
        'ShippedDate': '1997-02-26T00:00:00.000Z',
        'Freight': 140.26,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10453,
        'CustomerID': 'AROUT',
        'OrderDate': '1997-02-21T00:00:00.000Z',
        'ShippedDate': '1997-02-26T00:00:00.000Z',
        'Freight': 25.36,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10454,
        'CustomerID': 'LAMAI',
        'OrderDate': '1997-02-21T00:00:00.000Z',
        'ShippedDate': '1997-02-25T00:00:00.000Z',
        'Freight': 2.74,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10455,
        'CustomerID': 'WARTH',
        'OrderDate': '1997-02-24T00:00:00.000Z',
        'ShippedDate': '1997-03-03T00:00:00.000Z',
        'Freight': 180.45,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10456,
        'CustomerID': 'KOENE',
        'OrderDate': '1997-02-25T00:00:00.000Z',
        'ShippedDate': '1997-02-28T00:00:00.000Z',
        'Freight': 8.12,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10457,
        'CustomerID': 'KOENE',
        'OrderDate': '1997-02-25T00:00:00.000Z',
        'ShippedDate': '1997-03-03T00:00:00.000Z',
        'Freight': 11.57,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10458,
        'CustomerID': 'SUPRD',
        'OrderDate': '1997-02-26T00:00:00.000Z',
        'ShippedDate': '1997-03-04T00:00:00.000Z',
        'Freight': 147.06,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10459,
        'CustomerID': 'VICTE',
        'OrderDate': '1997-02-27T00:00:00.000Z',
        'ShippedDate': '1997-02-28T00:00:00.000Z',
        'Freight': 25.09,
        'ShipName': 'Victuailles en stock',
        'ShipAddress': '2, rue du Commerce',
        'ShipCity': 'Lyon',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10460,
        'CustomerID': 'FOLKO',
        'OrderDate': '1997-02-28T00:00:00.000Z',
        'ShippedDate': '1997-03-03T00:00:00.000Z',
        'Freight': 16.27,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10461,
        'CustomerID': 'LILAS',
        'OrderDate': '1997-02-28T00:00:00.000Z',
        'ShippedDate': '1997-03-05T00:00:00.000Z',
        'Freight': 148.61,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10462,
        'CustomerID': 'CONSH',
        'OrderDate': '1997-03-03T00:00:00.000Z',
        'ShippedDate': '1997-03-18T00:00:00.000Z',
        'Freight': 6.17,
        'ShipName': 'Consolidated Holdings',
        'ShipAddress': 'Berkeley Gardens 12  Brewery',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10463,
        'CustomerID': 'SUPRD',
        'OrderDate': '1997-03-04T00:00:00.000Z',
        'ShippedDate': '1997-03-06T00:00:00.000Z',
        'Freight': 14.78,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10464,
        'CustomerID': 'FURIB',
        'OrderDate': '1997-03-04T00:00:00.000Z',
        'ShippedDate': '1997-03-14T00:00:00.000Z',
        'Freight': 89,
        'ShipName': 'Furia Bacalhau e Frutos do Mar',
        'ShipAddress': 'Jardim das rosas n. 32',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10465,
        'CustomerID': 'VAFFE',
        'OrderDate': '1997-03-05T00:00:00.000Z',
        'ShippedDate': '1997-03-14T00:00:00.000Z',
        'Freight': 145.04,
        'ShipName': 'Vaffeljernet',
        'ShipAddress': 'Smagsloget 45',
        'ShipCity': 'Århus',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10466,
        'CustomerID': 'COMMI',
        'OrderDate': '1997-03-06T00:00:00.000Z',
        'ShippedDate': '1997-03-13T00:00:00.000Z',
        'Freight': 11.93,
        'ShipName': 'Comércio Mineiro',
        'ShipAddress': 'Av. dos Lusíadas, 23',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10467,
        'CustomerID': 'MAGAA',
        'OrderDate': '1997-03-06T00:00:00.000Z',
        'ShippedDate': '1997-03-11T00:00:00.000Z',
        'Freight': 4.93,
        'ShipName': 'Magazzini Alimentari Riuniti',
        'ShipAddress': 'Via Ludovico il Moro 22',
        'ShipCity': 'Bergamo',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10468,
        'CustomerID': 'KOENE',
        'OrderDate': '1997-03-07T00:00:00.000Z',
        'ShippedDate': '1997-03-12T00:00:00.000Z',
        'Freight': 44.12,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10469,
        'CustomerID': 'WHITC',
        'OrderDate': '1997-03-10T00:00:00.000Z',
        'ShippedDate': '1997-03-14T00:00:00.000Z',
        'Freight': 60.18,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10470,
        'CustomerID': 'BONAP',
        'OrderDate': '1997-03-11T00:00:00.000Z',
        'ShippedDate': '1997-03-14T00:00:00.000Z',
        'Freight': 64.56,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10471,
        'CustomerID': 'BSBEV',
        'OrderDate': '1997-03-11T00:00:00.000Z',
        'ShippedDate': '1997-03-18T00:00:00.000Z',
        'Freight': 45.59,
        'ShipName': 'B\' Beverages',
        'ShipAddress': 'Fauntleroy Circus',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10472,
        'CustomerID': 'SEVES',
        'OrderDate': '1997-03-12T00:00:00.000Z',
        'ShippedDate': '1997-03-19T00:00:00.000Z',
        'Freight': 4.2,
        'ShipName': 'Seven Seas Imports',
        'ShipAddress': '90 Wadhurst Rd.',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10473,
        'CustomerID': 'ISLAT',
        'OrderDate': '1997-03-13T00:00:00.000Z',
        'ShippedDate': '1997-03-21T00:00:00.000Z',
        'Freight': 16.37,
        'ShipName': 'Island Trading',
        'ShipAddress': 'Garden House Crowther Way',
        'ShipCity': 'Cowes',
        'ShipRegion': 'Isle of Wight',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10474,
        'CustomerID': 'PERIC',
        'OrderDate': '1997-03-13T00:00:00.000Z',
        'ShippedDate': '1997-03-21T00:00:00.000Z',
        'Freight': 83.49,
        'ShipName': 'Pericles Comidas clásicas',
        'ShipAddress': 'Calle Dr. Jorge Cash 321',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10475,
        'CustomerID': 'SUPRD',
        'OrderDate': '1997-03-14T00:00:00.000Z',
        'ShippedDate': '1997-04-04T00:00:00.000Z',
        'Freight': 68.52,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10476,
        'CustomerID': 'HILAA',
        'OrderDate': '1997-03-17T00:00:00.000Z',
        'ShippedDate': '1997-03-24T00:00:00.000Z',
        'Freight': 4.41,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10477,
        'CustomerID': 'PRINI',
        'OrderDate': '1997-03-17T00:00:00.000Z',
        'ShippedDate': '1997-03-25T00:00:00.000Z',
        'Freight': 13.02,
        'ShipName': 'Princesa Isabel Vinhos',
        'ShipAddress': 'Estrada da saúde n. 58',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10478,
        'CustomerID': 'VICTE',
        'OrderDate': '1997-03-18T00:00:00.000Z',
        'ShippedDate': '1997-03-26T00:00:00.000Z',
        'Freight': 4.81,
        'ShipName': 'Victuailles en stock',
        'ShipAddress': '2, rue du Commerce',
        'ShipCity': 'Lyon',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10479,
        'CustomerID': 'RATTC',
        'OrderDate': '1997-03-19T00:00:00.000Z',
        'ShippedDate': '1997-03-21T00:00:00.000Z',
        'Freight': 708.95,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10480,
        'CustomerID': 'FOLIG',
        'OrderDate': '1997-03-20T00:00:00.000Z',
        'ShippedDate': '1997-03-24T00:00:00.000Z',
        'Freight': 1.35,
        'ShipName': 'Folies gourmandes',
        'ShipAddress': '184, chaussée de Tournai',
        'ShipCity': 'Lille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10481,
        'CustomerID': 'RICAR',
        'OrderDate': '1997-03-20T00:00:00.000Z',
        'ShippedDate': '1997-03-25T00:00:00.000Z',
        'Freight': 64.33,
        'ShipName': 'Ricardo Adocicados',
        'ShipAddress': 'Av. Copacabana, 267',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10482,
        'CustomerID': 'LAZYK',
        'OrderDate': '1997-03-21T00:00:00.000Z',
        'ShippedDate': '1997-04-10T00:00:00.000Z',
        'Freight': 7.48,
        'ShipName': 'Lazy K Kountry Store',
        'ShipAddress': '12 Orchestra Terrace',
        'ShipCity': 'Walla Walla',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10483,
        'CustomerID': 'WHITC',
        'OrderDate': '1997-03-24T00:00:00.000Z',
        'ShippedDate': '1997-04-25T00:00:00.000Z',
        'Freight': 15.28,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10484,
        'CustomerID': 'BSBEV',
        'OrderDate': '1997-03-24T00:00:00.000Z',
        'ShippedDate': '1997-04-01T00:00:00.000Z',
        'Freight': 6.88,
        'ShipName': 'B\' Beverages',
        'ShipAddress': 'Fauntleroy Circus',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10485,
        'CustomerID': 'LINOD',
        'OrderDate': '1997-03-25T00:00:00.000Z',
        'ShippedDate': '1997-03-31T00:00:00.000Z',
        'Freight': 64.45,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10486,
        'CustomerID': 'HILAA',
        'OrderDate': '1997-03-26T00:00:00.000Z',
        'ShippedDate': '1997-04-02T00:00:00.000Z',
        'Freight': 30.53,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10487,
        'CustomerID': 'QUEEN',
        'OrderDate': '1997-03-26T00:00:00.000Z',
        'ShippedDate': '1997-03-28T00:00:00.000Z',
        'Freight': 71.07,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10488,
        'CustomerID': 'FRANK',
        'OrderDate': '1997-03-27T00:00:00.000Z',
        'ShippedDate': '1997-04-02T00:00:00.000Z',
        'Freight': 4.93,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10489,
        'CustomerID': 'PICCO',
        'OrderDate': '1997-03-28T00:00:00.000Z',
        'ShippedDate': '1997-04-09T00:00:00.000Z',
        'Freight': 5.29,
        'ShipName': 'Piccolo und mehr',
        'ShipAddress': 'Geislweg 14',
        'ShipCity': 'Salzburg',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10490,
        'CustomerID': 'HILAA',
        'OrderDate': '1997-03-31T00:00:00.000Z',
        'ShippedDate': '1997-04-03T00:00:00.000Z',
        'Freight': 210.19,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10491,
        'CustomerID': 'FURIB',
        'OrderDate': '1997-03-31T00:00:00.000Z',
        'ShippedDate': '1997-04-08T00:00:00.000Z',
        'Freight': 16.96,
        'ShipName': 'Furia Bacalhau e Frutos do Mar',
        'ShipAddress': 'Jardim das rosas n. 32',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10492,
        'CustomerID': 'BOTTM',
        'OrderDate': '1997-04-01T00:00:00.000Z',
        'ShippedDate': '1997-04-11T00:00:00.000Z',
        'Freight': 62.89,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10493,
        'CustomerID': 'LAMAI',
        'OrderDate': '1997-04-02T00:00:00.000Z',
        'ShippedDate': '1997-04-10T00:00:00.000Z',
        'Freight': 10.64,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10494,
        'CustomerID': 'COMMI',
        'OrderDate': '1997-04-02T00:00:00.000Z',
        'ShippedDate': '1997-04-09T00:00:00.000Z',
        'Freight': 65.99,
        'ShipName': 'Comércio Mineiro',
        'ShipAddress': 'Av. dos Lusíadas, 23',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10495,
        'CustomerID': 'LAUGB',
        'OrderDate': '1997-04-03T00:00:00.000Z',
        'ShippedDate': '1997-04-11T00:00:00.000Z',
        'Freight': 4.65,
        'ShipName': 'Laughing Bacchus Wine Cellars',
        'ShipAddress': '2319 Elm St.',
        'ShipCity': 'Vancouver',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10496,
        'CustomerID': 'TRADH',
        'OrderDate': '1997-04-04T00:00:00.000Z',
        'ShippedDate': '1997-04-07T00:00:00.000Z',
        'Freight': 46.77,
        'ShipName': 'Tradiçao Hipermercados',
        'ShipAddress': 'Av. Inês de Castro, 414',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10497,
        'CustomerID': 'LEHMS',
        'OrderDate': '1997-04-04T00:00:00.000Z',
        'ShippedDate': '1997-04-07T00:00:00.000Z',
        'Freight': 36.21,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10498,
        'CustomerID': 'HILAA',
        'OrderDate': '1997-04-07T00:00:00.000Z',
        'ShippedDate': '1997-04-11T00:00:00.000Z',
        'Freight': 29.75,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10499,
        'CustomerID': 'LILAS',
        'OrderDate': '1997-04-08T00:00:00.000Z',
        'ShippedDate': '1997-04-16T00:00:00.000Z',
        'Freight': 102.02,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10500,
        'CustomerID': 'LAMAI',
        'OrderDate': '1997-04-09T00:00:00.000Z',
        'ShippedDate': '1997-04-17T00:00:00.000Z',
        'Freight': 42.68,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10501,
        'CustomerID': 'BLAUS',
        'OrderDate': '1997-04-09T00:00:00.000Z',
        'ShippedDate': '1997-04-16T00:00:00.000Z',
        'Freight': 8.85,
        'ShipName': 'Blauer See Delikatessen',
        'ShipAddress': 'Forsterstr. 57',
        'ShipCity': 'Mannheim',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10502,
        'CustomerID': 'PERIC',
        'OrderDate': '1997-04-10T00:00:00.000Z',
        'ShippedDate': '1997-04-29T00:00:00.000Z',
        'Freight': 69.32,
        'ShipName': 'Pericles Comidas clásicas',
        'ShipAddress': 'Calle Dr. Jorge Cash 321',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10503,
        'CustomerID': 'HUNGO',
        'OrderDate': '1997-04-11T00:00:00.000Z',
        'ShippedDate': '1997-04-16T00:00:00.000Z',
        'Freight': 16.74,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10504,
        'CustomerID': 'WHITC',
        'OrderDate': '1997-04-11T00:00:00.000Z',
        'ShippedDate': '1997-04-18T00:00:00.000Z',
        'Freight': 59.13,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10505,
        'CustomerID': 'MEREP',
        'OrderDate': '1997-04-14T00:00:00.000Z',
        'ShippedDate': '1997-04-21T00:00:00.000Z',
        'Freight': 7.13,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10506,
        'CustomerID': 'KOENE',
        'OrderDate': '1997-04-15T00:00:00.000Z',
        'ShippedDate': '1997-05-02T00:00:00.000Z',
        'Freight': 21.19,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10507,
        'CustomerID': 'ANTON',
        'OrderDate': '1997-04-15T00:00:00.000Z',
        'ShippedDate': '1997-04-22T00:00:00.000Z',
        'Freight': 47.45,
        'ShipName': 'Antonio Moreno Taquería',
        'ShipAddress': 'Mataderos  2312',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10508,
        'CustomerID': 'OTTIK',
        'OrderDate': '1997-04-16T00:00:00.000Z',
        'ShippedDate': '1997-05-13T00:00:00.000Z',
        'Freight': 4.99,
        'ShipName': 'Ottilies Käseladen',
        'ShipAddress': 'Mehrheimerstr. 369',
        'ShipCity': 'Köln',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10509,
        'CustomerID': 'BLAUS',
        'OrderDate': '1997-04-17T00:00:00.000Z',
        'ShippedDate': '1997-04-29T00:00:00.000Z',
        'Freight': 0.15,
        'ShipName': 'Blauer See Delikatessen',
        'ShipAddress': 'Forsterstr. 57',
        'ShipCity': 'Mannheim',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10510,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-04-18T00:00:00.000Z',
        'ShippedDate': '1997-04-28T00:00:00.000Z',
        'Freight': 367.63,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10511,
        'CustomerID': 'BONAP',
        'OrderDate': '1997-04-18T00:00:00.000Z',
        'ShippedDate': '1997-04-21T00:00:00.000Z',
        'Freight': 350.64,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10512,
        'CustomerID': 'FAMIA',
        'OrderDate': '1997-04-21T00:00:00.000Z',
        'ShippedDate': '1997-04-24T00:00:00.000Z',
        'Freight': 3.53,
        'ShipName': 'Familia Arquibaldo',
        'ShipAddress': 'Rua Orós, 92',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10513,
        'CustomerID': 'WANDK',
        'OrderDate': '1997-04-22T00:00:00.000Z',
        'ShippedDate': '1997-04-28T00:00:00.000Z',
        'Freight': 105.65,
        'ShipName': 'Die Wandernde Kuh',
        'ShipAddress': 'Adenauerallee 900',
        'ShipCity': 'Stuttgart',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10514,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-04-22T00:00:00.000Z',
        'ShippedDate': '1997-05-16T00:00:00.000Z',
        'Freight': 789.95,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10515,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-04-23T00:00:00.000Z',
        'ShippedDate': '1997-05-23T00:00:00.000Z',
        'Freight': 204.47,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10516,
        'CustomerID': 'HUNGO',
        'OrderDate': '1997-04-24T00:00:00.000Z',
        'ShippedDate': '1997-05-01T00:00:00.000Z',
        'Freight': 62.78,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10517,
        'CustomerID': 'NORTS',
        'OrderDate': '1997-04-24T00:00:00.000Z',
        'ShippedDate': '1997-04-29T00:00:00.000Z',
        'Freight': 32.07,
        'ShipName': 'North/South',
        'ShipAddress': 'South House 300 Queensbridge',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10518,
        'CustomerID': 'TORTU',
        'OrderDate': '1997-04-25T00:00:00.000Z',
        'ShippedDate': '1997-05-05T00:00:00.000Z',
        'Freight': 218.15,
        'ShipName': 'Tortuga Restaurante',
        'ShipAddress': 'Avda. Azteca 123',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10519,
        'CustomerID': 'CHOPS',
        'OrderDate': '1997-04-28T00:00:00.000Z',
        'ShippedDate': '1997-05-01T00:00:00.000Z',
        'Freight': 91.76,
        'ShipName': 'Chop-suey Chinese',
        'ShipAddress': 'Hauptstr. 31',
        'ShipCity': 'Bern',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10520,
        'CustomerID': 'SANTG',
        'OrderDate': '1997-04-29T00:00:00.000Z',
        'ShippedDate': '1997-05-01T00:00:00.000Z',
        'Freight': 13.37,
        'ShipName': 'Santé Gourmet',
        'ShipAddress': 'Erling Skakkes gate 78',
        'ShipCity': 'Stavern',
        'ShipRegion': null,
        'ShipCountry': 'Norway'
    },

    {
        'OrderID': 10521,
        'CustomerID': 'CACTU',
        'OrderDate': '1997-04-29T00:00:00.000Z',
        'ShippedDate': '1997-05-02T00:00:00.000Z',
        'Freight': 17.22,
        'ShipName': 'Cactus Comidas para llevar',
        'ShipAddress': 'Cerrito 333',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10522,
        'CustomerID': 'LEHMS',
        'OrderDate': '1997-04-30T00:00:00.000Z',
        'ShippedDate': '1997-05-06T00:00:00.000Z',
        'Freight': 45.33,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10523,
        'CustomerID': 'SEVES',
        'OrderDate': '1997-05-01T00:00:00.000Z',
        'ShippedDate': '1997-05-30T00:00:00.000Z',
        'Freight': 77.63,
        'ShipName': 'Seven Seas Imports',
        'ShipAddress': '90 Wadhurst Rd.',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10524,
        'CustomerID': 'BERGS',
        'OrderDate': '1997-05-01T00:00:00.000Z',
        'ShippedDate': '1997-05-07T00:00:00.000Z',
        'Freight': 244.79,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10525,
        'CustomerID': 'BONAP',
        'OrderDate': '1997-05-02T00:00:00.000Z',
        'ShippedDate': '1997-05-23T00:00:00.000Z',
        'Freight': 11.06,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10526,
        'CustomerID': 'WARTH',
        'OrderDate': '1997-05-05T00:00:00.000Z',
        'ShippedDate': '1997-05-15T00:00:00.000Z',
        'Freight': 58.59,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10527,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-05-05T00:00:00.000Z',
        'ShippedDate': '1997-05-07T00:00:00.000Z',
        'Freight': 41.9,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10528,
        'CustomerID': 'GREAL',
        'OrderDate': '1997-05-06T00:00:00.000Z',
        'ShippedDate': '1997-05-09T00:00:00.000Z',
        'Freight': 3.35,
        'ShipName': 'Great Lakes Food Market',
        'ShipAddress': '2732 Baker Blvd.',
        'ShipCity': 'Eugene',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10529,
        'CustomerID': 'MAISD',
        'OrderDate': '1997-05-07T00:00:00.000Z',
        'ShippedDate': '1997-05-09T00:00:00.000Z',
        'Freight': 66.69,
        'ShipName': 'Maison Dewey',
        'ShipAddress': 'Rue Joseph-Bens 532',
        'ShipCity': 'Bruxelles',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10530,
        'CustomerID': 'PICCO',
        'OrderDate': '1997-05-08T00:00:00.000Z',
        'ShippedDate': '1997-05-12T00:00:00.000Z',
        'Freight': 339.22,
        'ShipName': 'Piccolo und mehr',
        'ShipAddress': 'Geislweg 14',
        'ShipCity': 'Salzburg',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10531,
        'CustomerID': 'OCEAN',
        'OrderDate': '1997-05-08T00:00:00.000Z',
        'ShippedDate': '1997-05-19T00:00:00.000Z',
        'Freight': 8.12,
        'ShipName': 'Océano Atlántico Ltda.',
        'ShipAddress': 'Ing. Gustavo Moncada 8585 Piso 20-A',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10532,
        'CustomerID': 'EASTC',
        'OrderDate': '1997-05-09T00:00:00.000Z',
        'ShippedDate': '1997-05-12T00:00:00.000Z',
        'Freight': 74.46,
        'ShipName': 'Eastern Connection',
        'ShipAddress': '35 King George',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10533,
        'CustomerID': 'FOLKO',
        'OrderDate': '1997-05-12T00:00:00.000Z',
        'ShippedDate': '1997-05-22T00:00:00.000Z',
        'Freight': 188.04,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10534,
        'CustomerID': 'LEHMS',
        'OrderDate': '1997-05-12T00:00:00.000Z',
        'ShippedDate': '1997-05-14T00:00:00.000Z',
        'Freight': 27.94,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10535,
        'CustomerID': 'ANTON',
        'OrderDate': '1997-05-13T00:00:00.000Z',
        'ShippedDate': '1997-05-21T00:00:00.000Z',
        'Freight': 15.64,
        'ShipName': 'Antonio Moreno Taquería',
        'ShipAddress': 'Mataderos  2312',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10536,
        'CustomerID': 'LEHMS',
        'OrderDate': '1997-05-14T00:00:00.000Z',
        'ShippedDate': '1997-06-06T00:00:00.000Z',
        'Freight': 58.88,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10537,
        'CustomerID': 'RICSU',
        'OrderDate': '1997-05-14T00:00:00.000Z',
        'ShippedDate': '1997-05-19T00:00:00.000Z',
        'Freight': 78.85,
        'ShipName': 'Richter Supermarkt',
        'ShipAddress': 'Starenweg 5',
        'ShipCity': 'Genève',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10538,
        'CustomerID': 'BSBEV',
        'OrderDate': '1997-05-15T00:00:00.000Z',
        'ShippedDate': '1997-05-16T00:00:00.000Z',
        'Freight': 4.87,
        'ShipName': 'B\' Beverages',
        'ShipAddress': 'Fauntleroy Circus',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10539,
        'CustomerID': 'BSBEV',
        'OrderDate': '1997-05-16T00:00:00.000Z',
        'ShippedDate': '1997-05-23T00:00:00.000Z',
        'Freight': 12.36,
        'ShipName': 'B\' Beverages',
        'ShipAddress': 'Fauntleroy Circus',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10540,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-05-19T00:00:00.000Z',
        'ShippedDate': '1997-06-13T00:00:00.000Z',
        'Freight': 1007.64,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10541,
        'CustomerID': 'HANAR',
        'OrderDate': '1997-05-19T00:00:00.000Z',
        'ShippedDate': '1997-05-29T00:00:00.000Z',
        'Freight': 68.65,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10542,
        'CustomerID': 'KOENE',
        'OrderDate': '1997-05-20T00:00:00.000Z',
        'ShippedDate': '1997-05-26T00:00:00.000Z',
        'Freight': 10.95,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10543,
        'CustomerID': 'LILAS',
        'OrderDate': '1997-05-21T00:00:00.000Z',
        'ShippedDate': '1997-05-23T00:00:00.000Z',
        'Freight': 48.17,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10544,
        'CustomerID': 'LONEP',
        'OrderDate': '1997-05-21T00:00:00.000Z',
        'ShippedDate': '1997-05-30T00:00:00.000Z',
        'Freight': 24.91,
        'ShipName': 'Lonesome Pine Restaurant',
        'ShipAddress': '89 Chiaroscuro Rd.',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10545,
        'CustomerID': 'LAZYK',
        'OrderDate': '1997-05-22T00:00:00.000Z',
        'ShippedDate': '1997-06-26T00:00:00.000Z',
        'Freight': 11.92,
        'ShipName': 'Lazy K Kountry Store',
        'ShipAddress': '12 Orchestra Terrace',
        'ShipCity': 'Walla Walla',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10546,
        'CustomerID': 'VICTE',
        'OrderDate': '1997-05-23T00:00:00.000Z',
        'ShippedDate': '1997-05-27T00:00:00.000Z',
        'Freight': 194.72,
        'ShipName': 'Victuailles en stock',
        'ShipAddress': '2, rue du Commerce',
        'ShipCity': 'Lyon',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10547,
        'CustomerID': 'SEVES',
        'OrderDate': '1997-05-23T00:00:00.000Z',
        'ShippedDate': '1997-06-02T00:00:00.000Z',
        'Freight': 178.43,
        'ShipName': 'Seven Seas Imports',
        'ShipAddress': '90 Wadhurst Rd.',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10548,
        'CustomerID': 'TOMSP',
        'OrderDate': '1997-05-26T00:00:00.000Z',
        'ShippedDate': '1997-06-02T00:00:00.000Z',
        'Freight': 1.43,
        'ShipName': 'Toms Spezialitäten',
        'ShipAddress': 'Luisenstr. 48',
        'ShipCity': 'Münster',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10549,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-05-27T00:00:00.000Z',
        'ShippedDate': '1997-05-30T00:00:00.000Z',
        'Freight': 171.24,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10550,
        'CustomerID': 'GODOS',
        'OrderDate': '1997-05-28T00:00:00.000Z',
        'ShippedDate': '1997-06-06T00:00:00.000Z',
        'Freight': 4.32,
        'ShipName': 'Godos Cocina Típica',
        'ShipAddress': 'C/ Romero, 33',
        'ShipCity': 'Sevilla',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10551,
        'CustomerID': 'FURIB',
        'OrderDate': '1997-05-28T00:00:00.000Z',
        'ShippedDate': '1997-06-06T00:00:00.000Z',
        'Freight': 72.95,
        'ShipName': 'Furia Bacalhau e Frutos do Mar',
        'ShipAddress': 'Jardim das rosas n. 32',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10552,
        'CustomerID': 'HILAA',
        'OrderDate': '1997-05-29T00:00:00.000Z',
        'ShippedDate': '1997-06-05T00:00:00.000Z',
        'Freight': 83.22,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10553,
        'CustomerID': 'WARTH',
        'OrderDate': '1997-05-30T00:00:00.000Z',
        'ShippedDate': '1997-06-03T00:00:00.000Z',
        'Freight': 149.49,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10554,
        'CustomerID': 'OTTIK',
        'OrderDate': '1997-05-30T00:00:00.000Z',
        'ShippedDate': '1997-06-05T00:00:00.000Z',
        'Freight': 120.97,
        'ShipName': 'Ottilies Käseladen',
        'ShipAddress': 'Mehrheimerstr. 369',
        'ShipCity': 'Köln',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10555,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-06-02T00:00:00.000Z',
        'ShippedDate': '1997-06-04T00:00:00.000Z',
        'Freight': 252.49,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10556,
        'CustomerID': 'SIMOB',
        'OrderDate': '1997-06-03T00:00:00.000Z',
        'ShippedDate': '1997-06-13T00:00:00.000Z',
        'Freight': 9.8,
        'ShipName': 'Simons bistro',
        'ShipAddress': 'Vinbæltet 34',
        'ShipCity': 'Kobenhavn',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10557,
        'CustomerID': 'LEHMS',
        'OrderDate': '1997-06-03T00:00:00.000Z',
        'ShippedDate': '1997-06-06T00:00:00.000Z',
        'Freight': 96.72,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10558,
        'CustomerID': 'AROUT',
        'OrderDate': '1997-06-04T00:00:00.000Z',
        'ShippedDate': '1997-06-10T00:00:00.000Z',
        'Freight': 72.97,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10559,
        'CustomerID': 'BLONP',
        'OrderDate': '1997-06-05T00:00:00.000Z',
        'ShippedDate': '1997-06-13T00:00:00.000Z',
        'Freight': 8.05,
        'ShipName': 'Blondel père et fils',
        'ShipAddress': '24, place Kléber',
        'ShipCity': 'Strasbourg',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10560,
        'CustomerID': 'FRANK',
        'OrderDate': '1997-06-06T00:00:00.000Z',
        'ShippedDate': '1997-06-09T00:00:00.000Z',
        'Freight': 36.65,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10561,
        'CustomerID': 'FOLKO',
        'OrderDate': '1997-06-06T00:00:00.000Z',
        'ShippedDate': '1997-06-09T00:00:00.000Z',
        'Freight': 242.21,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10562,
        'CustomerID': 'REGGC',
        'OrderDate': '1997-06-09T00:00:00.000Z',
        'ShippedDate': '1997-06-12T00:00:00.000Z',
        'Freight': 22.95,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10563,
        'CustomerID': 'RICAR',
        'OrderDate': '1997-06-10T00:00:00.000Z',
        'ShippedDate': '1997-06-24T00:00:00.000Z',
        'Freight': 60.43,
        'ShipName': 'Ricardo Adocicados',
        'ShipAddress': 'Av. Copacabana, 267',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10564,
        'CustomerID': 'RATTC',
        'OrderDate': '1997-06-10T00:00:00.000Z',
        'ShippedDate': '1997-06-16T00:00:00.000Z',
        'Freight': 13.75,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10565,
        'CustomerID': 'MEREP',
        'OrderDate': '1997-06-11T00:00:00.000Z',
        'ShippedDate': '1997-06-18T00:00:00.000Z',
        'Freight': 7.15,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10566,
        'CustomerID': 'BLONP',
        'OrderDate': '1997-06-12T00:00:00.000Z',
        'ShippedDate': '1997-06-18T00:00:00.000Z',
        'Freight': 88.4,
        'ShipName': 'Blondel père et fils',
        'ShipAddress': '24, place Kléber',
        'ShipCity': 'Strasbourg',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10567,
        'CustomerID': 'HUNGO',
        'OrderDate': '1997-06-12T00:00:00.000Z',
        'ShippedDate': '1997-06-17T00:00:00.000Z',
        'Freight': 33.97,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10568,
        'CustomerID': 'GALED',
        'OrderDate': '1997-06-13T00:00:00.000Z',
        'ShippedDate': '1997-07-09T00:00:00.000Z',
        'Freight': 6.54,
        'ShipName': 'Galería del gastronómo',
        'ShipAddress': 'Rambla de Cataluña, 23',
        'ShipCity': 'Barcelona',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10569,
        'CustomerID': 'RATTC',
        'OrderDate': '1997-06-16T00:00:00.000Z',
        'ShippedDate': '1997-07-11T00:00:00.000Z',
        'Freight': 58.98,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10570,
        'CustomerID': 'MEREP',
        'OrderDate': '1997-06-17T00:00:00.000Z',
        'ShippedDate': '1997-06-19T00:00:00.000Z',
        'Freight': 188.99,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10571,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-06-17T00:00:00.000Z',
        'ShippedDate': '1997-07-04T00:00:00.000Z',
        'Freight': 26.06,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10572,
        'CustomerID': 'BERGS',
        'OrderDate': '1997-06-18T00:00:00.000Z',
        'ShippedDate': '1997-06-25T00:00:00.000Z',
        'Freight': 116.43,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10573,
        'CustomerID': 'ANTON',
        'OrderDate': '1997-06-19T00:00:00.000Z',
        'ShippedDate': '1997-06-20T00:00:00.000Z',
        'Freight': 84.84,
        'ShipName': 'Antonio Moreno Taquería',
        'ShipAddress': 'Mataderos  2312',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10574,
        'CustomerID': 'TRAIH',
        'OrderDate': '1997-06-19T00:00:00.000Z',
        'ShippedDate': '1997-06-30T00:00:00.000Z',
        'Freight': 37.6,
        'ShipName': 'Trail\' Head Gourmet Provisioners',
        'ShipAddress': '722 DaVinci Blvd.',
        'ShipCity': 'Kirkland',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10575,
        'CustomerID': 'MORGK',
        'OrderDate': '1997-06-20T00:00:00.000Z',
        'ShippedDate': '1997-06-30T00:00:00.000Z',
        'Freight': 127.34,
        'ShipName': 'Morgenstern Gesundkost',
        'ShipAddress': 'Heerstr. 22',
        'ShipCity': 'Leipzig',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10576,
        'CustomerID': 'TORTU',
        'OrderDate': '1997-06-23T00:00:00.000Z',
        'ShippedDate': '1997-06-30T00:00:00.000Z',
        'Freight': 18.56,
        'ShipName': 'Tortuga Restaurante',
        'ShipAddress': 'Avda. Azteca 123',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10577,
        'CustomerID': 'TRAIH',
        'OrderDate': '1997-06-23T00:00:00.000Z',
        'ShippedDate': '1997-06-30T00:00:00.000Z',
        'Freight': 25.41,
        'ShipName': 'Trail\' Head Gourmet Provisioners',
        'ShipAddress': '722 DaVinci Blvd.',
        'ShipCity': 'Kirkland',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10578,
        'CustomerID': 'BSBEV',
        'OrderDate': '1997-06-24T00:00:00.000Z',
        'ShippedDate': '1997-07-25T00:00:00.000Z',
        'Freight': 29.6,
        'ShipName': 'B\' Beverages',
        'ShipAddress': 'Fauntleroy Circus',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10579,
        'CustomerID': 'LETSS',
        'OrderDate': '1997-06-25T00:00:00.000Z',
        'ShippedDate': '1997-07-04T00:00:00.000Z',
        'Freight': 13.73,
        'ShipName': 'Let\' Stop N Shop',
        'ShipAddress': '87 Polk St. Suite 5',
        'ShipCity': 'San Francisco',
        'ShipRegion': 'CA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10580,
        'CustomerID': 'OTTIK',
        'OrderDate': '1997-06-26T00:00:00.000Z',
        'ShippedDate': '1997-07-01T00:00:00.000Z',
        'Freight': 75.89,
        'ShipName': 'Ottilies Käseladen',
        'ShipAddress': 'Mehrheimerstr. 369',
        'ShipCity': 'Köln',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10581,
        'CustomerID': 'FAMIA',
        'OrderDate': '1997-06-26T00:00:00.000Z',
        'ShippedDate': '1997-07-02T00:00:00.000Z',
        'Freight': 3.01,
        'ShipName': 'Familia Arquibaldo',
        'ShipAddress': 'Rua Orós, 92',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10582,
        'CustomerID': 'BLAUS',
        'OrderDate': '1997-06-27T00:00:00.000Z',
        'ShippedDate': '1997-07-14T00:00:00.000Z',
        'Freight': 27.71,
        'ShipName': 'Blauer See Delikatessen',
        'ShipAddress': 'Forsterstr. 57',
        'ShipCity': 'Mannheim',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10583,
        'CustomerID': 'WARTH',
        'OrderDate': '1997-06-30T00:00:00.000Z',
        'ShippedDate': '1997-07-04T00:00:00.000Z',
        'Freight': 7.28,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10584,
        'CustomerID': 'BLONP',
        'OrderDate': '1997-06-30T00:00:00.000Z',
        'ShippedDate': '1997-07-04T00:00:00.000Z',
        'Freight': 59.14,
        'ShipName': 'Blondel père et fils',
        'ShipAddress': '24, place Kléber',
        'ShipCity': 'Strasbourg',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10585,
        'CustomerID': 'WELLI',
        'OrderDate': '1997-07-01T00:00:00.000Z',
        'ShippedDate': '1997-07-10T00:00:00.000Z',
        'Freight': 13.41,
        'ShipName': 'Wellington Importadora',
        'ShipAddress': 'Rua do Mercado, 12',
        'ShipCity': 'Resende',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10586,
        'CustomerID': 'REGGC',
        'OrderDate': '1997-07-02T00:00:00.000Z',
        'ShippedDate': '1997-07-09T00:00:00.000Z',
        'Freight': 0.48,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10587,
        'CustomerID': 'QUEDE',
        'OrderDate': '1997-07-02T00:00:00.000Z',
        'ShippedDate': '1997-07-09T00:00:00.000Z',
        'Freight': 62.52,
        'ShipName': 'Que Delícia',
        'ShipAddress': 'Rua da Panificadora, 12',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10588,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-07-03T00:00:00.000Z',
        'ShippedDate': '1997-07-10T00:00:00.000Z',
        'Freight': 194.67,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10589,
        'CustomerID': 'GREAL',
        'OrderDate': '1997-07-04T00:00:00.000Z',
        'ShippedDate': '1997-07-14T00:00:00.000Z',
        'Freight': 4.42,
        'ShipName': 'Great Lakes Food Market',
        'ShipAddress': '2732 Baker Blvd.',
        'ShipCity': 'Eugene',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10590,
        'CustomerID': 'MEREP',
        'OrderDate': '1997-07-07T00:00:00.000Z',
        'ShippedDate': '1997-07-14T00:00:00.000Z',
        'Freight': 44.77,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10591,
        'CustomerID': 'VAFFE',
        'OrderDate': '1997-07-07T00:00:00.000Z',
        'ShippedDate': '1997-07-16T00:00:00.000Z',
        'Freight': 55.92,
        'ShipName': 'Vaffeljernet',
        'ShipAddress': 'Smagsloget 45',
        'ShipCity': 'Århus',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10592,
        'CustomerID': 'LEHMS',
        'OrderDate': '1997-07-08T00:00:00.000Z',
        'ShippedDate': '1997-07-16T00:00:00.000Z',
        'Freight': 32.1,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10593,
        'CustomerID': 'LEHMS',
        'OrderDate': '1997-07-09T00:00:00.000Z',
        'ShippedDate': '1997-08-13T00:00:00.000Z',
        'Freight': 174.2,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10594,
        'CustomerID': 'OLDWO',
        'OrderDate': '1997-07-09T00:00:00.000Z',
        'ShippedDate': '1997-07-16T00:00:00.000Z',
        'Freight': 5.24,
        'ShipName': 'Old World Delicatessen',
        'ShipAddress': '2743 Bering St.',
        'ShipCity': 'Anchorage',
        'ShipRegion': 'AK',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10595,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-07-10T00:00:00.000Z',
        'ShippedDate': '1997-07-14T00:00:00.000Z',
        'Freight': 96.78,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10596,
        'CustomerID': 'WHITC',
        'OrderDate': '1997-07-11T00:00:00.000Z',
        'ShippedDate': '1997-08-12T00:00:00.000Z',
        'Freight': 16.34,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10597,
        'CustomerID': 'PICCO',
        'OrderDate': '1997-07-11T00:00:00.000Z',
        'ShippedDate': '1997-07-18T00:00:00.000Z',
        'Freight': 35.12,
        'ShipName': 'Piccolo und mehr',
        'ShipAddress': 'Geislweg 14',
        'ShipCity': 'Salzburg',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10598,
        'CustomerID': 'RATTC',
        'OrderDate': '1997-07-14T00:00:00.000Z',
        'ShippedDate': '1997-07-18T00:00:00.000Z',
        'Freight': 44.42,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10599,
        'CustomerID': 'BSBEV',
        'OrderDate': '1997-07-15T00:00:00.000Z',
        'ShippedDate': '1997-07-21T00:00:00.000Z',
        'Freight': 29.98,
        'ShipName': 'B Beverages',
        'ShipAddress': 'Fauntleroy Circus',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10600,
        'CustomerID': 'HUNGC',
        'OrderDate': '1997-07-16T00:00:00.000Z',
        'ShippedDate': '1997-07-21T00:00:00.000Z',
        'Freight': 45.13,
        'ShipName': 'Hungry Coyote Import Store',
        'ShipAddress': 'City Center Plaza 516 Main St.',
        'ShipCity': 'Elgin',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10601,
        'CustomerID': 'HILAA',
        'OrderDate': '1997-07-16T00:00:00.000Z',
        'ShippedDate': '1997-07-22T00:00:00.000Z',
        'Freight': 58.3,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10602,
        'CustomerID': 'VAFFE',
        'OrderDate': '1997-07-17T00:00:00.000Z',
        'ShippedDate': '1997-07-22T00:00:00.000Z',
        'Freight': 2.92,
        'ShipName': 'Vaffeljernet',
        'ShipAddress': 'Smagsloget 45',
        'ShipCity': 'Århus',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10603,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-07-18T00:00:00.000Z',
        'ShippedDate': '1997-08-08T00:00:00.000Z',
        'Freight': 48.77,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10604,
        'CustomerID': 'FURIB',
        'OrderDate': '1997-07-18T00:00:00.000Z',
        'ShippedDate': '1997-07-29T00:00:00.000Z',
        'Freight': 7.46,
        'ShipName': 'Furia Bacalhau e Frutos do Mar',
        'ShipAddress': 'Jardim das rosas n. 32',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10605,
        'CustomerID': 'MEREP',
        'OrderDate': '1997-07-21T00:00:00.000Z',
        'ShippedDate': '1997-07-29T00:00:00.000Z',
        'Freight': 379.13,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10606,
        'CustomerID': 'TRADH',
        'OrderDate': '1997-07-22T00:00:00.000Z',
        'ShippedDate': '1997-07-31T00:00:00.000Z',
        'Freight': 79.4,
        'ShipName': 'Tradiçao Hipermercados',
        'ShipAddress': 'Av. Inês de Castro, 414',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10607,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-07-22T00:00:00.000Z',
        'ShippedDate': '1997-07-25T00:00:00.000Z',
        'Freight': 200.24,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10608,
        'CustomerID': 'TOMSP',
        'OrderDate': '1997-07-23T00:00:00.000Z',
        'ShippedDate': '1997-08-01T00:00:00.000Z',
        'Freight': 27.79,
        'ShipName': 'Toms Spezialitäten',
        'ShipAddress': 'Luisenstr. 48',
        'ShipCity': 'Münster',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10609,
        'CustomerID': 'DUMON',
        'OrderDate': '1997-07-24T00:00:00.000Z',
        'ShippedDate': '1997-07-30T00:00:00.000Z',
        'Freight': 1.85,
        'ShipName': 'Du monde entier',
        'ShipAddress': '67, rue des Cinquante Otages',
        'ShipCity': 'Nantes',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10610,
        'CustomerID': 'LAMAI',
        'OrderDate': '1997-07-25T00:00:00.000Z',
        'ShippedDate': '1997-08-06T00:00:00.000Z',
        'Freight': 26.78,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10611,
        'CustomerID': 'WOLZA',
        'OrderDate': '1997-07-25T00:00:00.000Z',
        'ShippedDate': '1997-08-01T00:00:00.000Z',
        'Freight': 80.65,
        'ShipName': 'Wolski Zajazd',
        'ShipAddress': 'ul. Filtrowa 68',
        'ShipCity': 'Warszawa',
        'ShipRegion': null,
        'ShipCountry': 'Poland'
    },

    {
        'OrderID': 10612,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-07-28T00:00:00.000Z',
        'ShippedDate': '1997-08-01T00:00:00.000Z',
        'Freight': 544.08,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10613,
        'CustomerID': 'HILAA',
        'OrderDate': '1997-07-29T00:00:00.000Z',
        'ShippedDate': '1997-08-01T00:00:00.000Z',
        'Freight': 8.11,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10614,
        'CustomerID': 'BLAUS',
        'OrderDate': '1997-07-29T00:00:00.000Z',
        'ShippedDate': '1997-08-01T00:00:00.000Z',
        'Freight': 1.93,
        'ShipName': 'Blauer See Delikatessen',
        'ShipAddress': 'Forsterstr. 57',
        'ShipCity': 'Mannheim',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10615,
        'CustomerID': 'WILMK',
        'OrderDate': '1997-07-30T00:00:00.000Z',
        'ShippedDate': '1997-08-06T00:00:00.000Z',
        'Freight': 0.75,
        'ShipName': 'Wilman Kala',
        'ShipAddress': 'Keskuskatu 45',
        'ShipCity': 'Helsinki',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10616,
        'CustomerID': 'GREAL',
        'OrderDate': '1997-07-31T00:00:00.000Z',
        'ShippedDate': '1997-08-05T00:00:00.000Z',
        'Freight': 116.53,
        'ShipName': 'Great Lakes Food Market',
        'ShipAddress': '2732 Baker Blvd.',
        'ShipCity': 'Eugene',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10617,
        'CustomerID': 'GREAL',
        'OrderDate': '1997-07-31T00:00:00.000Z',
        'ShippedDate': '1997-08-04T00:00:00.000Z',
        'Freight': 18.53,
        'ShipName': 'Great Lakes Food Market',
        'ShipAddress': '2732 Baker Blvd.',
        'ShipCity': 'Eugene',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10618,
        'CustomerID': 'MEREP',
        'OrderDate': '1997-08-01T00:00:00.000Z',
        'ShippedDate': '1997-08-08T00:00:00.000Z',
        'Freight': 154.68,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10619,
        'CustomerID': 'MEREP',
        'OrderDate': '1997-08-04T00:00:00.000Z',
        'ShippedDate': '1997-08-07T00:00:00.000Z',
        'Freight': 91.05,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10620,
        'CustomerID': 'LAUGB',
        'OrderDate': '1997-08-05T00:00:00.000Z',
        'ShippedDate': '1997-08-14T00:00:00.000Z',
        'Freight': 0.94,
        'ShipName': 'Laughing Bacchus Wine Cellars',
        'ShipAddress': '2319 Elm St.',
        'ShipCity': 'Vancouver',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10621,
        'CustomerID': 'ISLAT',
        'OrderDate': '1997-08-05T00:00:00.000Z',
        'ShippedDate': '1997-08-11T00:00:00.000Z',
        'Freight': 23.73,
        'ShipName': 'Island Trading',
        'ShipAddress': 'Garden House Crowther Way',
        'ShipCity': 'Cowes',
        'ShipRegion': 'Isle of Wight',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10622,
        'CustomerID': 'RICAR',
        'OrderDate': '1997-08-06T00:00:00.000Z',
        'ShippedDate': '1997-08-11T00:00:00.000Z',
        'Freight': 50.97,
        'ShipName': 'Ricardo Adocicados',
        'ShipAddress': 'Av. Copacabana, 267',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10623,
        'CustomerID': 'FRANK',
        'OrderDate': '1997-08-07T00:00:00.000Z',
        'ShippedDate': '1997-08-12T00:00:00.000Z',
        'Freight': 97.18,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10624,
        'CustomerID': 'THECR',
        'OrderDate': '1997-08-07T00:00:00.000Z',
        'ShippedDate': '1997-08-19T00:00:00.000Z',
        'Freight': 94.8,
        'ShipName': 'The Cracker Box',
        'ShipAddress': '55 Grizzly Peak Rd.',
        'ShipCity': 'Butte',
        'ShipRegion': 'MT',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10625,
        'CustomerID': 'ANATR',
        'OrderDate': '1997-08-08T00:00:00.000Z',
        'ShippedDate': '1997-08-14T00:00:00.000Z',
        'Freight': 43.9,
        'ShipName': 'Ana Trujillo Emparedados y helados',
        'ShipAddress': 'Avda. de la Constitución 2222',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10626,
        'CustomerID': 'BERGS',
        'OrderDate': '1997-08-11T00:00:00.000Z',
        'ShippedDate': '1997-08-20T00:00:00.000Z',
        'Freight': 138.69,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10627,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-08-11T00:00:00.000Z',
        'ShippedDate': '1997-08-21T00:00:00.000Z',
        'Freight': 107.46,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10628,
        'CustomerID': 'BLONP',
        'OrderDate': '1997-08-12T00:00:00.000Z',
        'ShippedDate': '1997-08-20T00:00:00.000Z',
        'Freight': 30.36,
        'ShipName': 'Blondel père et fils',
        'ShipAddress': '24, place Kléber',
        'ShipCity': 'Strasbourg',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10629,
        'CustomerID': 'GODOS',
        'OrderDate': '1997-08-12T00:00:00.000Z',
        'ShippedDate': '1997-08-20T00:00:00.000Z',
        'Freight': 85.46,
        'ShipName': 'Godos Cocina Típica',
        'ShipAddress': 'C/ Romero, 33',
        'ShipCity': 'Sevilla',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10630,
        'CustomerID': 'KOENE',
        'OrderDate': '1997-08-13T00:00:00.000Z',
        'ShippedDate': '1997-08-19T00:00:00.000Z',
        'Freight': 32.35,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10631,
        'CustomerID': 'LAMAI',
        'OrderDate': '1997-08-14T00:00:00.000Z',
        'ShippedDate': '1997-08-15T00:00:00.000Z',
        'Freight': 0.87,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10632,
        'CustomerID': 'WANDK',
        'OrderDate': '1997-08-14T00:00:00.000Z',
        'ShippedDate': '1997-08-19T00:00:00.000Z',
        'Freight': 41.38,
        'ShipName': 'Die Wandernde Kuh',
        'ShipAddress': 'Adenauerallee 900',
        'ShipCity': 'Stuttgart',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10633,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-08-15T00:00:00.000Z',
        'ShippedDate': '1997-08-18T00:00:00.000Z',
        'Freight': 477.9,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10634,
        'CustomerID': 'FOLIG',
        'OrderDate': '1997-08-15T00:00:00.000Z',
        'ShippedDate': '1997-08-21T00:00:00.000Z',
        'Freight': 487.38,
        'ShipName': 'Folies gourmandes',
        'ShipAddress': '184, chaussée de Tournai',
        'ShipCity': 'Lille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10635,
        'CustomerID': 'MAGAA',
        'OrderDate': '1997-08-18T00:00:00.000Z',
        'ShippedDate': '1997-08-21T00:00:00.000Z',
        'Freight': 47.46,
        'ShipName': 'Magazzini Alimentari Riuniti',
        'ShipAddress': 'Via Ludovico il Moro 22',
        'ShipCity': 'Bergamo',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10636,
        'CustomerID': 'WARTH',
        'OrderDate': '1997-08-19T00:00:00.000Z',
        'ShippedDate': '1997-08-26T00:00:00.000Z',
        'Freight': 1.15,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10637,
        'CustomerID': 'QUEEN',
        'OrderDate': '1997-08-19T00:00:00.000Z',
        'ShippedDate': '1997-08-26T00:00:00.000Z',
        'Freight': 201.29,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10638,
        'CustomerID': 'LINOD',
        'OrderDate': '1997-08-20T00:00:00.000Z',
        'ShippedDate': '1997-09-01T00:00:00.000Z',
        'Freight': 158.44,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10639,
        'CustomerID': 'SANTG',
        'OrderDate': '1997-08-20T00:00:00.000Z',
        'ShippedDate': '1997-08-27T00:00:00.000Z',
        'Freight': 38.64,
        'ShipName': 'Santé Gourmet',
        'ShipAddress': 'Erling Skakkes gate 78',
        'ShipCity': 'Stavern',
        'ShipRegion': null,
        'ShipCountry': 'Norway'
    },

    {
        'OrderID': 10640,
        'CustomerID': 'WANDK',
        'OrderDate': '1997-08-21T00:00:00.000Z',
        'ShippedDate': '1997-08-28T00:00:00.000Z',
        'Freight': 23.55,
        'ShipName': 'Die Wandernde Kuh',
        'ShipAddress': 'Adenauerallee 900',
        'ShipCity': 'Stuttgart',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10641,
        'CustomerID': 'HILAA',
        'OrderDate': '1997-08-22T00:00:00.000Z',
        'ShippedDate': '1997-08-26T00:00:00.000Z',
        'Freight': 179.61,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10642,
        'CustomerID': 'SIMOB',
        'OrderDate': '1997-08-22T00:00:00.000Z',
        'ShippedDate': '1997-09-05T00:00:00.000Z',
        'Freight': 41.89,
        'ShipName': 'Simons bistro',
        'ShipAddress': 'Vinbæltet 34',
        'ShipCity': 'Kobenhavn',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10643,
        'CustomerID': 'ALFKI',
        'OrderDate': '1997-08-25T00:00:00.000Z',
        'ShippedDate': '1997-09-02T00:00:00.000Z',
        'Freight': 29.46,
        'ShipName': 'Alfreds Futterkiste',
        'ShipAddress': 'Obere Str. 57',
        'ShipCity': 'Berlin',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10644,
        'CustomerID': 'WELLI',
        'OrderDate': '1997-08-25T00:00:00.000Z',
        'ShippedDate': '1997-09-01T00:00:00.000Z',
        'Freight': 0.14,
        'ShipName': 'Wellington Importadora',
        'ShipAddress': 'Rua do Mercado, 12',
        'ShipCity': 'Resende',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10645,
        'CustomerID': 'HANAR',
        'OrderDate': '1997-08-26T00:00:00.000Z',
        'ShippedDate': '1997-09-02T00:00:00.000Z',
        'Freight': 12.41,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10646,
        'CustomerID': 'HUNGO',
        'OrderDate': '1997-08-27T00:00:00.000Z',
        'ShippedDate': '1997-09-03T00:00:00.000Z',
        'Freight': 142.33,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10647,
        'CustomerID': 'QUEDE',
        'OrderDate': '1997-08-27T00:00:00.000Z',
        'ShippedDate': '1997-09-03T00:00:00.000Z',
        'Freight': 45.54,
        'ShipName': 'Que Delícia',
        'ShipAddress': 'Rua da Panificadora, 12',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10648,
        'CustomerID': 'RICAR',
        'OrderDate': '1997-08-28T00:00:00.000Z',
        'ShippedDate': '1997-09-09T00:00:00.000Z',
        'Freight': 14.25,
        'ShipName': 'Ricardo Adocicados',
        'ShipAddress': 'Av. Copacabana, 267',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10649,
        'CustomerID': 'MAISD',
        'OrderDate': '1997-08-28T00:00:00.000Z',
        'ShippedDate': '1997-08-29T00:00:00.000Z',
        'Freight': 6.2,
        'ShipName': 'Maison Dewey',
        'ShipAddress': 'Rue Joseph-Bens 532',
        'ShipCity': 'Bruxelles',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10650,
        'CustomerID': 'FAMIA',
        'OrderDate': '1997-08-29T00:00:00.000Z',
        'ShippedDate': '1997-09-03T00:00:00.000Z',
        'Freight': 176.81,
        'ShipName': 'Familia Arquibaldo',
        'ShipAddress': 'Rua Orós, 92',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10651,
        'CustomerID': 'WANDK',
        'OrderDate': '1997-09-01T00:00:00.000Z',
        'ShippedDate': '1997-09-11T00:00:00.000Z',
        'Freight': 20.6,
        'ShipName': 'Die Wandernde Kuh',
        'ShipAddress': 'Adenauerallee 900',
        'ShipCity': 'Stuttgart',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10652,
        'CustomerID': 'GOURL',
        'OrderDate': '1997-09-01T00:00:00.000Z',
        'ShippedDate': '1997-09-08T00:00:00.000Z',
        'Freight': 7.14,
        'ShipName': 'Gourmet Lanchonetes',
        'ShipAddress': 'Av. Brasil, 442',
        'ShipCity': 'Campinas',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10653,
        'CustomerID': 'FRANK',
        'OrderDate': '1997-09-02T00:00:00.000Z',
        'ShippedDate': '1997-09-19T00:00:00.000Z',
        'Freight': 93.25,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10654,
        'CustomerID': 'BERGS',
        'OrderDate': '1997-09-02T00:00:00.000Z',
        'ShippedDate': '1997-09-11T00:00:00.000Z',
        'Freight': 55.26,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10655,
        'CustomerID': 'REGGC',
        'OrderDate': '1997-09-03T00:00:00.000Z',
        'ShippedDate': '1997-09-11T00:00:00.000Z',
        'Freight': 4.41,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10656,
        'CustomerID': 'GREAL',
        'OrderDate': '1997-09-04T00:00:00.000Z',
        'ShippedDate': '1997-09-10T00:00:00.000Z',
        'Freight': 57.15,
        'ShipName': 'Great Lakes Food Market',
        'ShipAddress': '2732 Baker Blvd.',
        'ShipCity': 'Eugene',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10657,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-09-04T00:00:00.000Z',
        'ShippedDate': '1997-09-15T00:00:00.000Z',
        'Freight': 352.69,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10658,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-09-05T00:00:00.000Z',
        'ShippedDate': '1997-09-08T00:00:00.000Z',
        'Freight': 364.15,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10659,
        'CustomerID': 'QUEEN',
        'OrderDate': '1997-09-05T00:00:00.000Z',
        'ShippedDate': '1997-09-10T00:00:00.000Z',
        'Freight': 105.81,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10660,
        'CustomerID': 'HUNGC',
        'OrderDate': '1997-09-08T00:00:00.000Z',
        'ShippedDate': '1997-10-15T00:00:00.000Z',
        'Freight': 111.29,
        'ShipName': 'Hungry Coyote Import Store',
        'ShipAddress': 'City Center Plaza 516 Main St.',
        'ShipCity': 'Elgin',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10661,
        'CustomerID': 'HUNGO',
        'OrderDate': '1997-09-09T00:00:00.000Z',
        'ShippedDate': '1997-09-15T00:00:00.000Z',
        'Freight': 17.55,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10662,
        'CustomerID': 'LONEP',
        'OrderDate': '1997-09-09T00:00:00.000Z',
        'ShippedDate': '1997-09-18T00:00:00.000Z',
        'Freight': 1.28,
        'ShipName': 'Lonesome Pine Restaurant',
        'ShipAddress': '89 Chiaroscuro Rd.',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10663,
        'CustomerID': 'BONAP',
        'OrderDate': '1997-09-10T00:00:00.000Z',
        'ShippedDate': '1997-10-03T00:00:00.000Z',
        'Freight': 113.15,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10664,
        'CustomerID': 'FURIB',
        'OrderDate': '1997-09-10T00:00:00.000Z',
        'ShippedDate': '1997-09-19T00:00:00.000Z',
        'Freight': 1.27,
        'ShipName': 'Furia Bacalhau e Frutos do Mar',
        'ShipAddress': 'Jardim das rosas n. 32',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10665,
        'CustomerID': 'LONEP',
        'OrderDate': '1997-09-11T00:00:00.000Z',
        'ShippedDate': '1997-09-17T00:00:00.000Z',
        'Freight': 26.31,
        'ShipName': 'Lonesome Pine Restaurant',
        'ShipAddress': '89 Chiaroscuro Rd.',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10666,
        'CustomerID': 'RICSU',
        'OrderDate': '1997-09-12T00:00:00.000Z',
        'ShippedDate': '1997-09-22T00:00:00.000Z',
        'Freight': 232.42,
        'ShipName': 'Richter Supermarkt',
        'ShipAddress': 'Starenweg 5',
        'ShipCity': 'Genève',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10667,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-09-12T00:00:00.000Z',
        'ShippedDate': '1997-09-19T00:00:00.000Z',
        'Freight': 78.09,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10668,
        'CustomerID': 'WANDK',
        'OrderDate': '1997-09-15T00:00:00.000Z',
        'ShippedDate': '1997-09-23T00:00:00.000Z',
        'Freight': 47.22,
        'ShipName': 'Die Wandernde Kuh',
        'ShipAddress': 'Adenauerallee 900',
        'ShipCity': 'Stuttgart',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10669,
        'CustomerID': 'SIMOB',
        'OrderDate': '1997-09-15T00:00:00.000Z',
        'ShippedDate': '1997-09-22T00:00:00.000Z',
        'Freight': 24.39,
        'ShipName': 'Simons bistro',
        'ShipAddress': 'Vinbæltet 34',
        'ShipCity': 'Kobenhavn',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10670,
        'CustomerID': 'FRANK',
        'OrderDate': '1997-09-16T00:00:00.000Z',
        'ShippedDate': '1997-09-18T00:00:00.000Z',
        'Freight': 203.48,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10671,
        'CustomerID': 'FRANR',
        'OrderDate': '1997-09-17T00:00:00.000Z',
        'ShippedDate': '1997-09-24T00:00:00.000Z',
        'Freight': 30.34,
        'ShipName': 'France restauration',
        'ShipAddress': '54, rue Royale',
        'ShipCity': 'Nantes',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10672,
        'CustomerID': 'BERGS',
        'OrderDate': '1997-09-17T00:00:00.000Z',
        'ShippedDate': '1997-09-26T00:00:00.000Z',
        'Freight': 95.75,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10673,
        'CustomerID': 'WILMK',
        'OrderDate': '1997-09-18T00:00:00.000Z',
        'ShippedDate': '1997-09-19T00:00:00.000Z',
        'Freight': 22.76,
        'ShipName': 'Wilman Kala',
        'ShipAddress': 'Keskuskatu 45',
        'ShipCity': 'Helsinki',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10674,
        'CustomerID': 'ISLAT',
        'OrderDate': '1997-09-18T00:00:00.000Z',
        'ShippedDate': '1997-09-30T00:00:00.000Z',
        'Freight': 0.9,
        'ShipName': 'Island Trading',
        'ShipAddress': 'Garden House Crowther Way',
        'ShipCity': 'Cowes',
        'ShipRegion': 'Isle of Wight',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10675,
        'CustomerID': 'FRANK',
        'OrderDate': '1997-09-19T00:00:00.000Z',
        'ShippedDate': '1997-09-23T00:00:00.000Z',
        'Freight': 31.85,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10676,
        'CustomerID': 'TORTU',
        'OrderDate': '1997-09-22T00:00:00.000Z',
        'ShippedDate': '1997-09-29T00:00:00.000Z',
        'Freight': 2.01,
        'ShipName': 'Tortuga Restaurante',
        'ShipAddress': 'Avda. Azteca 123',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10677,
        'CustomerID': 'ANTON',
        'OrderDate': '1997-09-22T00:00:00.000Z',
        'ShippedDate': '1997-09-26T00:00:00.000Z',
        'Freight': 4.03,
        'ShipName': 'Antonio Moreno Taquería',
        'ShipAddress': 'Mataderos  2312',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10678,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-09-23T00:00:00.000Z',
        'ShippedDate': '1997-10-16T00:00:00.000Z',
        'Freight': 388.98,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10679,
        'CustomerID': 'BLONP',
        'OrderDate': '1997-09-23T00:00:00.000Z',
        'ShippedDate': '1997-09-30T00:00:00.000Z',
        'Freight': 27.94,
        'ShipName': 'Blondel père et fils',
        'ShipAddress': '24, place Kléber',
        'ShipCity': 'Strasbourg',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10680,
        'CustomerID': 'OLDWO',
        'OrderDate': '1997-09-24T00:00:00.000Z',
        'ShippedDate': '1997-09-26T00:00:00.000Z',
        'Freight': 26.61,
        'ShipName': 'Old World Delicatessen',
        'ShipAddress': '2743 Bering St.',
        'ShipCity': 'Anchorage',
        'ShipRegion': 'AK',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10681,
        'CustomerID': 'GREAL',
        'OrderDate': '1997-09-25T00:00:00.000Z',
        'ShippedDate': '1997-09-30T00:00:00.000Z',
        'Freight': 76.13,
        'ShipName': 'Great Lakes Food Market',
        'ShipAddress': '2732 Baker Blvd.',
        'ShipCity': 'Eugene',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10682,
        'CustomerID': 'ANTON',
        'OrderDate': '1997-09-25T00:00:00.000Z',
        'ShippedDate': '1997-10-01T00:00:00.000Z',
        'Freight': 36.13,
        'ShipName': 'Antonio Moreno Taquería',
        'ShipAddress': 'Mataderos  2312',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10683,
        'CustomerID': 'DUMON',
        'OrderDate': '1997-09-26T00:00:00.000Z',
        'ShippedDate': '1997-10-01T00:00:00.000Z',
        'Freight': 4.4,
        'ShipName': 'Du monde entier',
        'ShipAddress': '67, rue des Cinquante Otages',
        'ShipCity': 'Nantes',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10684,
        'CustomerID': 'OTTIK',
        'OrderDate': '1997-09-26T00:00:00.000Z',
        'ShippedDate': '1997-09-30T00:00:00.000Z',
        'Freight': 145.63,
        'ShipName': 'Ottilies Käseladen',
        'ShipAddress': 'Mehrheimerstr. 369',
        'ShipCity': 'Köln',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10685,
        'CustomerID': 'GOURL',
        'OrderDate': '1997-09-29T00:00:00.000Z',
        'ShippedDate': '1997-10-03T00:00:00.000Z',
        'Freight': 33.75,
        'ShipName': 'Gourmet Lanchonetes',
        'ShipAddress': 'Av. Brasil, 442',
        'ShipCity': 'Campinas',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10686,
        'CustomerID': 'PICCO',
        'OrderDate': '1997-09-30T00:00:00.000Z',
        'ShippedDate': '1997-10-08T00:00:00.000Z',
        'Freight': 96.5,
        'ShipName': 'Piccolo und mehr',
        'ShipAddress': 'Geislweg 14',
        'ShipCity': 'Salzburg',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10687,
        'CustomerID': 'HUNGO',
        'OrderDate': '1997-09-30T00:00:00.000Z',
        'ShippedDate': '1997-10-30T00:00:00.000Z',
        'Freight': 296.43,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10688,
        'CustomerID': 'VAFFE',
        'OrderDate': '1997-10-01T00:00:00.000Z',
        'ShippedDate': '1997-10-07T00:00:00.000Z',
        'Freight': 299.09,
        'ShipName': 'Vaffeljernet',
        'ShipAddress': 'Smagsloget 45',
        'ShipCity': 'Århus',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10689,
        'CustomerID': 'BERGS',
        'OrderDate': '1997-10-01T00:00:00.000Z',
        'ShippedDate': '1997-10-07T00:00:00.000Z',
        'Freight': 13.42,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10690,
        'CustomerID': 'HANAR',
        'OrderDate': '1997-10-02T00:00:00.000Z',
        'ShippedDate': '1997-10-03T00:00:00.000Z',
        'Freight': 15.8,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10691,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-10-03T00:00:00.000Z',
        'ShippedDate': '1997-10-22T00:00:00.000Z',
        'Freight': 810.05,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10692,
        'CustomerID': 'ALFKI',
        'OrderDate': '1997-10-03T00:00:00.000Z',
        'ShippedDate': '1997-10-13T00:00:00.000Z',
        'Freight': 61.02,
        'ShipName': 'Alfred\' Futterkiste',
        'ShipAddress': 'Obere Str. 57',
        'ShipCity': 'Berlin',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10693,
        'CustomerID': 'WHITC',
        'OrderDate': '1997-10-06T00:00:00.000Z',
        'ShippedDate': '1997-10-10T00:00:00.000Z',
        'Freight': 139.34,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10694,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-10-06T00:00:00.000Z',
        'ShippedDate': '1997-10-09T00:00:00.000Z',
        'Freight': 398.36,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10695,
        'CustomerID': 'WILMK',
        'OrderDate': '1997-10-07T00:00:00.000Z',
        'ShippedDate': '1997-10-14T00:00:00.000Z',
        'Freight': 16.72,
        'ShipName': 'Wilman Kala',
        'ShipAddress': 'Keskuskatu 45',
        'ShipCity': 'Helsinki',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10696,
        'CustomerID': 'WHITC',
        'OrderDate': '1997-10-08T00:00:00.000Z',
        'ShippedDate': '1997-10-14T00:00:00.000Z',
        'Freight': 102.55,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10697,
        'CustomerID': 'LINOD',
        'OrderDate': '1997-10-08T00:00:00.000Z',
        'ShippedDate': '1997-10-14T00:00:00.000Z',
        'Freight': 45.52,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10698,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-10-09T00:00:00.000Z',
        'ShippedDate': '1997-10-17T00:00:00.000Z',
        'Freight': 272.47,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10699,
        'CustomerID': 'MORGK',
        'OrderDate': '1997-10-09T00:00:00.000Z',
        'ShippedDate': '1997-10-13T00:00:00.000Z',
        'Freight': 0.58,
        'ShipName': 'Morgenstern Gesundkost',
        'ShipAddress': 'Heerstr. 22',
        'ShipCity': 'Leipzig',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10700,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-10-10T00:00:00.000Z',
        'ShippedDate': '1997-10-16T00:00:00.000Z',
        'Freight': 65.1,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10701,
        'CustomerID': 'HUNGO',
        'OrderDate': '1997-10-13T00:00:00.000Z',
        'ShippedDate': '1997-10-15T00:00:00.000Z',
        'Freight': 220.31,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10702,
        'CustomerID': 'ALFKI',
        'OrderDate': '1997-10-13T00:00:00.000Z',
        'ShippedDate': '1997-10-21T00:00:00.000Z',
        'Freight': 23.94,
        'ShipName': 'Alfred\' Futterkiste',
        'ShipAddress': 'Obere Str. 57',
        'ShipCity': 'Berlin',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10703,
        'CustomerID': 'FOLKO',
        'OrderDate': '1997-10-14T00:00:00.000Z',
        'ShippedDate': '1997-10-20T00:00:00.000Z',
        'Freight': 152.3,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10704,
        'CustomerID': 'QUEEN',
        'OrderDate': '1997-10-14T00:00:00.000Z',
        'ShippedDate': '1997-11-07T00:00:00.000Z',
        'Freight': 4.78,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10705,
        'CustomerID': 'HILAA',
        'OrderDate': '1997-10-15T00:00:00.000Z',
        'ShippedDate': '1997-11-18T00:00:00.000Z',
        'Freight': 3.52,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10706,
        'CustomerID': 'OLDWO',
        'OrderDate': '1997-10-16T00:00:00.000Z',
        'ShippedDate': '1997-10-21T00:00:00.000Z',
        'Freight': 135.63,
        'ShipName': 'Old World Delicatessen',
        'ShipAddress': '2743 Bering St.',
        'ShipCity': 'Anchorage',
        'ShipRegion': 'AK',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10707,
        'CustomerID': 'AROUT',
        'OrderDate': '1997-10-16T00:00:00.000Z',
        'ShippedDate': '1997-10-23T00:00:00.000Z',
        'Freight': 21.74,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10708,
        'CustomerID': 'THEBI',
        'OrderDate': '1997-10-17T00:00:00.000Z',
        'ShippedDate': '1997-11-05T00:00:00.000Z',
        'Freight': 2.96,
        'ShipName': 'The Big Cheese',
        'ShipAddress': '89 Jefferson Way Suite 2',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10709,
        'CustomerID': 'GOURL',
        'OrderDate': '1997-10-17T00:00:00.000Z',
        'ShippedDate': '1997-11-20T00:00:00.000Z',
        'Freight': 210.8,
        'ShipName': 'Gourmet Lanchonetes',
        'ShipAddress': 'Av. Brasil, 442',
        'ShipCity': 'Campinas',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10710,
        'CustomerID': 'FRANS',
        'OrderDate': '1997-10-20T00:00:00.000Z',
        'ShippedDate': '1997-10-23T00:00:00.000Z',
        'Freight': 4.98,
        'ShipName': 'Franchi S.p.A.',
        'ShipAddress': 'Via Monte Bianco 34',
        'ShipCity': 'Torino',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10711,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-10-21T00:00:00.000Z',
        'ShippedDate': '1997-10-29T00:00:00.000Z',
        'Freight': 52.41,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10712,
        'CustomerID': 'HUNGO',
        'OrderDate': '1997-10-21T00:00:00.000Z',
        'ShippedDate': '1997-10-31T00:00:00.000Z',
        'Freight': 89.93,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10713,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-10-22T00:00:00.000Z',
        'ShippedDate': '1997-10-24T00:00:00.000Z',
        'Freight': 167.05,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10714,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-10-22T00:00:00.000Z',
        'ShippedDate': '1997-10-27T00:00:00.000Z',
        'Freight': 24.49,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10715,
        'CustomerID': 'BONAP',
        'OrderDate': '1997-10-23T00:00:00.000Z',
        'ShippedDate': '1997-10-29T00:00:00.000Z',
        'Freight': 63.2,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10716,
        'CustomerID': 'RANCH',
        'OrderDate': '1997-10-24T00:00:00.000Z',
        'ShippedDate': '1997-10-27T00:00:00.000Z',
        'Freight': 22.57,
        'ShipName': 'Rancho grande',
        'ShipAddress': 'Av. del Libertador 900',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10717,
        'CustomerID': 'FRANK',
        'OrderDate': '1997-10-24T00:00:00.000Z',
        'ShippedDate': '1997-10-29T00:00:00.000Z',
        'Freight': 59.25,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10718,
        'CustomerID': 'KOENE',
        'OrderDate': '1997-10-27T00:00:00.000Z',
        'ShippedDate': '1997-10-29T00:00:00.000Z',
        'Freight': 170.88,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10719,
        'CustomerID': 'LETSS',
        'OrderDate': '1997-10-27T00:00:00.000Z',
        'ShippedDate': '1997-11-05T00:00:00.000Z',
        'Freight': 51.44,
        'ShipName': 'Let\' Stop N Shop',
        'ShipAddress': '87 Polk St. Suite 5',
        'ShipCity': 'San Francisco',
        'ShipRegion': 'CA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10720,
        'CustomerID': 'QUEDE',
        'OrderDate': '1997-10-28T00:00:00.000Z',
        'ShippedDate': '1997-11-05T00:00:00.000Z',
        'Freight': 9.53,
        'ShipName': 'Que Delícia',
        'ShipAddress': 'Rua da Panificadora, 12',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10721,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-10-29T00:00:00.000Z',
        'ShippedDate': '1997-10-31T00:00:00.000Z',
        'Freight': 48.92,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10722,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-10-29T00:00:00.000Z',
        'ShippedDate': '1997-11-04T00:00:00.000Z',
        'Freight': 74.58,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10723,
        'CustomerID': 'WHITC',
        'OrderDate': '1997-10-30T00:00:00.000Z',
        'ShippedDate': '1997-11-25T00:00:00.000Z',
        'Freight': 21.72,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10724,
        'CustomerID': 'MEREP',
        'OrderDate': '1997-10-30T00:00:00.000Z',
        'ShippedDate': '1997-11-05T00:00:00.000Z',
        'Freight': 57.75,
        'ShipName': 'Mère Paillarde',
        'ShipAddress': '43 rue St. Laurent',
        'ShipCity': 'Montréal',
        'ShipRegion': 'Québec',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10725,
        'CustomerID': 'FAMIA',
        'OrderDate': '1997-10-31T00:00:00.000Z',
        'ShippedDate': '1997-11-05T00:00:00.000Z',
        'Freight': 10.83,
        'ShipName': 'Familia Arquibaldo',
        'ShipAddress': 'Rua Orós, 92',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10726,
        'CustomerID': 'EASTC',
        'OrderDate': '1997-11-03T00:00:00.000Z',
        'ShippedDate': '1997-12-05T00:00:00.000Z',
        'Freight': 16.56,
        'ShipName': 'Eastern Connection',
        'ShipAddress': '35 King George',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10727,
        'CustomerID': 'REGGC',
        'OrderDate': '1997-11-03T00:00:00.000Z',
        'ShippedDate': '1997-12-05T00:00:00.000Z',
        'Freight': 89.9,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10728,
        'CustomerID': 'QUEEN',
        'OrderDate': '1997-11-04T00:00:00.000Z',
        'ShippedDate': '1997-11-11T00:00:00.000Z',
        'Freight': 58.33,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10729,
        'CustomerID': 'LINOD',
        'OrderDate': '1997-11-04T00:00:00.000Z',
        'ShippedDate': '1997-11-14T00:00:00.000Z',
        'Freight': 141.06,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10730,
        'CustomerID': 'BONAP',
        'OrderDate': '1997-11-05T00:00:00.000Z',
        'ShippedDate': '1997-11-14T00:00:00.000Z',
        'Freight': 20.12,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10731,
        'CustomerID': 'CHOPS',
        'OrderDate': '1997-11-06T00:00:00.000Z',
        'ShippedDate': '1997-11-14T00:00:00.000Z',
        'Freight': 96.65,
        'ShipName': 'Chop-suey Chinese',
        'ShipAddress': 'Hauptstr. 31',
        'ShipCity': 'Bern',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10732,
        'CustomerID': 'BONAP',
        'OrderDate': '1997-11-06T00:00:00.000Z',
        'ShippedDate': '1997-11-07T00:00:00.000Z',
        'Freight': 16.97,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10733,
        'CustomerID': 'BERGS',
        'OrderDate': '1997-11-07T00:00:00.000Z',
        'ShippedDate': '1997-11-10T00:00:00.000Z',
        'Freight': 110.11,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10734,
        'CustomerID': 'GOURL',
        'OrderDate': '1997-11-07T00:00:00.000Z',
        'ShippedDate': '1997-11-12T00:00:00.000Z',
        'Freight': 1.63,
        'ShipName': 'Gourmet Lanchonetes',
        'ShipAddress': 'Av. Brasil, 442',
        'ShipCity': 'Campinas',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10735,
        'CustomerID': 'LETSS',
        'OrderDate': '1997-11-10T00:00:00.000Z',
        'ShippedDate': '1997-11-21T00:00:00.000Z',
        'Freight': 45.97,
        'ShipName': 'Let\' Stop N Shop',
        'ShipAddress': '87 Polk St. Suite 5',
        'ShipCity': 'San Francisco',
        'ShipRegion': 'CA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10736,
        'CustomerID': 'HUNGO',
        'OrderDate': '1997-11-11T00:00:00.000Z',
        'ShippedDate': '1997-11-21T00:00:00.000Z',
        'Freight': 44.1,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10737,
        'CustomerID': 'VINET',
        'OrderDate': '1997-11-11T00:00:00.000Z',
        'ShippedDate': '1997-11-18T00:00:00.000Z',
        'Freight': 7.79,
        'ShipName': 'Vins et alcools Chevalier',
        'ShipAddress': '59 rue de l\'Abbaye',
        'ShipCity': 'Reims',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10738,
        'CustomerID': 'SPECD',
        'OrderDate': '1997-11-12T00:00:00.000Z',
        'ShippedDate': '1997-11-18T00:00:00.000Z',
        'Freight': 2.91,
        'ShipName': 'Spécialités du monde',
        'ShipAddress': '25, rue Lauriston',
        'ShipCity': 'Paris',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10739,
        'CustomerID': 'VINET',
        'OrderDate': '1997-11-12T00:00:00.000Z',
        'ShippedDate': '1997-11-17T00:00:00.000Z',
        'Freight': 11.08,
        'ShipName': 'Vins et alcools Chevalier',
        'ShipAddress': '59 rue de lAbbaye',
        'ShipCity': 'Reims',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10740,
        'CustomerID': 'WHITC',
        'OrderDate': '1997-11-13T00:00:00.000Z',
        'ShippedDate': '1997-11-25T00:00:00.000Z',
        'Freight': 81.88,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10741,
        'CustomerID': 'AROUT',
        'OrderDate': '1997-11-14T00:00:00.000Z',
        'ShippedDate': '1997-11-18T00:00:00.000Z',
        'Freight': 10.96,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10742,
        'CustomerID': 'BOTTM',
        'OrderDate': '1997-11-14T00:00:00.000Z',
        'ShippedDate': '1997-11-18T00:00:00.000Z',
        'Freight': 243.73,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10743,
        'CustomerID': 'AROUT',
        'OrderDate': '1997-11-17T00:00:00.000Z',
        'ShippedDate': '1997-11-21T00:00:00.000Z',
        'Freight': 23.72,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10744,
        'CustomerID': 'VAFFE',
        'OrderDate': '1997-11-17T00:00:00.000Z',
        'ShippedDate': '1997-11-24T00:00:00.000Z',
        'Freight': 69.19,
        'ShipName': 'Vaffeljernet',
        'ShipAddress': 'Smagsloget 45',
        'ShipCity': 'Århus',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10745,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-11-18T00:00:00.000Z',
        'ShippedDate': '1997-11-27T00:00:00.000Z',
        'Freight': 3.52,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10746,
        'CustomerID': 'CHOPS',
        'OrderDate': '1997-11-19T00:00:00.000Z',
        'ShippedDate': '1997-11-21T00:00:00.000Z',
        'Freight': 31.43,
        'ShipName': 'Chop-suey Chinese',
        'ShipAddress': 'Hauptstr. 31',
        'ShipCity': 'Bern',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10747,
        'CustomerID': 'PICCO',
        'OrderDate': '1997-11-19T00:00:00.000Z',
        'ShippedDate': '1997-11-26T00:00:00.000Z',
        'Freight': 117.33,
        'ShipName': 'Piccolo und mehr',
        'ShipAddress': 'Geislweg 14',
        'ShipCity': 'Salzburg',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10748,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-11-20T00:00:00.000Z',
        'ShippedDate': '1997-11-28T00:00:00.000Z',
        'Freight': 232.55,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10749,
        'CustomerID': 'ISLAT',
        'OrderDate': '1997-11-20T00:00:00.000Z',
        'ShippedDate': '1997-12-19T00:00:00.000Z',
        'Freight': 61.53,
        'ShipName': 'Island Trading',
        'ShipAddress': 'Garden House Crowther Way',
        'ShipCity': 'Cowes',
        'ShipRegion': 'Isle of Wight',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10750,
        'CustomerID': 'WARTH',
        'OrderDate': '1997-11-21T00:00:00.000Z',
        'ShippedDate': '1997-11-24T00:00:00.000Z',
        'Freight': 79.3,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10751,
        'CustomerID': 'RICSU',
        'OrderDate': '1997-11-24T00:00:00.000Z',
        'ShippedDate': '1997-12-03T00:00:00.000Z',
        'Freight': 130.79,
        'ShipName': 'Richter Supermarkt',
        'ShipAddress': 'Starenweg 5',
        'ShipCity': 'Genève',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10752,
        'CustomerID': 'NORTS',
        'OrderDate': '1997-11-24T00:00:00.000Z',
        'ShippedDate': '1997-11-28T00:00:00.000Z',
        'Freight': 1.39,
        'ShipName': 'North/South',
        'ShipAddress': 'South House 300 Queensbridge',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10753,
        'CustomerID': 'FRANS',
        'OrderDate': '1997-11-25T00:00:00.000Z',
        'ShippedDate': '1997-11-27T00:00:00.000Z',
        'Freight': 7.7,
        'ShipName': 'Franchi S.p.A.',
        'ShipAddress': 'Via Monte Bianco 34',
        'ShipCity': 'Torino',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10754,
        'CustomerID': 'MAGAA',
        'OrderDate': '1997-11-25T00:00:00.000Z',
        'ShippedDate': '1997-11-27T00:00:00.000Z',
        'Freight': 2.38,
        'ShipName': 'Magazzini Alimentari Riuniti',
        'ShipAddress': 'Via Ludovico il Moro 22',
        'ShipCity': 'Bergamo',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10755,
        'CustomerID': 'BONAP',
        'OrderDate': '1997-11-26T00:00:00.000Z',
        'ShippedDate': '1997-11-28T00:00:00.000Z',
        'Freight': 16.71,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10756,
        'CustomerID': 'SPLIR',
        'OrderDate': '1997-11-27T00:00:00.000Z',
        'ShippedDate': '1997-12-02T00:00:00.000Z',
        'Freight': 73.21,
        'ShipName': 'Split Rail Beer & Ale',
        'ShipAddress': 'P.O. Box 555',
        'ShipCity': 'Lander',
        'ShipRegion': 'WY',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10757,
        'CustomerID': 'SAVEA',
        'OrderDate': '1997-11-27T00:00:00.000Z',
        'ShippedDate': '1997-12-15T00:00:00.000Z',
        'Freight': 8.19,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10758,
        'CustomerID': 'RICSU',
        'OrderDate': '1997-11-28T00:00:00.000Z',
        'ShippedDate': '1997-12-04T00:00:00.000Z',
        'Freight': 138.17,
        'ShipName': 'Richter Supermarkt',
        'ShipAddress': 'Starenweg 5',
        'ShipCity': 'Genève',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10759,
        'CustomerID': 'ANATR',
        'OrderDate': '1997-11-28T00:00:00.000Z',
        'ShippedDate': '1997-12-12T00:00:00.000Z',
        'Freight': 11.99,
        'ShipName': 'Ana Trujillo Emparedados y helados',
        'ShipAddress': 'Avda. de la Constitución 2222',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10760,
        'CustomerID': 'MAISD',
        'OrderDate': '1997-12-01T00:00:00.000Z',
        'ShippedDate': '1997-12-10T00:00:00.000Z',
        'Freight': 155.64,
        'ShipName': 'Maison Dewey',
        'ShipAddress': 'Rue Joseph-Bens 532',
        'ShipCity': 'Bruxelles',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10761,
        'CustomerID': 'RATTC',
        'OrderDate': '1997-12-02T00:00:00.000Z',
        'ShippedDate': '1997-12-08T00:00:00.000Z',
        'Freight': 18.66,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10762,
        'CustomerID': 'FOLKO',
        'OrderDate': '1997-12-02T00:00:00.000Z',
        'ShippedDate': '1997-12-09T00:00:00.000Z',
        'Freight': 328.74,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10763,
        'CustomerID': 'FOLIG',
        'OrderDate': '1997-12-03T00:00:00.000Z',
        'ShippedDate': '1997-12-08T00:00:00.000Z',
        'Freight': 37.35,
        'ShipName': 'Folies gourmandes',
        'ShipAddress': '184, chaussée de Tournai',
        'ShipCity': 'Lille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10764,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-12-03T00:00:00.000Z',
        'ShippedDate': '1997-12-08T00:00:00.000Z',
        'Freight': 145.45,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10765,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-12-04T00:00:00.000Z',
        'ShippedDate': '1997-12-09T00:00:00.000Z',
        'Freight': 42.74,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10766,
        'CustomerID': 'OTTIK',
        'OrderDate': '1997-12-05T00:00:00.000Z',
        'ShippedDate': '1997-12-09T00:00:00.000Z',
        'Freight': 157.55,
        'ShipName': 'Ottilies Käseladen',
        'ShipAddress': 'Mehrheimerstr. 369',
        'ShipCity': 'Köln',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10767,
        'CustomerID': 'SUPRD',
        'OrderDate': '1997-12-05T00:00:00.000Z',
        'ShippedDate': '1997-12-15T00:00:00.000Z',
        'Freight': 1.59,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10768,
        'CustomerID': 'AROUT',
        'OrderDate': '1997-12-08T00:00:00.000Z',
        'ShippedDate': '1997-12-15T00:00:00.000Z',
        'Freight': 146.32,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10769,
        'CustomerID': 'VAFFE',
        'OrderDate': '1997-12-08T00:00:00.000Z',
        'ShippedDate': '1997-12-12T00:00:00.000Z',
        'Freight': 65.06,
        'ShipName': 'Vaffeljernet',
        'ShipAddress': 'Smagsloget 45',
        'ShipCity': 'Århus',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10770,
        'CustomerID': 'HANAR',
        'OrderDate': '1997-12-09T00:00:00.000Z',
        'ShippedDate': '1997-12-17T00:00:00.000Z',
        'Freight': 5.32,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10771,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-12-10T00:00:00.000Z',
        'ShippedDate': '1998-01-02T00:00:00.000Z',
        'Freight': 11.19,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10772,
        'CustomerID': 'LEHMS',
        'OrderDate': '1997-12-10T00:00:00.000Z',
        'ShippedDate': '1997-12-19T00:00:00.000Z',
        'Freight': 91.28,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10773,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-12-11T00:00:00.000Z',
        'ShippedDate': '1997-12-16T00:00:00.000Z',
        'Freight': 96.43,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10774,
        'CustomerID': 'FOLKO',
        'OrderDate': '1997-12-11T00:00:00.000Z',
        'ShippedDate': '1997-12-12T00:00:00.000Z',
        'Freight': 48.2,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10775,
        'CustomerID': 'THECR',
        'OrderDate': '1997-12-12T00:00:00.000Z',
        'ShippedDate': '1997-12-26T00:00:00.000Z',
        'Freight': 20.25,
        'ShipName': 'The Cracker Box',
        'ShipAddress': '55 Grizzly Peak Rd.',
        'ShipCity': 'Butte',
        'ShipRegion': 'MT',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10776,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-12-15T00:00:00.000Z',
        'ShippedDate': '1997-12-18T00:00:00.000Z',
        'Freight': 351.53,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10777,
        'CustomerID': 'GOURL',
        'OrderDate': '1997-12-15T00:00:00.000Z',
        'ShippedDate': '1998-01-21T00:00:00.000Z',
        'Freight': 3.01,
        'ShipName': 'Gourmet Lanchonetes',
        'ShipAddress': 'Av. Brasil, 442',
        'ShipCity': 'Campinas',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10778,
        'CustomerID': 'BERGS',
        'OrderDate': '1997-12-16T00:00:00.000Z',
        'ShippedDate': '1997-12-24T00:00:00.000Z',
        'Freight': 6.79,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10779,
        'CustomerID': 'MORGK',
        'OrderDate': '1997-12-16T00:00:00.000Z',
        'ShippedDate': '1998-01-14T00:00:00.000Z',
        'Freight': 58.13,
        'ShipName': 'Morgenstern Gesundkost',
        'ShipAddress': 'Heerstr. 22',
        'ShipCity': 'Leipzig',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10780,
        'CustomerID': 'LILAS',
        'OrderDate': '1997-12-16T00:00:00.000Z',
        'ShippedDate': '1997-12-25T00:00:00.000Z',
        'Freight': 42.13,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10781,
        'CustomerID': 'WARTH',
        'OrderDate': '1997-12-17T00:00:00.000Z',
        'ShippedDate': '1997-12-19T00:00:00.000Z',
        'Freight': 73.16,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10782,
        'CustomerID': 'CACTU',
        'OrderDate': '1997-12-17T00:00:00.000Z',
        'ShippedDate': '1997-12-22T00:00:00.000Z',
        'Freight': 1.1,
        'ShipName': 'Cactus Comidas para llevar',
        'ShipAddress': 'Cerrito 333',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10783,
        'CustomerID': 'HANAR',
        'OrderDate': '1997-12-18T00:00:00.000Z',
        'ShippedDate': '1997-12-19T00:00:00.000Z',
        'Freight': 124.98,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10784,
        'CustomerID': 'MAGAA',
        'OrderDate': '1997-12-18T00:00:00.000Z',
        'ShippedDate': '1997-12-22T00:00:00.000Z',
        'Freight': 70.09,
        'ShipName': 'Magazzini Alimentari Riuniti',
        'ShipAddress': 'Via Ludovico il Moro 22',
        'ShipCity': 'Bergamo',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10785,
        'CustomerID': 'GROSR',
        'OrderDate': '1997-12-18T00:00:00.000Z',
        'ShippedDate': '1997-12-24T00:00:00.000Z',
        'Freight': 1.51,
        'ShipName': 'GROSELLA-Restaurante',
        'ShipAddress': '5ª Ave. Los Palos Grandes',
        'ShipCity': 'Caracas',
        'ShipRegion': 'DF',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10786,
        'CustomerID': 'QUEEN',
        'OrderDate': '1997-12-19T00:00:00.000Z',
        'ShippedDate': '1997-12-23T00:00:00.000Z',
        'Freight': 110.87,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10787,
        'CustomerID': 'LAMAI',
        'OrderDate': '1997-12-19T00:00:00.000Z',
        'ShippedDate': '1997-12-26T00:00:00.000Z',
        'Freight': 249.93,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10788,
        'CustomerID': 'QUICK',
        'OrderDate': '1997-12-22T00:00:00.000Z',
        'ShippedDate': '1998-01-19T00:00:00.000Z',
        'Freight': 42.7,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10789,
        'CustomerID': 'FOLIG',
        'OrderDate': '1997-12-22T00:00:00.000Z',
        'ShippedDate': '1997-12-31T00:00:00.000Z',
        'Freight': 100.6,
        'ShipName': 'Folies gourmandes',
        'ShipAddress': '184, chaussée de Tournai',
        'ShipCity': 'Lille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10790,
        'CustomerID': 'GOURL',
        'OrderDate': '1997-12-22T00:00:00.000Z',
        'ShippedDate': '1997-12-26T00:00:00.000Z',
        'Freight': 28.23,
        'ShipName': 'Gourmet Lanchonetes',
        'ShipAddress': 'Av. Brasil, 442',
        'ShipCity': 'Campinas',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10791,
        'CustomerID': 'FRANK',
        'OrderDate': '1997-12-23T00:00:00.000Z',
        'ShippedDate': '1998-01-01T00:00:00.000Z',
        'Freight': 16.85,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10792,
        'CustomerID': 'WOLZA',
        'OrderDate': '1997-12-23T00:00:00.000Z',
        'ShippedDate': '1997-12-31T00:00:00.000Z',
        'Freight': 23.79,
        'ShipName': 'Wolski Zajazd',
        'ShipAddress': 'ul. Filtrowa 68',
        'ShipCity': 'Warszawa',
        'ShipRegion': null,
        'ShipCountry': 'Poland'
    },

    {
        'OrderID': 10793,
        'CustomerID': 'AROUT',
        'OrderDate': '1997-12-24T00:00:00.000Z',
        'ShippedDate': '1998-01-08T00:00:00.000Z',
        'Freight': 4.52,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10794,
        'CustomerID': 'QUEDE',
        'OrderDate': '1997-12-24T00:00:00.000Z',
        'ShippedDate': '1998-01-02T00:00:00.000Z',
        'Freight': 21.49,
        'ShipName': 'Que Delícia',
        'ShipAddress': 'Rua da Panificadora, 12',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10795,
        'CustomerID': 'ERNSH',
        'OrderDate': '1997-12-24T00:00:00.000Z',
        'ShippedDate': '1998-01-20T00:00:00.000Z',
        'Freight': 126.66,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10796,
        'CustomerID': 'HILAA',
        'OrderDate': '1997-12-25T00:00:00.000Z',
        'ShippedDate': '1998-01-14T00:00:00.000Z',
        'Freight': 26.52,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10797,
        'CustomerID': 'DRACD',
        'OrderDate': '1997-12-25T00:00:00.000Z',
        'ShippedDate': '1998-01-05T00:00:00.000Z',
        'Freight': 33.35,
        'ShipName': 'Drachenblut Delikatessen',
        'ShipAddress': 'Walserweg 21',
        'ShipCity': 'Aachen',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10798,
        'CustomerID': 'ISLAT',
        'OrderDate': '1997-12-26T00:00:00.000Z',
        'ShippedDate': '1998-01-05T00:00:00.000Z',
        'Freight': 2.33,
        'ShipName': 'Island Trading',
        'ShipAddress': 'Garden House Crowther Way',
        'ShipCity': 'Cowes',
        'ShipRegion': 'Isle of Wight',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10799,
        'CustomerID': 'KOENE',
        'OrderDate': '1997-12-26T00:00:00.000Z',
        'ShippedDate': '1998-01-05T00:00:00.000Z',
        'Freight': 30.76,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10800,
        'CustomerID': 'SEVES',
        'OrderDate': '1997-12-26T00:00:00.000Z',
        'ShippedDate': '1998-01-05T00:00:00.000Z',
        'Freight': 137.44,
        'ShipName': 'Seven Seas Imports',
        'ShipAddress': '90 Wadhurst Rd.',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10801,
        'CustomerID': 'BOLID',
        'OrderDate': '1997-12-29T00:00:00.000Z',
        'ShippedDate': '1997-12-31T00:00:00.000Z',
        'Freight': 97.09,
        'ShipName': 'Bólido Comidas preparadas',
        'ShipAddress': 'C/ Araquil, 67',
        'ShipCity': 'Madrid',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10802,
        'CustomerID': 'SIMOB',
        'OrderDate': '1997-12-29T00:00:00.000Z',
        'ShippedDate': '1998-01-02T00:00:00.000Z',
        'Freight': 257.26,
        'ShipName': 'Simons bistro',
        'ShipAddress': 'Vinbæltet 34',
        'ShipCity': 'Kobenhavn',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10803,
        'CustomerID': 'WELLI',
        'OrderDate': '1997-12-30T00:00:00.000Z',
        'ShippedDate': '1998-01-06T00:00:00.000Z',
        'Freight': 55.23,
        'ShipName': 'Wellington Importadora',
        'ShipAddress': 'Rua do Mercado, 12',
        'ShipCity': 'Resende',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10804,
        'CustomerID': 'SEVES',
        'OrderDate': '1997-12-30T00:00:00.000Z',
        'ShippedDate': '1998-01-07T00:00:00.000Z',
        'Freight': 27.33,
        'ShipName': 'Seven Seas Imports',
        'ShipAddress': '90 Wadhurst Rd.',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10805,
        'CustomerID': 'THEBI',
        'OrderDate': '1997-12-30T00:00:00.000Z',
        'ShippedDate': '1998-01-09T00:00:00.000Z',
        'Freight': 237.34,
        'ShipName': 'The Big Cheese',
        'ShipAddress': '89 Jefferson Way Suite 2',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10806,
        'CustomerID': 'VICTE',
        'OrderDate': '1997-12-31T00:00:00.000Z',
        'ShippedDate': '1998-01-05T00:00:00.000Z',
        'Freight': 22.11,
        'ShipName': 'Victuailles en stock',
        'ShipAddress': '2, rue du Commerce',
        'ShipCity': 'Lyon',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10807,
        'CustomerID': 'FRANS',
        'OrderDate': '1997-12-31T00:00:00.000Z',
        'ShippedDate': '1998-01-30T00:00:00.000Z',
        'Freight': 1.36,
        'ShipName': 'Franchi S.p.A.',
        'ShipAddress': 'Via Monte Bianco 34',
        'ShipCity': 'Torino',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10808,
        'CustomerID': 'OLDWO',
        'OrderDate': '1998-01-01T00:00:00.000Z',
        'ShippedDate': '1998-01-09T00:00:00.000Z',
        'Freight': 45.53,
        'ShipName': 'Old World Delicatessen',
        'ShipAddress': '2743 Bering St.',
        'ShipCity': 'Anchorage',
        'ShipRegion': 'AK',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10809,
        'CustomerID': 'WELLI',
        'OrderDate': '1998-01-01T00:00:00.000Z',
        'ShippedDate': '1998-01-07T00:00:00.000Z',
        'Freight': 4.87,
        'ShipName': 'Wellington Importadora',
        'ShipAddress': 'Rua do Mercado, 12',
        'ShipCity': 'Resende',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10810,
        'CustomerID': 'LAUGB',
        'OrderDate': '1998-01-01T00:00:00.000Z',
        'ShippedDate': '1998-01-07T00:00:00.000Z',
        'Freight': 4.33,
        'ShipName': 'Laughing Bacchus Wine Cellars',
        'ShipAddress': '2319 Elm St.',
        'ShipCity': 'Vancouver',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10811,
        'CustomerID': 'LINOD',
        'OrderDate': '1998-01-02T00:00:00.000Z',
        'ShippedDate': '1998-01-08T00:00:00.000Z',
        'Freight': 31.22,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10812,
        'CustomerID': 'REGGC',
        'OrderDate': '1998-01-02T00:00:00.000Z',
        'ShippedDate': '1998-01-12T00:00:00.000Z',
        'Freight': 59.78,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10813,
        'CustomerID': 'RICAR',
        'OrderDate': '1998-01-05T00:00:00.000Z',
        'ShippedDate': '1998-01-09T00:00:00.000Z',
        'Freight': 47.38,
        'ShipName': 'Ricardo Adocicados',
        'ShipAddress': 'Av. Copacabana, 267',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10814,
        'CustomerID': 'VICTE',
        'OrderDate': '1998-01-05T00:00:00.000Z',
        'ShippedDate': '1998-01-14T00:00:00.000Z',
        'Freight': 130.94,
        'ShipName': 'Victuailles en stock',
        'ShipAddress': '2, rue du Commerce',
        'ShipCity': 'Lyon',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10815,
        'CustomerID': 'SAVEA',
        'OrderDate': '1998-01-05T00:00:00.000Z',
        'ShippedDate': '1998-01-14T00:00:00.000Z',
        'Freight': 14.62,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10816,
        'CustomerID': 'GREAL',
        'OrderDate': '1998-01-06T00:00:00.000Z',
        'ShippedDate': '1998-02-04T00:00:00.000Z',
        'Freight': 719.78,
        'ShipName': 'Great Lakes Food Market',
        'ShipAddress': '2732 Baker Blvd.',
        'ShipCity': 'Eugene',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10817,
        'CustomerID': 'KOENE',
        'OrderDate': '1998-01-06T00:00:00.000Z',
        'ShippedDate': '1998-01-13T00:00:00.000Z',
        'Freight': 306.07,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10818,
        'CustomerID': 'MAGAA',
        'OrderDate': '1998-01-07T00:00:00.000Z',
        'ShippedDate': '1998-01-12T00:00:00.000Z',
        'Freight': 65.48,
        'ShipName': 'Magazzini Alimentari Riuniti',
        'ShipAddress': 'Via Ludovico il Moro 22',
        'ShipCity': 'Bergamo',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10819,
        'CustomerID': 'CACTU',
        'OrderDate': '1998-01-07T00:00:00.000Z',
        'ShippedDate': '1998-01-16T00:00:00.000Z',
        'Freight': 19.76,
        'ShipName': 'Cactus Comidas para llevar',
        'ShipAddress': 'Cerrito 333',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10820,
        'CustomerID': 'RATTC',
        'OrderDate': '1998-01-07T00:00:00.000Z',
        'ShippedDate': '1998-01-13T00:00:00.000Z',
        'Freight': 37.52,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10821,
        'CustomerID': 'SPLIR',
        'OrderDate': '1998-01-08T00:00:00.000Z',
        'ShippedDate': '1998-01-15T00:00:00.000Z',
        'Freight': 36.68,
        'ShipName': 'Split Rail Beer & Ale',
        'ShipAddress': 'P.O. Box 555',
        'ShipCity': 'Lander',
        'ShipRegion': 'WY',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10822,
        'CustomerID': 'TRAIH',
        'OrderDate': '1998-01-08T00:00:00.000Z',
        'ShippedDate': '1998-01-16T00:00:00.000Z',
        'Freight': 7,
        'ShipName': 'Trail\' Head Gourmet Provisioners',
        'ShipAddress': '722 DaVinci Blvd.',
        'ShipCity': 'Kirkland',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10823,
        'CustomerID': 'LILAS',
        'OrderDate': '1998-01-09T00:00:00.000Z',
        'ShippedDate': '1998-01-13T00:00:00.000Z',
        'Freight': 163.97,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10824,
        'CustomerID': 'FOLKO',
        'OrderDate': '1998-01-09T00:00:00.000Z',
        'ShippedDate': '1998-01-30T00:00:00.000Z',
        'Freight': 1.23,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10825,
        'CustomerID': 'DRACD',
        'OrderDate': '1998-01-09T00:00:00.000Z',
        'ShippedDate': '1998-01-14T00:00:00.000Z',
        'Freight': 79.25,
        'ShipName': 'Drachenblut Delikatessen',
        'ShipAddress': 'Walserweg 21',
        'ShipCity': 'Aachen',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10826,
        'CustomerID': 'BLONP',
        'OrderDate': '1998-01-12T00:00:00.000Z',
        'ShippedDate': '1998-02-06T00:00:00.000Z',
        'Freight': 7.09,
        'ShipName': 'Blondel père et fils',
        'ShipAddress': '24, place Kléber',
        'ShipCity': 'Strasbourg',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10827,
        'CustomerID': 'BONAP',
        'OrderDate': '1998-01-12T00:00:00.000Z',
        'ShippedDate': '1998-02-06T00:00:00.000Z',
        'Freight': 63.54,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10828,
        'CustomerID': 'RANCH',
        'OrderDate': '1998-01-13T00:00:00.000Z',
        'ShippedDate': '1998-02-04T00:00:00.000Z',
        'Freight': 90.85,
        'ShipName': 'Rancho grande',
        'ShipAddress': 'Av. del Libertador 900',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10829,
        'CustomerID': 'ISLAT',
        'OrderDate': '1998-01-13T00:00:00.000Z',
        'ShippedDate': '1998-01-23T00:00:00.000Z',
        'Freight': 154.72,
        'ShipName': 'Island Trading',
        'ShipAddress': 'Garden House Crowther Way',
        'ShipCity': 'Cowes',
        'ShipRegion': 'Isle of Wight',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10830,
        'CustomerID': 'TRADH',
        'OrderDate': '1998-01-13T00:00:00.000Z',
        'ShippedDate': '1998-01-21T00:00:00.000Z',
        'Freight': 81.83,
        'ShipName': 'Tradiçao Hipermercados',
        'ShipAddress': 'Av. Inês de Castro, 414',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10831,
        'CustomerID': 'SANTG',
        'OrderDate': '1998-01-14T00:00:00.000Z',
        'ShippedDate': '1998-01-23T00:00:00.000Z',
        'Freight': 72.19,
        'ShipName': 'Santé Gourmet',
        'ShipAddress': 'Erling Skakkes gate 78',
        'ShipCity': 'Stavern',
        'ShipRegion': null,
        'ShipCountry': 'Norway'
    },

    {
        'OrderID': 10832,
        'CustomerID': 'LAMAI',
        'OrderDate': '1998-01-14T00:00:00.000Z',
        'ShippedDate': '1998-01-19T00:00:00.000Z',
        'Freight': 43.26,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10833,
        'CustomerID': 'OTTIK',
        'OrderDate': '1998-01-15T00:00:00.000Z',
        'ShippedDate': '1998-01-23T00:00:00.000Z',
        'Freight': 71.49,
        'ShipName': 'Ottilies Käseladen',
        'ShipAddress': 'Mehrheimerstr. 369',
        'ShipCity': 'Köln',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10834,
        'CustomerID': 'TRADH',
        'OrderDate': '1998-01-15T00:00:00.000Z',
        'ShippedDate': '1998-01-19T00:00:00.000Z',
        'Freight': 29.78,
        'ShipName': 'Tradiçao Hipermercados',
        'ShipAddress': 'Av. Inês de Castro, 414',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10835,
        'CustomerID': 'ALFKI',
        'OrderDate': '1998-01-15T00:00:00.000Z',
        'ShippedDate': '1998-01-21T00:00:00.000Z',
        'Freight': 69.53,
        'ShipName': 'Alfred\' Futterkiste',
        'ShipAddress': 'Obere Str. 57',
        'ShipCity': 'Berlin',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10836,
        'CustomerID': 'ERNSH',
        'OrderDate': '1998-01-16T00:00:00.000Z',
        'ShippedDate': '1998-01-21T00:00:00.000Z',
        'Freight': 411.88,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10837,
        'CustomerID': 'BERGS',
        'OrderDate': '1998-01-16T00:00:00.000Z',
        'ShippedDate': '1998-01-23T00:00:00.000Z',
        'Freight': 13.32,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10838,
        'CustomerID': 'LINOD',
        'OrderDate': '1998-01-19T00:00:00.000Z',
        'ShippedDate': '1998-01-23T00:00:00.000Z',
        'Freight': 59.28,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10839,
        'CustomerID': 'TRADH',
        'OrderDate': '1998-01-19T00:00:00.000Z',
        'ShippedDate': '1998-01-22T00:00:00.000Z',
        'Freight': 35.43,
        'ShipName': 'Tradiçao Hipermercados',
        'ShipAddress': 'Av. Inês de Castro, 414',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10840,
        'CustomerID': 'LINOD',
        'OrderDate': '1998-01-19T00:00:00.000Z',
        'ShippedDate': '1998-02-16T00:00:00.000Z',
        'Freight': 2.71,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10841,
        'CustomerID': 'SUPRD',
        'OrderDate': '1998-01-20T00:00:00.000Z',
        'ShippedDate': '1998-01-29T00:00:00.000Z',
        'Freight': 424.3,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10842,
        'CustomerID': 'TORTU',
        'OrderDate': '1998-01-20T00:00:00.000Z',
        'ShippedDate': '1998-01-29T00:00:00.000Z',
        'Freight': 54.42,
        'ShipName': 'Tortuga Restaurante',
        'ShipAddress': 'Avda. Azteca 123',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10843,
        'CustomerID': 'VICTE',
        'OrderDate': '1998-01-21T00:00:00.000Z',
        'ShippedDate': '1998-01-26T00:00:00.000Z',
        'Freight': 9.26,
        'ShipName': 'Victuailles en stock',
        'ShipAddress': '2, rue du Commerce',
        'ShipCity': 'Lyon',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10844,
        'CustomerID': 'PICCO',
        'OrderDate': '1998-01-21T00:00:00.000Z',
        'ShippedDate': '1998-01-26T00:00:00.000Z',
        'Freight': 25.22,
        'ShipName': 'Piccolo und mehr',
        'ShipAddress': 'Geislweg 14',
        'ShipCity': 'Salzburg',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10845,
        'CustomerID': 'QUICK',
        'OrderDate': '1998-01-21T00:00:00.000Z',
        'ShippedDate': '1998-01-30T00:00:00.000Z',
        'Freight': 212.98,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10846,
        'CustomerID': 'SUPRD',
        'OrderDate': '1998-01-22T00:00:00.000Z',
        'ShippedDate': '1998-01-23T00:00:00.000Z',
        'Freight': 56.46,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10847,
        'CustomerID': 'SAVEA',
        'OrderDate': '1998-01-22T00:00:00.000Z',
        'ShippedDate': '1998-02-10T00:00:00.000Z',
        'Freight': 487.57,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10848,
        'CustomerID': 'CONSH',
        'OrderDate': '1998-01-23T00:00:00.000Z',
        'ShippedDate': '1998-01-29T00:00:00.000Z',
        'Freight': 38.24,
        'ShipName': 'Consolidated Holdings',
        'ShipAddress': 'Berkeley Gardens 12  Brewery',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10849,
        'CustomerID': 'KOENE',
        'OrderDate': '1998-01-23T00:00:00.000Z',
        'ShippedDate': '1998-01-30T00:00:00.000Z',
        'Freight': 0.56,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10850,
        'CustomerID': 'VICTE',
        'OrderDate': '1998-01-23T00:00:00.000Z',
        'ShippedDate': '1998-01-30T00:00:00.000Z',
        'Freight': 49.19,
        'ShipName': 'Victuailles en stock',
        'ShipAddress': '2, rue du Commerce',
        'ShipCity': 'Lyon',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10851,
        'CustomerID': 'RICAR',
        'OrderDate': '1998-01-26T00:00:00.000Z',
        'ShippedDate': '1998-02-02T00:00:00.000Z',
        'Freight': 160.55,
        'ShipName': 'Ricardo Adocicados',
        'ShipAddress': 'Av. Copacabana, 267',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10852,
        'CustomerID': 'RATTC',
        'OrderDate': '1998-01-26T00:00:00.000Z',
        'ShippedDate': '1998-01-30T00:00:00.000Z',
        'Freight': 174.05,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10853,
        'CustomerID': 'BLAUS',
        'OrderDate': '1998-01-27T00:00:00.000Z',
        'ShippedDate': '1998-02-03T00:00:00.000Z',
        'Freight': 53.83,
        'ShipName': 'Blauer See Delikatessen',
        'ShipAddress': 'Forsterstr. 57',
        'ShipCity': 'Mannheim',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10854,
        'CustomerID': 'ERNSH',
        'OrderDate': '1998-01-27T00:00:00.000Z',
        'ShippedDate': '1998-02-05T00:00:00.000Z',
        'Freight': 100.22,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10855,
        'CustomerID': 'OLDWO',
        'OrderDate': '1998-01-27T00:00:00.000Z',
        'ShippedDate': '1998-02-04T00:00:00.000Z',
        'Freight': 170.97,
        'ShipName': 'Old World Delicatessen',
        'ShipAddress': '2743 Bering St.',
        'ShipCity': 'Anchorage',
        'ShipRegion': 'AK',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10856,
        'CustomerID': 'ANTON',
        'OrderDate': '1998-01-28T00:00:00.000Z',
        'ShippedDate': '1998-02-10T00:00:00.000Z',
        'Freight': 58.43,
        'ShipName': 'Antonio Moreno Taquería',
        'ShipAddress': 'Mataderos  2312',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10857,
        'CustomerID': 'BERGS',
        'OrderDate': '1998-01-28T00:00:00.000Z',
        'ShippedDate': '1998-02-06T00:00:00.000Z',
        'Freight': 188.85,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10858,
        'CustomerID': 'LACOR',
        'OrderDate': '1998-01-29T00:00:00.000Z',
        'ShippedDate': '1998-02-03T00:00:00.000Z',
        'Freight': 52.51,
        'ShipName': 'La corne d\'abondance',
        'ShipAddress': '67, avenue de l\'Europe',
        'ShipCity': 'Versailles',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10859,
        'CustomerID': 'FRANK',
        'OrderDate': '1998-01-29T00:00:00.000Z',
        'ShippedDate': '1998-02-02T00:00:00.000Z',
        'Freight': 76.1,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10860,
        'CustomerID': 'FRANR',
        'OrderDate': '1998-01-29T00:00:00.000Z',
        'ShippedDate': '1998-02-04T00:00:00.000Z',
        'Freight': 19.26,
        'ShipName': 'France restauration',
        'ShipAddress': '54, rue Royale',
        'ShipCity': 'Nantes',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10861,
        'CustomerID': 'WHITC',
        'OrderDate': '1998-01-30T00:00:00.000Z',
        'ShippedDate': '1998-02-17T00:00:00.000Z',
        'Freight': 14.93,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10862,
        'CustomerID': 'LEHMS',
        'OrderDate': '1998-01-30T00:00:00.000Z',
        'ShippedDate': '1998-02-02T00:00:00.000Z',
        'Freight': 53.23,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10863,
        'CustomerID': 'HILAA',
        'OrderDate': '1998-02-02T00:00:00.000Z',
        'ShippedDate': '1998-02-17T00:00:00.000Z',
        'Freight': 30.26,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10864,
        'CustomerID': 'AROUT',
        'OrderDate': '1998-02-02T00:00:00.000Z',
        'ShippedDate': '1998-02-09T00:00:00.000Z',
        'Freight': 3.04,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10865,
        'CustomerID': 'QUICK',
        'OrderDate': '1998-02-02T00:00:00.000Z',
        'ShippedDate': '1998-02-12T00:00:00.000Z',
        'Freight': 348.14,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10866,
        'CustomerID': 'BERGS',
        'OrderDate': '1998-02-03T00:00:00.000Z',
        'ShippedDate': '1998-02-12T00:00:00.000Z',
        'Freight': 109.11,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10867,
        'CustomerID': 'LONEP',
        'OrderDate': '1998-02-03T00:00:00.000Z',
        'ShippedDate': '1998-02-11T00:00:00.000Z',
        'Freight': 1.93,
        'ShipName': 'Lonesome Pine Restaurant',
        'ShipAddress': '89 Chiaroscuro Rd.',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10868,
        'CustomerID': 'QUEEN',
        'OrderDate': '1998-02-04T00:00:00.000Z',
        'ShippedDate': '1998-02-23T00:00:00.000Z',
        'Freight': 191.27,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10869,
        'CustomerID': 'SEVES',
        'OrderDate': '1998-02-04T00:00:00.000Z',
        'ShippedDate': '1998-02-09T00:00:00.000Z',
        'Freight': 143.28,
        'ShipName': 'Seven Seas Imports',
        'ShipAddress': '90 Wadhurst Rd.',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10870,
        'CustomerID': 'WOLZA',
        'OrderDate': '1998-02-04T00:00:00.000Z',
        'ShippedDate': '1998-02-13T00:00:00.000Z',
        'Freight': 12.04,
        'ShipName': 'Wolski Zajazd',
        'ShipAddress': 'ul. Filtrowa 68',
        'ShipCity': 'Warszawa',
        'ShipRegion': null,
        'ShipCountry': 'Poland'
    },

    {
        'OrderID': 10871,
        'CustomerID': 'BONAP',
        'OrderDate': '1998-02-05T00:00:00.000Z',
        'ShippedDate': '1998-02-10T00:00:00.000Z',
        'Freight': 112.27,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10872,
        'CustomerID': 'GODOS',
        'OrderDate': '1998-02-05T00:00:00.000Z',
        'ShippedDate': '1998-02-09T00:00:00.000Z',
        'Freight': 175.32,
        'ShipName': 'Godos Cocina Típica',
        'ShipAddress': 'C/ Romero, 33',
        'ShipCity': 'Sevilla',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10873,
        'CustomerID': 'WILMK',
        'OrderDate': '1998-02-06T00:00:00.000Z',
        'ShippedDate': '1998-02-09T00:00:00.000Z',
        'Freight': 0.82,
        'ShipName': 'Wilman Kala',
        'ShipAddress': 'Keskuskatu 45',
        'ShipCity': 'Helsinki',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10874,
        'CustomerID': 'GODOS',
        'OrderDate': '1998-02-06T00:00:00.000Z',
        'ShippedDate': '1998-02-11T00:00:00.000Z',
        'Freight': 19.58,
        'ShipName': 'Godos Cocina Típica',
        'ShipAddress': 'C/ Romero, 33',
        'ShipCity': 'Sevilla',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10875,
        'CustomerID': 'BERGS',
        'OrderDate': '1998-02-06T00:00:00.000Z',
        'ShippedDate': '1998-03-03T00:00:00.000Z',
        'Freight': 32.37,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10876,
        'CustomerID': 'BONAP',
        'OrderDate': '1998-02-09T00:00:00.000Z',
        'ShippedDate': '1998-02-12T00:00:00.000Z',
        'Freight': 60.42,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10877,
        'CustomerID': 'RICAR',
        'OrderDate': '1998-02-09T00:00:00.000Z',
        'ShippedDate': '1998-02-19T00:00:00.000Z',
        'Freight': 38.06,
        'ShipName': 'Ricardo Adocicados',
        'ShipAddress': 'Av. Copacabana, 267',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10878,
        'CustomerID': 'QUICK',
        'OrderDate': '1998-02-10T00:00:00.000Z',
        'ShippedDate': '1998-02-12T00:00:00.000Z',
        'Freight': 46.69,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10879,
        'CustomerID': 'WILMK',
        'OrderDate': '1998-02-10T00:00:00.000Z',
        'ShippedDate': '1998-02-12T00:00:00.000Z',
        'Freight': 8.5,
        'ShipName': 'Wilman Kala',
        'ShipAddress': 'Keskuskatu 45',
        'ShipCity': 'Helsinki',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10880,
        'CustomerID': 'FOLKO',
        'OrderDate': '1998-02-10T00:00:00.000Z',
        'ShippedDate': '1998-02-18T00:00:00.000Z',
        'Freight': 88.01,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10881,
        'CustomerID': 'CACTU',
        'OrderDate': '1998-02-11T00:00:00.000Z',
        'ShippedDate': '1998-02-18T00:00:00.000Z',
        'Freight': 2.84,
        'ShipName': 'Cactus Comidas para llevar',
        'ShipAddress': 'Cerrito 333',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10882,
        'CustomerID': 'SAVEA',
        'OrderDate': '1998-02-11T00:00:00.000Z',
        'ShippedDate': '1998-02-20T00:00:00.000Z',
        'Freight': 23.1,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10883,
        'CustomerID': 'LONEP',
        'OrderDate': '1998-02-12T00:00:00.000Z',
        'ShippedDate': '1998-02-20T00:00:00.000Z',
        'Freight': 0.53,
        'ShipName': 'Lonesome Pine Restaurant',
        'ShipAddress': '89 Chiaroscuro Rd.',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10884,
        'CustomerID': 'LETSS',
        'OrderDate': '1998-02-12T00:00:00.000Z',
        'ShippedDate': '1998-02-13T00:00:00.000Z',
        'Freight': 90.97,
        'ShipName': 'Let\' Stop N Shop',
        'ShipAddress': '87 Polk St. Suite 5',
        'ShipCity': 'San Francisco',
        'ShipRegion': 'CA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10885,
        'CustomerID': 'SUPRD',
        'OrderDate': '1998-02-12T00:00:00.000Z',
        'ShippedDate': '1998-02-18T00:00:00.000Z',
        'Freight': 5.64,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10886,
        'CustomerID': 'HANAR',
        'OrderDate': '1998-02-13T00:00:00.000Z',
        'ShippedDate': '1998-03-02T00:00:00.000Z',
        'Freight': 4.99,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10887,
        'CustomerID': 'GALED',
        'OrderDate': '1998-02-13T00:00:00.000Z',
        'ShippedDate': '1998-02-16T00:00:00.000Z',
        'Freight': 1.25,
        'ShipName': 'Galería del gastronómo',
        'ShipAddress': 'Rambla de Cataluña, 23',
        'ShipCity': 'Barcelona',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10888,
        'CustomerID': 'GODOS',
        'OrderDate': '1998-02-16T00:00:00.000Z',
        'ShippedDate': '1998-02-23T00:00:00.000Z',
        'Freight': 51.87,
        'ShipName': 'Godos Cocina Típica',
        'ShipAddress': 'C/ Romero, 33',
        'ShipCity': 'Sevilla',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10889,
        'CustomerID': 'RATTC',
        'OrderDate': '1998-02-16T00:00:00.000Z',
        'ShippedDate': '1998-02-23T00:00:00.000Z',
        'Freight': 280.61,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10890,
        'CustomerID': 'DUMON',
        'OrderDate': '1998-02-16T00:00:00.000Z',
        'ShippedDate': '1998-02-18T00:00:00.000Z',
        'Freight': 32.76,
        'ShipName': 'Du monde entier',
        'ShipAddress': '67, rue des Cinquante Otages',
        'ShipCity': 'Nantes',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10891,
        'CustomerID': 'LEHMS',
        'OrderDate': '1998-02-17T00:00:00.000Z',
        'ShippedDate': '1998-02-19T00:00:00.000Z',
        'Freight': 20.37,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10892,
        'CustomerID': 'MAISD',
        'OrderDate': '1998-02-17T00:00:00.000Z',
        'ShippedDate': '1998-02-19T00:00:00.000Z',
        'Freight': 120.27,
        'ShipName': 'Maison Dewey',
        'ShipAddress': 'Rue Joseph-Bens 532',
        'ShipCity': 'Bruxelles',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10893,
        'CustomerID': 'KOENE',
        'OrderDate': '1998-02-18T00:00:00.000Z',
        'ShippedDate': '1998-02-20T00:00:00.000Z',
        'Freight': 77.78,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10894,
        'CustomerID': 'SAVEA',
        'OrderDate': '1998-02-18T00:00:00.000Z',
        'ShippedDate': '1998-02-20T00:00:00.000Z',
        'Freight': 116.13,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10895,
        'CustomerID': 'ERNSH',
        'OrderDate': '1998-02-18T00:00:00.000Z',
        'ShippedDate': '1998-02-23T00:00:00.000Z',
        'Freight': 162.75,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10896,
        'CustomerID': 'MAISD',
        'OrderDate': '1998-02-19T00:00:00.000Z',
        'ShippedDate': '1998-02-27T00:00:00.000Z',
        'Freight': 32.45,
        'ShipName': 'Maison Dewey',
        'ShipAddress': 'Rue Joseph-Bens 532',
        'ShipCity': 'Bruxelles',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10897,
        'CustomerID': 'HUNGO',
        'OrderDate': '1998-02-19T00:00:00.000Z',
        'ShippedDate': '1998-02-25T00:00:00.000Z',
        'Freight': 603.54,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10898,
        'CustomerID': 'OCEAN',
        'OrderDate': '1998-02-20T00:00:00.000Z',
        'ShippedDate': '1998-03-06T00:00:00.000Z',
        'Freight': 1.27,
        'ShipName': 'Océano Atlántico Ltda.',
        'ShipAddress': 'Ing. Gustavo Moncada 8585 Piso 20-A',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10899,
        'CustomerID': 'LILAS',
        'OrderDate': '1998-02-20T00:00:00.000Z',
        'ShippedDate': '1998-02-26T00:00:00.000Z',
        'Freight': 1.21,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10900,
        'CustomerID': 'WELLI',
        'OrderDate': '1998-02-20T00:00:00.000Z',
        'ShippedDate': '1998-03-04T00:00:00.000Z',
        'Freight': 1.66,
        'ShipName': 'Wellington Importadora',
        'ShipAddress': 'Rua do Mercado, 12',
        'ShipCity': 'Resende',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10901,
        'CustomerID': 'HILAA',
        'OrderDate': '1998-02-23T00:00:00.000Z',
        'ShippedDate': '1998-02-26T00:00:00.000Z',
        'Freight': 62.09,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10902,
        'CustomerID': 'FOLKO',
        'OrderDate': '1998-02-23T00:00:00.000Z',
        'ShippedDate': '1998-03-03T00:00:00.000Z',
        'Freight': 44.15,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10903,
        'CustomerID': 'HANAR',
        'OrderDate': '1998-02-24T00:00:00.000Z',
        'ShippedDate': '1998-03-04T00:00:00.000Z',
        'Freight': 36.71,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10904,
        'CustomerID': 'WHITC',
        'OrderDate': '1998-02-24T00:00:00.000Z',
        'ShippedDate': '1998-02-27T00:00:00.000Z',
        'Freight': 162.95,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10905,
        'CustomerID': 'WELLI',
        'OrderDate': '1998-02-24T00:00:00.000Z',
        'ShippedDate': '1998-03-06T00:00:00.000Z',
        'Freight': 13.72,
        'ShipName': 'Wellington Importadora',
        'ShipAddress': 'Rua do Mercado, 12',
        'ShipCity': 'Resende',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10906,
        'CustomerID': 'WOLZA',
        'OrderDate': '1998-02-25T00:00:00.000Z',
        'ShippedDate': '1998-03-03T00:00:00.000Z',
        'Freight': 26.29,
        'ShipName': 'Wolski Zajazd',
        'ShipAddress': 'ul. Filtrowa 68',
        'ShipCity': 'Warszawa',
        'ShipRegion': null,
        'ShipCountry': 'Poland'
    },

    {
        'OrderID': 10907,
        'CustomerID': 'SPECD',
        'OrderDate': '1998-02-25T00:00:00.000Z',
        'ShippedDate': '1998-02-27T00:00:00.000Z',
        'Freight': 9.19,
        'ShipName': 'Spécialités du monde',
        'ShipAddress': '25, rue Lauriston',
        'ShipCity': 'Paris',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10908,
        'CustomerID': 'REGGC',
        'OrderDate': '1998-02-26T00:00:00.000Z',
        'ShippedDate': '1998-03-06T00:00:00.000Z',
        'Freight': 32.96,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10909,
        'CustomerID': 'SANTG',
        'OrderDate': '1998-02-26T00:00:00.000Z',
        'ShippedDate': '1998-03-10T00:00:00.000Z',
        'Freight': 53.05,
        'ShipName': 'Santé Gourmet',
        'ShipAddress': 'Erling Skakkes gate 78',
        'ShipCity': 'Stavern',
        'ShipRegion': null,
        'ShipCountry': 'Norway'
    },

    {
        'OrderID': 10910,
        'CustomerID': 'WILMK',
        'OrderDate': '1998-02-26T00:00:00.000Z',
        'ShippedDate': '1998-03-04T00:00:00.000Z',
        'Freight': 38.11,
        'ShipName': 'Wilman Kala',
        'ShipAddress': 'Keskuskatu 45',
        'ShipCity': 'Helsinki',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 10911,
        'CustomerID': 'GODOS',
        'OrderDate': '1998-02-26T00:00:00.000Z',
        'ShippedDate': '1998-03-05T00:00:00.000Z',
        'Freight': 38.19,
        'ShipName': 'Godos Cocina Típica',
        'ShipAddress': 'C/ Romero, 33',
        'ShipCity': 'Sevilla',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10912,
        'CustomerID': 'HUNGO',
        'OrderDate': '1998-02-26T00:00:00.000Z',
        'ShippedDate': '1998-03-18T00:00:00.000Z',
        'Freight': 580.91,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10913,
        'CustomerID': 'QUEEN',
        'OrderDate': '1998-02-26T00:00:00.000Z',
        'ShippedDate': '1998-03-04T00:00:00.000Z',
        'Freight': 33.05,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10914,
        'CustomerID': 'QUEEN',
        'OrderDate': '1998-02-27T00:00:00.000Z',
        'ShippedDate': '1998-03-02T00:00:00.000Z',
        'Freight': 21.19,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10915,
        'CustomerID': 'TORTU',
        'OrderDate': '1998-02-27T00:00:00.000Z',
        'ShippedDate': '1998-03-02T00:00:00.000Z',
        'Freight': 3.51,
        'ShipName': 'Tortuga Restaurante',
        'ShipAddress': 'Avda. Azteca 123',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10916,
        'CustomerID': 'RANCH',
        'OrderDate': '1998-02-27T00:00:00.000Z',
        'ShippedDate': '1998-03-09T00:00:00.000Z',
        'Freight': 63.77,
        'ShipName': 'Rancho grande',
        'ShipAddress': 'Av. del Libertador 900',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10917,
        'CustomerID': 'ROMEY',
        'OrderDate': '1998-03-02T00:00:00.000Z',
        'ShippedDate': '1998-03-11T00:00:00.000Z',
        'Freight': 8.29,
        'ShipName': 'Romero y tomillo',
        'ShipAddress': 'Gran Vía, 1',
        'ShipCity': 'Madrid',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10918,
        'CustomerID': 'BOTTM',
        'OrderDate': '1998-03-02T00:00:00.000Z',
        'ShippedDate': '1998-03-11T00:00:00.000Z',
        'Freight': 48.83,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10919,
        'CustomerID': 'LINOD',
        'OrderDate': '1998-03-02T00:00:00.000Z',
        'ShippedDate': '1998-03-04T00:00:00.000Z',
        'Freight': 19.8,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10920,
        'CustomerID': 'AROUT',
        'OrderDate': '1998-03-03T00:00:00.000Z',
        'ShippedDate': '1998-03-09T00:00:00.000Z',
        'Freight': 29.61,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10921,
        'CustomerID': 'VAFFE',
        'OrderDate': '1998-03-03T00:00:00.000Z',
        'ShippedDate': '1998-03-09T00:00:00.000Z',
        'Freight': 176.48,
        'ShipName': 'Vaffeljernet',
        'ShipAddress': 'Smagsloget 45',
        'ShipCity': 'Århus',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10922,
        'CustomerID': 'HANAR',
        'OrderDate': '1998-03-03T00:00:00.000Z',
        'ShippedDate': '1998-03-05T00:00:00.000Z',
        'Freight': 62.74,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10923,
        'CustomerID': 'LAMAI',
        'OrderDate': '1998-03-03T00:00:00.000Z',
        'ShippedDate': '1998-03-13T00:00:00.000Z',
        'Freight': 68.26,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10924,
        'CustomerID': 'BERGS',
        'OrderDate': '1998-03-04T00:00:00.000Z',
        'ShippedDate': '1998-04-08T00:00:00.000Z',
        'Freight': 151.52,
        'ShipName': 'Berglunds snabbköp',
        'ShipAddress': 'Berguvsvägen  8',
        'ShipCity': 'Luleå',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10925,
        'CustomerID': 'HANAR',
        'OrderDate': '1998-03-04T00:00:00.000Z',
        'ShippedDate': '1998-03-13T00:00:00.000Z',
        'Freight': 2.27,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10926,
        'CustomerID': 'ANATR',
        'OrderDate': '1998-03-04T00:00:00.000Z',
        'ShippedDate': '1998-03-11T00:00:00.000Z',
        'Freight': 39.92,
        'ShipName': 'Ana Trujillo Emparedados y helados',
        'ShipAddress': 'Avda. de la Constitución 2222',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10927,
        'CustomerID': 'LACOR',
        'OrderDate': '1998-03-05T00:00:00.000Z',
        'ShippedDate': '1998-04-08T00:00:00.000Z',
        'Freight': 19.79,
        'ShipName': 'La corne d\'abondance',
        'ShipAddress': '67, avenue de l\'Europe',
        'ShipCity': 'Versailles',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10928,
        'CustomerID': 'GALED',
        'OrderDate': '1998-03-05T00:00:00.000Z',
        'ShippedDate': '1998-03-18T00:00:00.000Z',
        'Freight': 1.36,
        'ShipName': 'Galería del gastronómo',
        'ShipAddress': 'Rambla de Cataluña, 23',
        'ShipCity': 'Barcelona',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10929,
        'CustomerID': 'FRANK',
        'OrderDate': '1998-03-05T00:00:00.000Z',
        'ShippedDate': '1998-03-12T00:00:00.000Z',
        'Freight': 33.93,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10930,
        'CustomerID': 'SUPRD',
        'OrderDate': '1998-03-06T00:00:00.000Z',
        'ShippedDate': '1998-03-18T00:00:00.000Z',
        'Freight': 15.55,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10931,
        'CustomerID': 'RICSU',
        'OrderDate': '1998-03-06T00:00:00.000Z',
        'ShippedDate': '1998-03-19T00:00:00.000Z',
        'Freight': 13.6,
        'ShipName': 'Richter Supermarkt',
        'ShipAddress': 'Starenweg 5',
        'ShipCity': 'Genève',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10932,
        'CustomerID': 'BONAP',
        'OrderDate': '1998-03-06T00:00:00.000Z',
        'ShippedDate': '1998-03-24T00:00:00.000Z',
        'Freight': 134.64,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10933,
        'CustomerID': 'ISLAT',
        'OrderDate': '1998-03-06T00:00:00.000Z',
        'ShippedDate': '1998-03-16T00:00:00.000Z',
        'Freight': 54.15,
        'ShipName': 'Island Trading',
        'ShipAddress': 'Garden House Crowther Way',
        'ShipCity': 'Cowes',
        'ShipRegion': 'Isle of Wight',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10934,
        'CustomerID': 'LEHMS',
        'OrderDate': '1998-03-09T00:00:00.000Z',
        'ShippedDate': '1998-03-12T00:00:00.000Z',
        'Freight': 32.01,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10935,
        'CustomerID': 'WELLI',
        'OrderDate': '1998-03-09T00:00:00.000Z',
        'ShippedDate': '1998-03-18T00:00:00.000Z',
        'Freight': 47.59,
        'ShipName': 'Wellington Importadora',
        'ShipAddress': 'Rua do Mercado, 12',
        'ShipCity': 'Resende',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10936,
        'CustomerID': 'GREAL',
        'OrderDate': '1998-03-09T00:00:00.000Z',
        'ShippedDate': '1998-03-18T00:00:00.000Z',
        'Freight': 33.68,
        'ShipName': 'Great Lakes Food Market',
        'ShipAddress': '2732 Baker Blvd.',
        'ShipCity': 'Eugene',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10937,
        'CustomerID': 'CACTU',
        'OrderDate': '1998-03-10T00:00:00.000Z',
        'ShippedDate': '1998-03-13T00:00:00.000Z',
        'Freight': 31.51,
        'ShipName': 'Cactus Comidas para llevar',
        'ShipAddress': 'Cerrito 333',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10938,
        'CustomerID': 'QUICK',
        'OrderDate': '1998-03-10T00:00:00.000Z',
        'ShippedDate': '1998-03-16T00:00:00.000Z',
        'Freight': 31.89,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10939,
        'CustomerID': 'MAGAA',
        'OrderDate': '1998-03-10T00:00:00.000Z',
        'ShippedDate': '1998-03-13T00:00:00.000Z',
        'Freight': 76.33,
        'ShipName': 'Magazzini Alimentari Riuniti',
        'ShipAddress': 'Via Ludovico il Moro 22',
        'ShipCity': 'Bergamo',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10940,
        'CustomerID': 'BONAP',
        'OrderDate': '1998-03-11T00:00:00.000Z',
        'ShippedDate': '1998-03-23T00:00:00.000Z',
        'Freight': 19.77,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10941,
        'CustomerID': 'SAVEA',
        'OrderDate': '1998-03-11T00:00:00.000Z',
        'ShippedDate': '1998-03-20T00:00:00.000Z',
        'Freight': 400.81,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10942,
        'CustomerID': 'REGGC',
        'OrderDate': '1998-03-11T00:00:00.000Z',
        'ShippedDate': '1998-03-18T00:00:00.000Z',
        'Freight': 17.95,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10943,
        'CustomerID': 'BSBEV',
        'OrderDate': '1998-03-11T00:00:00.000Z',
        'ShippedDate': '1998-03-19T00:00:00.000Z',
        'Freight': 2.17,
        'ShipName': 'B\' Beverages',
        'ShipAddress': 'Fauntleroy Circus',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10944,
        'CustomerID': 'BOTTM',
        'OrderDate': '1998-03-12T00:00:00.000Z',
        'ShippedDate': '1998-03-13T00:00:00.000Z',
        'Freight': 52.92,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10945,
        'CustomerID': 'MORGK',
        'OrderDate': '1998-03-12T00:00:00.000Z',
        'ShippedDate': '1998-03-18T00:00:00.000Z',
        'Freight': 10.22,
        'ShipName': 'Morgenstern Gesundkost',
        'ShipAddress': 'Heerstr. 22',
        'ShipCity': 'Leipzig',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10946,
        'CustomerID': 'VAFFE',
        'OrderDate': '1998-03-12T00:00:00.000Z',
        'ShippedDate': '1998-03-19T00:00:00.000Z',
        'Freight': 27.2,
        'ShipName': 'Vaffeljernet',
        'ShipAddress': 'Smagsloget 45',
        'ShipCity': 'Århus',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10947,
        'CustomerID': 'BSBEV',
        'OrderDate': '1998-03-13T00:00:00.000Z',
        'ShippedDate': '1998-03-16T00:00:00.000Z',
        'Freight': 3.26,
        'ShipName': 'B\' Beverages',
        'ShipAddress': 'Fauntleroy Circus',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10948,
        'CustomerID': 'GODOS',
        'OrderDate': '1998-03-13T00:00:00.000Z',
        'ShippedDate': '1998-03-19T00:00:00.000Z',
        'Freight': 23.39,
        'ShipName': 'Godos Cocina Típica',
        'ShipAddress': 'C/ Romero, 33',
        'ShipCity': 'Sevilla',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10949,
        'CustomerID': 'BOTTM',
        'OrderDate': '1998-03-13T00:00:00.000Z',
        'ShippedDate': '1998-03-17T00:00:00.000Z',
        'Freight': 74.44,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10950,
        'CustomerID': 'MAGAA',
        'OrderDate': '1998-03-16T00:00:00.000Z',
        'ShippedDate': '1998-03-23T00:00:00.000Z',
        'Freight': 2.5,
        'ShipName': 'Magazzini Alimentari Riuniti',
        'ShipAddress': 'Via Ludovico il Moro 22',
        'ShipCity': 'Bergamo',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 10951,
        'CustomerID': 'RICSU',
        'OrderDate': '1998-03-16T00:00:00.000Z',
        'ShippedDate': '1998-04-07T00:00:00.000Z',
        'Freight': 30.85,
        'ShipName': 'Richter Supermarkt',
        'ShipAddress': 'Starenweg 5',
        'ShipCity': 'Genève',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10952,
        'CustomerID': 'ALFKI',
        'OrderDate': '1998-03-16T00:00:00.000Z',
        'ShippedDate': '1998-03-24T00:00:00.000Z',
        'Freight': 40.42,
        'ShipName': 'Alfred\' Futterkiste',
        'ShipAddress': 'Obere Str. 57',
        'ShipCity': 'Berlin',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10953,
        'CustomerID': 'AROUT',
        'OrderDate': '1998-03-16T00:00:00.000Z',
        'ShippedDate': '1998-03-25T00:00:00.000Z',
        'Freight': 23.72,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10954,
        'CustomerID': 'LINOD',
        'OrderDate': '1998-03-17T00:00:00.000Z',
        'ShippedDate': '1998-03-20T00:00:00.000Z',
        'Freight': 27.91,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10955,
        'CustomerID': 'FOLKO',
        'OrderDate': '1998-03-17T00:00:00.000Z',
        'ShippedDate': '1998-03-20T00:00:00.000Z',
        'Freight': 3.26,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10956,
        'CustomerID': 'BLAUS',
        'OrderDate': '1998-03-17T00:00:00.000Z',
        'ShippedDate': '1998-03-20T00:00:00.000Z',
        'Freight': 44.65,
        'ShipName': 'Blauer See Delikatessen',
        'ShipAddress': 'Forsterstr. 57',
        'ShipCity': 'Mannheim',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10957,
        'CustomerID': 'HILAA',
        'OrderDate': '1998-03-18T00:00:00.000Z',
        'ShippedDate': '1998-03-27T00:00:00.000Z',
        'Freight': 105.36,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10958,
        'CustomerID': 'OCEAN',
        'OrderDate': '1998-03-18T00:00:00.000Z',
        'ShippedDate': '1998-03-27T00:00:00.000Z',
        'Freight': 49.56,
        'ShipName': 'Océano Atlántico Ltda.',
        'ShipAddress': 'Ing. Gustavo Moncada 8585 Piso 20-A',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10959,
        'CustomerID': 'GOURL',
        'OrderDate': '1998-03-18T00:00:00.000Z',
        'ShippedDate': '1998-03-23T00:00:00.000Z',
        'Freight': 4.98,
        'ShipName': 'Gourmet Lanchonetes',
        'ShipAddress': 'Av. Brasil, 442',
        'ShipCity': 'Campinas',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10960,
        'CustomerID': 'HILAA',
        'OrderDate': '1998-03-19T00:00:00.000Z',
        'ShippedDate': '1998-04-08T00:00:00.000Z',
        'Freight': 2.08,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10961,
        'CustomerID': 'QUEEN',
        'OrderDate': '1998-03-19T00:00:00.000Z',
        'ShippedDate': '1998-03-30T00:00:00.000Z',
        'Freight': 104.47,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10962,
        'CustomerID': 'QUICK',
        'OrderDate': '1998-03-19T00:00:00.000Z',
        'ShippedDate': '1998-03-23T00:00:00.000Z',
        'Freight': 275.79,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10963,
        'CustomerID': 'FURIB',
        'OrderDate': '1998-03-19T00:00:00.000Z',
        'ShippedDate': '1998-03-26T00:00:00.000Z',
        'Freight': 2.7,
        'ShipName': 'Furia Bacalhau e Frutos do Mar',
        'ShipAddress': 'Jardim das rosas n. 32',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 10964,
        'CustomerID': 'SPECD',
        'OrderDate': '1998-03-20T00:00:00.000Z',
        'ShippedDate': '1998-03-24T00:00:00.000Z',
        'Freight': 87.38,
        'ShipName': 'Spécialités du monde',
        'ShipAddress': '25, rue Lauriston',
        'ShipCity': 'Paris',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10965,
        'CustomerID': 'OLDWO',
        'OrderDate': '1998-03-20T00:00:00.000Z',
        'ShippedDate': '1998-03-30T00:00:00.000Z',
        'Freight': 144.38,
        'ShipName': 'Old World Delicatessen',
        'ShipAddress': '2743 Bering St.',
        'ShipCity': 'Anchorage',
        'ShipRegion': 'AK',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10966,
        'CustomerID': 'CHOPS',
        'OrderDate': '1998-03-20T00:00:00.000Z',
        'ShippedDate': '1998-04-08T00:00:00.000Z',
        'Freight': 27.19,
        'ShipName': 'Chop-suey Chinese',
        'ShipAddress': 'Hauptstr. 31',
        'ShipCity': 'Bern',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 10967,
        'CustomerID': 'TOMSP',
        'OrderDate': '1998-03-23T00:00:00.000Z',
        'ShippedDate': '1998-04-02T00:00:00.000Z',
        'Freight': 62.22,
        'ShipName': 'Toms Spezialitäten',
        'ShipAddress': 'Luisenstr. 48',
        'ShipCity': 'Münster',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10968,
        'CustomerID': 'ERNSH',
        'OrderDate': '1998-03-23T00:00:00.000Z',
        'ShippedDate': '1998-04-01T00:00:00.000Z',
        'Freight': 74.6,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10969,
        'CustomerID': 'COMMI',
        'OrderDate': '1998-03-23T00:00:00.000Z',
        'ShippedDate': '1998-03-30T00:00:00.000Z',
        'Freight': 0.21,
        'ShipName': 'Comércio Mineiro',
        'ShipAddress': 'Av. dos Lusíadas, 23',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10970,
        'CustomerID': 'BOLID',
        'OrderDate': '1998-03-24T00:00:00.000Z',
        'ShippedDate': '1998-04-24T00:00:00.000Z',
        'Freight': 16.16,
        'ShipName': 'Bólido Comidas preparadas',
        'ShipAddress': 'C/ Araquil, 67',
        'ShipCity': 'Madrid',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 10971,
        'CustomerID': 'FRANR',
        'OrderDate': '1998-03-24T00:00:00.000Z',
        'ShippedDate': '1998-04-02T00:00:00.000Z',
        'Freight': 121.82,
        'ShipName': 'France restauration',
        'ShipAddress': '54, rue Royale',
        'ShipCity': 'Nantes',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10972,
        'CustomerID': 'LACOR',
        'OrderDate': '1998-03-24T00:00:00.000Z',
        'ShippedDate': '1998-03-26T00:00:00.000Z',
        'Freight': 0.02,
        'ShipName': 'La corne d\'abondance',
        'ShipAddress': '67, avenue de l\'Europe',
        'ShipCity': 'Versailles',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10973,
        'CustomerID': 'LACOR',
        'OrderDate': '1998-03-24T00:00:00.000Z',
        'ShippedDate': '1998-03-27T00:00:00.000Z',
        'Freight': 15.17,
        'ShipName': 'La corne d\'abondance',
        'ShipAddress': '67, avenue de l\'Europe',
        'ShipCity': 'Versailles',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 10974,
        'CustomerID': 'SPLIR',
        'OrderDate': '1998-03-25T00:00:00.000Z',
        'ShippedDate': '1998-04-03T00:00:00.000Z',
        'Freight': 12.96,
        'ShipName': 'Split Rail Beer & Ale',
        'ShipAddress': 'P.O. Box 555',
        'ShipCity': 'Lander',
        'ShipRegion': 'WY',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10975,
        'CustomerID': 'BOTTM',
        'OrderDate': '1998-03-25T00:00:00.000Z',
        'ShippedDate': '1998-03-27T00:00:00.000Z',
        'Freight': 32.27,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10976,
        'CustomerID': 'HILAA',
        'OrderDate': '1998-03-25T00:00:00.000Z',
        'ShippedDate': '1998-04-03T00:00:00.000Z',
        'Freight': 37.97,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10977,
        'CustomerID': 'FOLKO',
        'OrderDate': '1998-03-26T00:00:00.000Z',
        'ShippedDate': '1998-04-10T00:00:00.000Z',
        'Freight': 208.5,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10978,
        'CustomerID': 'MAISD',
        'OrderDate': '1998-03-26T00:00:00.000Z',
        'ShippedDate': '1998-04-23T00:00:00.000Z',
        'Freight': 32.82,
        'ShipName': 'Maison Dewey',
        'ShipAddress': 'Rue Joseph-Bens 532',
        'ShipCity': 'Bruxelles',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 10979,
        'CustomerID': 'ERNSH',
        'OrderDate': '1998-03-26T00:00:00.000Z',
        'ShippedDate': '1998-03-31T00:00:00.000Z',
        'Freight': 353.07,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10980,
        'CustomerID': 'FOLKO',
        'OrderDate': '1998-03-27T00:00:00.000Z',
        'ShippedDate': '1998-04-17T00:00:00.000Z',
        'Freight': 1.26,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10981,
        'CustomerID': 'HANAR',
        'OrderDate': '1998-03-27T00:00:00.000Z',
        'ShippedDate': '1998-04-02T00:00:00.000Z',
        'Freight': 193.37,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10982,
        'CustomerID': 'BOTTM',
        'OrderDate': '1998-03-27T00:00:00.000Z',
        'ShippedDate': '1998-04-08T00:00:00.000Z',
        'Freight': 14.01,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 10983,
        'CustomerID': 'SAVEA',
        'OrderDate': '1998-03-27T00:00:00.000Z',
        'ShippedDate': '1998-04-06T00:00:00.000Z',
        'Freight': 657.54,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10984,
        'CustomerID': 'SAVEA',
        'OrderDate': '1998-03-30T00:00:00.000Z',
        'ShippedDate': '1998-04-03T00:00:00.000Z',
        'Freight': 211.22,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10985,
        'CustomerID': 'HUNGO',
        'OrderDate': '1998-03-30T00:00:00.000Z',
        'ShippedDate': '1998-04-02T00:00:00.000Z',
        'Freight': 91.51,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 10986,
        'CustomerID': 'OCEAN',
        'OrderDate': '1998-03-30T00:00:00.000Z',
        'ShippedDate': '1998-04-21T00:00:00.000Z',
        'Freight': 217.86,
        'ShipName': 'Océano Atlántico Ltda.',
        'ShipAddress': 'Ing. Gustavo Moncada 8585 Piso 20-A',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 10987,
        'CustomerID': 'EASTC',
        'OrderDate': '1998-03-31T00:00:00.000Z',
        'ShippedDate': '1998-04-06T00:00:00.000Z',
        'Freight': 185.48,
        'ShipName': 'Eastern Connection',
        'ShipAddress': '35 King George',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 10988,
        'CustomerID': 'RATTC',
        'OrderDate': '1998-03-31T00:00:00.000Z',
        'ShippedDate': '1998-04-10T00:00:00.000Z',
        'Freight': 61.14,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10989,
        'CustomerID': 'QUEDE',
        'OrderDate': '1998-03-31T00:00:00.000Z',
        'ShippedDate': '1998-04-02T00:00:00.000Z',
        'Freight': 34.76,
        'ShipName': 'Que Delícia',
        'ShipAddress': 'Rua da Panificadora, 12',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 10990,
        'CustomerID': 'ERNSH',
        'OrderDate': '1998-04-01T00:00:00.000Z',
        'ShippedDate': '1998-04-07T00:00:00.000Z',
        'Freight': 117.61,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 10991,
        'CustomerID': 'QUICK',
        'OrderDate': '1998-04-01T00:00:00.000Z',
        'ShippedDate': '1998-04-07T00:00:00.000Z',
        'Freight': 38.51,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10992,
        'CustomerID': 'THEBI',
        'OrderDate': '1998-04-01T00:00:00.000Z',
        'ShippedDate': '1998-04-03T00:00:00.000Z',
        'Freight': 4.27,
        'ShipName': 'The Big Cheese',
        'ShipAddress': '89 Jefferson Way Suite 2',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 10993,
        'CustomerID': 'FOLKO',
        'OrderDate': '1998-04-01T00:00:00.000Z',
        'ShippedDate': '1998-04-10T00:00:00.000Z',
        'Freight': 8.81,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 10994,
        'CustomerID': 'VAFFE',
        'OrderDate': '1998-04-02T00:00:00.000Z',
        'ShippedDate': '1998-04-09T00:00:00.000Z',
        'Freight': 65.53,
        'ShipName': 'Vaffeljernet',
        'ShipAddress': 'Smagsloget 45',
        'ShipCity': 'Århus',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 10995,
        'CustomerID': 'PERIC',
        'OrderDate': '1998-04-02T00:00:00.000Z',
        'ShippedDate': '1998-04-06T00:00:00.000Z',
        'Freight': 46,
        'ShipName': 'Pericles Comidas clásicas',
        'ShipAddress': 'Calle Dr. Jorge Cash 321',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 10996,
        'CustomerID': 'QUICK',
        'OrderDate': '1998-04-02T00:00:00.000Z',
        'ShippedDate': '1998-04-10T00:00:00.000Z',
        'Freight': 1.12,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 10997,
        'CustomerID': 'LILAS',
        'OrderDate': '1998-04-03T00:00:00.000Z',
        'ShippedDate': '1998-04-13T00:00:00.000Z',
        'Freight': 73.91,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 10998,
        'CustomerID': 'WOLZA',
        'OrderDate': '1998-04-03T00:00:00.000Z',
        'ShippedDate': '1998-04-17T00:00:00.000Z',
        'Freight': 20.31,
        'ShipName': 'Wolski Zajazd',
        'ShipAddress': 'ul. Filtrowa 68',
        'ShipCity': 'Warszawa',
        'ShipRegion': null,
        'ShipCountry': 'Poland'
    },

    {
        'OrderID': 10999,
        'CustomerID': 'OTTIK',
        'OrderDate': '1998-04-03T00:00:00.000Z',
        'ShippedDate': '1998-04-10T00:00:00.000Z',
        'Freight': 96.35,
        'ShipName': 'Ottilies Käseladen',
        'ShipAddress': 'Mehrheimerstr. 369',
        'ShipCity': 'Köln',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 11000,
        'CustomerID': 'RATTC',
        'OrderDate': '1998-04-06T00:00:00.000Z',
        'ShippedDate': '1998-04-14T00:00:00.000Z',
        'Freight': 55.12,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11001,
        'CustomerID': 'FOLKO',
        'OrderDate': '1998-04-06T00:00:00.000Z',
        'ShippedDate': '1998-04-14T00:00:00.000Z',
        'Freight': 197.3,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 11002,
        'CustomerID': 'SAVEA',
        'OrderDate': '1998-04-06T00:00:00.000Z',
        'ShippedDate': '1998-04-16T00:00:00.000Z',
        'Freight': 141.16,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11003,
        'CustomerID': 'THECR',
        'OrderDate': '1998-04-06T00:00:00.000Z',
        'ShippedDate': '1998-04-08T00:00:00.000Z',
        'Freight': 14.91,
        'ShipName': 'The Cracker Box',
        'ShipAddress': '55 Grizzly Peak Rd.',
        'ShipCity': 'Butte',
        'ShipRegion': 'MT',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11004,
        'CustomerID': 'MAISD',
        'OrderDate': '1998-04-07T00:00:00.000Z',
        'ShippedDate': '1998-04-20T00:00:00.000Z',
        'Freight': 44.84,
        'ShipName': 'Maison Dewey',
        'ShipAddress': 'Rue Joseph-Bens 532',
        'ShipCity': 'Bruxelles',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 11005,
        'CustomerID': 'WILMK',
        'OrderDate': '1998-04-07T00:00:00.000Z',
        'ShippedDate': '1998-04-10T00:00:00.000Z',
        'Freight': 0.75,
        'ShipName': 'Wilman Kala',
        'ShipAddress': 'Keskuskatu 45',
        'ShipCity': 'Helsinki',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 11006,
        'CustomerID': 'GREAL',
        'OrderDate': '1998-04-07T00:00:00.000Z',
        'ShippedDate': '1998-04-15T00:00:00.000Z',
        'Freight': 25.19,
        'ShipName': 'Great Lakes Food Market',
        'ShipAddress': '2732 Baker Blvd.',
        'ShipCity': 'Eugene',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11007,
        'CustomerID': 'PRINI',
        'OrderDate': '1998-04-08T00:00:00.000Z',
        'ShippedDate': '1998-04-13T00:00:00.000Z',
        'Freight': 202.24,
        'ShipName': 'Princesa Isabel Vinhos',
        'ShipAddress': 'Estrada da saúde n. 58',
        'ShipCity': 'Lisboa',
        'ShipRegion': null,
        'ShipCountry': 'Portugal'
    },

    {
        'OrderID': 11008,
        'CustomerID': 'ERNSH',
        'OrderDate': '1998-04-08T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 79.46,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 11009,
        'CustomerID': 'GODOS',
        'OrderDate': '1998-04-08T00:00:00.000Z',
        'ShippedDate': '1998-04-10T00:00:00.000Z',
        'Freight': 59.11,
        'ShipName': 'Godos Cocina Típica',
        'ShipAddress': 'C/ Romero, 33',
        'ShipCity': 'Sevilla',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 11010,
        'CustomerID': 'REGGC',
        'OrderDate': '1998-04-09T00:00:00.000Z',
        'ShippedDate': '1998-04-21T00:00:00.000Z',
        'Freight': 28.71,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 11011,
        'CustomerID': 'ALFKI',
        'OrderDate': '1998-04-09T00:00:00.000Z',
        'ShippedDate': '1998-04-13T00:00:00.000Z',
        'Freight': 1.21,
        'ShipName': 'Alfred\' Futterkiste',
        'ShipAddress': 'Obere Str. 57',
        'ShipCity': 'Berlin',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 11012,
        'CustomerID': 'FRANK',
        'OrderDate': '1998-04-09T00:00:00.000Z',
        'ShippedDate': '1998-04-17T00:00:00.000Z',
        'Freight': 242.95,
        'ShipName': 'Frankenversand',
        'ShipAddress': 'Berliner Platz 43',
        'ShipCity': 'München',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 11013,
        'CustomerID': 'ROMEY',
        'OrderDate': '1998-04-09T00:00:00.000Z',
        'ShippedDate': '1998-04-10T00:00:00.000Z',
        'Freight': 32.99,
        'ShipName': 'Romero y tomillo',
        'ShipAddress': 'Gran Vía, 1',
        'ShipCity': 'Madrid',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 11014,
        'CustomerID': 'LINOD',
        'OrderDate': '1998-04-10T00:00:00.000Z',
        'ShippedDate': '1998-04-15T00:00:00.000Z',
        'Freight': 23.6,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 11015,
        'CustomerID': 'SANTG',
        'OrderDate': '1998-04-10T00:00:00.000Z',
        'ShippedDate': '1998-04-20T00:00:00.000Z',
        'Freight': 4.62,
        'ShipName': 'Santé Gourmet',
        'ShipAddress': 'Erling Skakkes gate 78',
        'ShipCity': 'Stavern',
        'ShipRegion': null,
        'ShipCountry': 'Norway'
    },

    {
        'OrderID': 11016,
        'CustomerID': 'AROUT',
        'OrderDate': '1998-04-10T00:00:00.000Z',
        'ShippedDate': '1998-04-13T00:00:00.000Z',
        'Freight': 33.8,
        'ShipName': 'Around the Horn',
        'ShipAddress': 'Brook Farm Stratford St. Mary',
        'ShipCity': 'Colchester',
        'ShipRegion': 'Essex',
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 11017,
        'CustomerID': 'ERNSH',
        'OrderDate': '1998-04-13T00:00:00.000Z',
        'ShippedDate': '1998-04-20T00:00:00.000Z',
        'Freight': 754.26,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 11018,
        'CustomerID': 'LONEP',
        'OrderDate': '1998-04-13T00:00:00.000Z',
        'ShippedDate': '1998-04-16T00:00:00.000Z',
        'Freight': 11.65,
        'ShipName': 'Lonesome Pine Restaurant',
        'ShipAddress': '89 Chiaroscuro Rd.',
        'ShipCity': 'Portland',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11019,
        'CustomerID': 'RANCH',
        'OrderDate': '1998-04-13T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 3.17,
        'ShipName': 'Rancho grande',
        'ShipAddress': 'Av. del Libertador 900',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 11020,
        'CustomerID': 'OTTIK',
        'OrderDate': '1998-04-14T00:00:00.000Z',
        'ShippedDate': '1998-04-16T00:00:00.000Z',
        'Freight': 43.3,
        'ShipName': 'Ottilies Käseladen',
        'ShipAddress': 'Mehrheimerstr. 369',
        'ShipCity': 'Köln',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 11021,
        'CustomerID': 'QUICK',
        'OrderDate': '1998-04-14T00:00:00.000Z',
        'ShippedDate': '1998-04-21T00:00:00.000Z',
        'Freight': 297.18,
        'ShipName': 'QUICK-Stop',
        'ShipAddress': 'Taucherstraße 10',
        'ShipCity': 'Cunewalde',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 11022,
        'CustomerID': 'HANAR',
        'OrderDate': '1998-04-14T00:00:00.000Z',
        'ShippedDate': '1998-05-04T00:00:00.000Z',
        'Freight': 6.27,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 11023,
        'CustomerID': 'BSBEV',
        'OrderDate': '1998-04-14T00:00:00.000Z',
        'ShippedDate': '1998-04-24T00:00:00.000Z',
        'Freight': 123.83,
        'ShipName': 'B\' Beverages',
        'ShipAddress': 'Fauntleroy Circus',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 11024,
        'CustomerID': 'EASTC',
        'OrderDate': '1998-04-15T00:00:00.000Z',
        'ShippedDate': '1998-04-20T00:00:00.000Z',
        'Freight': 74.36,
        'ShipName': 'Eastern Connection',
        'ShipAddress': '35 King George',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 11025,
        'CustomerID': 'WARTH',
        'OrderDate': '1998-04-15T00:00:00.000Z',
        'ShippedDate': '1998-04-24T00:00:00.000Z',
        'Freight': 29.17,
        'ShipName': 'Wartian Herkku',
        'ShipAddress': 'Torikatu 38',
        'ShipCity': 'Oulu',
        'ShipRegion': null,
        'ShipCountry': 'Finland'
    },

    {
        'OrderID': 11026,
        'CustomerID': 'FRANS',
        'OrderDate': '1998-04-15T00:00:00.000Z',
        'ShippedDate': '1998-04-28T00:00:00.000Z',
        'Freight': 47.09,
        'ShipName': 'Franchi S.p.A.',
        'ShipAddress': 'Via Monte Bianco 34',
        'ShipCity': 'Torino',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 11027,
        'CustomerID': 'BOTTM',
        'OrderDate': '1998-04-16T00:00:00.000Z',
        'ShippedDate': '1998-04-20T00:00:00.000Z',
        'Freight': 52.52,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 11028,
        'CustomerID': 'KOENE',
        'OrderDate': '1998-04-16T00:00:00.000Z',
        'ShippedDate': '1998-04-22T00:00:00.000Z',
        'Freight': 29.59,
        'ShipName': 'Königlich Essen',
        'ShipAddress': 'Maubelstr. 90',
        'ShipCity': 'Brandenburg',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 11029,
        'CustomerID': 'CHOPS',
        'OrderDate': '1998-04-16T00:00:00.000Z',
        'ShippedDate': '1998-04-27T00:00:00.000Z',
        'Freight': 47.84,
        'ShipName': 'Chop-suey Chinese',
        'ShipAddress': 'Hauptstr. 31',
        'ShipCity': 'Bern',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 11030,
        'CustomerID': 'SAVEA',
        'OrderDate': '1998-04-17T00:00:00.000Z',
        'ShippedDate': '1998-04-27T00:00:00.000Z',
        'Freight': 830.75,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11031,
        'CustomerID': 'SAVEA',
        'OrderDate': '1998-04-17T00:00:00.000Z',
        'ShippedDate': '1998-04-24T00:00:00.000Z',
        'Freight': 227.22,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11032,
        'CustomerID': 'WHITC',
        'OrderDate': '1998-04-17T00:00:00.000Z',
        'ShippedDate': '1998-04-23T00:00:00.000Z',
        'Freight': 606.19,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11033,
        'CustomerID': 'RICSU',
        'OrderDate': '1998-04-17T00:00:00.000Z',
        'ShippedDate': '1998-04-23T00:00:00.000Z',
        'Freight': 84.74,
        'ShipName': 'Richter Supermarkt',
        'ShipAddress': 'Starenweg 5',
        'ShipCity': 'Genève',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 11034,
        'CustomerID': 'OLDWO',
        'OrderDate': '1998-04-20T00:00:00.000Z',
        'ShippedDate': '1998-04-27T00:00:00.000Z',
        'Freight': 40.32,
        'ShipName': 'Old World Delicatessen',
        'ShipAddress': '2743 Bering St.',
        'ShipCity': 'Anchorage',
        'ShipRegion': 'AK',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11035,
        'CustomerID': 'SUPRD',
        'OrderDate': '1998-04-20T00:00:00.000Z',
        'ShippedDate': '1998-04-24T00:00:00.000Z',
        'Freight': 0.17,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 11036,
        'CustomerID': 'DRACD',
        'OrderDate': '1998-04-20T00:00:00.000Z',
        'ShippedDate': '1998-04-22T00:00:00.000Z',
        'Freight': 149.47,
        'ShipName': 'Drachenblut Delikatessen',
        'ShipAddress': 'Walserweg 21',
        'ShipCity': 'Aachen',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 11037,
        'CustomerID': 'GODOS',
        'OrderDate': '1998-04-21T00:00:00.000Z',
        'ShippedDate': '1998-04-27T00:00:00.000Z',
        'Freight': 3.2,
        'ShipName': 'Godos Cocina Típica',
        'ShipAddress': 'C/ Romero, 33',
        'ShipCity': 'Sevilla',
        'ShipRegion': null,
        'ShipCountry': 'Spain'
    },

    {
        'OrderID': 11038,
        'CustomerID': 'SUPRD',
        'OrderDate': '1998-04-21T00:00:00.000Z',
        'ShippedDate': '1998-04-30T00:00:00.000Z',
        'Freight': 29.59,
        'ShipName': 'Suprêmes délices',
        'ShipAddress': 'Boulevard Tirou, 255',
        'ShipCity': 'Charleroi',
        'ShipRegion': null,
        'ShipCountry': 'Belgium'
    },

    {
        'OrderID': 11039,
        'CustomerID': 'LINOD',
        'OrderDate': '1998-04-21T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 65,
        'ShipName': 'LINO-Delicateses',
        'ShipAddress': 'Ave. 5 de Mayo Porlamar',
        'ShipCity': 'I. de Margarita',
        'ShipRegion': 'Nueva Esparta',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 11040,
        'CustomerID': 'GREAL',
        'OrderDate': '1998-04-22T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 18.84,
        'ShipName': 'Great Lakes Food Market',
        'ShipAddress': '2732 Baker Blvd.',
        'ShipCity': 'Eugene',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11041,
        'CustomerID': 'CHOPS',
        'OrderDate': '1998-04-22T00:00:00.000Z',
        'ShippedDate': '1998-04-28T00:00:00.000Z',
        'Freight': 48.22,
        'ShipName': 'Chop-suey Chinese',
        'ShipAddress': 'Hauptstr. 31',
        'ShipCity': 'Bern',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 11042,
        'CustomerID': 'COMMI',
        'OrderDate': '1998-04-22T00:00:00.000Z',
        'ShippedDate': '1998-05-01T00:00:00.000Z',
        'Freight': 29.99,
        'ShipName': 'Comércio Mineiro',
        'ShipAddress': 'Av. dos Lusíadas, 23',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 11043,
        'CustomerID': 'SPECD',
        'OrderDate': '1998-04-22T00:00:00.000Z',
        'ShippedDate': '1998-04-29T00:00:00.000Z',
        'Freight': 8.8,
        'ShipName': 'Spécialités du monde',
        'ShipAddress': '25, rue Lauriston',
        'ShipCity': 'Paris',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 11044,
        'CustomerID': 'WOLZA',
        'OrderDate': '1998-04-23T00:00:00.000Z',
        'ShippedDate': '1998-05-01T00:00:00.000Z',
        'Freight': 8.72,
        'ShipName': 'Wolski Zajazd',
        'ShipAddress': 'ul. Filtrowa 68',
        'ShipCity': 'Warszawa',
        'ShipRegion': null,
        'ShipCountry': 'Poland'
    },

    {
        'OrderID': 11045,
        'CustomerID': 'BOTTM',
        'OrderDate': '1998-04-23T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 70.58,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 11046,
        'CustomerID': 'WANDK',
        'OrderDate': '1998-04-23T00:00:00.000Z',
        'ShippedDate': '1998-04-24T00:00:00.000Z',
        'Freight': 71.64,
        'ShipName': 'Die Wandernde Kuh',
        'ShipAddress': 'Adenauerallee 900',
        'ShipCity': 'Stuttgart',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 11047,
        'CustomerID': 'EASTC',
        'OrderDate': '1998-04-24T00:00:00.000Z',
        'ShippedDate': '1998-05-01T00:00:00.000Z',
        'Freight': 46.62,
        'ShipName': 'Eastern Connection',
        'ShipAddress': '35 King George',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 11048,
        'CustomerID': 'BOTTM',
        'OrderDate': '1998-04-24T00:00:00.000Z',
        'ShippedDate': '1998-04-30T00:00:00.000Z',
        'Freight': 24.12,
        'ShipName': 'Bottom-Dollar Markets',
        'ShipAddress': '23 Tsawassen Blvd.',
        'ShipCity': 'Tsawassen',
        'ShipRegion': 'BC',
        'ShipCountry': 'Canada'
    },

    {
        'OrderID': 11049,
        'CustomerID': 'GOURL',
        'OrderDate': '1998-04-24T00:00:00.000Z',
        'ShippedDate': '1998-05-04T00:00:00.000Z',
        'Freight': 8.34,
        'ShipName': 'Gourmet Lanchonetes',
        'ShipAddress': 'Av. Brasil, 442',
        'ShipCity': 'Campinas',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 11050,
        'CustomerID': 'FOLKO',
        'OrderDate': '1998-04-27T00:00:00.000Z',
        'ShippedDate': '1998-05-05T00:00:00.000Z',
        'Freight': 59.41,
        'ShipName': 'Folk och fä HB',
        'ShipAddress': 'Åkergatan 24',
        'ShipCity': 'Bräcke',
        'ShipRegion': null,
        'ShipCountry': 'Sweden'
    },

    {
        'OrderID': 11051,
        'CustomerID': 'LAMAI',
        'OrderDate': '1998-04-27T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 2.79,
        'ShipName': 'La maison d\'Asie',
        'ShipAddress': '1 rue Alsace-Lorraine',
        'ShipCity': 'Toulouse',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 11052,
        'CustomerID': 'HANAR',
        'OrderDate': '1998-04-27T00:00:00.000Z',
        'ShippedDate': '1998-05-01T00:00:00.000Z',
        'Freight': 67.26,
        'ShipName': 'Hanari Carnes',
        'ShipAddress': 'Rua do Paço, 67',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 11053,
        'CustomerID': 'PICCO',
        'OrderDate': '1998-04-27T00:00:00.000Z',
        'ShippedDate': '1998-04-29T00:00:00.000Z',
        'Freight': 53.05,
        'ShipName': 'Piccolo und mehr',
        'ShipAddress': 'Geislweg 14',
        'ShipCity': 'Salzburg',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 11054,
        'CustomerID': 'CACTU',
        'OrderDate': '1998-04-28T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 0.33,
        'ShipName': 'Cactus Comidas para llevar',
        'ShipAddress': 'Cerrito 333',
        'ShipCity': 'Buenos Aires',
        'ShipRegion': null,
        'ShipCountry': 'Argentina'
    },

    {
        'OrderID': 11055,
        'CustomerID': 'HILAA',
        'OrderDate': '1998-04-28T00:00:00.000Z',
        'ShippedDate': '1998-05-05T00:00:00.000Z',
        'Freight': 120.92,
        'ShipName': 'HILARION-Abastos',
        'ShipAddress': 'Carrera 22 con Ave. Carlos Soublette #8-35',
        'ShipCity': 'San Cristóbal',
        'ShipRegion': 'Táchira',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 11056,
        'CustomerID': 'EASTC',
        'OrderDate': '1998-04-28T00:00:00.000Z',
        'ShippedDate': '1998-05-01T00:00:00.000Z',
        'Freight': 278.96,
        'ShipName': 'Eastern Connection',
        'ShipAddress': '35 King George',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 11057,
        'CustomerID': 'NORTS',
        'OrderDate': '1998-04-29T00:00:00.000Z',
        'ShippedDate': '1998-05-01T00:00:00.000Z',
        'Freight': 4.13,
        'ShipName': 'North/South',
        'ShipAddress': 'South House 300 Queensbridge',
        'ShipCity': 'London',
        'ShipRegion': null,
        'ShipCountry': 'UK'
    },

    {
        'OrderID': 11058,
        'CustomerID': 'BLAUS',
        'OrderDate': '1998-04-29T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 31.14,
        'ShipName': 'Blauer See Delikatessen',
        'ShipAddress': 'Forsterstr. 57',
        'ShipCity': 'Mannheim',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 11059,
        'CustomerID': 'RICAR',
        'OrderDate': '1998-04-29T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 85.8,
        'ShipName': 'Ricardo Adocicados',
        'ShipAddress': 'Av. Copacabana, 267',
        'ShipCity': 'Rio de Janeiro',
        'ShipRegion': 'RJ',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 11060,
        'CustomerID': 'FRANS',
        'OrderDate': '1998-04-30T00:00:00.000Z',
        'ShippedDate': '1998-05-04T00:00:00.000Z',
        'Freight': 10.98,
        'ShipName': 'Franchi S.p.A.',
        'ShipAddress': 'Via Monte Bianco 34',
        'ShipCity': 'Torino',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 11061,
        'CustomerID': 'GREAL',
        'OrderDate': '1998-04-30T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 14.01,
        'ShipName': 'Great Lakes Food Market',
        'ShipAddress': '2732 Baker Blvd.',
        'ShipCity': 'Eugene',
        'ShipRegion': 'OR',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11062,
        'CustomerID': 'REGGC',
        'OrderDate': '1998-04-30T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 29.93,
        'ShipName': 'Reggiani Caseifici',
        'ShipAddress': 'Strada Provinciale 124',
        'ShipCity': 'Reggio Emilia',
        'ShipRegion': null,
        'ShipCountry': 'Italy'
    },

    {
        'OrderID': 11063,
        'CustomerID': 'HUNGO',
        'OrderDate': '1998-04-30T00:00:00.000Z',
        'ShippedDate': '1998-05-06T00:00:00.000Z',
        'Freight': 81.73,
        'ShipName': 'Hungry Owl All-Night Grocers',
        'ShipAddress': '8 Johnstown Road',
        'ShipCity': 'Cork',
        'ShipRegion': 'Co. Cork',
        'ShipCountry': 'Ireland'
    },

    {
        'OrderID': 11064,
        'CustomerID': 'SAVEA',
        'OrderDate': '1998-05-01T00:00:00.000Z',
        'ShippedDate': '1998-05-04T00:00:00.000Z',
        'Freight': 30.09,
        'ShipName': 'Save-a-lot Markets',
        'ShipAddress': '187 Suffolk Ln.',
        'ShipCity': 'Boise',
        'ShipRegion': 'ID',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11065,
        'CustomerID': 'LILAS',
        'OrderDate': '1998-05-01T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 12.91,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 11066,
        'CustomerID': 'WHITC',
        'OrderDate': '1998-05-01T00:00:00.000Z',
        'ShippedDate': '1998-05-04T00:00:00.000Z',
        'Freight': 44.72,
        'ShipName': 'White Clover Markets',
        'ShipAddress': '1029 - 12th Ave. S.',
        'ShipCity': 'Seattle',
        'ShipRegion': 'WA',
        'ShipCountry': 'USA'
    },

    {
        'OrderID': 11067,
        'CustomerID': 'DRACD',
        'OrderDate': '1998-05-04T00:00:00.000Z',
        'ShippedDate': '1998-05-06T00:00:00.000Z',
        'Freight': 7.98,
        'ShipName': 'Drachenblut Delikatessen',
        'ShipAddress': 'Walserweg 21',
        'ShipCity': 'Aachen',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 11068,
        'CustomerID': 'QUEEN',
        'OrderDate': '1998-05-04T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 81.75,
        'ShipName': 'Queen Cozinha',
        'ShipAddress': 'Alameda dos Canàrios, 891',
        'ShipCity': 'Sao Paulo',
        'ShipRegion': 'SP',
        'ShipCountry': 'Brazil'
    },

    {
        'OrderID': 11069,
        'CustomerID': 'TORTU',
        'OrderDate': '1998-05-04T00:00:00.000Z',
        'ShippedDate': '1998-05-06T00:00:00.000Z',
        'Freight': 15.67,
        'ShipName': 'Tortuga Restaurante',
        'ShipAddress': 'Avda. Azteca 123',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 11070,
        'CustomerID': 'LEHMS',
        'OrderDate': '1998-05-05T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 136,
        'ShipName': 'Lehmanns Marktstand',
        'ShipAddress': 'Magazinweg 7',
        'ShipCity': 'Frankfurt a.M.',
        'ShipRegion': null,
        'ShipCountry': 'Germany'
    },

    {
        'OrderID': 11071,
        'CustomerID': 'LILAS',
        'OrderDate': '1998-05-05T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 0.93,
        'ShipName': 'LILA-Supermercado',
        'ShipAddress': 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        'ShipCity': 'Barquisimeto',
        'ShipRegion': 'Lara',
        'ShipCountry': 'Venezuela'
    },

    {
        'OrderID': 11072,
        'CustomerID': 'ERNSH',
        'OrderDate': '1998-05-05T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 258.64,
        'ShipName': 'Ernst Handel',
        'ShipAddress': 'Kirchgasse 6',
        'ShipCity': 'Graz',
        'ShipRegion': null,
        'ShipCountry': 'Austria'
    },

    {
        'OrderID': 11073,
        'CustomerID': 'PERIC',
        'OrderDate': '1998-05-05T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 24.95,
        'ShipName': 'Pericles Comidas clásicas',
        'ShipAddress': 'Calle Dr. Jorge Cash 321',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },

    {
        'OrderID': 11074,
        'CustomerID': 'SIMOB',
        'OrderDate': '1998-05-06T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 18.44,
        'ShipName': 'Simons bistro',
        'ShipAddress': 'Vinbæltet 34',
        'ShipCity': 'Kobenhavn',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },

    {
        'OrderID': 11075,
        'CustomerID': 'RICSU',
        'OrderDate': '1998-05-06T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 6.19,
        'ShipName': 'Richter Supermarkt',
        'ShipAddress': 'Starenweg 5',
        'ShipCity': 'Genève',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },

    {
        'OrderID': 11076,
        'CustomerID': 'BONAP',
        'OrderDate': '1998-05-06T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 38.28,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },

    {
        'OrderID': 11077,
        'CustomerID': 'RATTC',
        'OrderDate': '1998-05-06T00:00:00.000Z',
        'ShippedDate': null,
        'Freight': 8.53,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    }
]);

export const orderData: Object[] = JSON.parse(stringData, (field: any, value: any) => {
    let dupValue: any = value;
    if (typeof value === 'string' && /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*){1})([zZ]|([+\-])(\d\d):?(\d\d))?$/.test(value)) {
        let arr: any = dupValue.split(/[^0-9]/);
        let arg: any = parseInt(arr[4], 10);
        let arg1: any = parseInt(arr[5], 10);

        value = new Date(parseInt(arr[0], 10), parseInt(arr[1], 10) - 1, parseInt(arr[2], 10), parseInt(arr[3], 10), arg, arg1);
    }
    return value;
});

export var ProjectsData = [
	{ Project: "Villa", Locality: "Los Angeles", Duration: 120, Gender: "Male", EstimateCost: 35.8, 
		workStatus: [
			{Project: "Construction", Locality: "Los Angeles", Gender: "Male", Duration: 50, EstimateCost: 20.4,
				StartDate: new Date("06-07-2018"), AssignedTo: "Nick Jones", 
					AssignedContactNumber: "+1903333", ProjectDone: 40, ProjectStatus: "Active" },
			{Project: "Painting", Locality: "Los Angeles", Gender: "Male", Duration: 25, EstimateCost: 5.2,
				StartDate: new Date("11-25-2018"), AssignedTo: "Nick Jones", 
					AssignedContactNumber: "+1903333", ProjectDone: 10, ProjectStatus: "InActive" },
			{Project: "Electricals", Locality: "Los Angeles", Gender: "Male", Duration: 15, EstimateCost: 3.1,
				StartDate: new Date("10-03-2018"), AssignedTo: "Nick Jones", 
					AssignedContactNumber: "+1903333", ProjectDone: 90, ProjectStatus: "Active" },
			{Project: "Interior Designs", Locality: "Los Angeles", Gender: "Male", Duration: 30, EstimateCost: 2.1,
				StartDate: new Date("10-23-2018"), AssignedTo: "Nick Jones", 
					AssignedContactNumber: "+1903333", ProjectDone: 10, ProjectStatus: "InActive" },
		],
		StartDate: new Date("06-07-2018"), AssignedTo: "Nick Jones", AssignedContactNumber: "+1903333", ProjectDone: 60, ProjectStatus: "Active" },
	{ Project: "Apartment", Locality: "Boston", Duration: 250, EstimateCost: 80.55, Gender: "Female",
		workStatus: [
			{Project: "Construction", Locality: "Boston", Duration: 110, Gender: "Female", EstimateCost: 80.55, 
				StartDate: new Date("08-25-2018"), AssignedTo: "Johan", 
					AssignedContactNumber: "+196088", ProjectDone: 90, ProjectStatus: "Active" },
			{Project: "Painting", Locality: "Boston", Duration: 60, EstimateCost: 55.32, Gender: "Female",
				StartDate: new Date("12-20-2018"), AssignedTo: "Johan", 
					AssignedContactNumber: "+196088", ProjectDone: 0, ProjectStatus: "InActive" },
			{Project: "Electricals", Locality: "Boston", Duration: 40, EstimateCost: 20.23, Gender: "Female",
				StartDate: new Date("01-26-2019"), AssignedTo: "Johan", 
					AssignedContactNumber: "+196088", ProjectDone: 40, ProjectStatus: "Active" },
			{Project: "Interior Designs", Locality: "Boston", Duration: 40, EstimateCost: 5.0, Gender: "Female",
				StartDate: new Date("02-07-2019"), AssignedTo: "Johan", 
					AssignedContactNumber: "+196088", ProjectDone: 10, ProjectStatus: "InActive" },
		],
		StartDate: new Date("08-25-2018"), AssignedTo: "Johan", AssignedContactNumber: "+196088", ProjectDone: 55, ProjectStatus: "Active" }
		
]


export var treeGridDataSource = [
    {
        'Name': 'Windows',
        'DateModified': new Date('06/26/2017'),
        'Type': 'File Folder',
        'DateCreated': new Date('06/16/2017'),
        'Children': [
            {
                'Name': 'Users',
                'DateModified': new Date('06/26/2017'),
                'Type': 'File Folder',
                'DateCreated': new Date('06/16/2017'),
                'Children': [
                    {
                        'Name': 'Public',
                        'DateModified': new Date('06/26/2017'),
                        'Type': 'File Folder',
                        'DateCreated': new Date('06/16/2017'),
                        'Children': [
                            {
                                'Name': 'Documents ',
                                'DateModified': new Date('06/26/2017'),
                                'Type': 'File Folder',
                                'DateCreated': new Date('06/16/2017'),
                                'Children': [
                                    { 'Name': 'Document 1', 'DateModified': new Date('06/26/2017'), 'Type': 'HTML document', 'DateCreated': new Date('06/16/2017'), },
                                    { 'Name': 'Document 2', 'DateModified': new Date('06/26/2017'), 'Type': 'HTML document', 'DateCreated':new Date( '06/16/2017'), },
                                    { 'Name': 'Document 3', 'DateModified': new Date('06/26/2017'), 'Type': 'HTML document', 'DateCreated': new Date('06/16/2017'), }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export let sampleData2:  any[] = [];
export function dataSource1(): void {

for (let i: number = 1; i < 500; i++)  
    {
        sampleData2.push({
            taskID: i,
            taskName: 'Implementation Phase',
            startDate: new Date('02/17/2017'),
            endDate: new Date('02/27/2017'),
            priority: 'Normal',
            approved: false,
            duration: 11,
            subtasks: [
                {
                    taskID: ++i,
                    taskName: 'Phase 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 12,
                    subtasks: [{
                        taskID: ++i,
                        taskName: 'Implementation Module 2',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/28/2017'),
                        priority: 'Critical',
                        approved: false,
                        duration: 12,
            
        }]
    
    }]
        })
    }}


export var projectData = [
    { 'TaskID': 1, 'TaskName': 'Parent Task 1', 'StartDate': new Date('02/23/2017'), 
    'EndDate': new Date('02/27/2017'), 'Duration': 3, 'Progress': '40', 'Priority': 'Normal' },
    { 'TaskID': 2, 'TaskName': 'Child Task 1', 'StartDate': new Date('02/23/2017'),
    'EndDate': new Date('02/27/2017'), 'Duration': 4, 'Progress': '40', 'parentID': 1, 'Priority': 'Low' },
    { 'TaskID': 3, 'TaskName': 'Child Task 2', 'StartDate': new Date('02/23/2017'),
    'EndDate': new Date('02/27/2017'), 'Duration': 2, 'Progress': '40', 'parentID': 2, 'Priority': 'Normal' },
    { 'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/23/2017'),
    'EndDate': new Date('02/27/2017'), 'Duration': 2, 'Progress': '40', 'parentID': 1, 'Priority': 'Low' },
    { 'TaskID': 5, 'TaskName': 'Parent Task 2', 'StartDate': new Date('03/14/2017'),
    'EndDate': new Date('03/18/2017'), 'Duration': 6, 'Progress': '40', 'Priority': 'Normal' },
    { 'TaskID': 6, 'TaskName': 'Child Task 1', 'StartDate': new Date('03/02/2017'),
    'EndDate': new Date('03/06/2017'), 'Duration': 11, 'Progress': '40', 'parentID': 5, 'Priority': 'High' },
    { 'TaskID': 7, 'TaskName': 'Child Task 2', 'StartDate': new Date('03/02/2017'),
    'EndDate': new Date('03/06/2017'), 'Duration': 7, 'Progress': '40', 'parentID': 5, 'Priority': 'Critical' },
    { 'TaskID': 8, 'TaskName': 'Child Task 3', 'StartDate': new Date('03/02/2017'),
    'EndDate': new Date('03/06/2017'), 'Duration': 10, 'Progress': '40', 'parentID': 5, 'Priority': 'Breaker' },
    { 'TaskID': 9, 'TaskName': 'Child Task 4', 'StartDate': new Date('03/02/2017'),
    'EndDate': new Date('03/06/2017'), 'Duration': 15, 'Progress': '40', 'parentID': 5, 'Priority': 'High' },
    { 'TaskID': 10, 'TaskName': 'Parent Task 3', 'StartDate': new Date('03/09/2017'),
    'EndDate': new Date('03/13/2017'), 'Duration': 17, 'Progress': '40', 'Priority': 'Breaker' },
    { 'TaskID': 11, 'TaskName': 'Child Task 1', 'StartDate': new Date('03/9/2017'),
    'EndDate': new Date('03/13/2017'), 'Duration': 0, 'Progress': '40', 'parentID': 10, 'Priority': 'Low' },
    { 'TaskID': 12, 'TaskName': 'Child Task 2', 'StartDate': new Date('03/9/2017'),
    'EndDate': new Date('03/13/2017'), 'Duration': 10, 'Progress': '40', 'parentID': 10, 'Priority': 'Breaker' },
    { 'TaskID': 13, 'TaskName': 'Child Task 3', 'StartDate': new Date('03/9/2017'),
    'EndDate': new Date('03/13/2017'), 'Duration': 11, 'Progress': '40', 'parentID': 10, 'Priority': 'Normal' },
    { 'TaskID': 14, 'TaskName': 'Child Task 4', 'StartDate': new Date('03/9/2017'),
    'EndDate': new Date('03/13/2017'), 'Duration': 1, 'Progress': '40', 'parentID': 10, 'Priority': 'Normal' },
    { 'TaskID': 15, 'TaskName': 'Child Task 5', 'StartDate': new Date('03/9/2017'),
    'EndDate': new Date('03/13/2017'), 'Duration': 14, 'Progress': '40', 'parentID': 10, 'Priority': 'Critical'}
];
export var sampleData =  [
   
    {
        taskID: 1000,
        taskName: 'Phase 2',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/28/2017'),
        priority: 'High',
        approved: false,
        duration: 12,
        progress: 60,
        subtasks: [{
            taskID: 1001,
            taskName: 'Implementation Module 2',
            startDate: new Date('02/17/2017'),
            endDate: new Date('02/28/2017'),
            priority: 'Critical',
            approved: false,
            duration: 12,
            progress: 90,
            subtasks: [
                { taskID: 1002, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                    endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                { taskID: 1003, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                    endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                { taskID: 1004, taskName: 'Testing', startDate: new Date('02/21/2017'),
                    endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                { taskID: 1005, taskName: 'Bug fix', startDate: new Date('02/25/2017'),
                    endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                { taskID: 1006, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'),
                    endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                { taskID: 1007, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'),
                    endDate: new Date('02/28/2017'), duration: 0, progress: '50', priority: 'Normal', approved: false }

            ]
        }]
    }
];

export var templateData = [{
'Name': 'Robert King',
'FullName': 'Robert King',
'Designation': 'Chief Executive Officer',
'EmployeeID': 'EMP001',
'Address': '507 - 20th Ave. E.Apt. 2A, Seattle',
'Contact': '(206) 555-9857',
'Country': 'USA',
'DOB': new Date('2/15/1963'),
'DOJ': new Date('5/1/1983'),

'Children': [{
 'Name': 'David william',
 'FullName': 'David william',
 'Designation': 'Vice President',
 'EmployeeID': 'EMP004',
 'Address': '722 Moss Bay Blvd., Kirkland',
 'Country': 'USA',
 'Contact': '(206) 555-3412',
 'DOB': new Date('5/20/1971'),
 'DOJ': new Date('5/1/1991'),


 'Children': [{
     'Name': 'Nancy Davolio',
     'FullName': 'Nancy Davolio',
     'Designation': 'Marketing Executive',
     'EmployeeID': 'EMP035',
     'Address': '4110 Old Redmond Rd., Redmond',
     'Country': 'USA',
     'Contact': '(206) 555-8122',
     'DOB': new Date('3/19/1966'),
     'DOJ': new Date('5/1/1986'),
     'Children': [
         {
             'Name': 'Andrew Fuller',
             'FullName': 'Andrew Fuller',
             'Designation': 'Sales Representative',
             'EmployeeID': 'EMP045',
             'Address': '14 Garrett Hill, London',
             'Country': 'UK',
             'Contact': '(71) 555-4848',
             'DOB': new Date('9/20/1980'),
             'DOJ': new Date('5/1/2000'),
         },
     {
         'Name': 'Anne Dodsworth',
         'FullName': 'Anne Dodsworth',
         'Designation': 'Sales Representative',
         'EmployeeID': 'EMP091',
         'Address': '4726 - 11th Ave. N.E., Seattle',
         'Country': 'USA',
         'Contact': '(206) 555-1189',
         'DOB': new Date('10/19/1989'),
         'DOJ': new Date('5/1/2009'),
     },
     {
         'Name': 'Michael Suyama',
         'FullName': 'Michael Suyama',
         'Designation': 'Sales Representative',
         'EmployeeID': 'EMP110',
         'Address': 'Coventry House Miner Rd., London',
         'Country': 'UK',
         'Contact': '(71) 555-3636',
         'DOB': new Date('11/02/1987'),
         'DOJ': new Date('5/1/2007'),
     },
     {
         'Name': 'Janet Leverling',
         'FullName': 'Janet Leverling',
         'Designation': 'Sales Coordinator',
         'EmployeeID': 'EMP131',
         'Address': 'Edgeham Hollow Winchester Way, London',
         'Country': 'UK',
         'Contact': '(71) 555-3636',
         'DOB': new Date('11/06/1990'),
         'DOJ': new Date('5/1/2010'),
     },
     ]

 },
 {
     'Name': 'Romey Wilson',
     'FullName': 'Romey Wilson',
     'Designation': 'Sales Executive',
     'EmployeeID': 'EMP039',
     'Address': '7 Houndstooth Rd., London',
     'Country': 'UK',
     'Contact': '(71) 555-3690',
     'DOB': new Date('02/02/1980'),
     'DOJ': new Date('5/1/2000'),
     'Children': [
     {
         'Name': 'Margaret Peacock',
         'FullName': 'Margaret Peacock',
         'Designation': 'Sales Representative',
         'EmployeeID': 'EMP213',
         'Address': '4726 - 11th Ave. N.E., California',
         'Country': 'USA',
         'Contact': '(206) 555-1989',
         'DOB': new Date('01/21/1986'),
         'DOJ': new Date('5/1/2006'),

     },
     {
         'Name': 'Laura Callahan',
         'FullName': 'Laura Callahan',
         'Designation': 'Sales Coordinator',
         'EmployeeID': 'EMP201',
         'Address': 'Coventry House Miner Rd., London',
         'Country': 'UK',
         'Contact': '(71) 555-2222',
         'DOB': new Date('12/01/1990'),
         'DOJ': new Date('5/1/2010'),
     },
     {
         'Name': 'Steven Buchanan',
         'FullName': 'Steven Buchanan',
         'Designation': 'Sales Representative',
         'EmployeeID': 'EMP197',
         'Address': '200 Lincoln Ave, Salinas, CA 93901',
         'Country': 'USA',
         'Contact': '(831) 758-7408',
         'DOB': new Date('03/23/1987'),
         'DOJ': new Date('5/1/2007'),
     },
     {
         'Name': 'Tedd Lawson',
         'FullName': 'Tedd Lawson',
         'Designation': 'Sales Representative',
         'EmployeeID': 'EMP167',
         'Address': '200 Lincoln Ave, Salinas, CA 93901',
         'Country': 'USA',
         'Contact': '(831) 758-7368 ',
         'DOB': new Date('08/09/1989'),
         'DOJ': new Date('5/1/2009'),
     },
     ]
 }]
}]
}];

export var summaryRowData = [{
'FreightID': 'CX2389NK',
'FreightName': 'Maersk Edibles Co.',
'TotalUnits': 598,
'TotalCosts': 27838,
'UnitWeight': 241,
'children': [{

 'FreightID': 'QW4567OP',
 'FreightName': 'Chang',
 'TotalUnits': 123,
 'TotalCosts': 3400,
 'UnitWeight': 50,
}, {
 'FreightID': 'QW3458BH',
 'FreightName': 'Aniseed Syrup',
 'TotalUnits': 89,
 'TotalCosts': 5900,
 'UnitWeight': 87,
}, {
 'FreightID': 'QW8967OH',
 'FreightName': 'Chef Antons Cajun Seasoning',
 'TotalUnits': 46,
 'TotalCosts': 9578,
 'UnitWeight': 54,
}, {

 'FreightID': 'QW6549NJ',
 'FreightName': 'Chef Antons Gumbo Mix',
 'TotalUnits': 340,
 'TotalCosts': 8960,
 'UnitWeight': 50,
}]
},
              {
                  'FreightID': 'DW8954IO',
                  'FreightName': 'Aeon fitness inc.',
                  'TotalUnits': 1720,
                  'TotalCosts': 24367,
                  'UnitWeight': 296,
                  'children': [
                      {
                          'FreightID': 'UF5647YH',
                          'FreightName': 'Reebox CrossFit Back Bay',
                          'TotalUnits': 600,
                          'TotalCosts': 8700,
                          'UnitWeight': 73,
                      },
                    {
                        'FreightID': 'UF1290LK',
                        'FreightName': 'The Green Microgym',
                        'TotalUnits': 569,
                        'TotalCosts': 8765,
                        'UnitWeight': 90,
                    },
                  {
                      'FreightID': 'UF8956KU',
                      'FreightName': 'DeFrancos',
                      'TotalUnits': 456,
                      'TotalCosts': 4589,
                      'UnitWeight': 68,
                  },
                  {
                      'FreightID': 'UF7464JK',
                      'FreightName': 'Westside Barbell',
                      'TotalUnits': 95,
                      'TotalCosts': 2313,
                      'UnitWeight': 65,
                  }],
              },
              {
                  'FreightID': 'EJ9456KN',
                  'FreightName': 'Sun technologies inc',
                  'TotalUnits': 331,
                  'TotalCosts': 22933,
                  'UnitWeight': 192,
                  'children': [
                      {
                          'FreightID': 'GH2367OP',
                          'FreightName': 'Haier Group',
                          'TotalUnits': 78,
                          'TotalCosts': 6789,
                          'UnitWeight': 23,
                      },
                    {
                        'FreightID': 'GH4309TH',
                        'FreightName': 'Panda Electronics',
                        'TotalUnits': 90,
                        'TotalCosts': 8999,
                        'UnitWeight': 48,
                    },
                  {
                      'FreightID': 'GH3494SD',
                      'FreightName': 'Jiangsu Etern',
                      'TotalUnits': 36,
                      'TotalCosts': 4356,
                      'UnitWeight': 56,
                  },
                  {
                      'FreightID': 'GH3213FR',
                      'FreightName': 'Zhejiang Fuchunjiang',
                      'TotalUnits': 127,
                      'TotalCosts': 2789,
                      'UnitWeight': 65,
                  }],

              }];

export var headerData = [
{
 taskID: 1,
 taskName: 'Planning',
 startDate: new Date('02/03/2017'),
 endDate: new Date('02/07/2017'),
 subtasks: [
     { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId: '2' },
     { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId:'1' },
     { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId: '1' },
     { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, predecessor: '3FS,4FS,5FS' }
 ]
},
{
  taskID: 6,
  taskName: 'Design',
  startDate: new Date('02/10/2017'),
  endDate: new Date('02/14/2017'),
  subtasks: [
      { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: '60', predecessor: '6FS', resourceId: '2' },
      { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: '100', predecessor: '6FS', resourceId: '3' },
      { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: '100', predecessor: '9FS', resourceId: '1' },
      { taskID: 10, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, predecessor: '10FS' }
  ]
},
{
  taskID: 11,
  taskName: 'Implementation Phase',
  startDate: new Date('02/17/2017'),
  endDate: new Date('02/27/2017'),
  subtasks: [
      {
          taskID: 12,
          taskName: 'Phase',
          startDate: new Date('02/17/2017'),
          endDate: new Date('02/27/2017'),
          subtasks: [{
              taskID: 13,
              taskName: 'Implementation Module',
              startDate: new Date('02/17/2017'),
              endDate: new Date('02/27/2017'),
              subtasks: [
                  { taskID: 14, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', predecessor: '11FS', resourceId: '3' },
                  { taskID: 15, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', predecessor: '11FS', resourceId: '3' },
                  { taskID: 16, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', predecessor: '15FS,16FS', resourceId: '4' },
                  { taskID: 17, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', predecessor: '17FS', resourceId: '4' },
                  { taskID: 18, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', predecessor: '18FS', resourceId: '1' },
                  { taskID: 19, taskName: 'Phase complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, predecessor: '19FS' }
              ]
          }]
      }
  ]
}
];

export var projectResources = [
{ resourceId: 1, resourceName: 'Project Manager' },
{ resourceId: 2, resourceName: 'Software Analyst' },
{ resourceId: 3, resourceName: 'Developer' },
{ resourceId: 4, resourceName: 'Testing Engineer' }
];

export var pagingdata = [
{
  taskID: 1,
  taskName: 'Planning',
  startDate: new Date('02/03/2017'),
  endDate: new Date('02/07/2017'),
  progress: 100,
  duration: 5,
  priority: 'Normal',
  approved: false,
  subtasks: [
      { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
      { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
      { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
      { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
  ]
},
{
  taskID: 6,
  taskName: 'Design',
  startDate: new Date('02/10/2017'),
  endDate: new Date('02/14/2017'),
  duration: 3,
  progress: 86,
  priority: 'High',
  approved: false,
  subtasks: [
      { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
      { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
      { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
      { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
      { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
  ]
},
{
  taskID: 12,
  taskName: 'Implementation Phase',
  startDate: new Date('02/17/2017'),
  endDate: new Date('02/27/2017'),
  priority: 'Normal',
  approved: false,
  duration: 11,
  subtasks: [
      {
          taskID: 13,
          taskName: 'Phase 1',
          startDate: new Date('02/17/2017'),
          endDate: new Date('02/27/2017'),
          priority: 'High',
          approved: false,
          duration: 11,
          subtasks: [
              { taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
              { taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
              { taskID: 17, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
              { taskID: 18, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
              { taskID: 19, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
              { taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

              ]
      },

      {
          taskID: 21,
          taskName: 'Phase 2',
          startDate: new Date('02/17/2017'),
          endDate: new Date('02/28/2017'),
          priority: 'High',
          approved: false,
          duration: 12,
          subtasks: [
              { taskID: 23, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
              { taskID: 24, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
              { taskID: 25, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
              { taskID: 26, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
              { taskID: 27, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
              { taskID: 28, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

              ]
      },

      {
          taskID: 29,
          taskName: 'Phase 3',
          startDate: new Date('02/17/2017'),
          endDate: new Date('02/27/2017'),
          priority: 'Normal',
          approved: false,
          duration: 11,
          subtasks: [
              { taskID: 31, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
              { taskID: 32, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
              { taskID: 33, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
              { taskID: 34, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
              { taskID: 35, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
              { taskID: 36, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false }
              ]
      }
  ]
}
];

export var textWrapData = [
{
  taskID: 1,
  taskName: 'Design',
  startDate: new Date('02/10/2017'),
  endDate: new Date('02/14/2017'),
  duration: 3,
  progress: 86,
  priority: 'High',
  approved: false,
  subtasks: [
      { taskID: 2, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
      { taskID: 3, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
      { taskID: 4, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
      { taskID: 5, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
      { taskID: 6, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
  ]
},
{
  taskID: 7,
  taskName: 'Implementation Phase',
  startDate: new Date('02/17/2017'),
  endDate: new Date('02/27/2017'),
  priority: 'Normal',
  approved: false,
  duration: 11,
  subtasks: [
      {
          taskID: 8,
          taskName: 'Phase 1',
          startDate: new Date('02/17/2017'),
          endDate: new Date('02/27/2017'),
          priority: 'High',
          approved: false,
          duration: 11,
          subtasks: [{
              taskID: 9,
              taskName: 'Implementation Module 1',
              startDate: new Date('02/17/2017'),
              endDate: new Date('02/27/2017'),
              priority: 'Normal',
              duration: 11,
              approved: false,
              subtasks: [
                  { taskID: 10, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                  { taskID: 11, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                  { taskID: 12, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                  { taskID: 13, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                  { taskID: 14, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                  { taskID: 15, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

              ]
          }]
      },

      {
          taskID: 16,
          taskName: 'Phase 2',
          startDate: new Date('02/17/2017'),
          endDate: new Date('02/28/2017'),
          priority: 'High',
          approved: false,
          duration: 12,
          subtasks: [{
              taskID: 17,
              taskName: 'Implementation Module 2',
              startDate: new Date('02/17/2017'),
              endDate: new Date('02/28/2017'),
              priority: 'Critical',
              approved: false,
              duration: 12,
              subtasks: [
                  { taskID: 18, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                  { taskID: 19, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                  { taskID: 20, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                  { taskID: 21, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                  { taskID: 22, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                  { taskID: 23, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

              ]
          }]
      },

      {
          taskID: 24,
          taskName: 'Phase 3',
          startDate: new Date('02/17/2017'),
          endDate: new Date('02/27/2017'),
          priority: 'Normal',
          approved: false,
          duration: 11,
          subtasks: [{
              taskID: 25,
              taskName: 'Implementation Module 3',
              startDate: new Date('02/17/2017'),
              endDate: new Date('02/27/2017'),
              priority: 'High',
              approved: false,
              duration: 11,
              subtasks: [
                  { taskID: 26, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                  { taskID: 27, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                  { taskID: 28, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                  { taskID: 29, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                  { taskID: 30, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                  { taskID: 31, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },

              ]
          }]
      }
  ]
}
];