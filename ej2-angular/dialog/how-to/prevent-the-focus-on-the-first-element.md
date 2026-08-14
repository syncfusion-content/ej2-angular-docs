---
layout: post
title: How to prevent focus on first element in Angular Dialog | Syncfusion
description: Stop the Syncfusion Angular Dialog from auto-focusing the first element by enabling the preventFocus argument in the open event handler.
platform: ej2-angular
control: Prevent the focus on the first element 
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent focus on first element in Angular Dialog

By default, the dialog focuses on the first focusable element in the content area. Prevent this default behavior using the [open](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#open) event by enabling the `preventFocus` argument.

Bind the `open` event and enable the `preventFocus` argument as shown in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/dlg-focus-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-focus-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-focus-cs1" %}

## See Also

* [Prevent the focus to the previous element](./how-to/prevent-the-focus-to-the-previous-element.md)