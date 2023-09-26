


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='userData' [target]='mentionTarget' [noRecordsTemplate]='noRecordsTemplate' ></ejs-mention>`,

})
export class AppComponent {
  constructor() {
  }
  public userData: string[] = [];
  public mentionTarget: string = "#mentionElement";
  public noRecordsTemplate: any = "<span class='norecord'> NO DATA AVAILABLE</span>"
}



