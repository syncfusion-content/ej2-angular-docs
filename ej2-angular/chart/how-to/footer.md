---
layout: post
title: Footer in Angular Chart component | Syncfusion
description: Learn here all about Footer in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Footer 
documentation: ug
domainurl: ##DomainURL##
---

# Footer in Angular Chart component

By using `annotation`, you can place any html elements to chart in a desired view.

To create footer and watermark for chart, follow the given steps:

**Step 1**:

Initialize the custom elements by using the `annotation` property.

By using the `content` option of the annotation object, you can specify the id of the element that needs
to be displayed in the chart.

Use the `content` option of the annotation object to create watermark text for chart. The specified content **syncfusion** needs to be displayed in chart in the specified coordinate unit.

```bash
    #  watermark for chart
       <e-annotations>
            <e-annotation  content='<div id="chart_cloud" style="font-size:450%; opacity: 0.3;" >syncfusion</div>'
            x='Wed' y= 20 coordinateUnits= 'Point' horizontalAlignment='Center'>
            </e-annotation>
        </e-annotations>
```

Use the `x` and `y` option of the annotation object to create footer for chart.

```bash
<e-annotations>
   #  footer for chart
        <e-annotation  content='<div id="chart" > <a href="https://www.syncfusion.com" target="_blank">www.syncfusion.com</a></div>'
            x=400 y=440 coordinateUnits='Pixel' horizontalAlignment='Center'>
            </e-annotation>
        </e-annotations>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs8" %}
