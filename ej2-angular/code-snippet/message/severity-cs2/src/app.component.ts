import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MessageModule } from '@syncfusion/ej2-angular-notifications'




import { Component } from '@angular/core';

@Component({
imports: [
         MessageModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="msg-default-section">
        <div class="content-section">
            <ejs-message id="msg_default" content="Editing is restricted"></ejs-message>
            <ejs-message id="msg_info" content="Please read the comments carefully" severity="Info"></ejs-message>
            <ejs-message id="msg_success" content="Your message has been sent successfully" severity="Success"></ejs-message>
            <ejs-message id="msg_warning" content="There was a problem with your network connection" severity="Warning"></ejs-message>
            <ejs-message id="msg_error" content="A problem occurred while submitting your data" severity="Error"></ejs-message>
        </div>
    </div>`
})
export class AppComponent{
}


