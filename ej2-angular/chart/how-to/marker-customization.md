---
layout: post
title: Marker customization in Angular Chart component | Syncfusion
description: Learn here all about Marker customization in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Marker customization 
documentation: ug
domainurl: ##DomainURL##
---

# Marker customization in Angular Chart component

By using the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#pointrender), you can customize the marker shape.

To Customize the marker shape, follow the given steps:

**Step 1**:

Customize the marker shape in each data point by using the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#pointrender) event.
Using this event, you can set the `shape` value to the argument.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/how-to-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs13" %}