---
layout: post
title: Mode and value in Angular Color Picker component | Syncfusion
description: Details on configuring mode and value for the Syncfusion Angular Color Picker (Essential JS 2).
platform: ej2-angular
control: Color Picker
documentation: ug
domainurl: ##DomainURL##
---

# Mode and value in Angular Color Picker component

## Rendering palette at initial load

By default, the ColorPicker displays the Picker area when opened. To display the Palette area instead, set the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#mode) property to `Palette`.

The following sample demonstrates rendering the Palette on initial load.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/getting-started/default-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/getting-started/default-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/getting-started/default-cs3" %}

## Color value

Use the [`value`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#value) property to set the ColorPicker's selected color. The property accepts hex color codes in the following formats:
- **3-digit hex**: `#RGB` (e.g., `#F00` for red)
- **6-digit hex**: `#RRGGBB` (e.g., `#FF0000` for red)
- **4-digit hex with alpha**: `#RGBA` (e.g., `#F00F` for opaque red)
- **8-digit hex with alpha**: `#RRGGBBAA` (e.g., `#FF0000FF` for opaque red)

The following sample uses a 4-digit hex code where the last digit represents opacity (alpha).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/value-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/value-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/value-cs1" %}

> The [`value`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#value) property accepts hex codes with or without the `#` prefix.

## See Also

* [How to render palette alone](./how-to/render-palette-alone)
* [Custom palette](./how-to/customize-colorpicker#custom-palette)
* [No color support in palette](./how-to/handle-no-color-support)
