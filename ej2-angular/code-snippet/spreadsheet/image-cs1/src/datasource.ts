/**
 * Default data source
 */
export let defaultData: Object[] = [
    { 'Item Name': 'Casual Shoes', Date: '02/14/2014', Time: '11:34:32 AM', Quantity: 10, Price: 20, Amount: 200, Discount: 1, Profit: 10 },
    { 'Item Name': 'Sports Shoes', Date: '06/11/2014', Time: '05:56:32 AM', Quantity: 20, Price: 30, Amount: 600, Discount: 5, Profit: 50 },
    { 'Item Name': 'Formal Shoes', Date: '07/27/2014', Time: '03:32:44 AM', Quantity: 20, Price: 15, Amount: 300, Discount: 7, Profit: 27 },
    { 'Item Name': 'Sandals & Floaters', Date: '11/21/2014', Time: '06:23:54 AM', Quantity: 15, Price: 20, Amount: 300, Discount: 11, Profit: 67 },
    { 'Item Name': 'Flip- Flops & Slippers', Date: '06/23/2014', Time: '12:43:59 AM', Quantity: 30, Price: 10, Amount: 300, Discount: 10, Profit: 70 },
    { 'Item Name': 'Sneakers', Date: '07/22/2014', Time: '10:55:53 AM', Quantity: 40, Price: 20, Amount: 800, Discount: 13, Profit: 66 },
    { 'Item Name': 'Running Shoes', Date: '02/04/2014', Time: '03:44:34 AM', Quantity: 20, Price: 10, Amount: 200, Discount: 3, Profit: 14 },
    { 'Item Name': 'Loafers', Date: '11/30/2014', Time: '03:12:52 AM', Quantity: 31, Price: 10, Amount: 310, Discount: 6, Profit: 29 },
    { 'Item Name': 'Cricket Shoes', Date: '07/09/2014', Time: '11:32:14 AM', Quantity: 41, Price: 30, Amount: 1210, Discount: 12, Profit: 166 },
    { 'Item Name': 'T-Shirts', Date: '10/31/2014', Time: '12:01:44 AM', Quantity: 50, Price: 10, Amount: 500, Discount: 9, Profit: 55 },
];

/**
 * Grid datasource
 */

export function getTradeData(dataCount: number): object {
    let employees: string[] = [
        'Michael', 'Kathryn', 'Tamer', 'Martin', 'Davolio', 'Nancy', 'Fuller', 'Leverling', 'Peacock',
        'Margaret', 'Buchanan', 'Janet', 'Andrew', 'Callahan', 'Laura', 'Dodsworth', 'Anne',
        'Bergs', 'Vinet', 'Anton', 'Fleet', 'Zachery', 'Van', 'King', 'Jack', 'Rose'];
    let designation: string[] = ['Manager', 'CFO', 'Designer', 'Developer', 'Program Directory', 'System Analyst', 'Project Lead'];
    let mail: string[] = ['sample.com', 'arpy.com', 'rpy.com', 'mail.com', 'jourrapide.com'];
    let location: string[] = ['UK', 'USA', 'Sweden', 'France', 'Canada', 'Argentina', 'Austria', 'Germany', 'Mexico'];
    let status: string[] = ['Active', 'Inactive'];
    let trustworthiness: string[] = ['Perfect', 'Sufficient', 'Insufficient'];
    let tradeData: any[] = [];
    let address: string[] = ['59 rue de lAbbaye', 'Luisenstr. 48', 'Rua do Paço, 67', '2, rue du Commerce', 'Boulevard Tirou, 255',
        'Rua do mailPaço, 67', 'Hauptstr. 31', 'Starenweg 5', 'Rua do Mercado, 12',
        'Carrera 22 con Ave. Carlos Soublette #8-35', 'Kirchgasse 6',
        'Sierras de Granada 9993', 'Mehrheimerstr. 369', 'Rua da Panificadora, 12', '2817 Milton Dr.', 'Kirchgasse 6',
        'Åkergatan 24', '24, place Kléber', 'Torikatu 38', 'Berliner Platz 43', '5ª Ave. Los Palos Grandes', '1029 - 12th Ave. S.',
        'Torikatu 38', 'P.O. Box 555', '2817 Milton Dr.', 'Taucherstraße 10', '59 rue de lAbbaye', 'Via Ludovico il Moro 22',
        'Avda. Azteca 123', 'Heerstr. 22', 'Berguvsvägen  8', 'Magazinweg 7', 'Berguvsvägen  8', 'Gran Vía, 1', 'Gran Vía, 1',
        'Carrera 52 con Ave. Bolívar #65-98 Llano Largo', 'Magazinweg 7', 'Taucherstraße 10', 'Taucherstraße 10',
        'Av. Copacabana, 267', 'Strada Provinciale 124', 'Fauntleroy Circus', 'Av. dos Lusíadas, 23',
        'Rua da Panificadora, 12', 'Av. Inês de Castro, 414', 'Avda. Azteca 123', '2817 Milton Dr.'];
    let employeeimg: string[] = ['usermale', 'userfemale'];
    if (typeof dataCount === 'string') {
        dataCount = parseInt(dataCount, 10);
    }
    for (let i: number = 1; i <= dataCount; i++) {
        let code: any = 10000;
        tradeData.push({
            'EmployeeID': code + i,
            'Employees':
                employees[Math.floor(Math.random() * employees.length)] + ' ' + employees[Math.floor(Math.random() * employees.length)],
            'Designation': designation[Math.floor(Math.random() * designation.length)],
            'Location': location[Math.floor(Math.random() * location.length)],
            'Status': status[Math.floor(Math.random() * status.length)],
            'Trustworthiness': trustworthiness[Math.floor(Math.random() * trustworthiness.length)],
            'Rating': Math.floor(Math.random() * 5),
            'Software': Math.floor(Math.random() * 100),
            'EmployeeImg': employeeimg[Math.floor(Math.random() * employeeimg.length)],
            'CurrentSalary': Math.floor((Math.random() * 100000)),
            'Address': address[Math.floor(Math.random() * address.length)],
        });
        let employee: string = 'Employees';
        let emp: string = tradeData[i - 1][employee];
        let sName: string = emp.substr(0, emp.indexOf(' ')).toLowerCase();
        let empmail: string = 'Mail';
        tradeData[i - 1][empmail] = sName + (Math.floor(Math.random() * 100) + 10) + '@' + mail[Math.floor(Math.random() * mail.length)];

    }
    return tradeData;
}

