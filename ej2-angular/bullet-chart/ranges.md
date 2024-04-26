---
layout: post
title: Ranges in Angular Bullet chart component | Syncfusion
description: Learn here all about Ranges in Syncfusion Angular Bullet chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ranges 
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Ranges in Angular Bullet chart component

Ranges represent the quality of a specific range such as **Good**, **Bad** and **Satisfactory** in the Bullet Chart scale. The ending point of a qualitative range is specified in the [`end`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/rangeModel/#end) property in [`ranges`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#ranges). The [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#minimum) value of a quantitative scale is considered the starting point of the first range or the previous range end point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs24" %}

## Color Customization

Enhance the readability of ranges with color and opacity. It can be applied using the [`color`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/rangeModel/#color) and [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/rangeModel/#opacity) properties in [`ranges`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#ranges).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs25/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs25" %}