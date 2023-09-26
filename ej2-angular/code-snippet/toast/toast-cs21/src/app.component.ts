



import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <div id='sample_container'>
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        </div>
        <ejs-toast #element (created)="onCreate($event)" showCloseButton=true timeOut = 0  [position] = 'position' >
                  <ng-template #title>
                  <div>Matt sent you a friend request</div>
              </ng-template>
              <ng-template #content>
                  <div>Hey, wanna dress up as wizards and ride our hoverboards?</div>
              </ng-template>
     </ejs-toast>`
})

export class AppComponent {
  @ViewChild('element') public element: any;
  public position = { X: 'Right', Y: 'Top' };

  onCreate(args: any) {
    this.element.show();
  }
  btnClick(args: any) {
    this.element.show();
  }
}



