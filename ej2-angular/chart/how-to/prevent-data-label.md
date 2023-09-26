---
layout: post
title: Prevent data label in Angular Chart component | Syncfusion
description: Learn here all about Prevent data label in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Prevent data label 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent data label in Angular Chart component

To prevent the chart data label when the data value is 0, follow the given steps:

**Step 1**:

Get the point value and check whether the `args.point.y` value is zero or not by using the [`textRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#textrender) event. If the value is zero, then set the `args.cancel` to true.

The output will appear as follows,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/how-to-cs16/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs16" %}