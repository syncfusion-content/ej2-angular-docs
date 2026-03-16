---
layout: post
title: Render palette alone in Angular Color picker component | Syncfusion
description: Learn here all about Render palette alone in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Render palette alone 
documentation: ug
domainurl: ##DomainURL##
---

# Render palette alone in Angular Color picker component

To render only the Palette area in the ColorPicker, set the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#mode) property to `Palette` and the [`modeSwitcher`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#modeswitcher) property to `false`.

In the following sample, the [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#showbuttons) property is set to `false` to hide the control buttons, displaying only the palette area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/how-to-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/how-to-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/how-to-cs4" %}

> To render only the Picker area, set the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#mode) property to `Picker`.
