---
layout: post
title: How to open and close Context Menu in Angular Context Menu | Syncfusion
description: Programmatically open and close the Angular Context Menu at a target position using the open and close methods and their top and left parameters.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# How to open and close Context Menu in Angular Context Menu

The ContextMenu component can be opened and closed programmatically using the [`open`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#open) and [`close`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#close) methods. This programmatic control is useful for creating custom trigger events or implementing context menu functionality in response to specific user interactions.

The [`open`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#open) method accepts three parameters:
- `top`: To specify ContextMenu vertical positioning.
- `left`: To specify ContextMenu horizontal positioning.
- `target`: To calculate z-index for ContextMenu based upon the specified target.

In the following example, the ContextMenu is opened using the [`open`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#open) method at the specified position using `top` and `left` coordinates. The ContextMenu is closed using the [`close`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#close) method on ContextMenu item click or document click.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/how-to-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/how-to-cs1" %}
