


import { Component } from '@angular/core';
import { FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    // specifies the template string for the MultiSelect component
    template: `<ejs-multiselect id='multiselectelement' [dataSource]='sportsData' [fields]='fields' [allowFiltering]='true' [placeholder]='placeholder' [popupHeight]='popupHeight' [sortOrder]='sorting' (filtering)='onFiltering($event)'></ejs-multiselect>`
})
export class AppComponent {
    constructor() {
    }
    //bind the DataManager instance to dataSource property
    public sportsData: { [key: string]: Object }[] = [
        { id: 'game1', sports: 'Badminton' },
        { id: 'game2', sports: 'Football' },
        { id: 'game3', sports: 'Tennis' },
        { id: 'game4', sports: 'Golf' },
        { id: 'game5', sports: 'Hockey' }
    ];
    // map the appropriate column
    public fields: Object = { text: 'sports', value: 'id' };
    // set the placeholder to the MultiSelect input
    public placeholder: string = 'Select games';
    //sort the resulted items
    public sorting: string = 'Ascending';
    //set the height of the popup element
    public popupHeight: string = '250px';
    //Bind the filter event
    public onFiltering: EmitType<FilteringEventArgs>  =  (e: FilteringEventArgs) => {
         // load overall data when search key empty.
        if(e.text == '') e.updateData(this.sportsData);
        else{
          let query: Query = new Query().select(['sports', 'id']);
           //enable the case sensitive filtering by passing false to 4th parameter.
          query = (e.text !== '') ? query.where('sports', 'startswith', e.text, false) : query;
          e.updateData(this.sportsData, query);
        }
    };
}



