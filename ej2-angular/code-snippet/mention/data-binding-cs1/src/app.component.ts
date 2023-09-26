


import { Component } from '@angular/core';
import { FieldSettingsModel } from '@syncfusion/ej2-dropdowns';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag sport"></div>
  <ejs-mention [dataSource]='sportsData' [target]='mentionTarget' [fields]='fields' ></ejs-mention>`,


})
export class AppComponent {
  constructor() {
  }
  public sportsData: { [key: string]: Object }[] = [
    { ID: 'game1', Game: 'Badminton' },
    { ID: 'game2', Game: 'Football' },
    { ID: 'game3', Game: 'Tennis' },
    { ID: 'game4', Game: 'Hockey' },
    { ID: 'game5', Game: 'Basketball' }
];
  public mentionTarget: string = "#mentionElement";
  public fields: Object =  { text: 'Game', value: 'ID' }

}




