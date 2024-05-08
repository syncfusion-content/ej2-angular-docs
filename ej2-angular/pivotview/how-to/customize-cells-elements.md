---
layout: post
title: Customize cells elements in Angular Pivotview component | Syncfusion
description: Learn here all about Customize cells elements in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize cells elements 
documentation: ug
domainurl: ##DomainURL##
---

# Customize cells elements in Angular Pivotview component

You can customize the pivot table cell element by using the `cellTemplate` property.
The cellTemplate property accepts either an HTML string or the element's ID, which can be used to append additional HTML elements to showcase each cell with custom format.

In this demo, the revenue cost for each year is represented with trend icons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs161/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs161/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs161" %}
