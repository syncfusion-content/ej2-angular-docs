---
layout: post
title: Right to left in Angular Common control | Syncfusion
description: Learn here all about Right to left in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Right-To-Left support in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

Right-to-Left (RTL) support allows applications to cater to languages written from right to left, such as Arabic and Hebrew. This feature enhances the accessibility and usability of web applications for a broader audience.

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components provide built-in RTL support. By setting the `enableRtl` property to `true`, you can render Syncfusion<sup style="font-size:70%">&reg;</sup> components in a right-to-left direction. This automatically applies the `e-rtl` class to the component's HTML element.

## Enable RTL for all components

To enable RTL support globally across all Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, set the `enableRtl` property at the application level. This ensures a consistent RTL layout throughout your application. Below is an example using the ListView component:

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

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components provide robust Right-to-Left support that can be implemented either globally or on a per-component basis. This flexibility allows developers to create culturally appropriate interfaces for RTL language users while maintaining proper layout, alignment, and usability.

By properly implementing RTL support, you ensure that your applications are accessible and intuitive for users across diverse linguistic backgrounds, significantly enhancing the global reach and usability of your software.