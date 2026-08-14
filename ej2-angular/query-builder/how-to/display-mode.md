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

The Query Builder supports two distinct layout orientations: vertical and horizontal. Use the [`displayMode`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#displaymode) property to switch between these display modes based on your application's layout requirements.

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
> * Use the displayMode property to switch to Vertical layout when needed.
