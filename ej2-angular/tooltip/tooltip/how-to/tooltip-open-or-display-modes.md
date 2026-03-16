---
layout: post
title: Tooltip open or display modes in Angular Tooltip component | Syncfusion
description: Learn here all about Tooltip open or display modes in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip open or display modes 
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip open or display modes in Angular Tooltip component

Define the tooltip's open mode to control when it displays on hover, focus, or click actions. The tooltip component supports the following open modes:

* **Auto** - Tooltip appears on hover or when the target element receives focus.
* **Hover** - Tooltip appears on hover.
* **Click** - Tooltip appears when you click the target element.
* **Focus** - Tooltip appears when you focus the target (e.g., using Tab key).
* **Custom** - Tooltip is not triggered by default actions. Bind your own events and use the `open` or `close` methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/open-mode-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/open-mode-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/open-mode-cs3" %}
