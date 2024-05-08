import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component, ViewChild } from '@angular/core';

@Component({
imports: [
        
        CalendarModule,
        ButtonModule
    ],


standalone: true,
  selector: 'app-root',
  template: `
  <div>
    <div>
      <button ejs-button content="Touch Mode" (click)="onTouchClick($event)"></button>
      <button ejs-button content="Mouse Mode" (click)="onMouseClick($event)"></button>
    </div>
    <div>
    <ejs-calendar></ejs-calendar>
    </div>
  </div>
    `
})

export class AppComponent {
  onTouchClick(e: any): void {
    document.body.classList.add('e-bigger');
  }
  onMouseClick(e: any): void {
    document.body.classList.remove('e-bigger');
  }
}


