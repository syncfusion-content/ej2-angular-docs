---
layout: post
title: Data binding in Angular Treemap component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Treemap component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Treemap component

The TreeMap control supports data binding using the dataSource property.

## Populate data

The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#datasource) property accepts collection values as input. For example, a list of objects can be provided as input. Data can be given as either flat or hierarchical collection to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#datasource) property.

<!-- markdownlint-disable MD036 -->

### Flat collection

The following code shows, how to bind a flat collection as data source to the TreeMap control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs8" %}