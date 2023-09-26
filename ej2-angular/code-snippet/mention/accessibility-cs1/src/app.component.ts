


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='userData' [target]='mentionTarget' [fields]='fields'></ejs-mention>`,
  

})
export class AppComponent {
  constructor() {
  }
  public userData: { [key: string]: Object }[] = [
    { Name : "Andrew Fuller", ID : "1" },
    { Name : "Anne Dodsworth" , ID : "2" },
    { Name : "Janet Leverling" , ID :  "3" },
    { Name : "Laura Callahan" , ID : "4" },
    { Name : "Margaret Peacock" , ID : "5" }
  ];
  public fields: Object = {text:'Name'};
  public mentionTarget: string = "#mentionElement";
}



