---
layout: post
title: Localization in Angular Tab component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Tab component

Localization library allows you to localize the default text content of the Tab component for different cultures using the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/tab/#locale) property. In Tab, the close button's tooltip text will be localized based on the specified culture. The close button appears on the tab header when the [`showCloseButton`](https://ej2.syncfusion.com/angular/documentation/api/tab/#showclosebutton) property is enabled.

| Locale key | en-US (default)  |
|------|------|-------------|
| closeButtonTitle |  Close |

## Loading translations

To load translation objects in an application, use the `load` function of the `L10n` class.

In the following sample, the `French` culture is applied to the Tab component, which changes the close button's tooltip text accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/basic-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs10" %}