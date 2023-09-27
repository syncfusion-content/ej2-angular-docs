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

Right-to-Left (RTL) support allows applications to effectively communicate with users who use languages that are written from right to left, such as Arabic, Hebrew, etc.

Syncfusion Angular UI components support for right-to-left (RTL) by setting the `enableRtl` property to `true`. This adds the class name `e-rtl` to the component element and renders all Syncfusion Angular components in a right-to-left direction.

## Enable RTL for all components

To enable Right-To-Left (RTL) support for all components, users can set the `enableRtl` property directly in their application. Here is an example code snippet using the ListView component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/right-to-left-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/right-to-left-cs1/src/app.module.ts %}
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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/individual-rtl-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/individual-rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/individual-rtl-cs1" %}