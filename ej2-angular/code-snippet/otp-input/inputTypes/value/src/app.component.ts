import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { OtpInputModule } from '@syncfusion/ej2-angular-inputs'
import { enableRipple } from '@syncfusion/ej2-base'

import { Component } from '@angular/core';

@Component({
imports: [
         FormsModule, OtpInputModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<!-- To Render OTP Input component. -->
    <div class="wrap">
        <div id='otp-container' style="width: 350px;">
            <div ejs-otpinput value="1234"></div>
        </div>
    </div>`
})

export class AppComponent { }
