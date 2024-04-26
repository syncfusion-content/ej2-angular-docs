---
layout: post
title: Column width in Angular Chart component | Syncfusion
description: Learn here all about Column width in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column width 
documentation: ug
domainurl: ##DomainURL##
---

# Column width in Angular Chart component

By using the [`columnWidth`](https://ej2.syncfusion.com/documentation/api/chart/series/#columnwidth) and [`columnSpacing`](https://ej2.syncfusion.com/documentation/api/chart/series/#columnspacing) property in the series of the chart, you can customize the column width and column spacing value for all points of the column series.

To customize the column width and spacing in column series of the chart, follow the given steps:

**Step 1**:

By setting [`columnWidth`](https://ej2.syncfusion.com/documentation/api/chart/series/#columnwidth) value between 0 to 1 you can customize the width for every point in the column series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs2" %}
