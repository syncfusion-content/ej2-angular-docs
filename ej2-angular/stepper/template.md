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

The Stepper component allows you to customize the default appearance and content of each step, creating a personalized experience for the user. You can use the [template](https://ej2.syncfusion.com/angular/documentation/api/stepper#template) propety to set the template content for the steps.

The step model and current step index are passed as `step` and `currentStep` properties in the template context for customization.

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