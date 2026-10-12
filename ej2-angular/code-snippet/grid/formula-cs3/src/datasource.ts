export let productData: Object[] = [
  {
    Id: 1,
    Product: "Chai",
    Category: "Beverages",
    Price: 45.25,
    Quantity: 4,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(1)), REF(COLUMN("Quantity"),ROW(1)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(1))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(1)), REF(COLUMN("TaxAmount"),ROW(1)))'
  },
  {
    Id: 2,
    Product: "Chang",
    Category: "Beverages",
    Price: 22.75,
    Quantity: 6,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(2)), REF(COLUMN("Quantity"),ROW(2)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(2))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(2)), REF(COLUMN("TaxAmount"),ROW(2)))'
  },
  {
    Id: 3,
    Product: "Aniseed Syrup",
    Category: "Condiments",
    Price: 18.50,
    Quantity: 3,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(3)), REF(COLUMN("Quantity"),ROW(3)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(3))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(3)), REF(COLUMN("TaxAmount"),ROW(3)))'
  },
  {
    Id: 4,
    Product: "Chef Anton Gumbo Mix",
    Category: "Condiments",
    Price: 32.40,
    Quantity: 2,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(4)), REF(COLUMN("Quantity"),ROW(4)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(4))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(4)), REF(COLUMN("TaxAmount"),ROW(4)))'
  },
  {
    Id: 5,
    Product: "Chef Anton Seasoning",
    Category: "Condiments",
    Price: 28.60,
    Quantity: 5,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(5)), REF(COLUMN("Quantity"),ROW(5)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(5))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(5)), REF(COLUMN("TaxAmount"),ROW(5)))'
  },
  {
    Id: 6,
    Product: "Grandmas Boysenberry Spread",
    Category: "Condiments",
    Price: 15.75,
    Quantity: 7,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(6)), REF(COLUMN("Quantity"),ROW(6)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(6))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(6)), REF(COLUMN("TaxAmount"),ROW(6)))'
  },
  {
    Id: 7,
    Product: "Uncle Bob Organic Dried Pears",
    Category: "Produce",
    Price: 19.80,
    Quantity: 4,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(7)), REF(COLUMN("Quantity"),ROW(7)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(7))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(7)), REF(COLUMN("TaxAmount"),ROW(7)))'
  },
  {
    Id: 8,
    Product: "Northwoods Cranberry Sauce",
    Category: "Condiments",
    Price: 24.30,
    Quantity: 3,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(8)), REF(COLUMN("Quantity"),ROW(8)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(8))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(8)), REF(COLUMN("TaxAmount"),ROW(8)))'
  },
  {
    Id: 9,
    Product: "Mishi Kobe Niku",
    Category: "Meat/Poultry",
    Price: 95.50,
    Quantity: 1,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(9)), REF(COLUMN("Quantity"),ROW(9)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(9))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(9)), REF(COLUMN("TaxAmount"),ROW(9)))'
  },
  {
    Id: 10,
    Product: "Ikura",
    Category: "Seafood",
    Price: 56.20,
    Quantity: 2,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(10)), REF(COLUMN("Quantity"),ROW(10)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(10))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(10)), REF(COLUMN("TaxAmount"),ROW(10)))'
  },
  {
    Id: 11,
    Product: "Queso Cabrales",
    Category: "Dairy Products",
    Price: 33.75,
    Quantity: 5,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(11)), REF(COLUMN("Quantity"),ROW(11)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(11))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(11)), REF(COLUMN("TaxAmount"),ROW(11)))'
  },
  {
    Id: 12,
    Product: "Queso Manchego",
    Category: "Dairy Products",
    Price: 41.10,
    Quantity: 3,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(12)), REF(COLUMN("Quantity"),ROW(12)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(12))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(12)), REF(COLUMN("TaxAmount"),ROW(12)))'
  },
  {
    Id: 13,
    Product: "Konbu",
    Category: "Seafood",
    Price: 12.45,
    Quantity: 8,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(13)), REF(COLUMN("Quantity"),ROW(13)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(13))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(13)), REF(COLUMN("TaxAmount"),ROW(13)))'
  },
  {
    Id: 14,
    Product: "Tofu",
    Category: "Produce",
    Price: 8.90,
    Quantity: 10,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(14)), REF(COLUMN("Quantity"),ROW(14)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(14))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(14)), REF(COLUMN("TaxAmount"),ROW(14)))'
  },
  {
    Id: 15,
    Product: "Genen Shouyu",
    Category: "Condiments",
    Price: 21.25,
    Quantity: 4,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(15)), REF(COLUMN("Quantity"),ROW(15)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(15))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(15)), REF(COLUMN("TaxAmount"),ROW(15)))'
  },
  {
    Id: 16,
    Product: "Pavlova",
    Category: "Confections",
    Price: 27.90,
    Quantity: 6,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(16)), REF(COLUMN("Quantity"),ROW(16)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(16))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(16)), REF(COLUMN("TaxAmount"),ROW(16)))'
  },
  {
    Id: 17,
    Product: "Alice Mutton",
    Category: "Meat/Poultry",
    Price: 65.30,
    Quantity: 2,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(17)), REF(COLUMN("Quantity"),ROW(17)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(17))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(17)), REF(COLUMN("TaxAmount"),ROW(17)))'
  },
  {
    Id: 18,
    Product: "Carnarvon Tigers",
    Category: "Seafood",
    Price: 76.50,
    Quantity: 1,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(18)), REF(COLUMN("Quantity"),ROW(18)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(18))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(18)), REF(COLUMN("TaxAmount"),ROW(18)))'
  },
  {
    Id: 19,
    Product: "Teatime Chocolate Biscuits",
    Category: "Confections",
    Price: 14.20,
    Quantity: 9,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(19)), REF(COLUMN("Quantity"),ROW(19)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(19))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(19)), REF(COLUMN("TaxAmount"),ROW(19)))'
  },
  {
    Id: 20,
    Product: "Sir Rodneys Marmalade",
    Category: "Confections",
    Price: 30.15,
    Quantity: 3,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(20)), REF(COLUMN("Quantity"),ROW(20)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(20))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(20)), REF(COLUMN("TaxAmount"),ROW(20)))'
  },
  {
    Id: 21,
    Product: "Sir Rodneys Scones",
    Category: "Confections",
    Price: 18.75,
    Quantity: 4,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(21)), REF(COLUMN("Quantity"),ROW(21)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(21))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(21)), REF(COLUMN("TaxAmount"),ROW(21)))'
  },
  {
    Id: 22,
    Product: "Gustafs Knackebrod",
    Category: "Grains/Cereals",
    Price: 11.25,
    Quantity: 7,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(22)), REF(COLUMN("Quantity"),ROW(22)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(22))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(22)), REF(COLUMN("TaxAmount"),ROW(22)))'
  },
  {
    Id: 23,
    Product: "Tunnbrod",
    Category: "Grains/Cereals",
    Price: 9.95,
    Quantity: 5,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(23)), REF(COLUMN("Quantity"),ROW(23)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(23))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(23)), REF(COLUMN("TaxAmount"),ROW(23)))'
  },
  {
    Id: 24,
    Product: "Guarana Fantastica",
    Category: "Beverages",
    Price: 16.80,
    Quantity: 6,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(24)), REF(COLUMN("Quantity"),ROW(24)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(24))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(24)), REF(COLUMN("TaxAmount"),ROW(24)))'
  },
  {
    Id: 25,
    Product: "NuNuCa Nuss Nougat Creme",
    Category: "Confections",
    Price: 25.40,
    Quantity: 3,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(25)), REF(COLUMN("Quantity"),ROW(25)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(25))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(25)), REF(COLUMN("TaxAmount"),ROW(25)))'
  },
  {
    Id: 26,
    Product: "Gumbear Gummibarchen",
    Category: "Confections",
    Price: 13.60,
    Quantity: 8,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(26)), REF(COLUMN("Quantity"),ROW(26)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(26))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(26)), REF(COLUMN("TaxAmount"),ROW(26)))'
  },
  {
    Id: 27,
    Product: "Schoggi Schokolade",
    Category: "Confections",
    Price: 29.50,
    Quantity: 2,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(27)), REF(COLUMN("Quantity"),ROW(27)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(27))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(27)), REF(COLUMN("TaxAmount"),ROW(27)))'
  },
  {
    Id: 28,
    Product: "Rassle Sauerkraut",
    Category: "Produce",
    Price: 17.90,
    Quantity: 5,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(28)), REF(COLUMN("Quantity"),ROW(28)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(28))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(28)), REF(COLUMN("TaxAmount"),ROW(28)))'
  },
  {
    Id: 29,
    Product: "Thuringer Rostbratwurst",
    Category: "Meat/Poultry",
    Price: 48.25,
    Quantity: 3,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(29)), REF(COLUMN("Quantity"),ROW(29)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(29))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(29)), REF(COLUMN("TaxAmount"),ROW(29)))'
  },
  {
    Id: 30,
    Product: "Nord Ost Matjeshering",
    Category: "Seafood",
    Price: 38.75,
    Quantity: 4,
    GrossAmount: '=PRODUCT(REF(COLUMN("Price"),ROW(30)), REF(COLUMN("Quantity"),ROW(30)))',
    TaxAmount: '=REF(COLUMN("GrossAmount"),ROW(30))*0.7',
    TotalAmount: '=SUM(REF(COLUMN("GrossAmount"),ROW(30)), REF(COLUMN("TaxAmount"),ROW(30)))'
  }
];