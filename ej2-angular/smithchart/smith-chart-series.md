---
layout: post
title: Smith chart series in Angular Smithchart component | Syncfusion
description: Learn here all about Smith chart series in Syncfusion Angular Smithchart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Smith chart series 
documentation: ug
domainurl: ##DomainURL##
---

# Smith chart series in Angular Smithchart component

You can add any number of series to the smithchart as per your requirement. You can use series setting to either add or customize the data. For the points or datasource added in the series, line is drawn. You can customize the each series as per your requirement with marker, datalabel, animation, opacity and so on.

## points or datasource

For adding values in the smithchart, you can use either points or datasource in the series. Points and datasource both should be array of object which should contain the field names resistance and rectangle.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs27/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs27" %}

## Series customization

Using following options in series settings, you can customize each series in smithchart as per your requirement.

* [`fill`] - Used to customize the fill color for the series.
* [`enableSmartLabels`] - Used to place the data labels on the smithchart without overlapping with each other.
* [`visibility`] - Used to handle the visibility of the series.
* [`opacity`] - Used to control the opacity of the series line.
* [`width`] - Used to customize the width of the series line.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs28/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs28" %}
