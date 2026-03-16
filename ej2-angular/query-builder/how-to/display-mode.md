---
layout: post
title: Display mode in Angular Query builder component | Syncfusion
description: Learn here all about Display mode in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Display mode 
documentation: ug
domainurl: ##DomainURL##
---

# Display modes in Angular Query builder component

The Query Builder supports two distinct layout orientations: vertical and horizontal. Use the [`displayMode`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#displaymode) property to switch between these display modes based on your application's layout requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs7" %}

> * The default display mode of the Query Builder component is Horizontal.
> * Use the displayMode property to switch to Vertical layout when needed.
