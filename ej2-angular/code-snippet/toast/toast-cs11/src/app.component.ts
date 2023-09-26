
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        <ejs-toast #element  (beforeOpen)="onBeforeOpen($event)"  [position] = 'position' >
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
    public position = { X: 'Right', Y: 'Bottom' };


    onBeforeOpen(e: any) {
      let audio: HTMLAudioElement = new Audio('https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7');
     audio.play();
    }
    btnClick(args: any) {
      this.toastShow();
    }
    toastShow() {
        setTimeout(() => {
            this.element.show();
        }, 0);
    }
    ngAfterViewInit() {
    }
}


