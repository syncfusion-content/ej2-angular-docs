
import { Component, ViewChild } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { closest} from '@syncfusion/ej2-base';
import { ToastUtility } from '@syncfusion/ej2-notifications';

@Component({
    selector: 'app-root',
    template: `<div style="text-align: center;">
    <button ejs-button  cssClass='e-btn e-control' (click)="showToast($event)">Show Toast</button>
    </div>`
})

export class AppComponent {
    public toastObj?: ToastComponent;
    public showToast(args: any): void {
        this.toastObj = ToastUtility.show({
            title: 'Toast Title',
            content: 'Toast shown using utility function with ToastModel',
            timeOut: 20000,
            position: { X: 'Right', Y: 'Bottom' },
            showCloseButton: true,
            click: this.toastClick.bind(this),
            buttons:  [{
                model: { content: 'Close' }, click: this.toastClose.bind(this)
            }]
        }) as ToastComponent;
    }

    public toastClose(): void {
        this.toastObj?.hide();
    }

    public toastClick(): void {
        console.log('Toast click event is triggered');
    }
}



