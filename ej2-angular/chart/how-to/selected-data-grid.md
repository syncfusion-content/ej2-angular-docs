---
layout: post
title: How to Display Selected Data in Angular Chart | Syncfusion
description: Learn here all about Selected data grid in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Selected data grid 
documentation: ug
domainurl: ##DomainURL##
---

# How to Display Selected Data in Angular Chart

By using the [`dragComplete`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#dragcomplete) event, you can get the selected data values for range selection.

To display the selected data values, follow the given steps:

**Step 1**:

Get the selected data point values and display the values through the [grid](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) component by using the [`dragComplete`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#dragcomplete) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/how-to-cs17" %}