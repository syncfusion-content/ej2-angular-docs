---
layout: post
title: Orientations in Angular Stepper component | Syncfusion
description:  Learn here all about Orientations in Syncfusion Angular Stepper component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stepper
documentation: ug
domainurl: ##DomainURL##
---

# Orientations in Angular Stepper component

The Stepper component supports the display of steps in both horizontal and vertical orientations by using the [orientation](https://ej2.syncfusion.com/angular/documentation/api/stepper#orientation) property.

## Horizontal

In horizontal orientation, the steps are displayed in a side-by-side manner by setting the [orientation](https://ej2.syncfusion.com/angular/documentation/api/stepper#orientation) property to `Horizontal`. By default, the steps are displayed in the horizontal orientation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/horizontal/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/horizontal/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/horizontal/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/horizontal/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/horizontal" %}

## Vertical

You can display the steps one below the other vertically by setting the [orientation](https://ej2.syncfusion.com/angular/documentation/api/stepper#orientation) property to `Vertical`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/vertical/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/vertical/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/vertical/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/vertical/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/vertical" %}