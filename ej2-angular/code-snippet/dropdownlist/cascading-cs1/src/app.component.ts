

import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { Query, DataManager } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    // specifies the template path for DropDownList component
    templateUrl: `cascading.html`
})
export class AppComponent {
    constructor() {
    }
    //define the country DropDownList data
    public countryData: { [key: string]: Object }[] = [
        { CountryName: 'Australia', CountryId: '2' },
        { CountryName: 'United States', CountryId: '1' }
    ];
    //define the state DropDownList data
    public stateData: { [key: string]: Object }[] = [
        { StateName: 'New York', CountryId: '1', SateId: '101' },
        { StateName: 'Virginia ', CountryId: '1', SateId: '102' },
        { StateName: 'Tasmania ', CountryId: '2', SateId: '105' }
    ];
    //define the city DropDownList data
    public cityData: { [key: string]: Object }[] = [
        { CityName: 'Albany', SateId: '101', CityId: 201 },
        { CityName: 'Beacon ', SateId: '101', CityId: 202 },
        { CityName: 'Emporia', SateId: '102', CityId: 206 },
        { CityName: 'Hampton ', SateId: '102', CityId: 205 },
        { CityName: 'Hobart', SateId: '105', CityId: 213 },
        { CityName: 'Launceston ', SateId: '105', CityId: 214 }
    ];
    // maps the appropriate column to fields property for country DropDownList
    public countryFields: Object = { text: 'CountryName', value: 'CountryId' };
    // maps the appropriate column to fields property for state DropDownList
    public stateFields: Object = { text: 'StateName', value: 'SateId' };
    // maps the appropriate column to fields property for city DropDownList
    public cityFields: Object = { text: 'CityName', value: 'CityId' };
    //set the placeholder to country DropDownList input
    public countryWatermark: string = "Select a country";
    //set the placeholder to state DropDownList input
    public stateWatermark: string = "Select a state";
    //set the placeholder to city DropDownList input
    public cityWatermark: string = "Select a city";
    @ViewChild('country')
    public countryObj?: DropDownListComponent | any;
    @ViewChild('state')
    public stateObj?: DropDownListComponent | any;
    @ViewChild('city')
    public cityObj?: DropDownListComponent | any;
    public countryChange(): void {
        let tempQuery: Query = new Query().where('CountryId', 'equal', this.countryObj.value);
        //Query the data source based on country DropDownList selected value
        this.stateObj.query = tempQuery;
        // enable the state DropDownList
        this.stateObj.enabled = true;
        //clear the existing selection.
        this.stateObj.text = null;
        // bind the property changes to state DropDownList
        this.stateObj.dataBind();
        //clear the existing selection in city DropDownList
        this.cityObj.text = null;
        //disabe the city DropDownList
        this.cityObj.enabled = false;
        //bind the property cahnges to City DropDownList
        this.cityObj.dataBind();
    }
    public stateChange(): void {
        // Query the data source based on state DropDownList selected value
        this.cityObj.query = new Query().where('SateId', 'equal', this.stateObj.value);
        // enable the city DropDownList
        this.cityObj.enabled = true;
        //clear the existing selection
        this.cityObj.text = null;
        // bind the property change to city DropDownList
        this.cityObj.dataBind();
    }
}


