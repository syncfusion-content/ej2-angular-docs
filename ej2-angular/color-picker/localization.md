---
layout: post
title: Localization in Angular Color picker component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Color picker component

## Localization

The `Localization` library allows you to localize default text content of the ColorPicker. The ColorPicker component has static text for `control buttons (apply / cancel)` and `mode switcher` that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#locale) value and translation object.

The following list of properties and its values are used in the ColorPicker.

Locale key words |Text
-----|-----
Apply |Apply
Cancel |Cancel
ModeSwitcher |Switch Mode

### Loading translations

To load translation object in an application use `load` function of `L10n` class.

The below example demonstrates the ColorPicker in `Deutsch` culture.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/how-to-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/how-to-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/how-to-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/how-to-cs5" %}

## Right to Left - RTL

ColorPicker component has `RTL` support. It helps to render the ColorPicker from right-to-left direction.
It improves the user experiences and accessibility for users who use right-to-left languages(Arabic, Farsi, Urdu, etc). This can be achieved by setting the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#enablertl) property to `true`.

The following example illustrates how to enable right-to-left support in ColorPicker component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/how-to-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/how-to-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/how-to-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/how-to-cs6" %}

## See Also

* [More information about localization](./../common/localization)