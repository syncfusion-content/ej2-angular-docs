---
layout: post
title: Localization in Angular Chart component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Chart component

Localization enables the chart component to adapt its text content to different languages and regions. The chart's default text content, such as zoom toolbar labels and other static text elements, can be localized by providing locale-specific translation objects.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Locale key</b></td>
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

To load translations in an application, use the `L10n.load()` function.

For more information about localization, see the localization guide: [`localization`](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs1" %}