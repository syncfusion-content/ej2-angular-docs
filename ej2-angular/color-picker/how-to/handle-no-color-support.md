---
layout: post
title: Handle no color support in Angular Color picker component | Syncfusion
description: Learn here all about Handle no color support in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Handle no color support 
documentation: ug
domainurl: ##DomainURL##
---

# Handle no color support in Angular Color picker component

The ColorPicker component supports no color functionality. By clicking the no color tile from palette, the selected color becomes `empty` and considered as no color has been selected from color picker.

## Default no color

To achieve this, set [`noColor`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#nocolor) property as `true`.

In the following sample, the first tile of the color palette represents the no color tile. By clicking the no color tile you can achieve the above functionalities.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/no-color/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/no-color/default-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/no-color/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/no-color/default-cs1" %}

## Custom no color

The following sample show the color palette with custom no color option.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/no-color/custom-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/no-color/custom-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/no-color/custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/no-color/custom-cs1" %}