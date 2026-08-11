---
layout: post
title: Appearance and Styling in Angular Inline AI Assist | Syncfusion®
description: Style Angular Inline AI Assist with custom popup width, height, z-index, and CSS class for a tailored look.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Appearance and Styling in Angular Inline AI Assist

## Component Dimensions

### Popup width

You can use the [popupWidth](../api/inline-ai-assist#width) property to set the width of the Inline AI Assist. The default value is `400px`.

### Popup height

You can use the [popupHeight](../api/inline-ai-assist#height) property to set the height of the Inline AI Assist. The default value is `auto`.

### Z-index

You can use the [zIndex](../api/inline-ai-assist#zindex) property to set z-index for the Inline AI Assist popup. The default value is `1000`.

## Custom styling using cssClass

You can customize the appearance of the Inline AI Assist component by using the [cssClass](../api/inline-ai-assist#cssclass) property.

Below sample demonstrates the usage of above root level properties in Inline Assist component.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/inline-assist/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/inline-assist/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/inline-assist/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/inline-assist/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/inline-assist" %}
