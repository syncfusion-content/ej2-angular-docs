



import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <div id='templateToast' style="display: none;color:red"> System affected by virus !!! </div>
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        <ejs-toast #element (created)="onCreate($event)"  [position] = 'position' > </ejs-toast>
        `
})

export class AppComponent {
    @ViewChild('element') public element: any;
    public position = { X: 'Right', Y: 'Bottom' };
    public toasts = [ { template: '2 Mail has received'},{ template: 'User Guest Logged in'},{ template: 'Logging in as Guest'},{ template: 'Ticket has reserved '},{ template: '#templateToast' }]
    public toastFlag: number = 0;


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
}


