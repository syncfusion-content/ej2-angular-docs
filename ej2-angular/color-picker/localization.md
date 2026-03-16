---
layout: post
title: Localization in Angular Color Picker component | Syncfusion
description: Details on localizing text and RTL support for the Syncfusion Angular Color Picker (Essential JS 2).
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Color Picker component

## Localization

The `Localization` library enables translation of default text used by the ColorPicker. The ColorPicker component includes static text for control buttons (Apply and Cancel) and the mode switcher. These strings can be translated to other languages (Arabic, German, French, etc.) by setting the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#locale) property and providing a translation object.

The following list shows the locale keys and corresponding default text used by the Color Picker.

Locale key words |Text
-----|-----
Apply |Apply
Cancel |Cancel
ModeSwitcher |Switch Mode

### Loading translations

To load a translation object in an application, use the `load` function of the `L10n` class.

The following example demonstrates the ColorPicker configured for German (Deutsch) culture.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/how-to-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/how-to-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/how-to-cs5" %}

## Right-to-left (RTL)

The ColorPicker component supports right-to-left (RTL) rendering, improving the user experience and accessibility for languages written right-to-left (Arabic, Persian, Urdu, etc.). Set the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#enablertl) property to `true` to enable RTL mode.

The following example shows how to enable RTL support for the ColorPicker component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/how-to-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/how-to-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/how-to-cs6" %}

## See Also

* [More information about localization](./../common/localization)