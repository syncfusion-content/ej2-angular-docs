---
layout: post
title: Globalization in Angular Stepper component | Syncfusion
description:  Learn here all about Globalization in Syncfusion Angular Stepper component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stepper
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Stepper component

## Localization

The Localization library allows you to localize the default text content of the Stepper. You can change the static text content used for the `optional` property to other cultures (Arabic, Deutsch, French, etc.) by defining the `locale` value and its translation object.

| Locale key | en-US (default) |
|-----|-----|
| optional | Optional |

In this example, the `French` culture is set to Stepper and the default text is updated with the content defined by the locale key.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/localization/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stepper/localization/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/localization/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/localization/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/localization/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/localization" %}

## RTL

RTL provides an option to switch the text direction and layout of the Stepper component from right to left by setting the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/stepper#enablertl) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/rtl/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stepper/rtl/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/rtl/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/rtl/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/rtl/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/rtl" %}