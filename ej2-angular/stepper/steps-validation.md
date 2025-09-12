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

The Angular Stepper component allows configuration of validation states for individual steps to indicate completion or errors, useful for multi-step forms or task workflows. Set the validation state using the `isValid` property of the `StepModel`. When `isValid` is `true`, a success icon (e.g., checkmark) is displayed; when `false`, an error icon (e.g., cross) is shown. The default value is `null`, indicating no validation icon.

> Based on the `stepType`, the validation state icon will be displayed either as an indicator or as part of the step label/text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/steps/validation/src/app.component.ts %}
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