---
layout: post
title: Tooltip in Angular Progress bar component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Angular Progress bar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---
# Tooltip in Angular Progress bar component

## Tooltip

The tooltip for the progress bar is used to represent the progress value. During the initial load, it can be enabled by using the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/tooltipSettings/#enable) property. The [`showTooltipOnHover`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/tooltipSettings/#showtooltiponhover) property can show the tooltip on mouseover.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/tooltip-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/tooltip-cs1" %}

## Format

By default, the tooltip shows information about progress. In addition to that, show more information in the tooltip using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/tooltipSettings/#format) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/tooltip-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/tooltip-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/tooltip-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/tooltip-cs2" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/tooltipSettings/#fill) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/tooltipSettings/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/tooltipSettings/#textstyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/tooltip-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/tooltip-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/tooltip-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/progressbar/tooltip-cs3" %}