---
layout: post
title: Localization in Angular Stock chart component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Stock chart component

Localization library allows to localize the default text content of StockChart. In stock chart component, it has the static text on some features(like zooming toolbars) and this can be changed to any other culture(Arabic, Deutsch, French, etc) by defining the locale value and translation object.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Locale key words</b></td>
<td><b>Text to display</b></td>
</tr>
<tr>
<td>Zoom</td>
<td>Zoom</td>
</tr>
<tr>
<td>ZoomIn</td>
<td>ZoomIn</td>
</tr>
<tr>
<td>ZoomOut</td>
<td>ZoomOut</td>
</tr>
<tr>
<td>Reset</td>
<td>Reset</td>
</tr>
<tr>
<td>Pan</td>
<td>Pan</td>
</tr>
<tr>
<td>ResetZoom</td>
<td>Reset Zoom</td>
</tr>
</table>

To load translation object in an application use load function of `L10n` class.

For more information about localization, refer this [`localization`](https://ej2.syncfusion.com/angular/documentation/common/localization/)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/localization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stock-chart/localization-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/localization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/localization-cs1" %}
