---
layout: post
title: Print and Export in Angular 3D Chart control | Syncfusion
description: Learn here all about print and export in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# Print and Export in Angular 3D Chart control

## Print

The rendered 3D chart can be printed directly from the browser by calling the public method [`print`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/printUtils/#print). The ID of the 3D chart's div element must be passed as the input parameter to that method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/print-export/print-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/print-export/print-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/print-export/print-cs1" %}

## Export

The rendered 3D chart can be exported to `JPEG`, `PNG`, `SVG`, or `PDF` format using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/exportUtils/#export) method. The input parameters for this method are: `type` for format and `fileName` for result.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/print-export/print-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/print-export/print-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/print-export/print-cs2" %}
