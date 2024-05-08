---
layout: post
title: User interaction in Angular Sparkline component | Syncfusion
description: Learn here all about User interaction in Syncfusion Angular Sparkline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: User interaction 
documentation: ug
domainurl: ##DomainURL##
---

# User interaction in Angular Sparkline component

Sparkline has two user interaction features: tooltip and tracker line.

## Tooltip

The sparkline provides options to display details about values of data points through tooltips when hovering the mouse over data point. To use tooltip in sparkline, inject the `SparklineTooltip` module to sparkline using the inject method.

The following code example shows enabling tooltip for sparkline with format.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs35/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs35" %}

### Tooltip customization

The fill color, text styles, format, and border of the tooltip can be customized. The following code example shows customization of tooltip's fill color and text style.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs36/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs36" %}

### Tooltip template

Sparkline tooltip has template support. By using tooltip template, you can customize tooltips. The following code example shows more customization options provided to  `sparktooltip` css class that is used in tooltip template div. Using this template, images also can be added to tooltip.

```css
.sparktooltip {
  border-radius: 5px;
  background: #008cff;
  color: #FFFFFF !important;
  font-size: 16px;
  font-style: italic;
  padding: 8px;
}
```

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs37/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs37" %}

## Track line

The track line tracks data points that are closer to the mouse position or touch contact.

To enable track lines for sparkline, specify the `visible` option of  `trackLineSettings` to true. Based on theme, tracker color will be changed. The default value of tracker color is black.

To use track line in sparkline, inject the `SparklineTooltip` module to sparkline using the inject method.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs38/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs38" %}