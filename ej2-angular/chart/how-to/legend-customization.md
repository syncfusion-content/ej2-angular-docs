---
layout: post
title: Legend customization in Angular Chart component | Syncfusion
description: Learn here all about Legend customization in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Legend customization 
documentation: ug
domainurl: ##DomainURL##
---

# Legend customization in Angular Chart component

By using the [`legendRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#legendrender), you can customize the legend shape.

To Customize the legend shape, follow the given steps:

**Step 1**:

Set the shape value `args.shape` to the argument to change the legend shape by using the [`legendRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#legendrender) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs11" %}