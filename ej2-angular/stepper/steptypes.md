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

The Stepper component provides support for displaying steps with the following step types.

## Default type

In default type, the Stepper displays steps with a combination of both indicators and labels by setting the [stepType](https://ej2.syncfusion.com/angular/documentation/api/stepper#steptype) property as `Default`. By default, the Stepper displays steps in the `Default` type.

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

In label type, the Stepper displays the steps with only the step labels by setting the [stepType](https://ej2.syncfusion.com/angular/documentation/api/stepper#steptype) property as `Label`.

> When both label and text are defined, the label takes priority in displaying the steps.

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

You can display the label on the top, bottom, left, or right side of the steps using the [labelPosition](https://ej2.syncfusion.com/angular/documentation/api/stepper#labelposition) property. 

The following label positions are supported in Stepper:

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

In indicator type, the Stepper displays steps with only the step indicators by setting the [stepType](https://ej2.syncfusion.com/angular/documentation/api/stepper#steptype) property as `Indicator`.

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
  
{% previewsample "page.domainurl/samples/stepper/stepType" %}