---
layout: post
title: Tooltip with Angular Rating component | Syncfusion
description:  Learn here all about Tooltip with Angular Rating component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular Rating Component

The rating component supports tooltip to show additional information in rating items by setting the [`showTooltip`](https://ej2.syncfusion.com/angular/documentation/api/rating#showtooltip) property. If enabled, the tooltip appears when the user hovers over a rating item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/tooltip/showtooltip-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/tooltip/showtooltip-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/tooltip/showtooltip-cs" %}

## Tooltip template

You can use the [`tooltipTemplate`](https://ej2.syncfusion.com/angular/documentation/api/rating#tooltiptemplate) tag directive to specify a custom template for the `tooltip` of the rating. The current value of the rating will be passed as the `value` property in the template context when building the content of the tooltip. This allows you to include dynamic information about the rating in the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/tooltip/tooltip-template-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/tooltip/tooltip-template-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/tooltip/tooltip-template-cs" %}

## Tooltip customization

You can customize the appearance of the tooltips using the `cssClass` property of the rating component and by defining the custom styles for tooltip elements like the below example.

> You can find more information about customizing the appearance of the tooltip in the [Tooltip Customization](https://ej2.syncfusion.com/angular/documentation/tooltip/style) documentation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/tooltip/custom-tooltip-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/tooltip/custom-tooltip-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/tooltip/custom-tooltip-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/tooltip/custom-tooltip-cs" %}
