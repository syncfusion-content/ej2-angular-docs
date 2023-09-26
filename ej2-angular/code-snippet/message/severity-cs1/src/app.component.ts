


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="msg-default-section">
        <div class="content-section">
            <ejs-message id="msg_default" content="Editing is restricted" [showIcon]="false"></ejs-message>
            <ejs-message id="msg_info" content="Please read the comments carefully" severity="Info" [showIcon]="false"></ejs-message>
            <ejs-message id="msg_success" content="Your message has been sent successfully" severity="Success" [showIcon]="false"></ejs-message>
            <ejs-message id="msg_warning" content="There was a problem with your network connection" severity="Warning" [showIcon]="false"></ejs-message>
            <ejs-message id="msg_error" content="A problem occurred while submitting your data" severity="Error" [showIcon]="false"></ejs-message>
        </div>
    </div>`
})
export class AppComponent{
}


