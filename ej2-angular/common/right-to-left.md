---
layout: post
title: Right to left in Angular Common control | Syncfusion
description: Learn here all about Right to left in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Right-To-Left support in Syncfusion Angular Components

Right-to-Left (RTL) support allows applications to cater to languages written from right to left, such as Arabic and Hebrew. This feature enhances the accessibility and usability of web applications for a broader audience.

Syncfusion Angular UI components provide built-in RTL support. By setting the `enableRtl` property to `true`, you can render Syncfusion components in a right-to-left direction. This automatically applies the `e-rtl` class to the component's HTML element.

## Enable RTL for all components

To enable RTL support globally across all Syncfusion Angular components, set the `enableRtl` property at the application level. This ensures a consistent RTL layout throughout your application. Below is an example using the ListView component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/right-to-left-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/right-to-left-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/right-to-left-cs1" %}

## Enable RTL for an individual component

To enable Right-To-Left (RTL) support for an individual component, users can set the `enableRtl` property in the component's options. Here is an example code snippet using the ListView component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/individual-rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/individual-rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/individual-rtl-cs1" %}

## Summary

Utilizing the RTL support provided by Syncfusion Angular components allows effective service for users of right-to-left languages. Whether implemented globally or tailored to specific components, Syncfusion offers the versatility needed to enhance the user experience across diverse linguistic audiences.