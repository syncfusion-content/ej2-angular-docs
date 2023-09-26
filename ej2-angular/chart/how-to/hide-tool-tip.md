---
layout: post
title: Hide tool tip in Angular Chart component | Syncfusion
description: Learn here all about Hide tool tip in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Hide tool tip 
documentation: ug
domainurl: ##DomainURL##
---

# Hide tool tip in Angular Chart component

By using the [`tooltipRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#tooltiprender) event, you can cancel the tooltip for unselected series in the chart.

To hide the tooltip value in unselected series, follow the given steps:

**Step 1**:

By using the [`tooltipRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#tooltiprender) event, you can get the series elements in the arguments. By using this argument we can compare whether seriesElementclasslist is deselected container or not.
If it is true then we cancel the tooltip by setting the value for `args.cancel` as `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/how-to-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs9" %}