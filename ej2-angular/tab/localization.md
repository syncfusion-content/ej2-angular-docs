---
layout: post
title: Localization in Angular Tab component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Tab component

Localization library allows to localize the default text content of the Tab to different cultures using the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/tab#locale) property. In Tab, the close button's tooltip text alone will be localize based on culture.  The close button is shown on tab header when enabled [`showCloseButton`](https://ej2.syncfusion.com/angular/documentation/api/tab#showclosebutton) property.

| Locale key | en-US (default)  |
|------|------|-------------|
| closeButtonTitle |  Close |

## Loading translations

To load translation object in an application use `load` function of `L10n` class.

In the below sample, `French` culture is set to Tab and change the close button's tooltip
text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/basic-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs10" %}
