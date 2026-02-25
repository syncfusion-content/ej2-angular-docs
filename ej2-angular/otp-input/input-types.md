---
layout: post
title: Input Types with Angular OTP Input component | Syncfusion
description:  Learn here all about Input Types with Angular OTP Input component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Input Types in Angular OTP Input component

## Types

The OTP Input component supports multiple input types to accommodate different OTP scenarios. Each type has specific use cases and validation rules for secure and user-friendly OTP entry.

### Number type

You can set the [type](https://ej2.syncfusion.com/angular/documentation/api/otp-input#type) property to [number](https://ej2.syncfusion.com/angular/documentation/api/otp-input/otpInputType/) to accept numeric-only values. This type is ideal for most OTP scenarios where codes consist of digits only. The `type` property defaults to `number`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/otp-input/inputTypes/number/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/inputTypes/number/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/inputTypes/number/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/inputTypes/number" %}

### Text type

You can set the [type](https://ej2.syncfusion.com/angular/documentation/api/otp-input#type) property to [text](https://ej2.syncfusion.com/angular/documentation/api/otp-input/otpInputType/) to accept both letters and numbers. Use this type for OTP codes that include alphanumeric characters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/otp-input/inputTypes/text/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/inputTypes/text/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/inputTypes/text/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/inputTypes/text" %}

### Password type

You can set the [type](https://ej2.syncfusion.com/angular/documentation/api/otp-input#type) property to [password](https://ej2.syncfusion.com/angular/documentation/api/otp-input/otpInputType/) to mask OTP entries for enhanced security and privacy. This type is recommended for sensitive environments where OTP values should not be visible on screen.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/otp-input/inputTypes/password/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/inputTypes/password/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/inputTypes/password/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/inputTypes/password" %}

## Value

You can specify the value of OTP Input by using the [value](https://ej2.syncfusion.com/angular/documentation/api/otp-input#value) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/otp-input/inputTypes/value/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/inputTypes/value/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/inputTypes/value/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/inputTypes/value" %}
