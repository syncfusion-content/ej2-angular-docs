---
layout: post
title: Click data in Angular Chart component | Syncfusion
description: Learn here all about Click data in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Click data 
documentation: ug
domainurl: ##DomainURL##
---

# Click data in Angular Chart component

By using the [`pointClick`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart#pointclick) event, you can get the chart data of clicked area.

To show the clicked area data from pie, follow the given steps:

**Step 1**:

By using the [`pointClick`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart#pointclick) event, you can get the `args.point.x` and `args.point.y` values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/how-to-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs1" %}