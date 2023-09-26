
/**
 * QueryBuilder datasource
 */
 export let complexData: Object[] = [{
  'Employee': {
      'ID': 1001,
      'DOB': new Date(1996, 4, 23),
      'HireDate': new Date(2015, 3, 21),
      'Salary': 1000,
      'Age': 23,
      'Title': 'Mr'
  },
  'Name': {
      'FirstName': 'Joe',
      'LastName': 'peter'
  },
  'Country': {
      'State': {
          'City': 'San diego',
          'Zipcode': 22434,
      },
      'Region': 'Pacific',
      'Name': 'USA'
  }
},
{
  'Employee': {
      'ID': 1002,
      'DOB': new Date(1995, 2, 28),
      'HireDate': new Date(2015, 5, 25),
      'Salary': 1300,
      'Age': 25,
      'Title': 'Mr'
  },
  'Name': {
      'FirstName': 'Mark',
      'LastName': 'lawrence'
  },
  'Country': {
      'State': {
          'City': 'Houston',
          'Zipcode': 77001
      },
      'Region': 'South central',
      'Name': 'USA'    
  }
},
{
  'Employee': {
      'ID': 1003,
      'DOB': new Date(1996, 7, 7),
      'HireDate': new Date(2018, 9, 11),
      'Salary': 1400,
      'Age': 20,
      'Title': 'Mr'
  },
  'Name': {
      'FirstName': 'David',
      'LastName': 'malan'
  },
  'Country': {
      'State': {
          'City': 'Jersey City',
          'Zipcode': 27097
      },
      'Region': 'Mid-Atlantic',
      'Name': 'USA'
  }
}];
