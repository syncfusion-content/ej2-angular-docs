



import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        <ejs-toast #element id='element' (created)="onCreate($event)" [template]='templateEle' extendedTimeOut= '0' timeOut= '120000' [position] = 'position' > </ejs-toast>`
})

export class AppComponent {
    @ViewChild('element') public element: any;
    public position = { X: 'Right', Y: 'Bottom' };
    public templateEle = (document.getElementById('template_toast_ele') as HTMLElement).innerHTML;

    onCreate(args: any) {
      this.toastShow();
    }
    btnClick(args: any) {
      this.toastShow();
    }
    toastShow() {
          setTimeout(
        () => {
            this.element.show();
        }, 700);
    }
}



