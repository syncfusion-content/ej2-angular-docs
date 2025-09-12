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

The Stepper component allows configuration of linear flow to enforce sequential progression through steps, useful for structured workflows like forms or wizards. Enable linear flow by setting the [linear](https://ej2.syncfusion.com/angular/documentation/api/stepper/#linear) property to `true` on the `ejs-stepper` component. In linear mode, users cannot skip steps or navigate non-sequentially; navigation is restricted to the next or previous step. The default value is `false`, allowing navigation to any step in any order.

The following example demonstrates both linear and non-linear flow in the Stepper component, highlighting differences in navigation behavior.

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