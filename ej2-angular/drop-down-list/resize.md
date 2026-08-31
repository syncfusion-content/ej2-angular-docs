---
layout: post
title: Popup Resizing in Angular Dropdown List | Syncfusion®
description: Let users resize the Angular Dropdown List popup with the AllowResize property so popup dimensions persist across sessions for a customized view.
platform: ej2-angular
control: Resizing 
documentation: ug
domainurl: ##DomainURL##
---

# Popup Resizing in Angular Dropdown List

You can dynamically adjust the size of the popup in the DropDownList component by using the [allowResize](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#allowresize) property. When enabled, users can resize the popup, improving visibility and control, with the resized dimensions being retained across sessions for a consistent user experience.

The following sample illustrates the implementation of the popup resize feature.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  

![Resizing in DropDownList Component](../images/dropdownlist-resize.gif)
