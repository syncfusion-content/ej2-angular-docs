---
layout: post
title: Step Types in Angular Stepper component | Syncfusion
description:  Learn here all about Step Types in Syncfusion Angular Stepper component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stepper
documentation: ug
domainurl: ##DomainURL##
---

# Step types in Angular Stepper component

The Angular Stepper component supports different step types to customize how steps are displayed, such as with indicators, labels, or both. Configure the step type using the [stepType](https://ej2.syncfusion.com/angular/documentation/api/stepper/#steptype) property on the `ejs-stepper` component. This affects the rendering of step content based on properties like `iconCss` and `label` in the `StepModel` interface.

## Default type

In the default type, the Stepper displays steps with a combination of indicators and labels by setting the [stepType](https://ej2.syncfusion.com/angular/documentation/api/stepper/#steptype) property to `Default`. This is the default value for the Stepper component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/default/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/default/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/default/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/default/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/default" %}

## Label type

In the label type, the Stepper displays steps with only labels by setting the [stepType](https://ej2.syncfusion.com/angular/documentation/api/stepper/#steptype) property to `Label`.

> The `label` property of the `StepModel` takes priority in displaying step content when `stepType` is set to `Label`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/labelOnly/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/labelOnly/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/labelOnly/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/labelOnly/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/labelOnly" %}

### Label positions

You can display the label on the top, bottom, start, or end side of the steps using the [labelPosition](https://ej2.syncfusion.com/angular/documentation/api/stepper/#labelposition) property. 

The following label positions are supported in the Stepper component:

| Value | Description |
|-----|-----|
| `Top` | Positions the label at the top of each step. |
| `Bottom` | Positions the label at the bottom of each step. |
| `Start` | Positions the label to the left side of each step. |
| `End` | Positions the label to the right side of each step. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/labelPosition/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/labelPosition/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/labelPosition/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/labelPosition/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/labelPosition" %}

## Indicator type

In the indicator type, the Stepper displays steps with only indicators by setting the [stepType](https://ej2.syncfusion.com/angular/documentation/api/stepper/#steptype) property to `Indicator`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/indicatorOnly/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/indicatorOnly/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/indicatorOnly/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/indicatorOnly" %}