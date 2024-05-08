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
    template: `<div class="msg-custom-section">
        <div class="content-section">
            <ejs-message id="msg_icon" cssClass="custom">Essential JS 2 is a modern JavaScript UI Controls library that has
            been built from the ground up to be lightweight, responsive, modular and touch friendly. It is written in TypeScript and has no
            external dependencies. It also includes complete support for Angular, React, Vue, ASP.NET MVC and ASP.NET
            Core frameworks.</ejs-message>
        </div>
    </div>`
})
export class AppComponent{
}


