---
layout: post
title: Smith chart tooltip in Angular Smithchart component | Syncfusion
description: Learn here all about Smith chart tooltip in Syncfusion Angular Smithchart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Smith chart tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Smith chart tooltip in Angular Smithchart component

## Enable the tooltip for Smith Chart series

The Smith Chart's tooltip shows the values of the hovered data point. To enable the tooltip, inject the `TooltipRenderService` and set the series [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#tooltip) [`visible`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesTooltipModel#visible) property to `true`. For additional customization options such as tooltip template and format, refer to the [Smith Chart tooltip API](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesTooltipModel).

The following example shows how to enable the tooltip for the Smith Chart series collection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs7" %}
