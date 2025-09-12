---
layout: post
title: Tooltip in Angular Stepper component | Syncfusion
description:  Learn here all about Tooltip in Syncfusion Angular Stepper component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stepper
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular Stepper component

The Angular Stepper component supports tooltips to display additional information about steps, useful for providing contextual help or details in workflows like forms or wizards. Enable tooltips by setting the [showTooltip](https://ej2.syncfusion.com/angular/documentation/api/stepper/#showtooltip) property to `true` on the `ejs-stepper` component. When enabled, tooltips appear on hover over the step, providing the information such as the label or text. The default value of `showTooltip` is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/tooltip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/tooltip/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/tooltip/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/tooltip/src/app.component.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/stepper/tooltip" %}

## Tooltip template

You can use the [tooltipTemplate](https://ej2.syncfusion.com/angular/documentation/api/stepper/#tooltiptemplate) property to specify a custom template for the tooltips, providing detailed information about the steps.

When hovering over the step, the current step model is passed in the template context, allowing you to include dynamic information about the step.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/tooltipTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/tooltipTemplate/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/tooltipTemplate/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/tooltipTemplate/src/app.component.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/stepper/tooltipTemplate" %}