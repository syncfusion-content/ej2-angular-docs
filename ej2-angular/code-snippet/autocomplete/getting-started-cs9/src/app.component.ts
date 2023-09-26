


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<ejs-autocomplete id='atcelement' [dataSource]='data' [placeholder]='text' [filterType]='filterType' [sortOrder]='sorting' [ignoreCase]='ignoreCase'></ejs-autocomplete>`
})
export class AppComponent {
    constructor() {
    }
    //bind the DataManager instance to dataSource property
    public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Tennis'];
    //set the placeholder to AutoComplete input
    public text: string = "Find a game Eg: FootBall";
    //set the filterType to searching operation
    public filterType: string='StartsWith';
    //sort the result items
    public sorting: string = 'Ascending';
    //set the minLength to restrict the remote request until search key contains 3 characters.
    public ignoreCase: Boolean = false;
}



