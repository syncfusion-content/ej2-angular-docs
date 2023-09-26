


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='userData' [showMentionChar]='mentionShow'  [target]='mentionTarget' [fields]='fields' ></ejs-mention>`,
  

})
export class AppComponent {
  constructor() {}
  public userData: { [key: string]: Object }[] = [
    { Name : "Selma Rose", EmailId : "selma@gmail.com"},
    { Name : "Maria", EmailId : "maria@gmail.com" },
    { Name : "Russo kay", EmailId : "russo@gmail.com" },
    { Name : "Robert", EmailId : "robert@gmail.com" },
    { Name : "Garth", EmailId : "garth@gmail.com" }
  ];
  public fields: Object = {text:'Name'};
  public mentionTarget: string = '#mentionElement';
  public mentionShow: boolean = true;
}



