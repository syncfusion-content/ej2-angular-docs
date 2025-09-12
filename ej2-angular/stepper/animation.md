---
layout: post
title: Animation in Angular Stepper component | Syncfusion
description:  Learn here all about Animation in Syncfusion Angular Stepper component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stepper
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Angular Stepper component

The Angular Stepper component supports animations for smooth transitions during step navigation, enhancing user experience in workflows like forms or wizards. Configure animations using the [animation](https://ej2.syncfusion.com/angular/documentation/api/stepper/#animation) property of the `ejs-stepper` component, which accepts a `StepperAnimationSettingsModel` object. Animations can be customized with `duration`, `delay`, and `enable` settings.

You can disable the animation by setting the [enable](https://ej2.syncfusion.com/angular/documentation/api/stepper/animationModel/#enable) property to `false`. By default, the value is `true`.

The following table describes the fields of the `animation` property:

| Fields | Type | Description |
|------|------|-------------|
| [duration](https://ej2.syncfusion.com/angular/documentation/api/stepper/animationModel/#duration) | `number` | Specifies the duration of the animated transition for each step in milliseconds. The default value is `2000`. |
| [delay](https://ej2.syncfusion.com/angular/documentation/api/stepper/animationModel/#delay) | `number` | Specifies the delay before initiating the animated transition for each step in milliseconds. The default value is `0`. |

The example demonstrates animation settings with customized `duration` and `delay` for the Stepper component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/animation/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/animation/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/animation/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/animation" %}