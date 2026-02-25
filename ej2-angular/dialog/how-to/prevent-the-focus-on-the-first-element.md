---
layout: post
title: Prevent focus on first element in Angular Dialog | Syncfusion
description: Learn here all about Prevent the focus on the first element in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Prevent the focus on the first element 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent focus on the first element in Angular Dialog component

By default, the dialog focuses on the first focusable element in the content area. Prevent this default behavior using the [open](https://ej2.syncfusion.com/angular/documentation/api/dialog/#open) event by enabling the `preventFocus` argument.

Bind the `open` event and enable the `preventFocus` argument as shown in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-focus-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-focus-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-focus-cs1" %}

## See Also

* [Prevent the focus to the previous element](./how-to/prevent-the-focus-to-the-previous-element.md)