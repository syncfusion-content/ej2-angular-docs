---
layout: post
title: How to reorder active Tab in Angular Tab | Syncfusion
description: Prevent the active Angular Tab from reordering inside the popup overflow by setting reorderActiveTab to false.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to reorder active Tab in Angular Tab

Prevent the active tab item from being reordered when the user selects items from the popup overflow menu by setting the [`reorderActiveTab`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#reorderactivetab) property to `false`. By default, the active Tab is reordered to the visible header when selected from the popup; setting `reorderActiveTab` to `false` keeps the active item highlighted inside the popup instead.

> This property only takes effect when `overflowMode` is set to `Popup`. See [Responsive Modes](../adaptive) for more details.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/basic-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs9" %}

## See Also

* [Responsive Modes](../adaptive)
* [Orientation](../orientation)