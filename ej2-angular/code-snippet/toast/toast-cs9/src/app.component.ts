



import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
            <button ejs-button (click)="btnClick($event)" >Show Toast</button>
        <ejs-toast #element (created)="onCreate($event)" (click)= "onClick($event)" timeOut='0'  [position] = 'position' >
              <ng-template #title>
                  <div>Matt sent you a friend request</div>
              </ng-template>
              <ng-template #content>
                  <div>Hey, wanna dress up as wizards and ride our hoverboards?</div>
              </ng-template>
     </ejs-toast>
        `
})

export class AppComponent {
    @ViewChild('element') public element: any;
    public position = { X: 'Left', Y: 'Bottom' };

    onClick(e: any) {
      e.clickToClose = true;
    }

    onCreate(args: any) {
      this.element.show();
    }

    btnClick(args: any) {
      this.element.show();
    }
}


