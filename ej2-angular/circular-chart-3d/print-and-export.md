---
layout: post
title: Print and Export in Angular 3D Circular Chart | Syncfusion
description: Learn here all about print and export in Syncfusion Angular 3D Circular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Print and Export
documentation: ug
domainurl: ##DomainURL##
---

# Print and Export in Angular 3D Circular Chart component

## Print

The rendered 3D Circular Chart can be printed directly from the browser by calling the public method `print`. The ID of the 3D Circular Chart div element must be passed as the input parameter to that method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/print/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/print/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/print/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/print" %}

## Export

The rendered 3D Circular Chart can be exported to `JPEG`, `PNG`, or `SVG` format using the `export` method. Additionally, you can export the 3D Circular Chart as a `PDF` format using the `pdfExport` method. The input parameters for this method are `type` for the format and `fileName` for the result.

Input parameters for this method are `Export` Type for `format` and `fileName` of result.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/user-interaction/export/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/user-interaction/export/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/user-interaction/export/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/user-interaction/export" %}