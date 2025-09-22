---
layout: post
title: Reorder active tab in Angular Tab component | Syncfusion
description: Learn here all about Reorder active tab in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Reorder active tab in Angular Tab component

We can able to prevent the changing of the active tab item on resizing the browser when overflow mode is popup by using the [`reorderActiveTab`](https://ej2.syncfusion.com/angular/documentation/api/tab/#reorderActiveTab) property. By default, the active Tab should be reordered when we click the tab items from the popup. If we set `false` to [`reorderActiveTab`](https://ej2.syncfusion.com/angular/documentation/api/tab/#reorderActiveTab) property the active tab item from the popup will not be reordered and an active item is highlighted inside the popup. The following code example depicts to prevent the reorder active tab item inside the popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/basic-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs9" %}