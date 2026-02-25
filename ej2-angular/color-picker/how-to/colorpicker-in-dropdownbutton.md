---
layout: post
title: Colorpicker in dropdownbutton in Angular Color picker component | Syncfusion
description: Learn here all about Colorpicker in dropdownbutton in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Colorpicker in dropdownbutton 
documentation: ug
domainurl: ##DomainURL##
---

# Colorpicker in DropDownButton in Angular Color picker component

This section explains how to render the ColorPicker component within a DropDownButton. The [`target`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button#target) property of the DropDownButton enables this integration. For details on using the `target` property, refer to the [`Popup templating`](./../../drop-down-button/popup-items#popup-templating) section.

In the following sample, the ColorPicker is rendered in inline mode by setting the [`inline`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#inline) property to `true`. The rendered ColorPicker wrapper is then passed as a `target` to the DropDownButton to achieve this integration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/dropdownbtn-cs1" %}
