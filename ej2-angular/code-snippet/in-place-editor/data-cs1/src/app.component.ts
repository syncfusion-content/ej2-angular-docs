

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
        <span class="content-title"> Select customer name: </span>
        <ejs-inplaceeditor id="element" mode="Inline" type="DropDownList" value="Maria Anders" [model]="model"></ejs-inplaceeditor>
    </div>
    `
})

export class AppComponent {
  public gameList: Object[] = [
    { Id: '1', Name: 'Maria Anders' },
    { Id: '2', Name: 'Ana Trujillo' },
    { Id: '3', Name: 'Antonio Moreno' },
    { Id: '4', Name: 'Thomas Hardy' },
    { Id: '5', Name: 'Chiristina Berglund' },
    { Id: '6', Name: 'Hanna Moos' }
   ];
  public fields: object = { text: 'Name' };
  public model: object = { dataSource: this.gameList, fields: this.fields, placeholder: 'Select a customer'};
}


