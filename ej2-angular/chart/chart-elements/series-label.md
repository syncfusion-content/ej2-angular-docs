---
layout: post
title: Series label in Angular Chart component | Syncfusion
description: Learn here all about Series label in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Series label
documentation: ug
domainurl: ##DomainURL##
---

# Series label in Angular Chart component

The series label displays the name of each series inline, positioned near the end of the series path or the last visible data point. This helps identify each series without referring to the legend.

## Overview

Enable series labels using the [`labelSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#datalabel) property within the series configuration. Set the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/datalabelSettingsModel#visible) property to **true** to display the label.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/series-label/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/series-label/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/user-interaction/series-label/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/user-interaction/series-label" %}

> Note: To use the series label feature, inject the `DataLabelService` into the `providers`.

## Customization

Customize the appearance of series labels using the following properties:
- [`text`](https://ej2.syncfusion.com/angular/documentation/api/chart/datalabelSettingsModel#text) – Custom text for the label. Defaults to the series name.
- [`font`](https://ej2.syncfusion.com/angular/documentation/api/chart/datalabelSettingsModel#font) – Font customization options including color, size, family, and weight.
- [`background`](https://ej2.syncfusion.com/angular/documentation/api/chart/datalabelSettingsModel#background) – Background color of the label.
- [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/datalabelSettingsModel#border) – Border width and color.
- [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/chart/datalabelSettingsModel#opacity) – Label transparency (default: 1).
- [`showOverlapLabel`](https://ej2.syncfusion.com/angular/documentation/api/chart/datalabelSettingsModel#showOverlapLabel) – When **false**, overlapping labels are hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/series-label-customization/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/series-label-customization/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/user-interaction/series-label-customization/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/user-interaction/series-label-customization" %}