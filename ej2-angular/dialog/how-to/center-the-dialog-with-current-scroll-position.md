---
layout: post
title: Center the dialog with current scroll position in Angular Dialog component | Syncfusion
description: Learn here all about Center the dialog with current scroll position in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Center the dialog with current scroll position 
documentation: ug
domainurl: ##DomainURL##
---

# Center the dialog with current scroll position in Angular Dialog component

The dialog centers based on the target container by default. If no target is specified, the dialog renders relative to the body and centers at the current viewport position.

The following sample demonstrates centering the modal dialog based on the current page scroll position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/center-the-dialog-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/center-the-dialog-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/center-the-dialog-cs2" %}