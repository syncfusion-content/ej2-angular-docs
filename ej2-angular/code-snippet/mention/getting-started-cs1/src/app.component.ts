


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag sport"></div>
  <ejs-mention [dataSource]='sportsData' [fields]='fields' [target]='mentionTarget' [popupHeight]='height' [popupWidth]='width' ></ejs-mention>`,


})
export class AppComponent {
  constructor() {}
  public sportsData: {[key: string]: Object}[] = [
    { ID : "game1" ,Game : "Badminton"},
    { ID : "game2" ,Game : "Football" },
    { ID : "game3" ,Game : "Tennis"},
    { ID : "game4" ,Game : "Hockey"},
    { ID : "game5" ,Game : "Basketball"},
    { ID : "game6" ,Game : "Cricket"}
  ];
  public fields: Object = {text:'Game'};
  public mentionTarget: string = '#mentionElement';
  public height: string = '100px';
  public width: string = '250px'
}



