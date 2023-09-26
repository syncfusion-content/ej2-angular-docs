


import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        <ejs-toast #element (created)="onCreate($event)" (beforeOpen)="onBeforeOpen($event)"  [position] = 'position' > </ejs-toast>
        `
})

export class AppComponent {
    @ViewChild('element') public element: any;
    public position = { X: 'Right', Y: 'Bottom' };
    public toasts = [
    { title: 'Warning !', content: 'There was a problem with your network connection.' },
    { title: 'Success !', content: 'Your message has been sent successfully.' },
    { title: 'Error !', content: 'A problem has been occurred while submitting your data.' },
    { title: 'Information !', content: 'Please read the comments carefully.' }];
    public maxCount: number = 3;
    public toastFlag:number = 0;

    onBeforeOpen(e: any) {
      if (this.maxCount === this.element.element.childElementCount) {
   e.cancel =true;
  } else {
    e.cancel = false;
  }
    }

    onCreate(args: any) {
      this.element.show(this.toasts[this.toastFlag]);
      ++this.toastFlag;
    }
    btnClick(args: any) {
      this.toastShow();
    }
    toastShow() {
          setTimeout(
        () => {
            this.element.show(this.toasts[this.toastFlag]);
            ++this.toastFlag;
              if (this.toastFlag === (this.toasts.length)) {
                this.toastFlag = 0;
               }
        }, 0);
    }
    ngAfterViewInit() {
    }
}


