


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='userData' [target]='mentionTarget' ></ejs-mention>`,


})
export class AppComponent {
  constructor() {
  }
  // Defines the array of data.
  public userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
  // Defines the target in which the mention component is rendered.
  public mentionTarget: string = "#mentionElement";
}




