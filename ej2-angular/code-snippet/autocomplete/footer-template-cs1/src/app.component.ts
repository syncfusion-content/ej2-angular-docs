


import { Component, ViewChild } from '@angular/core';
import { AutoCompleteComponent, DropEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-root',
    // specifies the template url path
    templateUrl: `footerTemplate.html`
})
export class AppComponent {
    @ViewChild('sample')
    public AutoCompleteObj : AutoCompleteComponent | any;
    constructor() {
    }
    // defined the array of data
    public data: Object[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey'];
    // set placeholder text to AutoComplete input element
    public text: string = 'Find a game';
    public onOpen(e : DropEventArgs) : void{
      let count=this.AutoCompleteObj.getItems().length;
      //set the value to footerTemplate property
      let ele = document.getElementsByClassName('foot')[0];
      ele.innerHTML =  "Total list item: " + count;
    }
}



