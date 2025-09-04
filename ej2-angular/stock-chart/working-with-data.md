---
layout: post
title: Working with data in Angular Stock chart component | Syncfusion
description: Learn here all about Working with data in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Working with data 
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Working with data in Angular Stock chart component

Stock Chart can visualise data bound from local or remote data.

## Local Data

You can bind a simple JSON data to the chart using [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockSeriesModel/#datasource) property in series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/datasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/datasource-cs1" %}

## Remote Data

You can also bind remote data to the chart using `DataManager`. The DataManager requires minimal information like webservice URL, adaptor and crossDomain to interact with service endpoint properly. Assign the instance of DataManager to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/seriesDirective/#datasource) property in series and map the fields of data to [`xName`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/seriesDirective/#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/seriesDirective/#yname) properties. You can also use the [`query`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/seriesDirective/#query) property of the series to filter the data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/datasource-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/datasource-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/datasource-cs2" %}

## Handling when no data is available

When no data is available to render in the chart, the `noDataTemplate` property can be used to display a custom layout within the chart area. This layout may include a message indicating the absence of data, a relevant image, or a button to initiate data loading. Styled text, images, or interactive elements can be incorporated to maintain design consistency and improve user guidance. Once data becomes available, the chart automatically updates to display the appropriate visualization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/datasource-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/datasource-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/datasource-cs3" %}

## See Also

* [Series Types](./series-types/)