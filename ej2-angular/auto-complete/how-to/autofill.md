---
layout: post
title: How to enable autofill in Angular AutoComplete | Syncfusion®
description: Enable autofill in Angular AutoComplete so the input completes suggestions as the user types, matching the typed character to list items.
platform: ej2-angular
control: Autofill 
documentation: ug
domainurl: ##DomainURL##
---

# How to enable autofill in Angular AutoComplete

The AutoComplete component supports autofill behavior through the [`autofill`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#autofill) property. Whenever you change the input value, the AutoComplete completes the suggestion by matching the typed character. If no matches are found, the AutoComplete does not suggest any item.

In the following sample, the `autofill` property is enabled on the AutoComplete.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs15" %}
