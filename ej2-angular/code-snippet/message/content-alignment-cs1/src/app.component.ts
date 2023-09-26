


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="msg-custom-section">
        <div class="content-section">
            <h4>Content Alignment</h4>
            <ejs-message id="msg_content_left" content="Your license has been activated successfully" severity="Success"></ejs-message>
            <ejs-message id="msg_content_center" content="The license will expire today" cssClass="e-content-center" severity="Warning"></ejs-message>
            <ejs-message id="msg_content_right" content="The license key is invalid" cssClass="e-content-right" severity="Error"></ejs-message>
        </div>
    </div>`
})
export class AppComponent{
}


