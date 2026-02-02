import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import {
  ButtonModule,
} from '@syncfusion/ej2-angular-buttons';

import { Component } from '@angular/core';
import { ToastUtility } from '@syncfusion/ej2-notifications';

@Component({
  imports: [
    ToastModule,
    ButtonModule,
  ],

  standalone: true,
  selector: 'app-root',
  template: `<div style="text-align: center;margin-top: 150px">
    <button ejs-button  cssClass='e-btn e-control' (click)="showToast($event)">Show Toast</button>
    </div>`,
})
export class AppComponent {
  public showToast(args: any): void {
    var toastObj = ToastUtility.show({
      title: 'Toast Title',
      content: 'Toast shown using utility function with ToastModel',
      timeOut: 0,
      position: { X: 'Right', Y: 'Bottom' },
      showCloseButton: true,
      click: this.toastClick.bind(this),
      buttons: [
        {
          model: { content: 'Close' },
          click: () => this.toastClose(toastObj),
        },
      ],
    });
  }

  public toastClose(e: any): void {
    e.hide(e.toastEle);
  }

  public toastClick(): void {
    console.log('Toast click event is triggered');
  }
}
