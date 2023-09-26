


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag country"></div>
  <ejs-mention [dataSource]='userData' [showMentionChar]='mentionShow' [suffixText]='textSuffix' [target]='mentionTarget' [fields]='fields' ></ejs-mention>`,


})
export class AppComponent {
  constructor() {}
  public userData: { [key: string]: Object }[] = [
    { Country : "Australia", Code : "AU" },
    { Country : "Bermuda" , Code : "BM" },
    { Country : "Canada" , Code :  "CA" },
    { Country : "Cameroon" , Code : "CM" },
    { Country : "Denmark" , Code : "DK" }
  ];
  public fields: Object = {text:'Country'};
  public mentionTarget: string = '#mentionElement';
  public mentionShow: boolean = true;
  public textSuffix: string = '&nbsp;'
}



