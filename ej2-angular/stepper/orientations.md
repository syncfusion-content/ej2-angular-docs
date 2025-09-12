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

The Angular Stepper component supports displaying steps in horizontal or vertical orientations using the [orientation](https://ej2.syncfusion.com/angular/documentation/api/stepper/#orientation) property of type `StepperOrientation`. Possible values are `Horizontal` and `Vertical`.

## Horizontal

In horizontal orientation, steps are arranged side by side by setting the [orientation](https://ej2.syncfusion.com/angular/documentation/api/stepper/#orientation) property to `Horizontal`. This is the default orientation for the Stepper component.

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

In vertical orientation, steps are stacked one below the other by setting the [orientation](https://ej2.syncfusion.com/angular/documentation/api/stepper/#orientation) property to `Vertical`.

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