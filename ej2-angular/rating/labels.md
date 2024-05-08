---
layout: post
title: Labels with Angular Rating component | Syncfusion
description:  Learn here all about Labels with Angular Rating component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Labels
documentation: ug
domainurl: ##DomainURL##
---

# Labels in Angular Rating Component

You can use the [`showLabel`](https://ej2.syncfusion.com/angular/documentation/api/rating#showlabel) property to display a label that shows the current value of the rating. When the `showLabel` property is set to `true`, a label will be displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/labels/showlabel-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/labels/showlabel-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/labels/showlabel-cs" %}

## Label position

The rating component allows you to place the label on the top, bottom, left, or right side of the rating using the [`labelPosition`](https://ej2.syncfusion.com/angular/documentation/api/rating#labelposition) property.

The following label positions are supported:

* Top: The label is placed on the top of the rating.
* Bottom: The label is placed on the bottom of the rating.
* Left: The label is placed on the left side of the rating.
* Right: The label is placed on the right side of the rating.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/labels/label-position-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/labels/label-position-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/labels/label-position-cs" %}

## Label template

You can use the [`labelTemplate`](https://ej2.syncfusion.com/angular/documentation/api/rating#labeltemplate) tag directive to specify a custom template for the `Label` of the rating. The current value of the rating will be passed as the `value` property in the template context when building the content of the label. This allows you to include dynamic information about the rating in the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/labels/label-template-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/labels/label-template-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/labels/label-template-cs" %}
