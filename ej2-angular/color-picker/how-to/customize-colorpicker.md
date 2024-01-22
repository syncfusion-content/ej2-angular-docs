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

By default, the Palette will be rendered with default colors. To load custom colors in the palette, specify the colors in the [`presetColors`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#presetcolors) property. To customize the color palette, add a custom class to palette tiles using [`BeforeTileRender`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#beforetilerender) event.

The following sample demonstrates the above functionalities.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/custom/palette-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/custom/palette-cs1/src/app.module.ts %}
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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/how-to-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/how-to-cs1" %}

## Custom handle

Color picker handle shape and UI can be customized. Here, we have customized the handle as `svg icon`. The same way you can customize the handle based on your requirement.

The following sample show the customized color picker handle.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/custom/handle-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/custom/handle-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/custom/handle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/custom/handle-cs1" %}

## Custom primary button

By default, the applied color will be updated in primary button of the color picker. You can customize that as `icon`.

In the following sample, the `picker` icon is added to primary button and using [`change`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#change) event the selected color will be updated in bottom portion of the icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/icon-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/icon-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/icon-cs1" %}

>> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icon to customize the primary button.

## Display hex code in input

The color picker input element can be showcased in the place of primary button. The applied color hex code will be updated in the primary button input.

The following sample shows the color picker with input.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/input-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/input-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/input-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/input-cs1" %}

## Custom UI

The color picker UI can be customized in all possible ways. The following sample shows the excel like UI customization with help of SplitButton and Dialog component. In that by clicking the more colors option from color palette, the dialog contains color picker will open.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/position-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/position-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/position-cs1" %}