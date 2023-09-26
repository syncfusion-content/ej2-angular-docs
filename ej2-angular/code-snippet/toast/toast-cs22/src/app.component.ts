



import { Component, ViewChild } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { closest} from '@syncfusion/ej2-base';
import { ToastUtility } from '@syncfusion/ej2-notifications';

@Component({
    selector: 'app-root',
    template: `<div>
    <button ejs-button  cssClass='e-btn e-control e-info' (click)="infoToast($event)">Info Message</button>
    <button ejs-button  cssClass='e-btn e-control e-success' (click)="successToast($event)">Success Message</button>
    <button ejs-button  cssClass='e-btn e-control e-warning' (click)="warningToast($event)">Warning Message</button>
    <button ejs-button  cssClass='e-btn e-control e-danger' (click)="dangerToast($event)">Danger Message</button>
    </div>
    <br/>
    <div style="text-align: center;">
    <button ejs-button  cssClass='e-btn e-control' (click)="hideToast($event)">Hide All</button>
    </div>`
})

export class AppComponent {
    public toastObj?: ToastComponent;
    public infoToast(args: any): void {
        this.toastObj = ToastUtility.show('Please read the comments carefully', 'Information', 20000) as ToastComponent;
    }
    public successToast(args: any): void {
        this.toastObj = ToastUtility.show('Your message has been sent successfully', 'Success', 20000) as ToastComponent;
    }
    public warningToast(args: any): void {
        this.toastObj = ToastUtility.show('There was a problem with your network connection', 'Warning', 20000) as ToastComponent;
    }
    public dangerToast(args: any): void {
        this.toastObj = ToastUtility.show('A problem has been occurred while submitting the data', 'Error', 20000) as ToastComponent;
    }
    public hideToast(args: any): void {
        this.toastObj?.hide('All');
    }
}



