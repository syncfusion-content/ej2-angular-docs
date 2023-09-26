


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="msg-custom-section">
        <div class="content-section">
            <h4>Rounded</h4>
            <ejs-message content="The license will expire today" cssClass="rounded" severity="Warning"></ejs-message>
            <h4>Square</h4>
            <ejs-message content="The license key is invalid" cssClass="square" severity="Error"></ejs-message>
        </div>
    </div>`
})
export class AppComponent{
}


