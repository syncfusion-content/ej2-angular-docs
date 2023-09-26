import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <div style="display:inline-block">
          <div style="margin-right:10px;display:inline-block">
           <button ejs-button (click)="btnRightClick($event)">Show Left Position Toast</button>
          </div>
          <div style="display:inline-block">
           <button ejs-button (click)="btnClick($event)" >Show Right Position Toast</button>
          </div>
        </div>
        <ejs-toast #element (created)="onCreate($event)" [position] = 'position' >
              <ng-template #title>
                  <div>Warning !</div>
              </ng-template>
              <ng-template #content>
                  <div>There was a problem with your network connection.</div>
              </ng-template>
       </ejs-toast>
        <ejs-toast #rightToast (created)="onCreate1($event)" [position] = 'position1' >
              <ng-template #title>
                  <div>Success !</div>
              </ng-template>
              <ng-template #content>
                  <div>Your message has been sent successfully.</div>
              </ng-template>
         </ejs-toast>
        `
})

export class AppComponent {
    @ViewChild('element') public element: any;
    @ViewChild('rightToast') rightToast: any;
    public position = { X: 'Left', Y: 'Bottom' };
    public position1 = { X: 'Right', Y: 'Bottom' };


   onCreate1(args: any) {
     this.rightToast.show();
   }

    onCreate(args: any) {
      this.element.show();
    }
    btnRightClick(args: any) {
      this.element.show();
    }
    btnClick(args: any) {
      this.rightToast.show();
    }
}


