---
layout: post
title: Customize colorpicker in Angular Color picker component | Syncfusion
description: Learn here all about Customize colorpicker in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize colorpicker 
documentation: ug
domainurl: ##DomainURL##
---

# Customize colorpicker in Angular Color picker component

## Custom palette

By default, the ColorPicker palette displays a set of predefined colors. To load custom colors, specify them in the [`presetColors`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#presetcolors) property. To apply custom styling to palette tiles, use the [`BeforeTileRender`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#beforetilerender) event to add custom CSS classes.

The following sample demonstrates the above functionalities.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/custom/palette-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/custom/palette-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/custom/palette-cs1" %}

## Hide input area from picker

By default, the input area will be rendered in ColorPicker. To hide the input area from it, add `e-hide-value` class to ColorPicker using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#cssclass) property.

In the following sample, the ColorPicker is rendered without input area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/how-to-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/how-to-cs1" %}

## Custom handle

The ColorPicker handle shape and appearance can be customized using CSS or custom SVG elements. In the following sample, the handle is styled with an SVG icon. The same approach can be applied to create other custom handle designs based on specific requirements.

The following sample show the customized color picker handle.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/custom/handle-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/custom/handle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/custom/handle-cs1" %}

## Custom primary button

By default, the ColorPicker's primary button displays the selected color. You can customize the button to display an icon instead.

In the following sample, a picker icon is added to the primary button. The [`change`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#change) event updates the selected color in the bottom portion of the icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/icon-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/icon-cs1" %}

>> The Essential<sup style="font-size:70%">&reg;</sup> JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icon to customize the primary button.

## Display hex code in input

The ColorPicker's input element can be displayed in place of the primary button, allowing direct visualization of the selected color's hex code. The input automatically updates with the applied color value.

The following sample shows the color picker with input.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/input-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/input-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/input-cs1" %}

## Custom UI

The ColorPicker UI can be customized extensively to match specific design requirements. The following sample demonstrates an Excel-like UI customization using the SplitButton and Dialog components. When the "More colors" option is selected from the palette, a dialog opens with the ColorPicker component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/position-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/position-cs1" %}