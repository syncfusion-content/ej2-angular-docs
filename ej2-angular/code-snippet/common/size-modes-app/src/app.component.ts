


import { Component, ViewChild } from '@angular/core';

@Component({
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


