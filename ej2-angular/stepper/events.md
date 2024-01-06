---
layout: post
title: Events in Angular Stepper component | Syncfusion
description:  Learn here all about Events in Syncfusion Angular Stepper component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stepper
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Stepper component

This section describes the Stepper events that will be triggered when an appropriate actions are performed. The following events are available in the Stepper component.

## created

The Stepper component triggers the [created](https://ej2.syncfusion.com/angular/documentation/api/stepper#created) event when the component rendering is completed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/events/created/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stepper/events/created/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/events/created/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/events/created/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/events/created" %}

## stepChanged

The Stepper component triggers the [stepChanged](https://ej2.syncfusion.com/angular/documentation/api/stepper#stepchanged) event after the active step is changed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/events/stepChanged/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stepper/events/stepChanged/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/events/stepChanged/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/events/stepChanged/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/events/stepChanged" %}

## stepChanging

The Stepper component triggers the [stepChanging](https://ej2.syncfusion.com/angular/documentation/api/stepper#stepchanging) event before the active step change.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/events/stepChanging/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stepper/events/stepChanging/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/events/stepChanging/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/events/stepChanging/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/events/stepChanging" %}

## stepClick

The Stepper component triggers the [stepClick](https://ej2.syncfusion.com/angular/documentation/api/stepper#stepclick) event when the step is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/events/stepClick/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stepper/events/stepClick/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/events/stepClick/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/events/stepClick/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/events/stepClick" %}

## beforeStepRender

The Stepper component triggers the [beforeStepRender](https://ej2.syncfusion.com/angular/documentation/api/stepper#beforesteprender) event before rendering each step.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/events/beforeStepRender/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stepper/events/beforeStepRender/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/events/beforeStepRender/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/events/beforeStepRender/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/events/beforeStepRender" %}