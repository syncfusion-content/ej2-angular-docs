


import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Button, ButtonComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
import { Message, MessageComponent } from '@syncfusion/ej2-angular-notifications';
import { getComponent } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<div class="msg-icon-section">
        <div class="content-section">
            <button #btn1 ejs-button content="Show Default Message" cssClass="e-outline e-primary msg-hidden" (click)="defaultClick()"></button>
            <ejs-message #msg_default_icon id="msg_default_icon" [showCloseIcon]="true" (closed)="defaultClosed()">Editing is restricted</ejs-message>
            <button #btn2 ejs-button content="Show Info Message" cssClass="e-outline e-primary e-info msg-hidden" (click)="infoClick()"></button>
            <ejs-message #msg_info_icon id="msg_info_icon" severity="Info" [showCloseIcon]="true" (closed)="infoClosed()">Please read the comments carefully</ejs-message>
            <button #btn3 ejs-button content="Show Success Message" cssClass="e-outline e-primary e-success msg-hidden" (click)="successClick()"></button>
            <ejs-message #msg_success_icon id="msg_success_icon" severity="Success" [showCloseIcon]="true" (closed)="successClosed()">Your message has been sent successfully</ejs-message>
            <button #btn4 ejs-button content="Show Warning Message" cssClass="e-outline e-primary e-warning msg-hidden" (click)="warningClick()"></button>
            <ejs-message #msg_warning_icon id="msg_warning_icon" severity="Warning" [showCloseIcon]="true" (closed)="warningClosed()">There was a problem with your network connection</ejs-message>
            <button #btn5 ejs-button content="Show Error Message" cssClass="e-outline e-primary e-error msg-hidden" (click)="errorClick()"></button>
            <ejs-message #msg_error_icon id="msg_error_icon" severity="Error" [showCloseIcon]="true" (closed)="errorClosed()">A problem has been occurred while submitting your data</ejs-message>
        </div>
    </div>`
})
export class AppComponent{
    @ViewChild('btn1') private defaultBtn?: ButtonComponent;
    @ViewChild('btn2') private infoBtn?: ButtonComponent;
    @ViewChild('btn3') private successBtn?: ButtonComponent;
    @ViewChild('btn4') private warningBtn?: ButtonComponent;
    @ViewChild('btn5') private errorBtn?: ButtonComponent;
    @ViewChild('msg_default_icon') private msgDefault?: MessageComponent;
    @ViewChild('msg_success_icon') private msgSuccess?: MessageComponent;
    @ViewChild('msg_warning_icon') private msgWarning?: MessageComponent;
    @ViewChild('msg_error_icon') private msgError?: MessageComponent;
    @ViewChild('msg_info_icon') private msgInfo?: MessageComponent;

    public defaultClick(): void {
        this.show(this.msgDefault as MessageComponent, this.defaultBtn as ButtonComponent);
    }

    public defaultClosed(): void {
        this.defaultBtn?.element.classList.remove('msg-hidden');
    }

    public infoClick(): void {
        this.show(this.msgInfo as MessageComponent, this.infoBtn as ButtonComponent);
    }

    public infoClosed(): void {
        this.infoBtn?.element.classList.remove('msg-hidden');
    }

    public successClick(): void {
        this.show(this.msgSuccess as MessageComponent, this.successBtn as ButtonComponent);
    }

    public successClosed(): void {
        this.successBtn?.element.classList.remove('msg-hidden');
    }

    public warningClick(): void {
        this.show(this.msgWarning as MessageComponent, this.warningBtn as ButtonComponent);
    }

    public warningClosed(): void {
        this.warningBtn?.element.classList.remove('msg-hidden');
    }

    public errorClick(): void {
        this.show(this.msgError as MessageComponent, this.errorBtn as ButtonComponent );
    }

    public errorClosed(): void {
        this.errorBtn?.element.classList.remove('msg-hidden');
    }

    public show(message: Message, btn: Button): void {
        message.visible = true;
        btn.element.classList.add('msg-hidden');
    }
}


