


import { Component } from '@angular/core';
import { FieldSettingsModel } from '@syncfusion/ej2-dropdowns';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag country"></div>
  <ejs-mention [dataSource]='countriesData' [target]='mentionTarget' [fields]='fields' ></ejs-mention>`,

})
export class AppComponent {
  constructor() {}
  public countriesData: { [key: string]: Object }[] = [
    { Country: { Name: 'Australia' }, Code: { ID: 'AU' } },
    { Country: { Name: 'Bermuda' }, Code: { ID: 'BM' } },
    { Country: { Name: 'Canada' }, Code: { ID: 'CA' } },
    { Country: { Name: 'Cameroon' }, Code: { ID: 'CM' } },
    { Country: { Name: 'Denmark' }, Code: { ID: 'DK' } },
    { Country: { Name: 'France' }, Code: { ID: 'FR' } },
  ];
  public mentionTarget: string = '#mentionElement';
  public fields: Object = { text: 'Country.Name',value: 'Code.ID'};
}



