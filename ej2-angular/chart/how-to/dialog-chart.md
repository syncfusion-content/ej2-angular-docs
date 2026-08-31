---
layout: post
title: How to Show a Chart in a Dialog in Angular Chart | Syncfusion
description: Learn here all about Dialog chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dialog chart
documentation: ug
domainurl: ##DomainURL##
---

# How to Show a Chart in a Dialog in Angular Chart

Using the Dialog component's [`content`](https://ej2.syncfusion.com/angular/documentation/api/dialog) template, you can show a chart inside a dialog pop-up.

Follow these steps to render a chart in the Dialog component:

**Step 1**: Initialize the Dialog and create a basic chart.

Create the chart you want to display, then wrap it in a Dialog component. Set the Dialog's [`visible`](https://ej2.syncfusion.com/angular/documentation/api/dialog#visible) property to `false` so the dialog stays hidden initially.

**Step 2**: Show the dialog when a button is clicked.

Add an HTML button (or a Syncfusion Button) that calls the Dialog's [`show`](https://ej2.syncfusion.com/angular/documentation/api/dialog#show) method on click to open the dialog with the chart.

The following example renders a chart on the page and shows another chart inside a Dialog when the **Open Dialog** button is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/how-to-cs5" %}