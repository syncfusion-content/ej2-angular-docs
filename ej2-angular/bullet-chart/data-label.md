---
layout: post
title: Data label in Angular Bullet chart component | Syncfusion
description: Learn here all about Data label in Syncfusion Angular Bullet chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data label 
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Data label in Angular Bullet chart component

Data Labels are used to identify the value of actual bar in the Bullet Chart component. The Data Labels will be shown by specifying the [`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#datalabel) setting's [`enable`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletDataLabelModel/#enable) property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs21" %}

## Data Label Customization

Data Labels color, opacity, font size, font family, font weight, and font style can be customized using the [`labelStyle`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletDataLabelModel/#labelstyle).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs22" %}