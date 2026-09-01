---
layout: post
title: How to change display mode in Angular Query Builder UI | Syncfusion
description: Switch the Syncfusion Angular Query Builder UI between horizontal and vertical layouts using the displayMode property to match your app's layout.
platform: ej2-angular
control: Display mode 
documentation: ug
domainurl: ##DomainURL##
---

# How to change display mode in Angular Query Builder UI

The Query Builder supports two display modes: Horizontal and Vertical. Use the [`displayMode`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#displaymode) property to switch between these modes based on your application's layout requirements.

* Horizontal - Displays rules and groups in a side-by-side layout.
* Vertical - Displays rules and groups in a stacked layout.

The following example demonstrates how to set the displayMode property. Changing the display mode updates the arrangement of rules and groups to better suit the available screen space and application layout.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/filtering-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs7" %}

> * The default display mode of the Query Builder component is Horizontal.
> * Use the displayMode property to switch to the Vertical layout when needed.
