---
layout: post
title: Data binding in Angular Bullet chart component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Bullet chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Data binding in Angular Bullet chart component

Bullet Chart can visualise data bound from local or remote data.

## Local Data

The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#datasource) property accepts a collection of values as input that helps to display measures, and compares them to a target bar. To display the actual and target bar, specify the property from the datasource into the [`valueField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#valuefield) and [`targetField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#targetfield) respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs20/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs20/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs20" %}