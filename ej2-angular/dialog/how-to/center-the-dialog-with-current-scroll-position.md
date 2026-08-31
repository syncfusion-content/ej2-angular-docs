---
layout: post
title: Center with current scroll in Angular Dialog | Syncfusion
description: Learn here all about Center the dialog with current scroll position in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Center the dialog with current scroll position 
documentation: ug
domainurl: ##DomainURL##
---

# Center the dialog with current scroll position in Angular Dialog

The Angular Dialog component automatically tracks page scroll and stays centered on the visible viewport. When a `target` is specified, the dialog is constrained and centered inside that target container; when no `target` is specified, the dialog renders relative to the body and remains centered against the current viewport.

The following sample demonstrates a modal dialog (`isModal='true'`) whose `target` is set to `document.body`, so it is centered on the page viewport while you scroll. The `overlayClick` event hides the dialog when the user clicks the modal overlay.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/center-the-dialog-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/center-the-dialog-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/center-the-dialog-cs2" %}