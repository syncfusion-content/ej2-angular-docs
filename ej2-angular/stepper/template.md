---
layout: post
title: Template in Angular Stepper component | Syncfusion
description:  Learn here all about Template in Syncfusion Angular Stepper component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stepper
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Stepper component

The Stepper component allows customization of step appearance and content using the [template](https://ej2.syncfusion.com/angular/documentation/api/stepper/#template) property, which accepts a string or object. This is useful for rendering dynamic content, Angular components, or complex layouts within steps. Set the `template` property on the `ejs-stepper` component to define custom step rendering.

The template context provides access to the `StepModel` object via the `step` property and the current step index via the `currentStep` property, enabling dynamic customization based on step data such as `label` or `iconCss`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/template/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/template/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/template/src/app.component.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/stepper/template" %}