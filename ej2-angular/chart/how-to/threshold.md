---
layout: post
title: Threshold in Angular Chart component | Syncfusion
description: Learn here all about Threshold in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Threshold 
documentation: ug
domainurl: ##DomainURL##
---

# Threshold in Angular Chart component

You can mark a threshold in a chart by using the [`striplines`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#striplines) property. Thresholds help visualize important reference values or ranges in your chart data, such as target goals, safety limits, or alert zones.

To mark a horizontal threshold line, configure the [`striplines`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#striplines) property on the vertical (Y) axis. By using the [`start`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#start) and [`end`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#end) properties, you can define the exact position and range of the threshold line:

> **Note:** To use strip line features in your chart, you need to inject the [`StriplineService`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripline) into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs20" %}

## See Also

* [Strip Line](../chart-elements/strip-line)
* [Axis Customization](../chart-axis#strip-lines)