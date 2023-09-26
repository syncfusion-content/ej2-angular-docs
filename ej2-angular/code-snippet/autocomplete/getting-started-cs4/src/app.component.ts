


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<ejs-autocomplete id='atcelement' [dataSource]='countriesData' [fields]='fields' [placeholder]='text'></ejs-autocomplete>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public countriesData: { [key: string]: Object }[] = [
     { Country: { Name: 'Australia' }, Code: { Id: 'AU' }},
        { Country: { Name: 'Bermuda' },Code: { Id: 'BM' }},
        { Country:{ Name: 'Canada'}, Code:{ Id: 'CA'} },
        { Country:{Name: 'Cameroon'}, Code:{ Id: 'CM'} },
        { Country:{Name: 'Denmark'}, Code:{ Id: 'DK' }},
        { Country:{Name: 'France'}, Code: { Id:'FR'} },
        { Country:{Name: 'Finland'}, Code:  { Id:'FI'} },
        { Country:{Name: 'Germany'}, Code: { Id:'DE'} },
        { Country:{Name: 'Greenland'}, Code:{ Id: 'GL' }},
        { Country:{Name: 'Hong Kong'}, Code: { Id:'HK'} },
        { Country:{Name: 'India'}, Code:{ Id: 'IN'} },
        { Country:{ Name: 'Italy'}, Code: { Id:'IT'} },
        { Country:{ Name: 'Japan'}, Code: { Id: 'JP'} },
        { Country:{Name: 'Mexico'}, Code: { Id: 'MX' }},
        { Country:{Name: 'Norway'}, Code: { Id: 'NO'} },
        { Country:{Name: 'Poland'}, Code: { Id: 'PL' }},
        { Country:{Name: 'Switzerland'}, Code: { Id: 'CH'} },
        { Country:{Name: 'United Kingdom'},Code: { Id: 'GB'} },
        { Country:{Name: 'United States'}, Code: { Id: 'US'} }
    ];
    // maps the appropriate column to fields property
    public fields: Object = { value: 'Country.Name' };
    //set the placeholder to AutoComplete input
    public text: string = "Find a country";
}



