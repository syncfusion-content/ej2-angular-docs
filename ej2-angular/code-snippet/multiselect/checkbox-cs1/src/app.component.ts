


import { Component, OnInit} from '@angular/core';
import { CheckBoxSelectionService, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { Query } from '@syncfusion/ej2-data';
@Component({
    selector: 'app-root',
    // specifies the template string for the MultiSelect component
    template: `<ejs-multiselect id='multiselectelement' [dataSource]='sportsData' [fields]='fields'(filtering)='onFiltering($event)' [mode]='mode' [placeholder]='placeholder'></ejs-multiselect>`,
    providers: [CheckBoxSelectionService]
})
export class AppComponent {
    public mode?: string;
    searchData: { [key: string]: Object; }[] | string[] | number[] | boolean[] | undefined;
    constructor() {
    }
    //set the data to dataSource property
    public sportsData: Object[] =  [
        { id: 'Game1', sports: 'Badminton' },
        { id: 'Game2', sports: 'Basketball' },
        { id: 'Game3', sports: 'Cricket' },
        { id: 'Game4', sports: 'Football' },
        { id: 'Game5', sports: 'Golf' }
    ];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'sports', value: 'id' };
    // set placeholder to MultiSelect input element
    public placeholder: string = 'Select games';
    //Bind the filter event
    public onFiltering: EmitType<FilteringEventArgs> =  (e: FilteringEventArgs) => {
        let query = new Query();
        //frame the query based on search string with filter type.
        query = (e.text != "") ? query.where("country", "startswith", e.text, true) : query;
        //pass the filter data source, filter query to updateData method.
        e.updateData((this as any).searchData, query);
    };
    ngOnInit(): void {
        // set the type of mode for checkbox to visualized the checkbox added in li element.
        this.mode = 'CheckBox';
    }
}



