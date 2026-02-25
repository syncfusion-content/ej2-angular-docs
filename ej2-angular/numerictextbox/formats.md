---
layout: post
title: Formats in Angular Numerictextbox component | Syncfusion
description: Learn here all about Formats in Syncfusion Angular Numerictextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Formats 
documentation: ug
domainurl: ##DomainURL##
---

# Formats in Angular Numerictextbox component

You can format the value of NumericTextBox using [`format`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#format) property.
The value will be displayed in the specified format when the component is in focused out state. The format string supports both the [standard numeric format string](https://msdn.microsoft.com/en-us/library/dwhawy9k.aspx) and [custom numeric format string](https://msdn.microsoft.com/en-us/library/0c899ak8.aspx) as specified in MSDN.

## Standard formats

Standard numeric formats use specifiers like `n` (number), `p` (percentage), and `c` (currency) to format values in the NumericTextBox. By using these format specifiers, you can create percentage and currency input behaviors.

The following example demonstrates percentage and currency format usage:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs2" %}

## Custom formats

Custom numeric formats can be created by combining format specifiers like `#` (optional digit) and `0` (required digit) to meet specific requirements.

The following examples demonstrate custom format usage:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs3" %}