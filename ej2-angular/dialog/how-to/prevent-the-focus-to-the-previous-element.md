---
layout: post
title: How to prevent focus return in Angular Dialog | Syncfusion
description: Keep the Syncfusion Angular Dialog from returning focus to the previous element after close by enabling preventFocus in the beforeClose event.
platform: ej2-angular
control: Prevent the focus to the previous element 
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent focus return in Angular Dialog

By default, when the dialog closes, focus returns to the element that had focus before the dialog opened. Prevent this behavior using the `beforeClose` event by setting the `preventFocus` argument to `true`.

Bind the `beforeClose` event and enable the `preventFocus` argument as shown in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/dlg-focus-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-focus-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-focus-cs" %}