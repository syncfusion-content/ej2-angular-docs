---
layout: post
title: Colorpicker in dropdownbutton in Angular Color picker component | Syncfusion
description: Learn here all about Colorpicker in dropdownbutton in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Colorpicker in dropdownbutton 
documentation: ug
domainurl: ##DomainURL##
---

# Colorpicker in dropdownbutton in Angular Color picker component

This section explains about how to render the ColorPicker in DropDownButton. The [`target`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button#target) property of the DropDownButton helps to achieve this scenario. To know about the usage of `target` property refer to [`Popup templating`](./../../drop-down-button/popup-items#popup-templating) section.

In the below sample, the color picker is rendered as inline type by setting [`inline`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#inline) property as `true` and the rendered color picker wrapper is passed as a `target` to the DropDownButton to achieve the above scenario.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/dropdownbtn-cs1" %}
