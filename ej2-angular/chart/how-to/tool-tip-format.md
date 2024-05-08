---
layout: post
title: Tool tip format in Angular Chart component | Syncfusion
description: Learn here all about Tool tip format in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tool tip format 
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip format in Angular Chart component

Using [`tooltipRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#tooltiprender) event, you can able to format the
datetime value instead of rendered value.

To format the datetime value,please follow the steps below

**Step 1**:

By using [`tooltipRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#tooltiprender) event we can able to get the current point x value. Using this value to format the tooltip by using `formatDate` method.

The output will appear as follows,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs21" %}