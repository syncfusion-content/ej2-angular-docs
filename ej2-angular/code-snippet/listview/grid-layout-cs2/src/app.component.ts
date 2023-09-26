


import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
          <ejs-listview id='element' [dataSource]='data'>
          <ng-template #template let-data="">
          <img id="listImage" src="./apple.png" alt="apple" />
          </ng-template>
          </ejs-listview>
        `,
  })

export class AppComponent {
  public data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}


