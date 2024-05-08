import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ToastModule } from '@syncfusion/ej2-angular-notifications'
import { ButtonModule, CheckBoxModule , RadioButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars'





import { Component, ViewChild } from '@angular/core';

@Component({
imports: [
         ToastModule, ButtonModule, CheckBoxModule , RadioButtonModule, DropDownListModule, DatePickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        <ejs-toast #element (created)="onCreate($event)"  [position] = 'position' > </ejs-toast>
        `
})

export class AppComponent {
    @ViewChild('element') public element: any;
    public position = { X: 'Right', Y: 'Bottom' };
    public toasts = [
    { title: 'Warning !', content: 'There was a problem with your network connection.', cssClass: 'e-toast-warning' },
    { title: 'Success !', content: 'Your message has been sent successfully.', cssClass: 'e-toast-success'},
    { title: 'Error !', content: 'A problem has been occurred while submitting your data.', cssClass: 'e-toast-danger' },
    { title: 'Information !', content: 'Please read the comments carefully.', cssClass: 'e-toast-info' } ];
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


