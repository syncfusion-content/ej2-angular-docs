---
layout: post
title: Resizing in Angular MultiSelect component | Syncfusion
description: Learn here all about Popup Resizing in Syncfusion Angular MultiSelect component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Resizing 
documentation: ug
domainurl: ##DomainURL##
---

# Resizing in Angular MultiSelect component

The MultiSelect component supports dynamic popup resizing through the [allowResize](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#allowresize) property. When enabled, users can resize the popup by dragging its borders, enhancing visibility and usability. The resized dimensions are automatically preserved in the browser's local storage, maintaining consistent sizing across user sessions.

The resizing feature provides resize handles on the popup borders and supports the following events: [`resizeStart`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#resizestart), [`resizeStop`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#resizestop), and [`resizing`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#resizing) for handling custom resize behaviors. The popup maintains minimum and maximum size constraints to ensure optimal user experience.

The following sample demonstrates the popup resize functionality.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/getting-started-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}  

![Resizing in MultiSelect Component](../images/multiselect-resize.gif)