


import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <div>
      <button ejs-button content="Touch Mode" (click)="onTouchClick($event)"></button>
      <button ejs-button content="Mouse Mode" (click)="onMouseClick($event)"></button>
    </div>
    <div class="control">
    <ejs-calendar></ejs-calendar>
    </div>
  </div>
    `
})

export class AppComponent {
  onTouchClick(e: any): void {
    let controls = document.querySelectorAll('.control');
      for (let index: number = 0; index < controls.length; index++) {
        controls[index].classList.add('e-bigger');
      }
  }
  onMouseClick(e: any): void {
    let controls = document.querySelectorAll('.control');
      for (let index: number = 0; index < controls.length; index++) {
        controls[index].classList.remove('e-bigger');
      }
  }
}


