---
layout: post
title: Placeholder with Angular OTP Input component | Syncfusion
description:  Learn here all about Placeholder with Angular OTP Input component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Placeholder in Angular OTP Input component

The placeholder in OTP Input specifies the text displayed as a hint until the user enters a value. It provides guidance on the expected input format or purpose of each field.

You can set the placeholder text by using the [placeholder](https://ej2.syncfusion.com/angular/documentation/api/otp-input#placeholder) property. Additionally, when providing a single character as the placeholder value all input fields within the OTP Input component will display the same character.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/placeholder/placeholder_char" %}

When a multi-character placeholder is provided, each input field displays characters from the placeholder string in sequence, up to the configured OTP input length.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/placeholder/placeholder_string" %}
