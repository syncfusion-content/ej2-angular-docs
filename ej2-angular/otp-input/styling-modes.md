---
layout: post
title: Styling Modes with Angular OTP Input component | Syncfusion
description:  Learn here all about Styling Modes with Angular OTP Input component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Styling Modes in Angular OTP Input component

Styling modes define the visual presentation of the OTP input fields. Choose a styling mode based on your design requirements and user experience goals. Three predefined modes are available: outlined (default), filled, and underlined.

## Outlined mode

The outlined style displays input fields with a visible border and background. This is the default styling mode and provides clear visual boundaries for each OTP field. Set the [stylingMode](https://ej2.syncfusion.com/angular/documentation/api/otp-input#stylingmode) property to [outlined](https://ej2.syncfusion.com/angular/documentation/api/otp-input/otpInputStyle/) to apply this style.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/otp-input/styling-modes/outlined/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/styling-modes/outlined/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/styling-modes/outlined/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/styling-modes/outlined" %}

## Filled mode

The filled style displays input fields with a solid background color and no border, creating a modern, compact appearance. Use this mode for designs that emphasize background-based separation. Set the [stylingMode](https://ej2.syncfusion.com/angular/documentation/api/otp-input#stylingmode) property to [filled](https://ej2.syncfusion.com/angular/documentation/api/otp-input/otpInputStyle/) to apply this style.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/otp-input/styling-modes/filled/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/styling-modes/filled/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/styling-modes/filled/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/styling-modes/filled" %}

## Underlined mode

The underlined style displays input fields with only a bottom border, creating a minimalist appearance. This mode is useful for space-constrained interfaces or mobile applications. Set the [stylingMode](https://ej2.syncfusion.com/angular/documentation/api/otp-input#stylingmode) property to [underlined](https://ej2.syncfusion.com/angular/documentation/api/otp-input/otpInputStyle/) to apply this style.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/otp-input/styling-modes/underlined/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/styling-modes/underlined/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/styling-modes/underlined/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/styling-modes/underlined" %}
