---
layout: post
title: Open and close Context Menu in Angular Context Menu | Syncfusion
description: Programmatically open and close the Angular Context Menu at a target position using the open and close methods and their top and left parameters.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# How to open and close Context Menu in Angular Context Menu

The ContextMenu component can be opened and closed programmatically using the [`open`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#open) and [`close`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#close) methods. This programmatic control is useful for creating custom trigger events or implementing context menu functionality in response to specific user interactions.

The [`open`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#open) method accepts three parameters:
- `top` (required): To specify ContextMenu vertical positioning.
- `left` (required): To specify ContextMenu horizontal positioning.
- `target` (optional): Element used to calculate `z-index` for the ContextMenu based on the specified target.

In the following example, the ContextMenu is opened by calling the [`open`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#open) method with `top` and `left` coordinates on a button click. The ContextMenu is closed using the [`close`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#close) method on a ContextMenu item click, and additionally closes when the user clicks anywhere outside the menu.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/how-to-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/how-to-cs1" %}
