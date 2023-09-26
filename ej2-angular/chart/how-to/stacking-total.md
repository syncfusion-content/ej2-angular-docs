---
layout: post
title: Stacking total in Angular Chart component | Syncfusion
description: Learn here all about Stacking total in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stacking total 
documentation: ug
domainurl: ##DomainURL##
---

# Stacking total in Angular Chart component

By using the `annotation`, you can show any element in desired view.

To show the total value in data points, follow the given steps:

**Step 1**:

Change the element value in chart by using the [`annotationRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#annotationrender) event. In this event, you can get the stacked value of the series and change the element value to show the total value of the stacking series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs19/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/how-to-cs19/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs19" %}