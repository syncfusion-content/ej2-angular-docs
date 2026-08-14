---
layout: post
title: Localization in Angular Dialog | Syncfusion
description: Localize the Syncfusion Angular Dialog close button tooltip and other default text using the L10n load function to support multiple cultures.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Dialog

Use the localization library to localize the default text content of the Dialog. The close button's tooltip text is localized based on the selected culture.

| Locale key | en-US (default)  |
|------|------|
| close |  Close |

## Loading translations

Load translation objects in an application using the `load` function of the `L10n` class.

The following sample sets the French culture for the Dialog and changes the close button's tooltip text.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs8" %}
