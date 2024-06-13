---
layout: post
title: Events with Angular OTP Input component | Syncfusion
description:  Learn here all about Events with Angular OTP Input component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular OTP Input component

This section describes the OTP Input events that will be triggered when appropriate actions are performed. The following events are available in the OTP Input component.

## created

The OTP Input component triggers the [created](https://ej2.syncfusion.com/angular/documentation/api/otp-input#created) event when the component rendering is completed.

```typescript

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render OTP Input component. -->
            <div class="wrap">
                <div id='otp-container' style="width: 350px;">
                    <div ejs-otpinput id='otp_default' (created)="created()"></div>
                </div>
            </div>`
})

export class AppComponent {
  public created(){
    //Your required action here
  };
}

```

## focus 

The OTP Input component triggers the [focus](https://ej2.syncfusion.com/angular/documentation/api/otp-input#focus) event when the OTP Input is focused. The [OtpFocusEventArgs](https://ej2.syncfusion.com/angular/documentation/api/otp-input/otpFocusEventArgs/) passed as an event argument provides the details of the focus event.

```typescript

import { Component } from '@angular/core';
import { OtpFocusEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render OTP Input component. -->
            <div class="wrap">
                <div id='otp-container' style="width: 350px;">
                    <div ejs-otpinput id='otp_default' (focus)="focus($event)"></div>
                </div>
            </div>`
})

export class AppComponent {
    public focus(args: OtpFocusEventArgs) {
      //Your required action here
    };
}

```

## blur

The OTP Input component triggers the [blur](https://ej2.syncfusion.com/angular/documentation/api/otp-input#blur) event when the OTP Input is focused out. The [OtpFocusEventArgs](https://ej2.syncfusion.com/angular/documentation/api/otp-input/otpFocusEventArgs/) passed as an event argument provides the details of the blur event.

```typescript

import { Component } from '@angular/core';
import { OtpFocusEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render OTP Input component. -->
            <div class="wrap">
                <div id='otp-container' style="width: 350px;">
                    <div ejs-otpinput id='otp_default' (blur)="blur($event)"></div>
                </div>
            </div>`
})

export class AppComponent {
    public blur(args: OtpFocusEventArgs) {
      //Your required action here
    };
}

```

## input

The OTP Input component triggers the [input](https://ej2.syncfusion.com/angular/documentation/api/otp-input#input) event when the value of each OTP Input is changed. The [OtpInputEventArgs](https://ej2.syncfusion.com/angular/documentation/api/otp-input/otpInputEventArgs/) passed as an event argument provides the details of the each value is changed.

```typescript

import { Component } from '@angular/core';
import { OtpInputEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render OTP Input component. -->
            <div class="wrap">
                <div id='otp-container' style="width: 350px;">
                    <div ejs-otpinput id='otp_default' (input)="input($event)"></div>
                </div>
            </div>`
})

export class AppComponent {
    public input(args: OtpInputEventArgs) {
      //Your required action here
    };
}

```

## valueChanged

The OTP Input component triggers the [valueChanged](https://ej2.syncfusion.com/angular/documentation/api/otp-input#valuechanged) event when the value of the OTP Input is changed and matching the Otp input length.The [OtpChangedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/otp-input/otpChangedEventArgs/) passed as an event argument provides the details when value is changed.

```typescript

import { Component } from '@angular/core';
import { OtpChangedEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render OTP Input component. -->
            <div class="wrap">
                <div id='otp-container' style="width: 350px;">
                    <div ejs-otpinput id='otp_default' (valueChanged)="valueChanged($event)"></div>
                </div>
            </div>`
})

export class AppComponent {
    public valueChanged(args: OtpChangedEventArgs) {
      //Your required action here
    };
}

```

Below example demonstrates the valueChanged event of the OTP Input component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/otp-input/events/valueChanged/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/events/valueChanged/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/events/valueChanged/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/events/valueChanged" %}
