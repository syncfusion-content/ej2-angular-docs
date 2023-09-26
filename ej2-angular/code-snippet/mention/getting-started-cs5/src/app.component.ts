


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='emailData' [fields]='fields' [suggestionCount]= 'suggestionCount' [target]='mentionTarget'></ejs-mention>`,

})
export class AppComponent {
  constructor() {}
  public emailData: { [key: string ] : Object }[] =[
    { Name: "Selma Rose", EmailId: "selma@gmail.com" },
    { Name: "Maria", EmailId: "maria@gmail.com" },
    { Name: "Russo Kay", EmailId: "russo@gmail.com" },
    { Name: "Robert", EmailId: "robert@gmail.com" },
    { Name: "Camden Kate",EmailId: "camden@gmail.com" },
    { Name: "Garth", EmailId: "garth@gmail.com" },
    { Name: "Andrew James", EmailId: "james@gmail.com" },
    { Name: "Olivia", EmailId: "olivia@gmail.com" },
    { Name: "Sophia", EmailId: "sophia@gmail.com" },
    { Name: "Margaret", EmailId: "margaret@gmail.com" },
    { Name: "Ursula Ann", EmailId: "ursula@gmail.com" },
    { Name: "Laura Grace", EmailId: "laura@gmail.com" },
    { Name: "Albert", EmailId: "albert@gmail.com" },
    { Name: "William", EmailId: "william@gmail.com" }
];
  public mentionTarget: string = '#mentionElement';
  public fields: Object = { text: 'Name' };
  public suggestionCount: Number = 8
}



