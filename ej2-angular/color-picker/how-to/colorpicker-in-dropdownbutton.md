---
layout: post
title: How to use DropDownButton in Angular Color Picker | Syncfusion
description: Open the Syncfusion Angular Color Picker inside a DropDownButton popup by setting inline to true and assigning the wrapper to the target property.
platform: ej2-angular
control: Colorpicker in dropdownbutton 
documentation: ug
domainurl: ##DomainURL##
---

# How to use DropDownButton in Angular Color Picker

This section explains how to render the ColorPicker component within a DropDownButton. The [`target`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button#target) property of the DropDownButton enables this integration. For details on using the `target` property, refer to the [`Popup templating`](./../../drop-down-button/popup-items#popup-templating) section.

In the following sample, the ColorPicker is rendered in inline mode by setting the [`inline`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#inline) property to `true`. The rendered ColorPicker wrapper is then passed as a `target` to the DropDownButton to achieve this integration.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/dropdownbtn-cs1" %}
