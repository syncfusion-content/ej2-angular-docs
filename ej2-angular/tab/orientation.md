---
layout: post
title: Orientation in Angular Tab | Syncfusion
description: Place the Angular Tab header at the Top, Bottom, Left, or Right via the headerPlacement property and adapt overflow with overflowMode.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Orientation in Angular Tab

This section describes the available Tab header placement options for adapting layout to different screen sizes and design requirements.

The Tab component allows placing the header section at different positions by using the [`headerPlacement`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#headerplacement) property. The available positions are as follows:

* **Top**: Tab header items are arranged horizontally, and content renders below the header (default).
* **Bottom**: Tab header items are arranged horizontally, and content renders above the header.
* **Left**: Tab header items are arranged vertically, and content renders to the right of the header. Set an explicit `height` on the Tab container for proper rendering.
* **Right**: Tab header items are arranged vertically, and content renders to the left of the header. Set an explicit `height` on the Tab container for proper rendering.

The Tab component automatically adapts to available space when tab items exceed the viewport. You can customize the overflow behavior using the [`overflowMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#overflowmode) property. The available modes are as follows:

* **Scrollable** (default): navigation arrows appear to scroll overflow items.
* **Popup**: overflowing items are grouped in a drop-down menu.

For an in-depth discussion of overflow behavior, see [Responsive Modes](./adaptive).

The following sample demonstrates each `headerPlacement` value combined with different `overflowMode` settings:

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/orientation-tab-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/orientation-tab-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/orientation-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/orientation-tab-cs1" %}

## See Also

* [Adaptive (Responsive modes)](./adaptive)
* [Header configuration](./header)
* [Style and Appearance](./style)