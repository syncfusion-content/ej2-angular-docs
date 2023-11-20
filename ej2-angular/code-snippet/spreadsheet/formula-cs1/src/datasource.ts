/**
 * Formula data source
 */
export let dataSource: Object[] = [
    {
      Category: 'Household Utilities',
      'Monthly Spend': '=C3/12', // Setting formula through data binding
      'Annual Spend': 3000,
      'Last Year Spend': 3000,
      'Percentage Change': '=C3/D3', // You can set the expression or formula as string
      'Average Change': '=7.9/E3',
    },
    {
      Category: 'Food',
      'Monthly Spend': '=C4/12',
      'Annual Spend': 2500,
      'Last Year Spend': 2250,
      'Percentage Change': { formula: '=C4/D4' }, // You can also set as object with formula field
      'Average Change': '=7.9/E4',
    },
    {
      Category: 'Gasoline',
      'Monthly Spend': '=C5/12',
      'Annual Spend': 1500,
      'Last Year Spend': 1200,
      'Percentage Change': { formula: '=C5/D5' },
      'Average Change': '=7.9/E5',
    },
    {
      Category: 'Clothes',
      'Monthly Spend': '=C6/12',
      'Annual Spend': 1200,
      'Last Year Spend': 1000,
      'Percentage Change': '=C6/D6',
      'Average Change': '=7.9/E6',
    },
    {
      Category: 'Insurance',
      'Monthly Spend': '=C7/12',
      'Annual Spend': 1500,
      'Last Year Spend': 1500,
      'Percentage Change': '=C7/D7',
      'Average Change': '=7.9/E7',
    },
    {
      Category: 'Taxes',
      'Monthly Spend': '=C8/12',
      'Annual Spend': 3500,
      'Last Year Spend': 3500,
      'Percentage Change': '=C8/D8',
      'Average Change': '=7.9/E8',
    },
    {
      Category: 'Entertainment',
      'Monthly Spend': '=C9/12',
      'Annual Spend': 2000,
      'Last Year Spend': 2250,
      'Percentage Change': '=C9/D9',
      'Average Change': '=7.9/E9',
    },
    {
      Category: 'Vacation',
      'Monthly Spend': '=C10/12',
      'Annual Spend': 1500,
      'Last Year Spend': 2000,
      'Percentage Change': '=C10/D10',
      'Average Change': '=7.9/E10',
    },
    {
      Category: 'Miscellaneous',
      'Monthly Spend': '=C11/12',
      'Annual Spend': 1250,
      'Last Year Spend': 1558,
      'Percentage Change': '=C11/D11',
      'Average Change': '=7.9/E11',
    },
  ];
  