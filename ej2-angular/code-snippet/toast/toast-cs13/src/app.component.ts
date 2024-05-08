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
        <ejs-toast #toastObj (created)="onCreate($event)" (beforeClose)="onBeforeClose($event)" [position] = 'position' >
            <ng-template #title>
                <div>Matt sent you a friend request</div>
            </ng-template>
            <ng-template #content>
                <div>Hey, wanna dress up as wizards and ride our hoverboards?</div>
            </ng-template>
        </ejs-toast>`
})

export class AppComponent {
    @ViewChild('toastObj') element: any;
    public position = { X: 'Right' };

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
    onBeforeClose(e: any){
        if (e.type === "swipe") {
            e.cancel = true;
        }
    }
}


