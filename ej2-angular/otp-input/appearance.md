---
layout: post
title: Appearance in Angular OTP Input | Syncfusion
description: Customize the Angular OTP Input length, disabled state, and visual style using the cssClass property with success, warning, and error themes.
platform: ej2-angular
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular OTP Input

You can also customize the appearance of OTP Input component.

## Setting input length

You can specify the length of OTP by using the [length](https://ej2.syncfusion.com/angular/documentation/api/otp-input#length) property. The default value is `4`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/otp-input/appearance/length/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/appearance/length/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/appearance/length/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/appearance/length" %}

## Disabling OTP Input

You can disable the OTP Input component by using the [disabled](https://ej2.syncfusion.com/angular/documentation/api/otp-input#disabled) property. By default, the value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/otp-input/appearance/disabled/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/appearance/disabled/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/appearance/disabled/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/appearance/disabled" %}

## CSS classes

You can customize the appearance of the OTP Input component, such as by changing its colors, fonts, sizes, or other visual aspects by using the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/otp-input#cssclass) property.

The OTP input component supports the following predefined styles that can be defined using the `cssClass` property. You can customize by replacing the `cssClass` property with the below defined class names.

| cssClass | Description |
| -------- | -------- |
| `e-success` | Used to represent a positive action. |
| `e-warning` | Used to represent an action with caution. |
| `e-error` | Used to represent a negative action. |

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/otp-input/appearance/cssClass/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/otp-input/appearance/cssClass/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/otp-input/appearance/cssClass/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/otp-input/appearance/cssClass" %}
