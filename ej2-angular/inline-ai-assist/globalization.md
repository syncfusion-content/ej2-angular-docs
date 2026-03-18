---
layout: post
title: Globalization in Angular Inline AI Assist | Syncfusion
description:  Checkout and learn about globalization with Angular Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Inline AI Assist component

## Localization

The Inline AI Assist can be localized to any culture by defining the text of the Inline AI Assist in the corresponding culture. The default locale is `en` (English). The following table represents the default text of the Inline AI Assist in `en` culture.

|KEY|Text|
|----|----|
|send|Send|
|stopResponseText|Stop Responding|
|thinkingIndicator|Thinking|
|editingIndicator|Editing|

The below example shows adding the German culture locale(`de-DE`)

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/globalization/localization/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/globalization/localization/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/globalization/localization/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/globalization/localization/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/globalization/localization" %}

## RTL

RTL provides an option to switch the text direction and layout of the Inline AI Assist component from right to left by setting the [enableRtl](../api/inline-ai-assist#enablertl) property to `true`.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/globalization/enable-rtl/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/globalization/enable-rtl/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/globalization/enable-rtl/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/globalization/enable-rtl/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/globalization/enable-rtl" %}
