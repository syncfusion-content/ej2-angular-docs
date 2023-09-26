

import { Component, ViewChild } from '@angular/core';
import { MultiSelectComponent,SelectEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { Query, DataManager, Predicate } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    // specifies the template path for MultiSelect component
    templateUrl: `cascading.html`
})
export class AppComponent {
    stateChange //set the placeholder to country MultiSelect input
    ($event: any) {
    throw new Error('Method not implemented.');
    }
    countryChange($event: any) {
    throw new Error('Method not implemented.');
    }
    constructor() {
    }
    //define the country MultiSelect data
    public countryData: { [key: string]: Object }[] = [
        { countryName: 'Australia', countryId: '2' },
        { countryName: 'United States', countryId: '1' }
    ];
    //define the state MultiSelect data
    public stateData: { [key: string]: Object }[] = [
        { stateName: 'New York', countryId: '1', stateId: '101' },
        { stateName: 'Virginia ', countryId: '1', stateId: '102' },
        { stateName: 'Tasmania ', countryId: '2', stateId: '105' }
    ];
    //define the city MultiSelect data
    public cityData: { [key: string]: Object }[] = [
        { cityName: 'Albany', stateId: '101', cityId: 201 },
        { cityName: 'Beacon ', stateId: '101', cityId: 202 },
        { cityName: 'Emporia', stateId: '102', cityId: 206 },
        { cityName: 'Hampton ', stateId: '102', cityId: 205 },
        { cityName: 'Hobart', stateId: '105', cityId: 213 },
        { cityName: 'Launceston ', stateId: '105', cityId: 214 }
    ];
    // maps the appropriate column to fields property for country MultiSelect
    public countryFields: Object = { text: 'countryName', value: 'countryId' };
    // maps the appropriate column to fields property for state MultiSelect
    public stateFields: Object = { text: 'stateName', value: 'stateId' };
    // maps the appropriate column to fields property for city MultiSelect
    public cityFields: Object = { text: 'cityName', value: 'cityId' };
    //set the placeholder to country MultiSelect input
    public countryWatermark: string = "Select countries";
    //set the placeholder to state MultiSelect input
    public stateWatermark: string = "Select states";
    //set the placeholder to city MultiSelect input
    public cityWatermark: string = "Select cities";
    @ViewChild('country')
    public countryObj?: MultiSelectComponent| any;
    @ViewChild('state')
    public stateObj?: MultiSelectComponent| any;
    @ViewChild('city')
    public cityObj?: MultiSelectComponent | any;
    public countrySelect(SelectEventArgs: any): void {
      //Query the data source based on country MultiSelect selected value
        let pred:Predicate| any;
        if(this.countryObj.value)
            for(var d=0;d<this.countryObj.value.length;d++){
                if(pred)
                    pred.or("countryId",'equal',this.countryObj.value[d]);
                else{
                    pred=new Predicate("countryId",'equal',this.countryObj.value[d]);
                }
        }
        else{
            this.stateObj.setProperties({enabled:false,values:[]});
            this.cityObj.setProperties({enabled:false,values:[]});
            return;
        }
        // enable the state MultiSelect
        this.stateObj.setProperties({query:new Query().where(pred),enabled:true,values:[]});
        //clear the existing selection in city MultiSelect
        this.cityObj.setProperties({enabled:false,values:[]});
    }
    public stateSelect(SelectEventArgs: any): void {
         //Query the data source based on country MultiSelect selected value
        let pred:Predicate| any,temp:any;
        if(this.stateObj.value)
            for(var d=0;d<this.stateObj.value.length;d++){
                if(pred)
                    pred.or("stateId",'equal',this.stateObj.value[d]);
                else{
                    pred=new Predicate("stateId",'equal',this.stateObj.value[d]);
                }
        }
        else{
            this.cityObj.setProperties({enabled:false,values:[]});
            return;
        }
        this.cityObj.setProperties({query:new Query().where(pred),enabled:true,values:[]});
    }
}



