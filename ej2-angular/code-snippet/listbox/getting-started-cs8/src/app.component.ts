


import { Component } from '@angular/core';
import { getInstance } from '@syncfusion/ej2-base';
import { ListBox } from '@syncfusion/ej2-dropdowns';

@Component({
    selector: 'app-container',
    template: `<button (click)="btnclick()" class="e-btn">ADD ITEMS</button>
               <ejs-listbox id="listbox" [dataSource]="data"></ejs-listbox>`
})

export class AppComponent {
public data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' }
];

btnclick(){
    let listboxobj:ListBox = getInstance((document as any).getElementById("listbox"), ListBox) as ListBox;
    let addItem: { [key: string]: Object }[] = [
      { text: 'Bugatti Veyron Super Sport', id: 'list-03' }, { text: 'SSC Ultimate Aero', id: 'list-04' }
    ];
    if (!listboxobj.getDataByValue('Bugatti Veyron Super Sport')) {
        listboxobj.addItems(addItem);
    }
  }
}



