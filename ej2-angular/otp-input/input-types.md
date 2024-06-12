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

This section explains the the various types of OTP (One-Time Password) input component, explaining their default behaviors and appropriate use cases.

### Number type

You can set the [type](https://helpej2.syncfusion.com/angular/documentation/api/otp-input#type) property to [number](https://helpej2.syncfusion.com/angular/documentation/api/otp-input/otpInputType/) to use this input type as number. This is ideal for OTP input scenarios with numeric-only codes. By default `type` property is `number`.

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

You can set the [type](https://helpej2.syncfusion.com/angular/documentation/api/otp-input#type) property to [text](https://helpej2.syncfusion.com/angular/documentation/api/otp-input/otpInputType/) to use this input type as text. This is suitable when the OTP input need to include both letters and numbers.

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

You can set the [type](https://helpej2.syncfusion.com/angular/documentation/api/otp-input#type) property to [password](https://helpej2.syncfusion.com/angular/documentation/api/otp-input/otpInputType/) to use this input type as password in the otp Input.

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

You can specify the value of OTP Input by using the [value](https://helpej2.syncfusion.com/angular/documentation/api/otp-input#value) property.

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
