import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ListViewModule } from '@syncfusion/ej2-angular-lists'
import { Component, ViewChild } from '@angular/core';

@Component({
  imports: [
    ListViewModule
  ],
  standalone: true,
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


