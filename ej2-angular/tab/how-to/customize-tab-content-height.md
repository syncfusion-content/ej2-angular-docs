---
layout: post
title: How to customize tab content height in Angular Tab | Syncfusion
description: Set the Angular Tab content height with the heightAdjustMode property choosing None, Auto, Content, or Fill mode.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to customize tab content height in Angular Tab

The Tab component provides flexible height management through the [`heightAdjustMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#heightadjustmode) property, which controls how tab content areas calculate and display their heights. By default, the [`heightAdjustMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#heightadjustmode) property is set to `Content`.

## Height adjustment modes

The Tab component offers four distinct height calculation strategies to accommodate different layout requirements:

* **None**: Each tab's content height is fixed by the Tab's own set [`height`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#height) value. Useful when all panels should be a uniform height.
* **Auto**: Each tab's content height matches the tallest panel across all tabs. Useful for consistent panel heights when content sizes vary.
* **Content**: Each tab's content height equals its own content's natural height (default). Useful when each panel has variable content.
* **Fill**: Each tab's content height fills the Tab's parent element. Requires the parent element to have an explicit height.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/height-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/height-cs1" %}

## See Also

* [Style and Appearance](../style)
* [Orientation](../orientation)