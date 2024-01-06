---
layout: post
title: Validation in Angular Stepper component | Syncfusion
description:  Learn here all about Validation in Syncfusion Angular Stepper component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stepper
documentation: ug
domainurl: ##DomainURL##
---

# Steps validation in Angular Stepper component

The Stepper component allows you to set the validation state for each step, displaying either a success or error icon. You can define the success state of a step by setting the `isValid` property to `true`. If set to `false`, the step will display an error state. By default, the `isValid` property is `null`.

> Based on the `stepType`, the validation state icon will be displayed either as an indicator or as part of the step label/text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/steps/validation/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stepper/steps/validation/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/steps/validation/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/steps/validation/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/steps/validation/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/steps/validation" %}