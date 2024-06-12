---
layout: post
title: Customized checkbox in Angular Checkbox component | Syncfusion
description: Learn here all about customized checkbox in Syncfusion Essential Angular Checkbox component, its elements and more.
platform: ej2-angular
control: Customized checkbox 
documentation: ug
domainurl: ##DomainURL##
---

# Customized checkbox in Angular Checkbox Component

## Customize CheckBox Appearance

You can customize the appearance of the CheckBox module using the CSS rules. Define own CSS rules according to your requirement and assign the class name to the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/check-box/#cssclass) property.

The background and border color of the CheckBox is customized through the custom classes to create primary, success, warning, danger, and info type of checkbox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/check-box/howto-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/check-box/howto-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/check-box/howto-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/check-box/howto-cs1" %}

## Customize CheckBox frame

CheckBox frame can be customized as per the requirement by adding CSS rules.

In the following example, to-do list is displayed with round checkbox by changing `border-radius` as `100%` by adding `e-custom` class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/check-box/custom-frame-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/check-box/custom-frame-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/check-box/custom-frame-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/check-box/custom-frame-cs1" %}

## Customize check icon

CheckBox check icon can be customized as per the requirement by adding CSS rules.

In the following example, the check icon can be customized by changing check icon content, background and border color in focus and hovered states by adding `e-checkicon` class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/check-box/custom-icon-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/check-box/custom-icon-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/check-box/custom-icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/check-box/custom-icon-cs1" %}
