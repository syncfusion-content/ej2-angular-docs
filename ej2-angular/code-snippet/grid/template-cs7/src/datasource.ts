export let data: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
        ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
    },
    {
        OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3, OrderDate: new Date(8367642e5),
        ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
        ShipRegion: 'CJ', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0
    },
    {
        OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4, OrderDate: new Date(8368506e5),
        ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
        ShipRegion: 'CJ', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0
    },
    {
        OrderID: 10253, CustomerID: 'HANAR', EmployeeID: 3, OrderDate: new Date(836937e6),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 58.17, Verified: !0
    },
    {
        OrderID: 10254, CustomerID: 'CHOPS', EmployeeID: 5, OrderDate: new Date(8370234e5),
        ShipName: 'Chop-suey Chinese', ShipCity: 'Bern', ShipAddress: 'Hauptstr. 31',
        ShipRegion: 'CJ', ShipPostalCode: '3012', ShipCountry: 'Switzerland', Freight: 22.98, Verified: !1
    },
    {
        OrderID: 10255, CustomerID: 'RICSU', EmployeeID: 9, OrderDate: new Date(8371098e5),
        ShipName: 'Richter Supermarkt', ShipCity: 'Genève', ShipAddress: 'Starenweg 5',
        ShipRegion: 'CJ', ShipPostalCode: '1204', ShipCountry: 'Switzerland', Freight: 148.33, Verified: !0
    },
    {
        OrderID: 10256, CustomerID: 'WELLI', EmployeeID: 3, OrderDate: new Date(837369e6),
        ShipName: 'Wellington Importadora', ShipCity: 'Resende', ShipAddress: 'Rua do Mercado, 12',
        ShipRegion: 'SP', ShipPostalCode: '08737-363', ShipCountry: 'Brazil', Freight: 13.97, Verified: !1
    },
    {
        OrderID: 10257, CustomerID: 'HILAA', EmployeeID: 4, OrderDate: new Date(8374554e5),
        ShipName: 'HILARION-Abastos', ShipCity: 'San Cristóbal', ShipAddress: 'Carrera 22 con Ave. Carlos Soublette #8-35',
        ShipRegion: 'Táchira', ShipPostalCode: '5022', ShipCountry: 'Venezuela', Freight: 81.91, Verified: !0
    },
    {
        OrderID: 10258, CustomerID: 'ERNSH', EmployeeID: 1, OrderDate: new Date(8375418e5),
        ShipName: 'Ernst Handel', ShipCity: 'Graz', ShipAddress: 'Kirchgasse 6',
        ShipRegion: 'CJ', ShipPostalCode: '8010', ShipCountry: 'Austria', Freight: 140.51, Verified: !0
    },
    {
        OrderID: 10259, CustomerID: 'CENTC', EmployeeID: 4, OrderDate: new Date(8376282e5),
        ShipName: 'Centro comercial Moctezuma', ShipCity: 'México D.F.', ShipAddress: 'Sierras de Granada 9993',
        ShipRegion: 'CJ', ShipPostalCode: '05022', ShipCountry: 'Mexico', Freight: 3.25, Verified: !1
    },
    {
        OrderID: 10260, CustomerID: 'OTTIK', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Ottilies Käseladen', ShipCity: 'Köln', ShipAddress: 'Mehrheimerstr. 369',
        ShipRegion: 'CJ', ShipPostalCode: '50739', ShipCountry: 'Germany', Freight: 55.09, Verified: !0
    },
    {
        OrderID: 10261, CustomerID: 'QUEDE', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Que Delícia', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua da Panificadora, 12',
        ShipRegion: 'RJ', ShipPostalCode: '02389-673', ShipCountry: 'Brazil', Freight: 3.05, Verified: !1
    },
    {
        OrderID: 10262, CustomerID: 'RATTC', EmployeeID: 8, OrderDate: new Date(8379738e5),
        ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.',
        ShipRegion: 'NM', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 48.29, Verified: !0
    }];

    export let employeeData: Object[] = [{
        'EmployeeID': 1,
        'LastName': 'Davolio',
        'FirstName': 'Nancy',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-664743600000),
        'HireDate': new Date(704692800000),
        'Address': '507 - 20th Ave. E.\r\nApt. 2A',
        'City': 'Seattle',
        'Region': 'WA',
        'PostalCode': '98122',
        'Country': 'USA',
        'HomePhone': '(206) 555-9857',
        'Extension': '5467',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Education includes a BA in psychology from Colorado State University in 1970.  She also completed\
        \'The Art of the Cold Call.\'  Nancy is a member of Toastmasters International.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
    },
    {
        'EmployeeID': 2,
        'LastName': 'Fuller',
        'FirstName': 'Andrew',
        'Title': 'Vice President, Sales',
        'TitleOfCourtesy': 'Dr.',
        'BirthDate': new Date(-563828400000),
        'HireDate': new Date(713764800000),
        'Address': '908 W. Capital Way',
        'City': 'Tacoma',
        'Region': 'WA',
        'PostalCode': '98401',
        'Country': 'USA',
        'HomePhone': '(206) 555-9482',
        'Extension': '3457',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of \
        Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, \
        was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the \
        Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',
        'ReportsTo': 0,
        'PhotoPath': 'http://accweb/emmployees/fuller.bmp'
    },
    {
        'EmployeeID': 3,
        'LastName': 'Leverling',
        'FirstName': 'Janet',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-200088000000),
        'HireDate': new Date(702104400000),
        'Address': '722 Moss Bay Blvd.',
        'City': 'Kirkland',
        'Region': 'WA',
        'PostalCode': '98033',
        'Country': 'USA',
        'HomePhone': '(206) 555-3412',
        'Extension': '3355',
        'Photo': { 'Length': 21722 },
    
        'Notes': 'Janet has a BS degree in chemistry from Boston College (1984). \
         She has also completed a certificate program in food retailing management.\
         Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/leverling.bmp'
    },
    {
        'EmployeeID': 4,
        'LastName': 'Peacock',
        'FirstName': 'Margaret',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Mrs.',
        'BirthDate': new Date(-1018814400000),
        'HireDate': new Date(736401600000),
        'Address': '4110 Old Redmond Rd.',
        'City': 'Redmond',
        'Region': 'WA',
        'PostalCode': '98052',
        'Country': 'USA',
        'HomePhone': '(206) 555-8122',
        'Extension': '5176',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American \
        Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/peacock.bmp'
    },
    {
        'EmployeeID': 5,
        'LastName': 'Buchanan',
        'FirstName': 'Steven',
        'Title': 'Sales Manager',
        'TitleOfCourtesy': 'Mr.',
        'BirthDate': new Date(-468010800000),
        'HireDate': new Date(750830400000),
        'Address': '14 Garrett Hill',
        'City': 'London',
        'Region': null,
        'PostalCode':
        'SW1 8JR',
        'Country': 'UK',
        'HomePhone': '(71) 555-4848',
        'Extension': '3453',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as \
        a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent \
        post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses \'Successful \
        Telemarketing\' and \'International Sales Management.\'  He is fluent in French.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/buchanan.bmp'
    },
    {
        'EmployeeID': 6,
        'LastName': 'Suyama',
        'FirstName': 'Michael',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Mr.',
        'BirthDate': new Date(-205185600000),
        'HireDate': new Date(750830400000),
        'Address': 'Coventry House\r\nMiner Rd.',
        'City': 'London',
        'Region': null,
        'PostalCode': 'EC2 7JR',
        'Country': 'UK',
        'HomePhone': '(71) 555-7773',
        'Extension': '428',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles \
        (MBA, marketing, 1986).  He has also taken the courses \'Multi-Cultural Selling\' and \'Time Management for the Sales Professional.\'  \
        He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
        'ReportsTo': 5,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
    },
    {
        'EmployeeID': 7,
        'LastName': 'King',
        'FirstName': 'Robert',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Mr.',
        'BirthDate': new Date(-302731200000),
        'HireDate': new Date(757486800000),
        'Address': 'Edgeham Hollow\r\nWinchester Way',
        'City': 'London',
        'Region': null,
        'PostalCode': 'RG1 9SP',
        'Country': 'UK',
        'HomePhone': '(71) 555-5598',
        'Extension': '465',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the \
        University of Michigan in 1992, the year he joined the company.  After completing a course entitled \'Selling in Europe,\' \
        he was transferred to the London office in March 1993.',
        'ReportsTo': 5,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
    },
    {
        'EmployeeID': 8,
        'LastName': 'Callahan',
        'FirstName': 'Laura',
        'Title': 'Inside Sales Coordinator',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-377982000000),
        'HireDate': new Date(762843600000),
        'Address': '4726 - 11th Ave. N.E.',
        'City': 'Seattle',
        'Region': 'WA',
        'PostalCode': '98105',
        'Country': 'USA',
        'HomePhone': '(206) 555-1189',
        'Extension': '2344',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business \
        French.  She reads and writes French.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
    },
    {
        'EmployeeID': 9,
        'LastName': 'Dodsworth',
        'FirstName': 'Anne',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-123966000000),
        'HireDate': new Date(784875600000),
        'Address': '7 Houndstooth Rd.',
        'City': 'London',
        'Region': null,
        'PostalCode': 'WG2 7LT',
        'Country': 'UK',
        'HomePhone': '(71) 555-4444',
        'Extension': '452',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.',
        'ReportsTo': 5,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
    }];