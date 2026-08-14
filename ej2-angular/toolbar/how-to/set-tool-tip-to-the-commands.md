---
layout: post
title: How to set tooltip to commands in Angular Toolbar | Syncfusion
description: Add HTML tooltips to Angular Toolbar commands via the tooltipText property, or upgrade to the ej2-tooltip component on hover.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# How to set tooltip to commands in Angular Toolbar

The [`tooltipText`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#tooltiptext) property of the Toolbar item is used to set the HTML Tooltip to the commands that can be viewed as hint texts on mouse hover.

To change the [`tooltipText`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#tooltiptext) to ej2-tooltip component:

* Import the `Tooltip` module from `ej2-popups`, and initialize the Tooltip with the Toolbar target. Refer to the following code example:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs4" %}