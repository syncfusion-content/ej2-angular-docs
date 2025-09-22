---
layout: post
title: Customize tab content height in Angular Tab component | Syncfusion
description: Learn here all about Customize tab content height in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Customize tab content height in Angular Tab component

The Tab component provides flexible height management through the [`heightAdjustMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/#heightadjustmode) property, which controls how tab content areas calculate and display their heights. By default, the [`heightAdjustMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/#heightadjustmode) property is set to `Content`.

## Height adjustment modes

The Tab component offers four distinct height calculation strategies to accommodate different layout requirements:

* **None**: Each tab content height is set based on the Tab height. This value is used only the tab component having the [`height`](https://ej2.syncfusion.com/angular/documentation/api/tab/#height) property.
* **Auto**: Each tab content height will take the maximum height of all other tabs content.
* **Content**: Each tab content height is set based on their own content.
* **Fill**: Each tab content height is set based on the full height of Tabs parent element.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/height-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/height-cs1" %}