---
layout: post
title: Popup Resizing in Angular ComboBox | Syncfusion®
description: Let users resize the Angular ComboBox popup with the AllowResize property so popup dimensions persist across sessions for a customized view.
platform: ej2-angular
control: Resizing 
documentation: ug
domainurl: ##DomainURL##
---

# Popup Resizing in Angular ComboBox

You can dynamically adjust the size of the popup in the ComboBox component by using the [AllowResize](https://ej2.syncfusion.com/angular/documentation/api/combo-box/index-default#allowresize) property. When enabled, users can resize the popup, improving visibility and control, with the resized dimensions being retained across sessions for a consistent user experience.

The following sample illustrates the implementation of the Popup Resize feature.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/combobox/getting-started-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/getting-started-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  

![Resizing in ComboBox Component](../images/combobox-resize.gif)