export let tradeData: Object[] = [
    {
      "EmployeeID": 10001,
      "Employees": "Laura Nancy",
      "Designation": "Designer",
      "Location": "France",
      "Status": "Inactive",
      "Trustworthiness": "Sufficient",
      "Rating": 0,
      "Software": 69,
      "EmployeeImg": "usermale",
      "CurrentSalary": 84194,
      "Address": "Taucherstraße 10",
      "Mail": "laura15@jourrapide.com"
    },
    {
      "EmployeeID": 10002,
      "Employees": "Zachery Van",
      "Designation": "CFO",
      "Location": "Canada",
      "Status": "Inactive",
      "Trustworthiness": "Insufficient",
      "Rating": 3,
      "Software": 99,
      "EmployeeImg": "usermale",
      "CurrentSalary": 55349,
      "Address": "5ª Ave. Los Palos Grandes",
      "Mail": "zachery109@sample.com"
    },
    {
      "EmployeeID": 10003,
      "Employees": "Rose Fuller",
      "Designation": "CFO",
      "Location": "France",
      "Status": "Active",
      "Trustworthiness": "Insufficient",
      "Rating": 1,
      "Software": 1,
      "EmployeeImg": "usermale",
      "CurrentSalary": 16477,
      "Address": "2817 Milton Dr.",
      "Mail": "rose55@rpy.com"
    },
    {
      "EmployeeID": 10004,
      "Employees": "Jack Bergs",
      "Designation": "Manager",
      "Location": "Mexico",
      "Status": "Inactive",
      "Trustworthiness": "Insufficient",
      "Rating": 3,
      "Software": 36,
      "EmployeeImg": "usermale",
      "CurrentSalary": 49040,
      "Address": "2, rue du Commerce",
      "Mail": "jack30@sample.com"
    },
    {
      "EmployeeID": 10005,
      "Employees": "Vinet Bergs",
      "Designation": "Program Directory",
      "Location": "UK",
      "Status": "Active",
      "Trustworthiness": "Insufficient",
      "Rating": 1,
      "Software": 39,
      "EmployeeImg": "usermale",
      "CurrentSalary": 5495,
      "Address": "Rua da Panificadora, 12",
      "Mail": "vinet32@jourrapide.com"
    },
    {
      "EmployeeID": 10006,
      "Employees": "Buchanan Van",
      "Designation": "Designer",
      "Location": "Germany",
      "Status": "Active",
      "Trustworthiness": "Insufficient",
      "Rating": 4,
      "Software": 78,
      "EmployeeImg": "usermale",
      "CurrentSalary": 42182,
      "Address": "24, place Kléber",
      "Mail": "buchanan18@mail.com"
    },
    {
      "EmployeeID": 10007,
      "Employees": "Dodsworth Nancy",
      "Designation": "Project Lead",
      "Location": "USA",
      "Status": "Inactive",
      "Trustworthiness": "Sufficient",
      "Rating": 0,
      "Software": 0,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 35776,
      "Address": "Rua do Paço, 67",
      "Mail": "dodsworth84@mail.com"
    },
    {
      "EmployeeID": 10008,
      "Employees": "Laura Jack",
      "Designation": "Developer",
      "Location": "Austria",
      "Status": "Inactive",
      "Trustworthiness": "Perfect",
      "Rating": 3,
      "Software": 89,
      "EmployeeImg": "usermale",
      "CurrentSalary": 25108,
      "Address": "Rua da Panificadora, 12",
      "Mail": "laura82@mail.com"
    },
    {
      "EmployeeID": 10009,
      "Employees": "Anne Fuller",
      "Designation": "Program Directory",
      "Location": "Mexico",
      "Status": "Active",
      "Trustworthiness": "Insufficient",
      "Rating": 0,
      "Software": 19,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 32568,
      "Address": "Gran Vía, 1",
      "Mail": "anne97@jourrapide.com"
    },
    {
      "EmployeeID": 10010,
      "Employees": "Buchanan Andrew",
      "Designation": "Designer",
      "Location": "Austria",
      "Status": "Active",
      "Trustworthiness": "Insufficient",
      "Rating": 1,
      "Software": 62,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 12320,
      "Address": "P.O. Box 555",
      "Mail": "buchanan50@jourrapide.com"
    },
    {
      "EmployeeID": 10011,
      "Employees": "Andrew Janet",
      "Designation": "System Analyst",
      "Location": "Germany",
      "Status": "Active",
      "Trustworthiness": "Insufficient",
      "Rating": 3,
      "Software": 8,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 20890,
      "Address": "Starenweg 5",
      "Mail": "andrew63@mail.com"
    },
    {
      "EmployeeID": 10012,
      "Employees": "Margaret Tamer",
      "Designation": "System Analyst",
      "Location": "Germany",
      "Status": "Active",
      "Trustworthiness": "Insufficient",
      "Rating": 4,
      "Software": 7,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 22337,
      "Address": "Magazinweg 7",
      "Mail": "margaret26@mail.com"
    },
    {
      "EmployeeID": 10013,
      "Employees": "Tamer Fuller",
      "Designation": "CFO",
      "Location": "Canada",
      "Status": "Active",
      "Trustworthiness": "Insufficient",
      "Rating": 3,
      "Software": 78,
      "EmployeeImg": "usermale",
      "CurrentSalary": 89181,
      "Address": "Taucherstraße 10",
      "Mail": "tamer40@arpy.com"
    },
    {
      "EmployeeID": 10014,
      "Employees": "Tamer Anne",
      "Designation": "CFO",
      "Location": "Sweden",
      "Status": "Active",
      "Trustworthiness": "Sufficient",
      "Rating": 0,
      "Software": 18,
      "EmployeeImg": "usermale",
      "CurrentSalary": 20998,
      "Address": "Taucherstraße 10",
      "Mail": "tamer68@arpy.com"
    },
    {
      "EmployeeID": 10015,
      "Employees": "Anton Davolio",
      "Designation": "Project Lead",
      "Location": "France",
      "Status": "Active",
      "Trustworthiness": "Sufficient",
      "Rating": 4,
      "Software": 8,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 48232,
      "Address": "Luisenstr. 48",
      "Mail": "anton46@mail.com"
    },
    {
      "EmployeeID": 10016,
      "Employees": "Buchanan Buchanan",
      "Designation": "System Analyst",
      "Location": "Austria",
      "Status": "Inactive",
      "Trustworthiness": "Perfect",
      "Rating": 0,
      "Software": 19,
      "EmployeeImg": "usermale",
      "CurrentSalary": 43041,
      "Address": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
      "Mail": "buchanan68@mail.com"
    },
    {
      "EmployeeID": 10017,
      "Employees": "King Buchanan",
      "Designation": "Program Directory",
      "Location": "Sweden",
      "Status": "Active",
      "Trustworthiness": "Sufficient",
      "Rating": 0,
      "Software": 44,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 25259,
      "Address": "Magazinweg 7",
      "Mail": "king80@jourrapide.com"
    },
    {
      "EmployeeID": 10018,
      "Employees": "Rose Michael",
      "Designation": "Project Lead",
      "Location": "Canada",
      "Status": "Active",
      "Trustworthiness": "Perfect",
      "Rating": 4,
      "Software": 31,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 91156,
      "Address": "Fauntleroy Circus",
      "Mail": "rose75@mail.com"
    },
    {
      "EmployeeID": 10019,
      "Employees": "King Bergs",
      "Designation": "Developer",
      "Location": "Germany",
      "Status": "Active",
      "Trustworthiness": "Sufficient",
      "Rating": 2,
      "Software": 29,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 28826,
      "Address": "2817 Milton Dr.",
      "Mail": "king57@jourrapide.com"
    },
    {
      "EmployeeID": 10020,
      "Employees": "Davolio Fuller",
      "Designation": "Designer",
      "Location": "Canada",
      "Status": "Inactive",
      "Trustworthiness": "Sufficient",
      "Rating": 3,
      "Software": 35,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 71035,
      "Address": "Gran Vía, 1",
      "Mail": "davolio29@arpy.com"
    },
    {
      "EmployeeID": 10021,
      "Employees": "Rose Rose",
      "Designation": "CFO",
      "Location": "Germany",
      "Status": "Active",
      "Trustworthiness": "Perfect",
      "Rating": 3,
      "Software": 38,
      "EmployeeImg": "usermale",
      "CurrentSalary": 68123,
      "Address": "Rua do Mercado, 12",
      "Mail": "rose54@arpy.com"
    },
    {
      "EmployeeID": 10022,
      "Employees": "Andrew Michael",
      "Designation": "Program Directory",
      "Location": "UK",
      "Status": "Inactive",
      "Trustworthiness": "Insufficient",
      "Rating": 2,
      "Software": 61,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 75470,
      "Address": "2, rue du Commerce",
      "Mail": "andrew88@jourrapide.com"
    },
    {
      "EmployeeID": 10023,
      "Employees": "Davolio Kathryn",
      "Designation": "Manager",
      "Location": "Germany",
      "Status": "Active",
      "Trustworthiness": "Perfect",
      "Rating": 3,
      "Software": 25,
      "EmployeeImg": "usermale",
      "CurrentSalary": 25234,
      "Address": "Hauptstr. 31",
      "Mail": "davolio42@sample.com"
    },
    {
      "EmployeeID": 10024,
      "Employees": "Anne Fleet",
      "Designation": "System Analyst",
      "Location": "UK",
      "Status": "Active",
      "Trustworthiness": "Perfect",
      "Rating": 3,
      "Software": 0,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 8341,
      "Address": "59 rue de lAbbaye",
      "Mail": "anne86@arpy.com"
    },
    {
      "EmployeeID": 10025,
      "Employees": "Margaret Andrew",
      "Designation": "System Analyst",
      "Location": "Germany",
      "Status": "Inactive",
      "Trustworthiness": "Insufficient",
      "Rating": 3,
      "Software": 51,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 84975,
      "Address": "P.O. Box 555",
      "Mail": "margaret41@arpy.com"
    },
    {
      "EmployeeID": 10026,
      "Employees": "Kathryn Laura",
      "Designation": "Project Lead",
      "Location": "Austria",
      "Status": "Active",
      "Trustworthiness": "Insufficient",
      "Rating": 3,
      "Software": 48,
      "EmployeeImg": "usermale",
      "CurrentSalary": 97282,
      "Address": "Avda. Azteca 123",
      "Mail": "kathryn82@rpy.com"
    },
    {
      "EmployeeID": 10027,
      "Employees": "Michael Michael",
      "Designation": "Developer",
      "Location": "UK",
      "Status": "Inactive",
      "Trustworthiness": "Perfect",
      "Rating": 4,
      "Software": 16,
      "EmployeeImg": "usermale",
      "CurrentSalary": 4184,
      "Address": "Rua do Paço, 67",
      "Mail": "michael58@jourrapide.com"
    },
    {
      "EmployeeID": 10028,
      "Employees": "Leverling Vinet",
      "Designation": "Project Lead",
      "Location": "Germany",
      "Status": "Inactive",
      "Trustworthiness": "Perfect",
      "Rating": 0,
      "Software": 57,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 38370,
      "Address": "59 rue de lAbbaye",
      "Mail": "leverling102@sample.com"
    },
    {
      "EmployeeID": 10029,
      "Employees": "Rose Jack",
      "Designation": "Developer",
      "Location": "UK",
      "Status": "Active",
      "Trustworthiness": "Perfect",
      "Rating": 0,
      "Software": 46,
      "EmployeeImg": "userfemale",
      "CurrentSalary": 84790,
      "Address": "Rua do Mercado, 12",
      "Mail": "rose108@jourrapide.com"
    },
    {
      "EmployeeID": 10030,
      "Employees": "Vinet Van",
      "Designation": "Developer",
      "Location": "USA",
      "Status": "Active",
      "Trustworthiness": "Sufficient",
      "Rating": 0,
      "Software": 40,
      "EmployeeImg": "usermale",
      "CurrentSalary": 71005,
      "Address": "Gran Vía, 1",
      "Mail": "vinet90@jourrapide.com"
    }
  ]