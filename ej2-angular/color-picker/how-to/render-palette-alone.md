---
layout: post
title: How to render palette alone in Angular Color Picker | Syncfusion
description: Render only the Palette area in the Syncfusion Angular Color Picker by setting mode to Palette and modeSwitcher plus showButtons to false.
platform: ej2-angular
control: Render palette alone 
documentation: ug
domainurl: ##DomainURL##
---

# How to render palette alone in Angular Color Picker

To render only the Palette area in the ColorPicker, set the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#mode) property to `Palette` and the [`modeSwitcher`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#modeswitcher) property to `false`.

In the following sample, the [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#showbuttons) property is set to `false` to hide the control buttons, displaying only the palette area.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/colorpicker/how-to-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/how-to-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/how-to-cs4" %}

> To render only the Picker area, set the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#mode) property to `Picker`.
