


import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { MessageComponent } from '@syncfusion/ej2-angular-notifications';

@Component({
    selector: 'app-root',
    template: `<div class="msg-template-section">
        <div class="content-section">
            <button ejs-button #showBtn id='showBtn' content='Show pull request' cssClass="e-outline e-primary e-success msg-hidden"
            (click)="showClick()"></button>
            <ejs-message #msg_template id="msg_template" severity="Success" (closed)="closed()">
                <ng-template #content>
                    <h1>Merged pull request</h1>
                    <p>Pull request #41 merged after a successful build</p>
                    <button ejs-button id='commitBtn' cssClass='e-link' content='View commit'></button>
                    <button ejs-button #closeBtn id='closeBtn' cssClass='e-link' content='Dismiss' (click)="dismissClick()"></button>
                </ng-template>
            </ejs-message>
        </div>
    </div>`
})
export class AppComponent{
    @ViewChild('showBtn') private showBtn?: ButtonComponent;
    @ViewChild('msg_template') private msgTemplate?: MessageComponent;

    public showClick(): void {
        this.msgTemplate!.visible = true;
        this.showBtn?.element.classList.add('msg-hidden');
    }

    public dismissClick(): void {
        this.msgTemplate!.visible = false;
    }

    public closed(): void {
        this.showBtn?.element.classList.remove('msg-hidden');
    }
}


