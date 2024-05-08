---
layout: post
title: Linear Flow in Angular Stepper component | Syncfusion
description:  Learn here all about Linear Flow in Syncfusion Angular Stepper component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stepper
documentation: ug
domainurl: ##DomainURL##
---

# Linear Flow in Angular Stepper component

The Stepper component enables users to progress sequentially through each step, ensuring navigation from one step to the next in a linear way by setting the [linear](https://ej2.syncfusion.com/angular/documentation/api/stepper#linear) property to `true`. The default value is `false` allowing navigation between any steps and vice versa.

The example demonstrates the functionality of both linear and non-linear flow in the Stepper.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/linearStep/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/linearStep/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/linearStep/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/linearStep/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/linearStep" %}