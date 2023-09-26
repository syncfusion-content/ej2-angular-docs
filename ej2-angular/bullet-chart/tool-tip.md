---
layout: post
title: Tool tip in Angular Bullet chart component | Syncfusion
description: Learn here all about Tool tip in Syncfusion Angular Bullet chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tool tip 
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in Angular Bullet chart component

When the mouse is hovered over a bar in the Bullet Chart, the tooltip displays important summary about the actual and the target bar values.

## Default Tooltip

The tooltip is not visible by default. To make it visible, set the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletTooltipSettingsModel/#enable) property in the [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#tooltip) to **true** and injecting `BulletTooltip` module using `BulletChart.Inject(BulletTooltip)`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs34/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs34/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs34/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs34" %}

## Tooltip Template

Any HTML elements can be displayed in the tooltip by using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletTooltipSettingsModel/#template) property of the [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#tooltip). You can use the **${target}** and **${value}** as place holders in the HTML element to display the value and target values from the data source of corresponding data point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/user-interaction/tooltipTemplate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/user-interaction/tooltipTemplate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/user-interaction/tooltipTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/user-interaction/tooltipTemplate-cs1" %}

## Tooltip Customization

The following properties can be used to customize the Bullet Chart tooltip.

* [`fill`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletTooltipSettingsModel/#fill) - Specifies the color of tooltip.
* [`border`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletTooltipSettingsModel/#border) - Specifies the tooltip border color and width.
* [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletTooltipSettingsModel/#textstyle) - Specifies the tooltip font family, font style, font weight, color and size.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs35/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs35/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs35" %}